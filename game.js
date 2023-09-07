import { modules } from "./modules.js";
import { Module } from "./module.js";
import { randomArrayEntry } from "./util.js";
import { Position } from "./position.js";

export class Game {
  modules = [];

  constructor() {
    this.createTestingModule();
  }

  createTestingModule() {
    let matchingModules = modules.getMatchingModules(["floor", "pit", "ice"]);
    this.modules.push(
      new Module(
        this,
        randomArrayEntry(matchingModules),
        new Position(this, 0, 0)
      )
    );
  }
}
