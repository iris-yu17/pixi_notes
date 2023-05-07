import app from "./index.js";

const style = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: '#ffffff',
  stroke: '#4a1850',
});

const text = new PIXI.Text('Hello World!!', style);




app.stage.addChild(text);