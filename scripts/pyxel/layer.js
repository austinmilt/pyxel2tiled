import PyxelTile from './tile.js';
import Arg from '../util.js';

export default class PyxelLayer {
    constructor(name, number, tiles) {
        this.name = Arg.required(name, "name");
        this.number = Arg.required(number, "number");
        this.tiles = Arg.required(tiles, "tiles");
    }

    static fromJson(jsonData) {
        let tiles = [];
        jsonData.tiles.forEach(tileData => tiles.push(PyxelTile.fromJson(tileData)));
        return new PyxelLayer(jsonData.name, jsonData.number, tiles);
    }

    getName() {
        return this.name;
    }

    getNumber() {
        return this.number;
    }

    getTiles() {
        return this.tiles;
    }
}