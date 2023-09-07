class Atlas {
  constructor(
    imgPath = "atlas.png",
    jsonPath = "atlas.json",
    objectsPath = "objects.json"
  ) {
    this.imgPath = imgPath;
    this.jsonPath = jsonPath;
    this.objectsPath = objectsPath;
  }

  async loadAtlas() {
    this.img = new Image(0, 0);
    this.img.src = this.imgPath;
    console.log("Loading atlas png");
    await new Promise((r) => (this.img.onload = r));
    console.log("Atlas Loaded");
    this.json = (await (await fetch(this.jsonPath)).json()).sprites;
    this.objects = await (await fetch(this.objectsPath)).json();
  }

  getSpriteData(name) {
    for (let spriteData of this.json) {
      if (spriteData.name == name) {
        return spriteData;
      }
    }
  }

  getObject(name) {
    return this.objects[name];
  }
}

export const atlas = new Atlas();
await atlas.loadAtlas();
