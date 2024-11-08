import ParentScene from "@holywater-tech/ads-builder/framework/components/Scene";
import Background from "@holywater-tech/ads-builder/framework/components/ui/Background";

import { COUNTRIES, EVENTS, SCALES } from "./constants/Constants";

import Buttons from "./Buttons";
import WordBox from "./WordBox";
import { Letters } from "./Letter";
import Progress from "./Progress";
import Utils from "@holywater-tech/ads-builder/framework/Utils";

export default class Game extends ParentScene {
  create() {
    this.addBackground("bg_beach");
    this.countries = COUNTRIES.map(({ country }) => country.toLowerCase());
    this.addLogo();
    this.addCta();
    this.addWordBox();
    this.addLetters();
    this.addProgress();
    Utils.addAudio(this, "music_trivia", 0.7, false);
    // this.addWin();
    // this.initListeners();
  }

  initListeners() {
    this.emitter.on(EVENTS.ON_WORD_COMPLETE, () => this.addWin(), this);
    this.emitter.on(EVENTS.ON_NEXT_LEVEL, this.nextWord, this);
    this.emitter.on(EVENTS.ON_OPEN_STORE, () => this.openStore(), this);
  }

  addBackground(bg, options = {}) {
    this[bg] = new Background(this, bg, true, [1.5, 1.5, 1.1, 1.1]).setDepth(
      options.depth || 4
    );
    this.mainContainer.add([this[bg]]);
    this.sort();
  }
  addLogo() {
    this.logo = this.add
      .image(0, 0, "logo")
      .addProperties(["pos", "align"])
      .setCustomAlign("Center", "Top Left")
      .setDepth(99)
      .setOrigin(0.5, 0.5)
      .setScale(0.35)
      .setCustomPosition(-450, 70, 80, 80);
    this.mainContainer.add([this.logo]);
    this.sort();
  }

  addWordBox() {
    this.wordBox = new WordBox(this);
    this.mainContainer.add([this.wordBox]);
    this.sort();
  }
  addLetters() {
    this.letters = new Letters(this);
    this.mainContainer.add([this.letters]);
    this.sort();
  }
  addCta() {
    this.cta = new Buttons(
      this,
      "btn_download",
      { lx: -200, ly: 0, px: 100, py: 100 },
      () => this.openStore()
    )
      .setCustomScale(0.3, 0.3, 0.4, 0.4)
      .setDepth(99);
    this.tweens.add({
      targets: this.cta,
      scale: "*=0.95",
      duration: 500,
      repeat: -1,
      yoyo: true,
    });
    this.mainContainer.add([this.cta]);
    this.sort();
  }

  addProgress() {
    this.progress = new Progress(this);
    this.mainContainer.add([this.progress]);
    this.sort();
  }

  addWin() {
    this.game.network.addClickToStore(this.bg_beach);
  }
  openStore() {
    this.game.network.openStore();
  }
}
