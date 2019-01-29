import TiledTile from './tile';

export interface IJsonData {
    name: string;
    id: number;
    data: number[];
    width: number;
    height: number;
    x?: number;
    y?: number;
    visible?: boolean;
    opacity?: number;
    type?: string;
}

export default class TiledLayer {

    public static fromTiledJson(jsonData: IJsonData) {
        const tiles: TiledTile[] = [];
        jsonData.data.forEach(tileData => {tiles.push(TiledTile.fromTiledJson(tileData))});
        return new TiledLayer(
            jsonData.name, jsonData.id, tiles, jsonData.width, jsonData.height, 
            jsonData.x, jsonData.y, jsonData.visible, jsonData.opacity, jsonData.type
        );
    }

    private name: string;
    private id: number;
    private tiles: TiledTile[];
    private width: number;
    private height: number;
    private x: number;
    private y: number;
    private visible: boolean;
    private opacity: number;
    private layerType: string;

    constructor(
        name: string, id: number, tiles: TiledTile[], width: number, height: number, 
        x: number = 0, y: number = 0, visible: boolean = true, opacity: number = 1, layerType: string = "tilelayer"
    ) {
        this.name = name;
        this.id = id;
        this.tiles = tiles;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.visible = visible;
        this.opacity = opacity;
        this.layerType = layerType;
    }

    public toTiledJson() {
        const outputTiles: number[] = [];
        this.tiles.forEach(tile => outputTiles.push(tile.toTiledJson()));
        const output: IJsonData = {
            data: outputTiles,
            height: this.height,
            id: this.id,
            name: this.name,
            opacity: this.opacity,
            type: this.layerType,
            visible: this.visible,
            width: this.width,
            x: this.x,
            y: this.y
        };
        return output;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

    public getTiles(): TiledTile[] {
        return this.tiles;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public isVisible(): boolean {
        return this.visible;
    }

    public getOpacity(): number {
        return this.opacity;
    }

    public getType(): string {
        return this.layerType;
    }
}

export { TiledLayer };