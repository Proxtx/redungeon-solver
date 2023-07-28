export class Tile {
  constructor (module, tileData, position) {
    this.module = module;
    this.tileData = tileData;
    this.position = position;
    
    this.parseTileData ()
  }
  
  parseTileData() {
    this.type = this.tileData.type;
  }
}