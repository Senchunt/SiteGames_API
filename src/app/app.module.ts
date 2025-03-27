// Removed duplicate import of FormsModule
import { NgModule } from '@angular/core'; // <-- Importando o NgModule
import { BrowserModule } from '@angular/platform-browser'; // <-- Importando o BrowserModule
import { AppRoutingModule } from './app-routing.module'; // <-- Importando o AppRoutingModule
// Ensure the file 'app-routing.module.ts' exists in the 'src/app' directory.
import { HttpClientModule } from '@angular/common/http'; // <-- Importando o HttpClientModule

import { FormsModule } from '@angular/forms'; // Import FormsModule

import { RouterModule } from '@angular/router'; // <-- Importando o RouterModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // <-- Necessário para usar [(ngModel)]
    RouterModule, // <-- Importando o RouterModule
    AppComponent // <-- Importando o AppComponent standalone
  ]
})
export class AppModule { }