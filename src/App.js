import "./styles.css";
import React from "react";
import EntryForm from "./EntryForm.js";
import DateList from "./DateList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      '2019': [],
      '2020': [],
      '2021': [],
      alert: '',
    };
    this.updateDates = this.updateDates.bind(this);
    this.updateAlert = this.updateAlert.bind(this);
  }

  /* 
  componentDidMount() {
    call server/API for entered dates()
      .then(dates => {
        this.setState({
          dates
        })
      })
  }

  saveDate(dateYear, dateObj) {
    save dateObj in database under the dateYear
  }
  */

  updateDates(dateObj) {
    const dateYear = dateObj.newDate.slice(0, 4)
    // saveDate(dateYear, date)
    this.setState({
      [dateYear]: [...this.state[dateYear], dateObj]
    });
  }
  updateAlert(status) {
    this.setState({
      alert: status,
    })
  }

  render() {
    return (
      <div className="App">
        <EntryForm 
          updateDates={this.updateDates} 
          updateAlert={this.updateAlert}
        />
        <div id="dateLists">
          <div className="dateList">
            <p className="year">2019</p>
            <DateList dates={this.state['2019']} />
          </div>
          <div className="dateList">
          <p className="year">2020</p>
            <DateList dates={this.state['2020']} />
          </div>
          <div className="dateList">
          <p className="year">2021</p>
            <DateList dates={this.state['2021']} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
