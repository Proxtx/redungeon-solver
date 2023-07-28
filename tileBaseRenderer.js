import {renderSprite, randomArrayEntry} from "./util.js"
import {atlas} from "./atlas.js";

export class TileBaseRenderer {
  constructor(ctx, tile, tileSize, camera) {
    this.ctx = ctx;
    this.tile = tile;
    this.tileSize = tileSize;
    this.camera = camera;
    
    this.init();
  }
  
  init() {}
  
  getAbsolutePosition () {
    return [this.tile.position.x+this.tile.module.position.x, this.tile.position.y+this.tile.module.position.y];
  }
}

class TileBaseRendererFloor extends TileBaseRenderer {
  render () {
    renderSprite()
  }
}

class TileBaseRendererPit extends TileBaseRenderer {
  init () {
    this.sprite = randomArrayEntry(atals.getObject("floor"));
  }
  
  render() {
    let pos = this.getAbsolutePosition();
    renderSprite(this.ctx, this.sprite, this.tileSize, pos[0], pos[1], this.camera);
  }
}

class TileBaseRendererIce extends TileBaseRenderer {
  init() {
    
  }
  
  render () {
    
  }
}

const classTypeAssociacion = {
  "floor": TileBaseRendererFloor,
  "pit": TileBaseRendererPit,
  "ice": TileBaseRendererIce
}

export const createAppropriateTileBaseRenderer = (ctx, tile, tileSize, camera) => {
  return new classTypeAssociacion[tile.type](ctx. tile, tileSize, camera);
}