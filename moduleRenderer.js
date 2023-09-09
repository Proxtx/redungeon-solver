import { TileRenderer } from "./tileRenderer.js";

export class ModuleRenderer {
  constructor(ctx, module, tileSize, camera) {
    this.ctx = ctx;
    this.module = module;
    this.tileSize = tileSize;
    this.camera = camera;
    this.createTileRenderers();
  }

  createTileRenderers() {
    for (let tileRow of this.module.tiles) {
      for (let tile of tileRow) {
        tile.renderer = new TileRenderer(
          this.ctx,
          tile,
          this.tileSize,
          this.camera
        );
      }
    }
  }

  render() {
    for (let tileRow of this.module.tiles) {
      for (let tile of tileRow) {
        tile.renderer.render();
      }
    }
  }
}
