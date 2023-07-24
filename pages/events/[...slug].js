import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/event-list';
import ErrorAlert from '@/components/ui/error-alert';
import Button from '@/components/ui/button';
import ResultsTitle from '@/components/events/results-title';


function FilteredEvents() {
  const router = useRouter();
  const filterQueries = router.query.slug;
  if(!filterQueries){
    return <p>Loading...</p>
  }
  const filterYear = filterQueries[0];
  const filterMonth = filterQueries[1];

  

  const numYear = +filterYear
  const numMonth = +filterMonth

  if (isNaN(numYear) || isNaN(numMonth)  || numYear > 2030 || numMonth >12 || numMonth<1){
    return (
      <><ErrorAlert>
        <p>Invalid Filter Values</p>
      </ErrorAlert>
        <div className='mx-auto text-center'>
          <Button link='/events'>Events</Button>
        </div>
      </>

    )
  
    

    
  }

  const events = getFilteredEvents({
    year : numYear,
    month: numMonth
  })
  if(!events || events.length == 0){
    return  (
      <>
        <ErrorAlert>
          <p>No events Found</p>
        </ErrorAlert>
        <div className='mx-auto text-center'>
          <Button link='/events'>Events</Button>
        </div>
        

      </>

    )
 
  }
  const date = new Date(numYear , numMonth - 1)

  return (
    <>
    <ResultsTitle date={date} />
      <EventList items={events} />
    </>
    
  )
}

export default FilteredEvents