import * as React from "react";
import { PropsOurGrowth } from "../interfaces/props_interfaces";

const headerOurGrowth = (): JSX.Element => {
    return (
        <div className={"bp3-view3"}>
            <div className={"bp3-our-growth"}>{"OUR GROWTH"}</div>
            <div className={"bp3-see-more-link"}>
                <div className={"bp3-see-more"}>{"SEE MORE >"}</div>
            </div>
        </div>
    );
};

const resultsOurGrowth = (value: number, text: string): JSX.Element => {
    return (
        <div className={"bp3-group3"}>
            <div> {value} </div>
            <div> {text} </div>
        </div>
    );
};

class OurGrowth extends React.Component<PropsOurGrowth, void> {
    public render() {
        let { ourGrowth: {
            icomitsToday,
            dailyChallengesCompleted,
            prohabitCowokers,
            peopleFiveDateStreak,
            peopleFinishedThisProhabit
         } } = this.props;

        return (
            <div className={"bp3-our-growth-layout-container"}>
                <br />
                <br />
                <div className={"bp3-our-growth"}>
                    {headerOurGrowth()}
                    <div className={"bp3-items"}>
                        {resultsOurGrowth(icomitsToday, "\"ICOMMITS\" TODAY")}
                        {resultsOurGrowth(dailyChallengesCompleted, "DAILY CHALLENGES COMPLETED")}
                        {resultsOurGrowth(prohabitCowokers, "CO-WORKERS WORKING ON THIS PROHABIT")}
                        {resultsOurGrowth(peopleFiveDateStreak, "PEOPLE CURRENTLY ON 5+ DATE STREAKS")}
                        {resultsOurGrowth(peopleFinishedThisProhabit, "PEOPLE HAVE FINISHED THIS PROHABIT 1X")}
                    </div>
                </div>
            </div>
        );
    }
};

export default OurGrowth;