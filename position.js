export class Position {
  constructor(game, x, y, relative = null) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.relative = relative;
  }
}