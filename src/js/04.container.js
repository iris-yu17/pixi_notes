import app from "./index.js";

// 載入圖片
const texturePromise = PIXI.Assets.load('./src/images/car.png');

// 當 promise resolve 時，回傳 texture
texturePromise.then((texture) => {
  // 將 texture 轉為 sprite
  const car = PIXI.Sprite.from(texture);

  // 設置位置、寬高等等
  car.position.set(100, 200);
  car.width = 50;
  car.height = 25;

  // 加到舞台
  app.stage.addChild(car);
});

const myText = new PIXI.Text('Banana!!');

// container
const container = new PIXI.Container();
const texture = PIXI.Texture.from('./src/images/banana.svg');
const banana = new PIXI.Sprite(texture);
container.addChild(banana);
container.addChild(myText);
container.position.set(100, 100);
myText.position.set(10, 50)

app.stage.addChild(container);