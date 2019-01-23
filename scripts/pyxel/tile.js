import Arg from '../util.js';

export default class PyxelTile {
    constructor(tile, index, x, y, rot, flipX) {
        this.tile = Arg.required(tile, "tile");
        this.index = Arg.required(index, "index");
        this.x = Arg.required(x, "x");
        this.y = Arg.required(y, "y");
        this.flipX = Arg.required(rot, "rot");
        this.rot = Arg.required(flipX, "flipX");
    }

    static fromJson(jsonData) {
        return new PyxelTile(
            jsonData.tile, jsonData.index, jsonData.x, jsonData.y, jsonData.rot, jsonData.flipX
        );
    }

    getTile() {
        return this.tile;
    }

    getIndex() {
        return this.index;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getRot() {
        return this.rot;
    }

    getFlipX() {
        return this.flipX;
    }
}

export {PyxelTile};