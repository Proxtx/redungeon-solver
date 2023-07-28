import {Game} from "./game.js";
import {Renderer} from "./renderer.js";

try {
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

  const game = new Game();
  const renderer = new Renderer(ctx, game, 30);

  console.log("rendering")

  renderer.render();
}
catch(e) {
  console.log(e.toString())
}
