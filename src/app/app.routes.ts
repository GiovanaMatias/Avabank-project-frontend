import { Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { Component } from '@angular/core';
/*import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { NotesListComponent } from './componentes/notes-list/notes-list.component';
import { NotesFormComponent } from './componentes/notes-form/notes-form.component';*/

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
   // {path: 'cadastro', component: CadastroComponent},
    //{path: 'listar_anotacoes', component: NotesListComponent},
   // {path: 'anotacoes/criar', component: NotesFormComponent},
    // http://localhost:4200/anotacoes/editar/2
    //{path: 'anotacoes/editar/:id', component: NotesFormComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];
   




