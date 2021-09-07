import React from "react";
import Notification from "./Notification.js";

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      status: "waiting",
      alert: "",
      cleaned: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkDate = this.checkDate.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      alert: ""
    });
  }

  handleSubmit(event) {
    this.setState({ status: "submitting" });
    setTimeout(() => {
      this.setState({
        status: "waiting"
      });
      this.checkDate(this.state.value);
    }, 2000);
    event.preventDefault();
  }

  checkDate(str) {
    const checkedStr = Date.parse(str);
    if (!checkedStr) {
      this.setState({ alert: 'invalid' });
      this.props.updateAlert('invalid')
    } else {
      const today = new Date().toISOString().slice(0, 10);
      const newDate = new Date(checkedStr).toISOString().slice(0, 10);
      this.setState({
        cleaned: newDate,
        alert: 'found'
      });
      if (newDate.slice(0, 4) >= 2019 && newDate.slice(0, 4) <= 2021) {
        const dateObj = {
          entered: today,
          original: str,
          newDate
        };
        this.props.updateDates(dateObj);
        this.props.updateAlert('dateEntered')
      } else {
        this.props.updateAlert('dateTooOld')
      }
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Date:&nbsp;
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          {this.state.status === "waiting" ? (
            <input type="submit" value="Submit" />
          ) : (
            <input disabled={true} type="submit" value="Submitting..." />
          )}
        </form>
        {this.state.alert.length ? (
          <Notification alert={this.state.alert} value={this.state.cleaned} />
        ) : (
          <div>
            <p/>
          </div>
        )}
      </div>
    );
  }
}

export default EntryForm;
