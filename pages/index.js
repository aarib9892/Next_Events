import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getFeaturedEvents } from '@/dummy-data'
const inter = Inter({ subsets: ['latin'] })
import EventList from '@/components/events/event-list'
export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
   <div>
   
    <EventList items = { featuredEvents} />
   </div>
  )
}
