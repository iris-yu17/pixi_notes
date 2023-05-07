import app from "./index.js";


// 先畫一個方形
const rectangle = new PIXI.Graphics();
rectangle
  .beginFill(0xffaaff) // 顏色
  .drawRect(200, 200, 100, 100) // 位置,大小
  .endFill()

app.stage.addChild(rectangle);

// 方形移動function
const move = (delta) => {
  // x座標加1 (往右移)
  rectangle.x += 1 * delta;
}

// ticker
// app.ticker.add(move);

