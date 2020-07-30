import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelParsingComponent } from './excel-parsing/excel-parsing.component';
import { MakingZipComponent } from './making-zip/making-zip.component';
import { LinksComponent } from './links/links.component';

import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelParsingComponent,
    MakingZipComponent,
    LinksComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExcelExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
