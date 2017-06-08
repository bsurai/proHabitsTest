import * as React from "react";
import { PropsChallenge } from "../interfaces/props_interfaces";

const headerChallenge = (date: string): JSX.Element => {
    return (
        <div className={"bp3-header"}>
            <div className={"bp3-label2"}> TODAY’S CHALLENGE </div>
            <div className={"bp3-a1221"}> {date} </div>
        </div>
    );
};

const paragraphChallenge = (title: string, text: string): JSX.Element => {
    return (
        <div className={"bp3-paragraph"}>
            <div className={"bp3-family-traditions"}>{title} </div>
            <div className={"bp3-think-of-a-new-tradi"}>
                {text}
            </div>
        </div>
    );
};

const buttonChallenge = (status: number, update: () => void): JSX.Element => {
    if (status === -1) {
        return <div />;
    }

    let title: string;
    let onClick: () => void;
    let btnCollor: string;

    if (status === 0) {
        title = "I Commit";
        onClick = update;
        btnCollor = "green";
    } else if (status === 1) {
        title = "Complete";
        onClick = update;
        btnCollor = "aqua";
    } else {
        title = "New Challenge tomorrow";
        onClick = () => undefined;
        btnCollor = "silver";
    }

    let style = {
        backgroundColor: btnCollor,
        width: 220,
        borderRadius: 5,
        textAlign: "center",
        verticalAlign: "middle",
        height: 30
    };
    return (
        <div className={"bp3-i-commit"} onClick={onClick} style={style}>
            <div className={"bp3-rectangle"} />
            <div className={"bp3-new-challenge-tomorr"}> {title} </div>
        </div>
    );
};

class Challenge extends React.Component<PropsChallenge, void> {
    public render() {
        let { challenge: { title, text, status }, date, update } = this.props;

        return (
            <div className={"bp3-todays-challenge-layout-container"}>
                <div className={"bp3-todays-challenge"}>
                    {headerChallenge(date)}
                    {paragraphChallenge(title, text)}
                    {buttonChallenge(status, update)}
                </div>
            </div>
        );
    }
};

export default Challenge;
