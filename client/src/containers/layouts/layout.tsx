import * as React from "react";
import { Link } from "react-router";
import { logout, login, isLoggedIn } from "../../utils/AuthService";

class AppLayout extends React.Component<any, any> {
    public render() {
        let userIsLoged = isLoggedIn();
        return (
            <div className="container">
                <div className="navbar">
                    {userIsLoged ? <Link id="link_to_home" className="link_to" to="/">Home</Link> : ""}
                    {userIsLoged ? <Link id="link_to_journal" className="link_to" to="/journal">Journal</Link> : ""}
                    <ul className="nav navbar-nav navbar-right">
                        <li>{
                            (isLoggedIn()) ? (<button className="btn btn-danger log" onClick={() => logout()}>Log out </button>) : (<button className="btn btn-info log" onClick={() => login()}>Log In</button>)
                        }</li>

                    </ul>

                </div>

                {this.props.children}
                <div className="break" />

            </div>
        );
    }
};

export default AppLayout;
