import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { DateClickArg } from '@fullcalendar/interaction';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg: any) {
    // Access the dateStr property
    const dateStr = arg.dateStr;
  
    if (dateStr) {
      alert('date click! ' + dateStr);
    }
  }

}
