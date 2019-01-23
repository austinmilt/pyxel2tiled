import Arg from '../util.js';

export default class TiledTilemap {

    constructor(
        width, height, tileWidth, tileHeight, layers, tilemapType, infinite, nextLayerId, 
        nextObjectId, orientation, renderOrder, tiledVersion, version, tileSets
    ) {
        this.width = Arg.required(width);
        this.height = Arg.required(height);
        this.tileWidth = Arg.required(tileWidth);
        this.tileHeight = Arg.required(tileHeight);
        this.layers = Arg.required(layers);
        this.type = Arg.optional(tilemapType, "map");
        this.infinite = Arg.optional(infinite, false);
        this.nextLayerId = Arg.optional(nextLayerId, layers.length);
        this.nextObjectId = Arg.optional(nextObjectId, 1);
        this.orientation = Arg.optional(orientation, "orthogonal");
        this.renderOrder = Arg.optional(renderOrder, "right-down");
        this.tiledVersion = Arg.optional(tiledVersion, "1.2.1");
        this.version = Arg.optional(version, 1.0);;
        this.tileSets = Arg.optional(tileSets, []);;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
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

    getType() {
        return this.type;
    }

    isInfinite() {
        return this.infinite;
    }

    getNextLayerId() {
        return this.nextLayerId;
    }

    getNextObjectId() {
        return this.nextObjectId;
    }

    getOrientation() {
        return this.orientation;
    }

    getRenderOrder() {
        return this.renderOrder;
    }

    getTiledVersion() {
        return this.tiledVersion;
    }

    getVersion() {
        return this.version;
    }

    getTileSets() {
        return this.tileSets;
    }
}

export {TiledTilemap};