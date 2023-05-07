import app from "./index.js";

const promise = PIXI.Assets.load('./src/images/sushi.json');

promise.then(() => {
  const sushiTextureArray = [];

  for (let i = 0; i < 2; i++) {
    sushiTextureArray.push(PIXI.Texture.from(`sushi${i}.png`));
  }

  // 轉為 sprite
  const sushi = new PIXI.AnimatedSprite(sushiTextureArray);

  // 設置位置
  sushi.position.set(500, 300);
  sushi.animationSpeed = 0.05;
  sushi.play();

  // 加到舞台 
  app.stage.addChild(sushi)
})