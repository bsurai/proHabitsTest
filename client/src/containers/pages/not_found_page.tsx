import * as React from "react";

class NotFoundPage extends React.Component<{}, void> {
    public render() {
        return (
            <h1 style={{ color: "red" }}>Not Found!</h1>
        );
    }
}

export default NotFoundPage;