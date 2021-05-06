import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdCardComponent } from './id-card/id-card.component';

const routes: Routes = [
  {path: "idcard", component: IdCardComponent},
  {path: "**", redirectTo: "/idcard", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
