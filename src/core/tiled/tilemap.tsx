import {IJsonData as ILayerJson, TiledLayer } from './layer';

export interface IJsonData {
    width: number;
    height: number;
    tilewidth: number;
    tileheight: number;
    layers: ILayerJson[];
    type?: string;
    infinite?: boolean;
    nextlayerid?: number;
    nextobjectid?: number;
    orientation?: string;
    renderorder?: string;
    tiledversion?: string;
    version?: string;
    tilesets?: object[];
}


export default class TiledTilemap {

    public static fromTiledJson(jsonData: IJsonData) {
        const layers: TiledLayer[] = [];
        jsonData.layers.forEach(layerData => layers.push(TiledLayer.fromTiledJson(layerData)));
        return new TiledTilemap(
            jsonData.width, jsonData.height, jsonData.tilewidth, jsonData.tileheight, layers,
            jsonData.type, jsonData.infinite, jsonData.nextlayerid, jsonData.nextobjectid,
            jsonData.orientation, jsonData.renderorder, jsonData.tiledversion, jsonData.version, jsonData.tilesets
        );
    }

    private width: number;
    private height: number;
    private tileWidth: number;
    private tileHeight: number;
    private layers: TiledLayer[];
    private tilemapType: string;
    private infinite: boolean;
    private nextLayerId: number;
    private nextObjectId: number;
    private orientation: string;
    private renderOrder: string;
    private tiledVersion: string;
    private version: string;
    private tileSets: object[];

    constructor(
        width: number, height: number, tileWidth: number, tileHeight: number, layers: TiledLayer[],
        tilemapType: string = "map", infinite: boolean = false, nextLayerId: number = layers.length,
        nextObjectId: number = 1, orientation: string = "orthogonal", renderOrder: string = "right-down",
        tiledVersion: string = "1.2.1", version: string = "1.0", tileSets: object[] = []
    ) {
        this.width = width;
        this.height = height;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = layers;
        this.tilemapType = tilemapType;
        this.infinite = infinite;
        this.nextLayerId = nextLayerId;
        this.nextObjectId = nextObjectId;
        this.orientation = orientation;
        this.renderOrder = renderOrder;
        this.tiledVersion = tiledVersion;
        this.version = version;
        this.tileSets = tileSets;
    }

    public toTiledJson(): IJsonData {
        const outputLayers: ILayerJson[] = [];
        this.layers.forEach(layer => outputLayers.push(layer.toTiledJson()));
        const output: IJsonData = {
            height: this.height,
            infinite: this.infinite,
            layers: outputLayers,
            nextlayerid: this.nextLayerId,
            nextobjectid: this.nextObjectId,
            orientation: this.orientation,
            renderorder: this.renderOrder,
            tiledversion: this.tiledVersion,
            tileheight: this.tileHeight,
            tilesets: this.tileSets,
            tilewidth: this.tileWidth,
            type: this.tilemapType,
            version: this.version,
            width: this.width
        };
        return output;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getTileWidth(): number {
        return this.tileWidth;
    }

    public getTileHeight(): number {
        return this.tileHeight;
    }

    public getLayers(): TiledLayer[] {
        return this.layers;
    }

    public getType(): string {
        return this.tilemapType;
    }

    public isInfinite(): boolean {
        return this.infinite;
    }

    public getNextLayerId(): number {
        return this.nextLayerId;
    }

    public getNextObjectId(): number {
        return this.nextObjectId;
    }

    public getOrientation(): string {
        return this.orientation;
    }

    public getRenderOrder(): string {
        return this.renderOrder;
    }

    public getTiledVersion(): string {
        return this.tiledVersion;
    }

    public getVersion(): string {
        return this.version;
    }

    public getTileSets(): object[] {
        return this.tileSets;
    }
}

export { TiledTilemap };