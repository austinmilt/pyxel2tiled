import * as React from 'react';

export interface IProps {
    onClick: () => void;
}

export default class ConvertButton extends React.Component<IProps, object> {
    public static defaultProps = { onClick: () => alert("You clicked me.") };

    public render() {
        return <button onClick={this.props.onClick} value="" name="convert" id="convert">Convert</button>;
    }
}