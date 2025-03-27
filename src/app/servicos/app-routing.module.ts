import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPrincipalComponent } from '../componentes/painel-principal/painel-principal.component';
import { CadastroProdutoComponent } from '../componentes/cadastro-produto/cadastro-produto.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from '../app.component';

const routes: Routes = [
    { path: 'painel-principal', component: PainelPrincipalComponent },
    { path: 'cadastro-produto', component:CadastroProdutoComponent }, // Cadastro de novo produto
    { path: 'cadastro-produto/:id', component:CadastroProdutoComponent }, // Edição de produto
    { path: '', redirectTo: '/painel-principal', pathMatch: 'full' } //Redirecionamento padrão
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule, // Add FormsModule to imports
        AppComponent
    ],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule { }