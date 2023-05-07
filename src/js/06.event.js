import app from "./index.js";

// 先畫一個方形
const rectangle = new PIXI.Graphics();
rectangle
  .beginFill(0xaaffaa) // 顏色
  .drawRect(300, 400, 100, 100) // 位置,大小
  .endFill()

// 設為可互動的
rectangle.eventMode = 'dynamic';

// hover時鼠標為pointer
rectangle.cursor = 'pointer';

// 綁定點擊事件
rectangle.on('pointerdown', moveRight);

// 綁定鍵盤事件
window.addEventListener("keydown", (e) => {
  const { code } = e;
  // 按空白鍵時，往右移
  if (code === 'Space') {
    moveRight();
  }
});

function moveRight () {
  rectangle.x += 10;
}

app.stage.addChild(rectangle);