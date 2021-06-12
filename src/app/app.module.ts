import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdCardComponent } from './id-card/id-card.component';
import { GraphDemoComponent } from './graph-demo/graph-demo.component';
import { RouterModule } from '@angular/router';
import { GraphNodeComponent } from './graph-node/graph-node.component';


@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    GraphDemoComponent,
    GraphNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
