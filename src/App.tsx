import * as React from 'react';
import './App.css';
import ConvertButton from './components/ConvertButton';
import TilemapTextarea from './components/TilemapTextarea';
import PyxelTiledConverter from './core/conversion/pyxel-tiled';
import {IJsonData as IPyxelTilemapJson, PyxelTilemap} from './core/pyxel/tilemap';
import {IJsonData as ITiledTilemapJson, TiledTilemap} from './core/tiled/tilemap';

const TextBox = {
    PYXEL: 'pyxel',
    TILED: 'tiled'
}

export default class App extends React.Component {
    private button = React.createRef<ConvertButton>();
    private pyxel = React.createRef<TilemapTextarea>();
    private tiled = React.createRef<TilemapTextarea>();
    private activeBox: React.RefObject<TilemapTextarea>;

    constructor(props: {}) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this); // have to bind to this in order to get proper context in the method
        this.setActiveBox = this.setActiveBox.bind(this);
        this.convert = this.convert.bind(this);
    }


    public render() {
        return (
            <div className="App">
                <div className="button-container">
                    <ConvertButton ref={this.button} onClick={this.onSubmit}/>
                </div>
                <div className="input-container">
                    <TilemapTextarea id={TextBox.PYXEL} ref={this.pyxel} rows={80} cols={80} onInput={this.setActiveBox} label="Pyxel-Edit Tilemap"/>
                    <TilemapTextarea id={TextBox.TILED} ref={this.tiled} rows={80} cols={80} onInput={this.setActiveBox} label="Tiled Tilemap"/>
                    </div>  
                </div>
        );
    }


    private convert() {
        const activeBox: TilemapTextarea = this.activeBox!.current!;
        switch (activeBox.getId()) {
            case TextBox.PYXEL: {
                const inputJson: IPyxelTilemapJson = JSON.parse(activeBox.getContents());
                const inputTilemap: PyxelTilemap = PyxelTilemap.fromPyxelJson(inputJson);
                const outputTilemap: TiledTilemap = PyxelTiledConverter.convertPyxelToTiled(inputTilemap);
                this.tiled!.current!.setContents(JSON.stringify(outputTilemap.toTiledJson(), null, 4));
                break;
            }
                
            case TextBox.TILED: {
                const inputJson: ITiledTilemapJson = JSON.parse(activeBox.getContents());
                const inputTilemap: TiledTilemap = TiledTilemap.fromTiledJson(inputJson);
                console.log(inputTilemap);
                console.log(inputTilemap.toTiledJson());
                console.log(TiledTilemap.fromTiledJson(inputTilemap.toTiledJson()));
                this.pyxel!.current!.setContents(`This is where the output goes after we convert the ${inputJson} long JSON`);
                break;
            }

            default:
                throw new Error(`Unknown input box '${activeBox.getId()}'.`);
        }
    }


    private setActiveBox(event: React.FormEvent<HTMLTextAreaElement>) {
        switch (event.currentTarget.id) {
            case TextBox.PYXEL:
                this.activeBox = this.pyxel;
                break;

            case TextBox.TILED:
                this.activeBox = this.tiled;
                break;

            default:
                throw new Error(`Unknown input text box '${event.currentTarget.id}'.`);
        }
    }


    private onSubmit() {
        this.convert();
    }

}