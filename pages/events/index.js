import React from 'react'
import { getAllEvents } from '@/dummy-data'
import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/event-search';
import { useRouter } from 'next/router';
const Events = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year,month) {
    
    router.push(`/events/${year}/${month}`)
    
  }
  return (
    <div>
    <EventsSearch onSearch={findEventsHandler}/>
    <EventList items={events} />
    </div>
  )
}

export default Events