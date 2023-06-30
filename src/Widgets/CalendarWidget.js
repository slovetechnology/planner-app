import React from 'react'
import Calendar from 'react-calendar';
import '../Styles/styles.css'
 
export default function CalendarWidget() {
  return (
    <div style={{ minWidth: 300 }}>
      <Calendar
        style={{ width: 300, color:"black" }}
      />
    </div>
  )
}