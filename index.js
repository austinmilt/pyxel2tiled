import { PyxelTiledConverter } from './scripts/converters/pyxel-tiled';
import { PyxelTilemap } from './scripts/pyxel/tilemap';
import { TiledTilemap } from './scripts/tiled/tilemap';

const TilemapType = {
    PYXEL: 0,
    TILED: 1
};

const converterMap = {};
converterMap[TilemapType.PYXEL] = {};
converterMap[TilemapType.TILED] = {};
converterMap[TilemapType.PYXEL][TilemapType.TILED] = PyxelTiledConverter;
converterMap[TilemapType.TILED][TilemapType.PYXEL] = PyxelTiledConverter;


export class Main {

    constructor() {
        this.submitButton = document.getElementById("submit");
        this.pyxelCode = document.getElementById("pyxel_code");
        this.tiledCode = document.getElementById("tiled_code");

        this.submitButton.onclick = this.convert.bind(this);
        this.pyxelCode.oninput = this.setActiveBox.bind(this);
        this.tiledCode.oninput = this.setActiveBox.bind(this);

        this.activeBox = this.pyxelCode;

        this.converters = {};
    }

    convert(event) {

        // get the appropriate converter and tilemaps based on what the input/outputs are
        let inputType;
        let inputTilemap;
        switch (this.activeBox) {
            case this.pyxelCode:
                inputType = TilemapType.PYXEL;
                inputTilemap = PyxelTilemap.fromJson(this.pyxelCode.value)
                break;
            
            case this.tiledCode:
                inputType = TilemapType.TILED;
                inputTilemap = TiledTilemap.fromJson(this.tiledCode.value);
                break;

            default:
                alert("unknown input type");
                throw new Exception("Could not process.");
                break;
        }

        const otherBox = this.activeBox == this.pyxelCode ? this.tiledCode : this.pyxelCode;
        let outputType;
        switch (otherBox) {
            case this.pyxelCode:
                outputType = TilemapType.PYXEL;

                break;

            case this.tiledCode:
                inputType = TilemapType.TILED;
                break;

            default:
                alert("unknown output type");
                break;
        }

        // convert the tilemap from one format to another
        const converter = converterMap[inputType][outputType];
        const outputTilemap = converter.convert(inputTilemap);
        console.log(inputTilemap);
        console.log(outputTilemap);

        // set the other box's value to the converted tilemap code
        if (outputTilemap !== undefined) {
            otherBox.value = outputTilemap;
        }

    }

    setActiveBox(event) {
        this.activeBox = event.target;
    }

    static run() {
        new Main();
    }
}

Main.run();