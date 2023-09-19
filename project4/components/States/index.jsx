import React from "react";
import "./styles.css";

/**
 * Define States, a React component of CS142 Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
    this.state = {
      states: window.cs142models.statesModel(),
      substring: "",

    };
    this.handleChangeBound = (event) => this.handleChange(event);

  }
  handleChange(event) {

    this.setState({ substring: event.target.value });
  }

  render() {

    return (
      <div className="cs142-p4-p2">
        <div className="p2-input-field">
          <label htmlFor="inId">Input Field:</label>
          <input
            id="inId"
            type="text"
            value={this.state.substring}
            onChange={this.handleChangeBound}
          />
        </div></div>
    );
  }
}

export default States;
