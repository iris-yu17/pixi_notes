import app from "./index.js";

const promise = PIXI.Assets.load('./src/images/sushi.json');

promise.then(() => {
  // 轉為 texture
  const sushiTexture = PIXI.Texture.from('sushi0.png');

  // 轉為 sprite
  const sushi = PIXI.Sprite.from(sushiTexture);

  // 設置位置
  sushi.position.set(300, 200);

  // 加到舞台 
  app.stage.addChild(sushi)
})