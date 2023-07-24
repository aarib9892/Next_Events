import React from 'react'
import EventItem from './event-item'
import classes from './eventList.module.css'
const EventList = (props) => {
  return (
    <ul className={classes.list}>
        {props.items.map(item  => 
        <EventItem 

            key ={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            location = {item.location}
            image={item.image}
        />
        )}
    </ul>
  )
}

export default EventList