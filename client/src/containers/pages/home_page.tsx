import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import homeActions from "../../actions/home_actions";
import Challenge from "../../components/challenge";
import Motivation from "../../components/motivation";
import YourGrowth from "../../components/your_growth";
import OurGrowth from "../../components/our_growth";
import { HomeState, AppState } from "../../../../common/interfaces/states_interfaces";
import { PropsHome } from "../../interfaces/props_interfaces";
import { HomeActionCollection } from "../../interfaces/props_interfaces";
import * as AI from "../../interfaces/actions_interfaces";
// import { isLoggedIn } from "../../utils/AuthService";

function mapStateToPropsReposPage(state: AppState): { home: HomeState } {
    return { home: state.home };
};

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch<AI.HomeAction>) {
    return {
        actions: bindActionCreators<HomeActionCollection>(homeActions, dispatch),
    };
};

class HomePage extends React.Component<PropsHome, void> {

    private timerId: number;
    private userId: number;
    private status: number;
    private commitmentId: number;

    componentWillReceiveProps(nextProps: PropsHome) {
        this.commitmentId = nextProps.home.challenge.id;
        this.status = nextProps.home.challenge.status;
        this.userId = nextProps.home.userId;
    };

    updateStatus = () => {
        console.log("updateStatus this");
        console.log(this);
        this.props.actions.updateHomePage({
            userId: this.userId,
            commitmentId: this.commitmentId,
            status: ++this.status
        });
    }

    componentDidMount() {
        this.props.actions.fetchHomePage({ userId: this.userId, commitmentId: this.commitmentId });
        this.timerId = window.setInterval(
            () => { this.props.actions.fetchHomePage({ userId: this.userId, commitmentId: this.commitmentId }); },
            60 * 1000,
        );
    };

    componentWillUnmount() {
        window.clearInterval(this.timerId);
    };

    render() {
        let { home: { challenge, date, motivation, yourGrowth, ourGrowth } } = this.props;
        let userIsLoged = true; // isLoggedIn();
        return (
            <div>
                <h1>Home Page!</h1>
                {userIsLoged ? (
                    <Challenge challenge={challenge}
                        date={date}
                        update={this.updateStatus} />) : ""}
                {userIsLoged ? <Motivation motivation={motivation} /> : ""}
                {userIsLoged ? <YourGrowth yourGrowth={yourGrowth} /> : ""}
                {userIsLoged ? <OurGrowth ourGrowth={ourGrowth} /> : ""}
            </div>
        );
    };
};

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(HomePage);