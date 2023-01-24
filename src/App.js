import "./App.css";
import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
      age: "",
    };
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  clickChandler = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  clickReset = () => {
    this.setState({
      counter: (this.state.counter = 0),
    });
  };
  meOnChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  render() {
    const { firstName, surName, age } = this.props;
    console.log(this.props);
    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt-5">
          <h1>
            Hello {firstName} and {surName} and {this.state.age}
          </h1>
          <div className="mt-2">
            <button className="btn btn-success" onClick={this.clickHandler}>
              Click
            </button>
            <button className="btn btn-danger" onClick={this.clickChandler}>
              Delete
            </button>
            <button onClick={this.clickReset} className="btn btn-danger">
              Reset
            </button>
            <p className="text-center">{this.state.counter}</p>
            <div>
              <form>
                <span>Yoshingiz</span>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.meOnChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <User firstName="Aziz" surName="Kuchkarov" age={29} />
      <User firstName="Aziz" surName="Kuchkarov" age={29} />
    </div>
  );
}

export default App;
