import { renderSprite, randomArrayEntry } from "./util.js";
import { atlas } from "./atlas.js";

export class ElementRenderer {
  constructor(ctx, element, tileSize, camera) {
    this.ctx = ctx;
    this.element = element;
    this.tileSize = tileSize;
    this.camera = camera;

    this.init();
  }

  init() {}

  getAbsolutePosition() {
    console.log(this.element.tile);
    return this.element.tile.renderer.tileBaseRenderer.getAbsolutePosition();
  }
}

class ElementRendererWeb extends ElementRenderer {
  init() {
    this.sprite = randomArrayEntry(atlas.getObject("web").default);
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

class ElementRendererPot extends ElementRenderer {
  init() {}

  render() {
    let pos = this.getAbsolutePosition();
    let sprite = randomArrayEntry(
      atlas.getObject("pot")[this.element.cracked ? "cracked" : "default"]
    );
    renderSprite(this.ctx, sprite, this.tileSize, pos[0], pos[1], this.camera);
  }
}

const classTypeAssociation = {
  web: ElementRendererWeb,
  pot: ElementRendererPot,
};

export const createAppropriateElementRenderer = (
  ctx,
  tile,
  tileSize,
  camera
) => {
  if (tile.element)
    return new classTypeAssociation[tile.element.type](
      ctx,
      tile.element,
      tileSize,
      camera
    );
};
