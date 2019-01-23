import { PyxelTilemap } from '../pyxel/tilemap';
import { TiledTilemap } from '../tiled/tilemap';
import { TiledTile } from '../tiled/tile';
import { TiledLayer } from '../tiled/layer';

export class PyxelTiledConverter {

    static convert(inputTilemap) {
        let outputTilemap;
        if (inputTilemap instanceof PyxelTilemap) {

            // convert layers
            let outputLayers = [];
            for (let inputLayer of inputTilemap.getLayers()) {
                let outputTiles = [];

                // convert tiles
                for (let inputTile of inputLayer.getTiles()) {
                    const transformedId = TiledTile.calculateTransformedId(
                        inputTile.getTile(), inputTile.getRot(), inputTile.getFlipX()
                    );
                    outputTiles[inputTile.getIndex()] = new TiledTile(transformedId);
                }
                outputLayers.push(new TiledLayer(
                    inputLayer.getName(), inputLayer.getNumber(), outputTiles, 
                    inputTilemap.getTilesHigh(), inputTileMap.getTilesWide()
                ));
            }
            outputTilemap = new TiledTilemap(
                inputTilemap.getTilesWide(), inputTilemap.getTilesHigh(), inputTilemap.getTileWidth(),
                inputTilemap.getTileHeight(), outputLayers
            );
        }
        else if (inputTilemap instanceof TiledTilemap) {
            alert("Dont know how to convert from TiledTilemap to PyxelTilemap");
        }
        return outputTilemap;
    }
}