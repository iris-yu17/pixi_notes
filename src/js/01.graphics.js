import app from "./index.js";


// 方形
const rectangle = new PIXI.Graphics();
rectangle.beginFill(0x2a9d8f); // 開始畫、並設定顏色
rectangle.drawRect(50, 50, 150, 100); // drawRect(x起點, y起點, 寬, 高)
rectangle.endFill(); // 結束

// rectangle
//   .beginFill(0x2a9d8f)
//   .drawRect(50, 50, 150, 100)
//   .endFill()

// 要把形狀放到畫面上，需呼叫addChild這個方法
app.stage.addChild(rectangle)


// 圓型
const circle = new PIXI.Graphics();
circle.lineStyle(0)
  .beginFill(0xDE3249, 1)
  .drawCircle(100, 250, 50)
  .endFill();
app.stage.addChild(circle)

const circleWithStroke = new PIXI.Graphics();
circleWithStroke.lineStyle(2, 0xFEEB77, 1)
  .beginFill(0xDE3249, 1)
  .drawCircle(100, 400, 50)
  .endFill();
app.stage.addChild(circleWithStroke)

// 線條
const line = new PIXI.Graphics();
line
  .lineStyle(5, 0xDE3249, 1)
  .moveTo(100, 500)
  .lineTo(200, 500)
app.stage.addChild(line)
