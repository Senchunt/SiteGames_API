import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja-jogos';
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppComponent
  ]
})
export class AppModule { }

bootstrapApplication(AppComponent, {
  providers: [RouterModule]
}).catch(err => console.error(err));