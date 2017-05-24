import * as React from "react";
import { connect } from "react-redux";
import Challenge from "../../components/challenge";
import Motivation from "../../components/motivation";
import YourGrowth from "../../components/your_growth";
import OurGrowth from "../../components/our_growth";
import { HomeState, AppState } from "../../interfaces/states_interfaces";
import { PropsHome } from "../../interfaces/props_interfaces";
// import { isLoggedIn } from "../../utils/AuthService";

function mapStateToPropsReposPage(state: AppState): { home: HomeState } {
    return { home: state.home };
}

class HomePage extends React.Component<PropsHome, void> {
    public render() {
        let { home: { challenge, date, motivation, yourGrowth, ourGrowth } } = this.props;
        let userIsLoged = true; // isLoggedIn();
        return (
            <div>
                <h1>Home Page!</h1>
                {userIsLoged ? <Challenge challenge={challenge} date={date} /> : ""}
                {userIsLoged ? <Motivation motivation={motivation} /> : ""}
                {userIsLoged ? <YourGrowth yourGrowth={yourGrowth} /> : ""}
                {userIsLoged ? <OurGrowth ourGrowth={ourGrowth} /> : ""}
            </div>
        );
    }
}

export default connect(mapStateToPropsReposPage)(HomePage);