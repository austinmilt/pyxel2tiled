import TiledTile from './tile.js';
import Arg from '../util.js';

export class TiledLayer {
    
    constructor(name, id, tiles, width, height, x, y, visible, opacity, layerType) {
        this.name = Arg.required(name, "name");
        this.id = Arg.required(id, "id");
        this.tiles = Arg.required(tiles, "tiles");
        this.width = Arg.required(width, "width");
        this.height = Arg.required(height, "height");
        this.x = Arg.optional(name, 0);
        this.y = Arg.optional(name, 0);
        this.visible = Arg.optional(name, true);
        this.opacity = Arg.optional(name,1);
        this.type = Arg.optional(name, "tilelayer");
    }

    static fromJson(layerData) {
        let tiles = [];
        layerData.data.array.forEach(tileData => tiles.push(new TiledTile.fromJson(tileData)));
        return new TiledLayer(
            layerData.name, layerData.id, tiles, layerData.width, layerData.height, layerData.x,
            layerData.y, layerData.visible, layerData.opacity, layerData.type
        );
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getTiles() {
        return this.tiles;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getVisible() {
        return this.visible;
    }

    getOpacity() {
        return this.opacity;
    }

    getType() {
        return this.type;
    }
}