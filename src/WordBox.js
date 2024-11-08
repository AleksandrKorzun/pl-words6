import { COUNTRIES, POSITIONS, SCALES } from "./constants/Constants";

export default class WordBox extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene, 0, 0);

    this.isHorizontal = window.innerWidth > window.innerHeight;
    this.addBox();
    this.initAssets();
    this.addCountries();
    this.scene.emitter.on("guess", (word) => this.crossWord(word));
    // this.animationPopup();
    // window.addEventListener('resize', () => this.resize());
  }

  initAssets() {
    this.addProperties(["pos", "scale"])
      .setCustomPosition(...POSITIONS.word)
      .setCustomScale(...SCALES.word)
      .setCustomAlign("Center")
      .setDepth(35);
  }

  addBox() {
    this.box = this.scene.add
      .image(0, 0, "word_box")
      .setDepth(36)
      .setScale(1.5);
    this.add([this.box]);
    this._sort();
  }
  addCountries() {
    this.countries = [];
    COUNTRIES.map(({ x, y, country }, index) => {
      const c = this.scene.add
        .text(x, y, country, {
          color: "#645B5B",
          fontSize: "50px",
          fontWeight: 900,
          fontFamily: "BerlinSansFBDemiBold",
        })
        .setDepth(37)
        .setScale(0.7)
        .setOrigin(0.5, 0.5)
        .setAlpha(1);
      c.name = country;
      this.countries.push(c);
      this.add([c]);
      this._sort();
    });
  }
  crossWord(word) {
    const country = this.countries.find(
      ({ name }) => name.toLowerCase() === word.toLowerCase()
    );
    country.setColor("#918989");
    const strikeThrough = this.scene.add.graphics().setDepth(40);
    strikeThrough.lineStyle(4, 0x918989, 1); // Товщина і колір лінії
    strikeThrough.beginPath();
    strikeThrough.moveTo(country.x - country.width / 2, country.y); // Початок лінії
    strikeThrough.lineTo(country.x + country.width / 2, country.y); // Кінець лінії
    strikeThrough.strokePath();
    this.add([strikeThrough]);
  }
  show() {
    this.scene.tweens.add({
      targets: this,
      alpha: 1,
      duration: 400,
    });
  }

  hide() {
    this.scene.tweens.add({
      targets: this,
      alpha: 0,
      duration: 400,
    });
  }
}
