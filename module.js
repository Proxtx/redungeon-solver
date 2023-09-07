import { Tile } from "./tile.js";
import { Position } from "./position.js";

export class Module {
  constructor(game, data, position) {
    this.game = game;
    this.data = data;
    this.position = position;

    this.parseData();
  }

  parseData() {
    this.enterX = this.data["enter-x"];
    this.exitX = this.data["exit-x"];
    this.id = this.data.id;
    this.width = this.data.width;
    this.height = this.data.height;

    this.tiles = [];
    for (let x = 0; x < this.width; x++) {
      this.tiles.push([]);
      for (let y = 0; y < this.height; y++) {
        this.tiles[x].push(
          new Tile(
            this,
            this.data.tiles[y * this.width + x],
            new Position(x, y)
          )
        );
      }
    }
  }
}
