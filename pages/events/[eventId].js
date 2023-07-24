import React from 'react'
import { useRouter } from 'next/router'
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import { getEventById } from '@/dummy-data';
import ErrorAlert from '@/components/ui/error-alert';
import Button from '@/components/ui/button';


const EventIdPage = () => {
    const router = useRouter();
    console.log(router.query)
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    if(!event || event.length ==0){
      return(
        <>
          <ErrorAlert>
            <p>No Events Found</p>
          </ErrorAlert>
          
        </>
      )
    }
  return (
    <div>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt = {event.title}/>
      <EventContent>
      <p>{event.description}</p>
        
      </EventContent>
    </div>
  )
}

export default EventIdPage