import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExcelParsingComponent } from './excel-parsing/excel-parsing.component';
import { MakingZipComponent } from './making-zip/making-zip.component';
import { LinksComponent } from './links/links.component';


const routes: Routes = [
  { path: '', component: LinksComponent },
  { path: 'app', component: AppComponent },
  { path: 'excel', component: ExcelParsingComponent },
  { path: 'zip', component: MakingZipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
