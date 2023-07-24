import React from 'react'
import Link from 'next/link'
import classes from './eventItem.module.css'    
import Button from '../ui/button'
import AddressIcon from '../icons/address-icon'
import DateIcon from '../icons/date-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
const EventItem = (props) => {
    const { id,location,title,date,image} = props;
    const readableDate= new Date(date).toLocaleDateString('en-us',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    const formattedAddress =    location.replace(',','\n')


  return (
    <li className={classes.item}>
        <img src={'/'+image} alt="" />
        <div className={classes.content}>
            <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
                      <DateIcon />
                <time>{readableDate}</time>
                
            </div>
            <div className={classes.address}>
            <AddressIcon/>
                <address>{formattedAddress}</address>
            </div>

            </div>
            <div className={classes.actions}>
            {/* <Link href={'/events/'+id}>Explore event</Link> */}
                  <Button link={'/events/' + id} >
                      <span>Explore Event</span>
                      <span className={classes.icon}><ArrowRightIcon/></span>
                  
                  </Button>

            </div>
        </div>
    </li>
  )
}

export default EventItem