import { TileRotations } from '../common/util';

// someone derived this from http://doc.mapeditor.org/en/stable/reference/tmx-map-format/#layer
const TRANSFORM_MAP: {[key:number]: {[key in keyof typeof TileRotations]: number}} = { 
    1: {
        ONE: 0xE0000000, // horizontal + vertical + diagonal
        THREE: 0x20000000, // diagonal
        TWO: 0x40000000, // vertical
        ZERO: 0x80000000 // horizontal
    }, 
    0: {
        ONE: 0xA0000000, // horizontal + diagonal
        THREE: 0x60000000, // vertical + diagonal
        TWO: 0xC0000000, // horiontal + vertical
        ZERO: 0 // no change
    }
};

export default class TiledTile {
    
    public static calculateTransformedId(tile: number, clockwiseRotations: TileRotations, flippedHorizontally: boolean) {
        const flippedNum = flippedHorizontally ? 1 : 0;
        const codingValue = TRANSFORM_MAP[flippedNum][clockwiseRotations];
        console.log(`tile: ${tile}, rot: ${clockwiseRotations}, flip: ${flippedNum}, code: ${codingValue}, output: ${codingValue ? tile + codingValue : tile}`);
        return codingValue ? tile + codingValue : tile;
    }

    public static fromTiledJson(jsonData: number) { // the "JSON" is just the tile number, not in {}
        return new TiledTile(jsonData);
    }

    private transformedId: number;

    constructor(transformedId: number) {
        this.transformedId = transformedId;
    }

    public toTiledJson(): number {
        return this.transformedId;
    }

    public getTransformedId(): number {
        return this.transformedId;
    }
}