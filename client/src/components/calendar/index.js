import React, { Component } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment'
 
class DateCalendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => {
    this.setState({ date })
    const formatted = moment.utc(date).format()
    
  }
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default DateCalendar;