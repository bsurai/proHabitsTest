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

const buttonChallenge = (status: number): JSX.Element => {
    let title = status === 0 ? "Commit" :
                status === 1 ? "End up commit" :
                "New Challenge tomorrow";

    return (
        <div className={"bp3-i-commit"}>
            <br />
            <br />
            <div className={"bp3-rectangle"} />
            <div className={"bp3-new-challenge-tomorr"}> {title} </div>
        </div>
    );
};

class Challenge extends React.Component<PropsChallenge, void> {
    public render() {
        let { challenge: { title, text, status }, date } = this.props;

        return (
            <div className={"bp3-todays-challenge-layout-container"}>
                <div className={"bp3-todays-challenge"}>
                    {headerChallenge(date)}
                    {paragraphChallenge(title, text)}
                    {buttonChallenge(status)}
                </div>
            </div>
        );
    }
};

export default Challenge;
