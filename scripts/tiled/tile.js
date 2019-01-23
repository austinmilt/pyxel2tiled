import Arg from '../util.js';

const TRANSFORM_MAP = { // someone derived this from http://doc.mapeditor.org/en/stable/reference/tmx-map-format/#layer
    true: { // flipped horizontally
        0: 0x80000000, // horizontal
        1: 0xE0000000, // horizontal + vertical + diagonal
        2: 0x40000000, // vertical
        3: 0x20000000 // diagonal
    },
    false: { // not flipped horizontally
        0: 1, // no change
        1: 0xA0000000, // horizontal + diagonal
        2: 0xC0000000, // horizontal + vertical
        3: 0x60000000 // vertical + diagonal
    }
};

export class TiledTile {
    
    constructor(transformedId) {
        this.transformedId = Arg.required(transformedId, "transformedId");
    }

    static calculateTransformedId(tile, clockwiseRotations, flippedHorizontally) {
        const codingValue = TRANSFORM_MAP[flippedHorizontally][clockwiseRotations];
        return Number.parseInt(tile + codingValue);
    }

    static fromJson(tileData) {
        return new TiledTile(tileData);
    }

    getTransformedId() {
        return this.transformedId;
    }
}