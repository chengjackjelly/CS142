import React from "react";
import "./styles.css";
import Example from "../Example";
import States from "../States";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            another: "Example",
            component: <States />,
        }
    }
    handleButtonClick(buttonName, event) {
        if (this.state.another == "Example") {
            this.setState({ another: "Status" });
            this.setState({ component: <Example /> });
        }
        else {
            this.setState({ another: "Example" });
            this.setState({ component: <States /> });
        }
    }
    render() {
        return (
            <div className="container Button">

                <button
                    type="button"
                    onClick={(e) => this.handleButtonClick("switchButton", e)}
                >
                    Switch to {this.state.another}
                </button>

                <div>{this.state.component}</div>

            </div>


        )
    }
}
export default Button;