import * as React from "react";
import { PropsMotivation } from "../interfaces/props_interfaces";

const paragraphMotivation = (text: string): JSX.Element => {
    return (
        <div className={"bp3-view1"}>
            <div className={"bp3-without-tradition-a"}>{text}</div>
        </div>
    );
};

const separatorMotivation = (): JSX.Element => {
    return <div className={"bp3-sep"} />;
};

const authorMotivation = (author: string): JSX.Element => {
    return (
        <div className={"bp3-author"}>
            <div className={"bp3-stacked-group"}>
                <div className={"bp3-winston-churchill"}>{author}</div>
            </div>
        </div>
    );
};

class Motivation extends React.Component<PropsMotivation, void> {
    public render() {
        let { motivation: { text, author } } = this.props;

        return (
            <div className={"bp3-quote-layout-container"}>
                <br />
                <br />
                <div className={"bp3-quote"}>
                    {paragraphMotivation(text)}
                    {separatorMotivation()}
                    {authorMotivation(author)}
                </div>
            </div>
        );
    }
};

export default Motivation;