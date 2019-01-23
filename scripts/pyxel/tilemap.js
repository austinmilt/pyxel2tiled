import PyxelLayer from './layer.js';
import Arg from '../util.js';

export default class PyxelTilemap {

    constructor(tilesWide, tilesHigh, tileWidth, tileHeight, layers) {
        this.tilesWide = Arg.required(tilesWide, "tilesWide");
        this.tilesHigh = Arg.required(tilesHigh, "tilesHigh");
        this.tileWidth = Arg.required(tileWidth, "tileWidth");
        this.tileHeight = Arg.required(tileHeight, "tileHeight");
        this.layers = Arg.required(layers, "layers");
    }

    static fromJson(jsonData) {
        let layers = [];
        jsonData.layers.forEach(layerData => layers.push(PyxelLayer.fromJson(layerData)));
        return new PyxelTilemap(
            jsonData.tileswide, jsonData.tileshigh, jsonData.tilewidth, jsonData.tileheight, layers
        );
    }

    getTilesWide() {
        return this.tilesWide;
    }

    getTilesHigh() {
        return this.tilesHigh;
    }

    getTileWidth() {
        return this.tileWidth;
    }

    getTileHeight() {
        return this.tileHeight;
    }

    getLayers() {
        return this.layers;
    }
}