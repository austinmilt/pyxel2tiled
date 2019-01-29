import { IJsonData as ITileJson, PyxelTile } from './tile';

export interface IJsonData {
    name: string;
    number: number;
    tiles: ITileJson[];
}

export default class PyxelLayer {
    public static fromPyxelJson(jsonData: IJsonData) {
        const tiles: PyxelTile[] = [];
        jsonData.tiles.forEach(tileData => tiles.push(PyxelTile.fromPyxelJson(tileData)));
        return new PyxelLayer(jsonData.name, jsonData.number, tiles);
    }

    private name: string;
    private num: number;
    private tiles: PyxelTile[];

    constructor(name: string, num: number, tiles: PyxelTile[]) {
        this.name = name;
        this.num = num;
        this.tiles = tiles;
    }

    public toPyxelJson(): IJsonData {
        const outputTiles: ITileJson[] = [];
        this.tiles.forEach(tile => outputTiles.push(tile.toPyxelJson()));
        return {
            name: this.name,
            number: this.num,
            tiles: outputTiles
        };
    }

    public getName(): string {
        return this.name;
    }

    public getNumber(): number {
        return this.num;
    }

    public getTiles(): PyxelTile[] {
        return this.tiles;
    }
}

export {PyxelLayer};