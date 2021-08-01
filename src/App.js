import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newText = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState({
      items: this.state.items.concat(newText),
      text: ""
    });
  };

  render() {
    return (
      <div>
        <Todo items={this.state.items} />
        <label>What's needs want to be done?</label>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <form onSubmit={this.handleSubmit}>
          <button>Add#{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </div>
    );
  }
}

export default App;
