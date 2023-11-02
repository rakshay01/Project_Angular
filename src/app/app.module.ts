import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'
import daygridPlugin from '@fullcalendar/daygrid';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DynamicCarouselGalleryComponent } from './dynamic-carousel-gallery/dynamic-carousel-gallery.component';
import { BioComponent } from './bio/bio.component';
import { MycreationComponent } from './mycreation/mycreation.component'



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    EventsComponent,
    HomeComponent,
    ContactComponent,
    DynamicCarouselGalleryComponent,
    BioComponent,
    MycreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
