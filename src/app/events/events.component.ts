import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
  
  eventClick(event:any){

   if(event.srcElement.innerText=='12'||event.srcElement.innerText=='1')
   {
    alert(" The event will take place at the Grand Theater  at 8:00 PM. ");
   }
   else if(event.srcElement.innerText=='5'||event.srcElement.innerText=='15')
   {
    alert(" The event will take place at the S.D.M.A  at 10:00 PM. ");

   }
else{
  alert("No Event Is Conducting On This Date")
}
  }
  
}
