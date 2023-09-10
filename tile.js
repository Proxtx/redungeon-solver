import { createAppropriateElement } from "./element.js";

export class Tile {
  constructor(module, tileData, position) {
    this.module = module;
    this.tileData = tileData;
    this.position = position;

    this.type = this.tileData.type;

    this.init();
  }

  init() {
    if (this.tileData.element) this.element = createAppropriateElement(this);
  }
}
