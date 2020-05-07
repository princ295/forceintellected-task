import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './page/layout/layout.component';
import { SectionComponent } from './page/section/section.component';
import { TableComponent } from './page/table/table.component';
import { HistoryComponent } from './page/history/history.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SectionComponent,
    TableComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgSelectModule, FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
