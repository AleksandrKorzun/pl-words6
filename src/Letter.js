import {
  COLORS,
  EVENTS,
  LETTERS,
  POSITIONS,
  SCALES,
} from "./constants/Constants";
import Utils from "@holywater-tech/ads-builder/framework/Utils";
export class Letters extends Phaser.GameObjects.Container {
  constructor(scene, letter) {
    super(scene, 0, 0);
    this.addBox();
    this.initAssets();
    this.addLetters();
    this.selectedLetters = [];
    this.addHandTutorial();
    // window.addEventListener('resize', () => this.resize());
  }
  initAssets() {
    this.addProperties(["pos", "scale"])
      .setCustomPosition(...POSITIONS.board)
      .setCustomScale(...SCALES.board)
      .setCustomAlign("Center")
      .setDepth(35);
  }
  addBox() {
    this.box = this.scene.add
      .image(0, 0, "letter_box")
      .setDepth(36)
      .setScale(1.5);
    this.add([this.box]);
    this._sort();
  }
  addLetters() {
    this.letters = [];
    this.selectedLetters = []; // масив для збереження обраних букв

    // Створюємо графіку для ліній

    LETTERS.map((arrLetters, row) => {
      const y = -330 + (660 / (LETTERS.length - 1)) * row;

      arrLetters.map((l, col) => {
        const x = -270 + (540 / (arrLetters.length - 1)) * col;
        this.addLetter(x, y, l, row + 1, col + 1);
      });
    });
  }

  addLetter(x, y, letter, row, column) {
    const name = `letter${row}_${column}`;
    this[`${name}_container`] = this.scene.add.container(x, y).setSize(70, 70);
    this[name] = this.scene.add
      .text(x, y, letter.toUpperCase(), {
        color: "#645B5B",
        fontSize: "75px",
        fontFamily: "BerlinSansFBDemiBold",
      })
      .setDepth(37)
      .setScale(0.7)
      .setOrigin(0.5, 0.5)
      .setAlpha(1);
    this[`${name}_container`].add(this[name]);
    this[name].row = row;
    this[name].column = column;
    this[name].letter = letter;
    this[name].setInteractive();
    this[name].on("pointerdown", () => {
      this.startSelecting();
      this.selectLetter(this[name]);
    });

    // Наведення на інші букви під час перетягування
    this[name].on("pointerover", () => {
      if (this.isSelecting) {
        console.log("this[name]", this[name].letter);
        const indexLetter = this.selectedLetters.indexOf(this[name]);
        console.log("indexLeter", indexLetter);
        if (indexLetter !== -1) {
          this.deselectLeter(indexLetter);
        }
        this.selectLetter(this[name]);
      }
    });

    // Завершення перетягування
    this.scene.input.on("pointerup", () => {
      this.endSelecting();
    });
    this.letters.push(this[name]);
    this.add([this[name]]);
    this._sort();
  }

  startSelecting() {
    this.removeHand();
    this.isSelecting = true;
    this.selectedLetters = [];
    this.isCorrect = false;
    this.lineGraphics = this.scene.add.graphics();
    this.circleGraphics = this.scene.add.graphics().setDepth(36);
    this.lineGraphics.setDepth(36);
    this.add([this.lineGraphics, this.circleGraphics]);
    this._sort();

    this.lineGraphics?.clear();
    this.circleGraphics?.clear();
  }

  deselectLeter(indexLetter) {
    const removeLetter = this.selectedLetters.slice(indexLetter);
    this.selectedLetters = this.selectedLetters.slice(0, indexLetter);
    removeLetter.forEach((letter) => letter.setColor("#645B5B"));
    this.drawLine();
    return;
  }
  selectLetter(c) {
    const isCorrectHorizontal =
      this.selectedLetters.at(-1)?.row === c.row &&
      (this.selectedLetters.at(-1)?.column - c.column === 1 ||
        c.column - this.selectedLetters.at(-1)?.column === 1);
    const isCorrectVertical =
      this.selectedLetters.at(-1)?.column === c.column &&
      (this.selectedLetters.at(-1)?.row - c.row === 1 ||
        c.row - this.selectedLetters.at(-1)?.row === 1);
    const isCorrectCross =
      this.selectedLetters.at(-1)?.column - c.column === 1 ||
      c.column - this.selectedLetters.at(-1)?.column === 1;
    // this.drawLine();
    if (
      !this.selectedLetters.includes(c) &&
      (this.selectedLetters.length < 2 || isCorrectHorizontal)
    ) {
      c.setColor("#FFFFFF");
      this.selectedLetters.push(c);

      this.drawLine();
      return;
    }
    if (
      !this.selectedLetters.includes(c) &&
      (this.selectedLetters.length < 2 || isCorrectVertical)
    ) {
      c.setColor("#FFFFFF");
      this.selectedLetters.push(c);

      this.drawLine();
      return;
    }
    if (
      !this.selectedLetters.includes(c) &&
      (this.selectedLetters.length < 2 || isCorrectCross)
    ) {
      c.setColor("#FFFFFF");
      this.selectedLetters.push(c);

      this.drawLine();
    }
  }

