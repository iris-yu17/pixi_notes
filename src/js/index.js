// 創建 pixi app
const app = new PIXI.Application({ 
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  background: '0x23395d'
});


// 放到 DOM 裡面
document.body.appendChild(app.view);

export default app;