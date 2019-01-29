import { IJsonData as ILayerJson, PyxelLayer } from './layer';

export interface IJsonData {
    tileswide: number;
    tileshigh: number;
    tilewidth: number;
    tileheight: number;
    layers: ILayerJson[];
}


export default class PyxelTilemap {
    
    public static fromPyxelJson(jsonData: IJsonData) {
        const layers: PyxelLayer[] = [];
        jsonData.layers.forEach(layerData => layers.push(PyxelLayer.fromPyxelJson(layerData)));
        return new PyxelTilemap(jsonData.tileswide, jsonData.tileshigh, jsonData.tilewidth, jsonData.tileheight, layers);
    }

    private tilesWide: number;
    private tilesHigh: number;
    private tileWidth: number;
    private tileHeight: number;
    private layers: PyxelLayer[];

    constructor(tilesWide: number, tilesHigh: number, tileWidth: number, tileHeight: number, layers: PyxelLayer[]) {
        this.tilesWide = tilesWide;
        this.tilesHigh = tilesHigh;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = layers;
    }

    public toPyxelJson(): IJsonData {
        const outputLayers: ILayerJson[] = [];
        this.layers.forEach(layer => outputLayers.push(layer.toPyxelJson()));
        return {
            layers: outputLayers,
            tileheight: this.tileHeight,
            tileshigh: this.tilesHigh,
            tileswide: this.tilesWide,
            tilewidth: this.tileWidth
        };
    }

    public getTilesWide(): number {
        return this.tilesWide;
    }

    public getTilesHigh(): number {
        return this.tilesHigh;
    }

    public getTileWidth(): number {
        return this.tileWidth;
    }

    public getTileHeight(): number {
        return this.tileHeight;
    }

    public getLayers(): PyxelLayer[] {
        return this.layers;
    }
}

export {PyxelTilemap};