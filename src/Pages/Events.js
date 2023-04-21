import React from 'react'
import Sidetitle from '../Components/Sidetitle/Sidetitle'
import EventTile from '../Components/Event/EventTile'
import Heading from '../Components/Heading'
import Line from '../Components/Line/Line'
import "./Styles/Events.css"
function Events() {


  return (
    <div className="container-fluid">
      <div className="row m-5 events">
        <Heading title='EVENTS' />
        <Line />
      </div>
      <div className='row mx-5' >
        <EventTile title="Emergence" description="sfdkdua svdusdgv dsvydouad sad dvsjhf" link="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        <EventTile title="Emergence" description="sfdksjhf" link="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        <EventTile title="Emergence" description="sfdksjhf" link="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        <EventTile title="Emergence" description="sfdksjhf" link="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        <EventTile title="Emergence" description="sfdksjhf" link="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        <EventTile title="Emergence" description="sfdksjhf" link="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
        <EventTile title="Emergence" description="sfdksjhf" link="https://images.unsplash.com/photo-1681412330003-2ce8e52f4aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      </div>
      <Sidetitle title="EVENTS" />
    </div>
  )
}

export default Events
