import * as React from "react";
import { connect } from "react-redux";
import Challenge from "../../components/challenge";
import Motivation from "../../components/motivation";
import YourGrowth from "../../components/your_growth";
import OurGrowth from "../../components/our_growth";
import { HomeState, AppState } from "../../interfaces/states_interfaces";
import { PropsHome } from "../../interfaces/props_interfaces";

function mapStateToPropsReposPage(state: AppState): { home: HomeState } {
    return { home: state.home };
}

class HomePage extends React.Component<PropsHome, void> {
    public render() {

        let { home: { challenge, date, motivation, yourGrowth, ourGrowth } } = this.props;

        return (
            <div>
                <h1>Home Page!</h1>
                <Challenge challenge={challenge} date={date} />
                <Motivation motivation={motivation} />
                <YourGrowth yourGrowth={yourGrowth} />
                <OurGrowth ourGrowth={ourGrowth} />
            </div>
        );
    }
}

export default connect(mapStateToPropsReposPage)(HomePage);