import * as React from "react";
import { Link } from "react-router";

class AppLayout extends React.Component<any, any> {
    public render() {
        return (
            <div className="container">
                <div className="navbar">
                    <Link id="link_to_home" className="link_to" to="/">Home</Link>
                    <Link id="link_to_journal" className="link_to" to="/journal">Journal</Link>
                </div>
                {this.props.children}
                <div className="break"/>
            </div>
        );
    }
};

export default AppLayout;
