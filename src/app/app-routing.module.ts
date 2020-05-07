import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './page/history/history.component';
import { SectionComponent } from './page/section/section.component';


const routes: Routes = [
  {
    path:'',component: SectionComponent
  },
  {
    path:'history',component: HistoryComponent
  },
  {
    path:':id', component: SectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
