export default class Progress extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene, 0, 0);
    this.progress = 110;
    this.addBrain();
    this.initAssets();
  }
  initAssets() {
    this.addProperties(["pos", "scale", "align"])
      .setCustomPosition(-200, 140, -50, 0)
      .setCustomScale(1, 1, 1, 1)
      .setCustomAlign("Center", "Top Right")
      .setDepth(35);
  }
  changeCount(x, duration = 400) {
    this.animationSecond = this.scene.tweens.addCounter({
      onStart: () => this.setAlpha(1),
      onComplete: () => {
        this.scene.totalCoins -= this.scene.countCoinsBet;
      },
      from: this.progress,
      to: (this.progress += 11),
      duration,
      onUpdate: (tween) => {
        this.textIQ.text = Math.floor(tween.getValue());
      },
    });
  }
  addBrain() {
    this.text = this.scene.add
      .text(-70, 40, "IQ", {
        color: "#BE0D19",
        fontSize: "100px",
        fontWeight: 900,
        fontFamily: "BerlinSansFBDemiBold",
      })
      .setDepth(37)
      .setScale(0.7)
      .setOrigin(0.5, 0.5)
      .setAlpha(1);
    this.textIQ = this.scene.add
      .text(-70, 110, this.progress, {
        color: "#BE0D19",
        fontSize: "130px",
        fontWeight: 900,
        fontFamily: "BerlinSansFBDemiBold",
      })
      .setDepth(37)
      .setScale(0.7)
      .setOrigin(0.5, 0.5)
      .setAlpha(1);
    this.brain = this.scene.add
      .image(-200, 100, "iq")
      .setDepth(36)
      .setScale(0.3);
    this.add([this.brain, this.text, this.textIQ]);
    this._sort();
  }
}
