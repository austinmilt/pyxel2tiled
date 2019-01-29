import PyxelTilemap from '../pyxel/tilemap';
import TiledLayer from '../tiled/layer';
import TiledTile from '../tiled/tile';
import TiledTilemap from '../tiled/tilemap';

export default class PyxelTiledConverter {

    public static convertPyxelToTiled(inputTilemap: PyxelTilemap): TiledTilemap {
        const outputLayers: TiledLayer[] = [];
        for (const inputLayer of inputTilemap.getLayers()) {
            const outputTiles: TiledTile[] = [];
            for (const inputTile of inputLayer.getTiles()) {
                const transformedId: number = TiledTile.calculateTransformedId(inputTile.getTile()+1, inputTile.getRot(), inputTile.getFlipX());
                outputTiles[inputTile.getIndex()] = new TiledTile(transformedId);
            }
            
            outputLayers.push(new TiledLayer(
                inputLayer.getName(),inputLayer.getNumber() , outputTiles, inputTilemap.getTilesWide(), inputTilemap.getTilesHigh()
            ));
        }

        return new TiledTilemap(
            inputTilemap.getTilesWide(), inputTilemap.getTilesHigh(), inputTilemap.getTileWidth(),
            inputTilemap.getTileHeight(), outputLayers
        );
    }

    public static convertTiledToPyxel(inputTilemap: TiledTilemap): PyxelTilemap {
        throw new Error("Not yet supported.");
    }
}