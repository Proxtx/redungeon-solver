import { ModuleRenderer } from "./moduleRenderer.js";
import { Position } from "./position.js";
import {Camera} from "./camera.js"

export class Renderer {
  constructor (ctx, game, tileSize) {
    this.ctx = ctx;
    this.game = game;
    this.tileSize = tileSize;
    this.camera = new Camera(this.ctx, new Position(this.game, 0, 0));
  }
  
  
  render () {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    for(let module of this.game.modules) {
      if(!module.renderer) {
        module.renderer = new ModuleRenderer(this.ctx, module, this.tileSize, this.camera)
      }
      
      module.renderer.render();
    }
  }
}