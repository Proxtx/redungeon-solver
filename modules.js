class Modules {
  constructor(path = "modules.json") {
    this.path = path;
  }

  async loadModules() {
    this.modules = await (await fetch(this.path)).json();
    this.startingModules = this.modules["starting-modules"];
    this.corridorModules = this.modules["corridor-modules"];
    this.allModules = this.startingModules.concat(this.corridorModules);
  }

  getMatchingModules(match) {
    let modules = [];

    for (let module of this.allModules) {
      if (this.matchModule(module, match)) modules.push(module);
    }

    return modules;
  }

  matchModule(module, match) {
    for (let tile of module.tiles) {
      if (tile.element) if (!match.includes(tile.element.type)) return false;
      if (!match.includes(tile.type)) return false;
    }

    return true;
  }
}

export const modules = new Modules();
await modules.loadModules();
