import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DynamicCarouselGalleryComponent } from './dynamic-carousel-gallery/dynamic-carousel-gallery.component';
import { MycreationComponent } from './mycreation/mycreation.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"events", component:EventsComponent},
  {path:"bio", component:DynamicCarouselGalleryComponent},
  {path:"contact", component:ContactComponent},
  {path:"mycreation", component:MycreationComponent},
  {path:"footer",component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
