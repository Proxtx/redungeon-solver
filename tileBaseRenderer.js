import { renderSprite, randomArrayEntry } from "./util.js";
import { atlas } from "./atlas.js";

export class TileBaseRenderer {
  constructor(ctx, tile, tileSize, camera) {
    this.ctx = ctx;
    this.tile = tile;
    this.tileSize = tileSize;
    this.camera = camera;

    this.init();
  }

  init() {}

  getAbsolutePosition() {
    return [
      this.tile.position.x * this.tileSize + this.tile.position.relative.x,
      this.tile.position.y * this.tileSize + this.tile.position.relative.y,
    ];
  }
}

class TileBaseRendererPit extends TileBaseRenderer {
  render() {}
}

class TileBaseRendererFloor extends TileBaseRenderer {
  init() {
    this.sprite = randomArrayEntry(atlas.getObject("floor").default);
  }

  render() {
    let pos = this.getAbsolutePosition();
    renderSprite(
      this.ctx,
      this.sprite,
      this.tileSize,
      pos[0],
      pos[1],
      this.camera
    );
  }
}

class TileBaseRendererIce extends TileBaseRenderer {
  init() {
    this.sprite = randomArrayEntry(atlas.getObject("ice").default);
  }

  render() {
    let pos = this.getAbsolutePosition();
    renderSprite(
      this.ctx,
      this.sprite,
      this.tileSize,
      pos[0],
      pos[1],
      this.camera
    );
  }
}

const classTypeAssociation = {
  floor: TileBaseRendererFloor,
  pit: TileBaseRendererPit,
  ice: TileBaseRendererIce,
};

export const createAppropriateTileBaseRenderer = (
  ctx,
  tile,
  tileSize,
  camera
) => {
  return new classTypeAssociation[tile.type](ctx, tile, tileSize, camera);
};
