import React, { Component } from 'react';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import { events } from '../../mock/events';

class MyCalendar extends Component {

    constructor() {
        super();
        this.state = {
            events: events,
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridWeek',
                defaultDate: new Date(),
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            }
        }
    }

    dateClicked = (args) => {
        console.log(args)
    }

    render() {
        return (
            <div>
                <FullCalendar dateClick={this.dateClicked} events={this.state.events} options={this.state.options} />
            </div>
        )
    }
}

export default MyCalendar;