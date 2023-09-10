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

  getMatchingModules(enabled, match = []) {
    let modules = [];

    for (let module of this.allModules) {
      if (this.matchModule(module, enabled, match)) modules.push(module);
    }

    return modules;
  }

  matchModule(module, enabled, match = []) {
    for (let tile of module.tiles) {
      if (tile.element) if (!enabled.includes(tile.element.type)) return false;
      if (!enabled.includes(tile.type)) return false;
    }

    let existed = {};

    for (let tile of module.tiles) {
      existed[tile.type] = true;
      if (tile.element) existed[tile.element.type] = true;
    }

    for (let must of match) {
      if (!existed[match]) return false;
    }

    return true;
  }
}

export const modules = new Modules();
await modules.loadModules();
