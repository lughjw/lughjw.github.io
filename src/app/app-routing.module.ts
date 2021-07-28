import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { GraphDemoComponent } from './graph-demo/graph-demo.component';
import { IdCardComponent } from './id-card/id-card.component';

const routes: Routes = [
  {path: "idcard", component: IdCardComponent},
  {path: "graphs", component: GraphDemoComponent},
  {path: "finance", component: FinanceComponent},
  {path: "**", redirectTo: "finance", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
