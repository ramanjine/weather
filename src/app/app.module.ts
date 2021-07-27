import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherServiceService } from './shared/weather-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConstants } from './app.constant';
import { WeatherdetailsComponent } from './details/weatherdetails/weatherdetails.component';
import { CitylistComponent } from './details/citylist/citylist.component';
import {SharedService} from './shared/shared-service';
import { LuxonFormatPipe } from '../app/shared/luxon-format.pipe';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WeatherdetailsComponent,
    CitylistComponent,LuxonFormatPipe ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[LuxonFormatPipe],
  providers: [WeatherServiceService,AppConstants,{ provide: SharedService, useClass: SharedService }, { provide: APP_BASE_HREF, useValue: '/' },
  { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
