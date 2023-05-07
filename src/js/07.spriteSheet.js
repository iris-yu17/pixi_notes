import app from "./index.js";

const texturePromise = PIXI.Assets.load('./src/images/sushi.png');

// 當 promise resolve 時，回傳 texture
texturePromise.then((texture) => {

  // 創建長方形
  const rect = new PIXI.Rectangle(0, 0, 96, 96);
  texture.frame = rect;

  // 將 texture 轉為 sprite
  const sushi = PIXI.Sprite.from(texture);

  // 設置位置
  sushi.position.set(300, 200);

  // 加到舞台
  // app.stage.addChild(sushi);
});


