import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LogoinandsighupComponent } from './pages/logoinandsighup/logoinandsighup.component';
import { SubnavbarComponent } from './layout/subnavbar/subnavbar.component';
import { SwiperModule } from 'swiper/angular';
import { FilterpopComponent } from './pages/filterpop/filterpop.component';
import { PhnavbarpopupComponent } from './layout/phnavbarpopup/phnavbarpopup.component';
import { HotalcardComponent } from './layout/hotalcard/hotalcard.component';
import { HotalcardlistComponent } from './pages/hotalcardlist/hotalcardlist.component';
import { HomefooterComponent } from './layout/homefooter/homefooter.component';
import { PhhomefooterComponent } from './layout/phhomefooter/phhomefooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LogoinandsighupComponent,
    SubnavbarComponent,
    FilterpopComponent,
    PhnavbarpopupComponent,
    HotalcardComponent,
    HotalcardlistComponent,
    HomefooterComponent,
    PhhomefooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
