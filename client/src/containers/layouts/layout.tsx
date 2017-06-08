import * as React from "react";
import * as Redux from "redux";
import { Link } from "react-router";
import { logout, login, isLoggedIn } from "../../utils/AuthService";
import homeActions from "../../actions/home_actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PropsLayout } from "../../interfaces/props_interfaces";
import { HomeActionCollection } from "../../interfaces/props_interfaces";
import * as AI from "../../interfaces/actions_interfaces";

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch<AI.HomeAction>) {
    return {
        actions: bindActionCreators<HomeActionCollection>(homeActions, dispatch),
    };
};

class AppLayout extends React.Component<PropsLayout, void> {

    appLogout = () => {
        logout();
        this.props.actions.setDefaultState();
    }

    public render() {
        let userIsLoged = isLoggedIn();
        return (
            <div className="container">
                <div className="navbar">
                    {userIsLoged ? <Link id="link_to_home" className="link_to" to="/">Home</Link> : ""}
                    {userIsLoged ? <Link id="link_to_journal" className="link_to" to="/journal">Journal</Link> : ""}
                    <ul className="nav navbar-nav navbar-right">
                        <li>{
                            userIsLoged ?
                                <button className="btn btn-danger log" onClick={this.appLogout}>Log out </button> :
                                <button className="btn btn-info log" onClick={() => login()}>Log In</button>
                        }</li>
                    </ul>
                </div>

                {this.props.children}
                <div className="break" />

            </div>
        );
    }
};

// export default AppLayout;
export default connect(undefined, mapDispatchToPropsReposPage)(AppLayout);