  endSelecting() {
    this.isSelecting = false;
    setTimeout(() => {
      this.addHandTutorial();
    }, 2000);
    if (!this.isCorrect) {
      this.isCorrect = this.checkWord();
    }

    if (this.isCorrect) return;
    this.selectedLetters.forEach((letter) => letter.setColor("#645B5B"));
    this.selectedLetters = [];
    this.lineGraphics?.clear();
    this.circleGraphics?.clear();
  }

  drawLine() {
    const currentColor = COLORS[this.scene.countries.length - 1];
    this.lineGraphics?.clear(); // Очищаємо попередні лінії
    this.circleGraphics?.clear(); // Очищаємо попередні кола
    this.lineGraphics.lineStyle(40, currentColor, 1); // Стиль лінії

    if (this.selectedLetters.length >= 1) {
      for (let i = 0; i < this.selectedLetters.length - 1; i++) {
        const start = this.selectedLetters[i];
        const end = this.selectedLetters[i + 1];

        // Обчислюємо середню точку для заокруглення
        const midX = (start.x + end.x) / 2;
        const midY = (start.y + end.y) / 2;

        if (i === 0) {
          this.lineGraphics.moveTo(start.x, start.y); // Початок лінії
        }

        // Малюємо дві лінії для заокруглення
        this.lineGraphics.lineTo(midX, midY);
        this.lineGraphics.lineTo(end.x, end.y);
      }
      this.lineGraphics.strokePath(); // Малюємо лінію

      // Малюємо коло навколо першої літери
      const firstLetter = this.selectedLetters[0];
      this.circleGraphics.fillStyle(currentColor, 1); // Чорний колір для кола
      this.circleGraphics.fillCircle(firstLetter.x, firstLetter.y, 40); // Радіус кола 20

      // Малюємо коло навколо останньої літери
      const lastLetter = this.selectedLetters[this.selectedLetters.length - 1];
      this.circleGraphics.fillStyle(currentColor, 1); // Чорний колір для кола
      this.circleGraphics.fillCircle(lastLetter.x, lastLetter.y, 40); // Радіус кола 20
    }
  }

  correctWord() {
    let word;
    if (this.scene.countries.length === 10) {
      word = "great";
    }
    if (this.scene.countries.length === 9) {
      word = "nice";
    }
    if (this.scene.countries.length === 6) {
      word = "can";
    } else {
      // return;
    }
    // const word = this.scene.countries.length === 10 ? "great" : "nice";
    this.word = this.scene.add.image(0, 0, word).setDepth(55).setScale(0);
    this.add([this.word]);
    this.scene.tweens.add({
      targets: this.word,
      scale: 1.8,
      duration: 200,
      hold: 1000,
      yoyo: true,
      onComplete: () => this.word.destroy(),
    });
  }
  checkWord() {
    const selectedWord = this.selectedLetters
      .map(({ letter }) => letter)
      .join("");

    const isCorrect = this.scene.countries.includes(selectedWord.toLowerCase());
    if (isCorrect) {
      Utils.addAudio(this.scene, "win", 0.7, false);
      this.correctWord();
      this.scene.progress.changeCount();
      this.scene.emitter.emit("guess", selectedWord);
      this.scene.countries = this.scene.countries.filter(
        (country) => country.toLowerCase() !== selectedWord.toLowerCase()
      );
      if (this.scene.countries.length === 5) {
        setTimeout(() => {
          this.scene.addWin();
        }, 1000);
        this.letters.map((l) => l.disableInteractive());
      }
    } else {
      if (this.selectedLetters.length > 1) {
        Utils.addAudio(this.scene, "fail", 0.4, false);
      }
    }
    return isCorrect;
  }
  addHandTutorial() {
    if (this.scene.countries.length < 9) return;
    this.removeHand();
    const numTutorial = this.scene.countries.length === 10 ? 1 : 2;
    const x = numTutorial === 1 ? -270 : 190;
    const y = -330;
    this.hand = this.scene.add
      .image(x, y, "hand")
      .setDepth(55)
      .setScale(2.5)
      .setOrigin(0, 0);
    this.add([this.hand]);
    this._sort();
    const option = numTutorial === 1 ? { x: 140 } : { y: 0 };
    this.handAnim = this.scene.tweens.add({
      targets: this.hand,
      ...option,
      duration: 1300,
      repeat: -1,
      repeatDelay: 500,
    });
  }
  removeHand() {
    this.handAnim?.remove();
    this.hand?.destroy();
  }
}
