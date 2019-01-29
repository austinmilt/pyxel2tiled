import { TileRotations } from '../common/util';

export interface IJsonData {
    tile: number;
    index: number;
    x: number;
    y: number;
    rot: number;
    flipX: boolean;
}

export default class PyxelTile {

    public static fromPyxelJson(jsonData: IJsonData) {
        return new PyxelTile(
            jsonData.tile, jsonData.index, jsonData.x, jsonData.y, TileRotations[jsonData.rot.toString()] , jsonData.flipX
        )
    }

    private tile: number;
    private index: number;
    private x: number;
    private y: number;
    private rot: TileRotations;
    private flipX: boolean;

    constructor(tile: number, index: number, x: number, y: number, rot: TileRotations, flipX: boolean) {
        this.tile = tile;
        this.index = index;
        this.x = x;
        this.y = y;
        this.rot = rot;
        this.flipX = flipX;
    }

    public toPyxelJson(): IJsonData {
        return {
            flipX: this.flipX,
            index: this.index,
            rot: this.rot,
            tile: this.tile,
            x: this.x,
            y: this.y
        };
    }

    public getTile(): number {
        return this.tile;
    }

    public getIndex(): number {
        return this.index;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getRot(): TileRotations {
        return this.rot;
    }

    public getFlipX(): boolean {
        return this.flipX;
    }
}

export {PyxelTile};