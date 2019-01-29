import * as React from 'react';

export interface IProps {
    rows: number;
    cols: number;
    id: string;
    label: string;
    onInput?: (event: React.FormEvent<HTMLTextAreaElement>) => void
}


export default class TilemapTextarea extends React.Component<IProps, object> {
    private textArea = React.createRef<HTMLTextAreaElement>();

    public getContents() {
        return this.textArea.current!.value;
    }

    public getId() {
        return this.props.id;
    }

    public setContents(contents: string) {
        this.textArea.current!.value = contents;
    }

    public render() {
        return <div className="codebox-container">
            <div className="inputbox-label">{this.props.label}</div>
            <textarea 
                id={this.props.id} 
                name={this.props.id} 
                rows={this.props.rows} 
                cols={this.props.cols}
                wrap="off"
                className="tilemap-textarea"
                ref={this.textArea}
                onInput={this.props.onInput}
            />
        </div>
    }

}