import { createAppropriateTileBaseRenderer } from "./tileBaseRenderer.js";
import { createAppropriateElementRenderer } from "./elementRenderer.js";

export class TileRenderer {
  constructor(ctx, tile, tileSize, camera) {
    this.ctx = ctx;
    this.tile = tile;
    this.tileSize = tileSize;
    this.camera = camera;
    this.tileBaseRenderer = createAppropriateTileBaseRenderer(
      this.ctx,
      this.tile,
      this.tileSize,
      this.camera
    );

    this.elementRenderer = createAppropriateElementRenderer(
      this.ctx,
      this.tile,
      this.tileSize,
      this.camera
    );
  }
}
