import React, { Component } from 'react'
import EventListItem from './EventListItem'

 class EventList extends Component {
  render() {
    const {events, onEventOpen, deleteEvent} = this.props;
    return (
      <div>
        <h1>EventList</h1>
        {events.map((event) => (
          <EventListItem key={event.id} onEventOpen={onEventOpen} deleteEvent={deleteEvent} event={event}/>
        ))}
        
      </div>
    )
  }
}
export default EventList