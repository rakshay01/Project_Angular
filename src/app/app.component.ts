import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

import dayGridPlugin from '@fullcalendar/daygrid'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
x:string="";
arr=['Lyricist.','Recording Artist.','Beat Producer'];
y:string="Hellow";
inde:number=0;
i:number=0;
  constructor()
  {

    const typeW = ()=>
    {
      if(this.i==3)
      {
        this.i=0;
      }
      this.y=this.arr[this.i];
    
      if(this.inde<=this.y.length)
      {
this.x=this.y.slice(0,this.inde);
this.inde=this.inde+1;
      }
      else{
       
        this.inde=0;
        this.i=this.i+1;
      }
    }
setInterval(()=>typeW(),200);
  }
}

