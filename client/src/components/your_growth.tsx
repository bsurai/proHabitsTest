import * as React from "react";
import { PropsYourGrowth } from "../interfaces/props_interfaces";

const headerYourGrowth = (): JSX.Element => {
    return (
        <div className={"bp3-view3"}>
            <div className={"bp3-your-growth"}>{"YOUR GROWTH"}</div>
            <div className={"bp3-see-more-link"}>
                <div className={"bp3-see-more"}>{"SEE MORE >"}</div>
            </div>
        </div>
    );
};

const resultsYourGrowth = (daysCompeted: number, streak: number): JSX.Element => {
    return (
        <div className={"bp3-group3"}>
            <div className={"bp3-indicator-days-competed"}>
                <div className={"bp3-a12"}>{daysCompeted}</div>
                <div className={"bp3-days-competed"}>
                    {"DAYS"}
                    <br />
                    {"COMPETED "}
                </div>
            </div>
            <div className={"bp3-indicator-streak"}>
                <div className={"bp3-a09"}>{streak}</div>
                <div className={"bp3-streak"}> {"STREAK "} </div>
            </div>
        </div>
    );
};

class YourGrowth extends React.Component<PropsYourGrowth, void> {
    public render() {
        let { yourGrowth: { daysCompeted, streak } } = this.props;

        return (
            <div className={"bp3-your-growth-copy-layout-container"}>
                <br />
                <br />
                <div className={"bp3-your-growth-copy"}>
                    {headerYourGrowth()}
                    {resultsYourGrowth(daysCompeted, streak)}
                </div>
            </div>
        );
    }
};

export default YourGrowth;