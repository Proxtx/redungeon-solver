export class Element {
  constructor(tile) {
    this.tile = tile;
    this.element = this.tile.tileData.element;
    this.init();
    this.type = this.element.type;
  }

  init() {}
}

export class ElementWeb extends Element {}

export class ElementPot extends Element {
  cracked = false;
  init() {
    console.log(this.element);
  }
}

const classTypeAssociation = {
  web: ElementWeb,
  pot: ElementPot,
};

export const createAppropriateElement = (tile) => {
  return new classTypeAssociation[tile.tileData.element.type](tile);
};
