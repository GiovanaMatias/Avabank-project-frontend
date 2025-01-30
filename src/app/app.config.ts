import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
/*
 *ApplicationConfig: é uma interface que define a configuração inicial da aplicação
 
 
 *  provideZoneChangeDetection: é uma função/ método que configura o Angular para detectar alterações           regionais, utilizando o recurso Zone.
 Zone - um mecanismo usado pelo Angular, para rastrear qualquer alteração que ocorra - com o projeto.
 */

import { provideRouter } from '@angular/router';

/*
    provideRouter: é uma função que proporciona a o Angular estabelecer a nevegação entre componentes, a partir do arquivo de rotas disponivel no projeto - e devidamente configurado
  
 */

import { routes } from './app.routes';
/*
  routes: é a constrantes de rotas que configuramos no arquivo app.
  rout
 */

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

/*
  provideClientHydratio: é uma função que habilita para o projeto Angular, o processo de "hidratação da aplicação". significa que: o angular "pega" o HTML renderizado no frontend, e no lado do servidor, converte este HTML do front - em uma aplicação dinamica para as funcionalidades descritas nos componentes "fazerem uso" dos elementos dinamicos, neles, implementados.
*/

// iserir um novo recurso
import { provideHttpClient } from '@angular/common/http';
//  provideHttpClient: é uma função que auxiliará na construção das requisições http que serão feitas para o backend

//appConfig: é um objeto literal

export const appConfig: ApplicationConfig = {
  // providers: []: é o array que registra provedores de conteudo e funcionalidade para os projetos angular e todos os seus componentes
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),

    // aqui estamos registrando a função provideHttpClien, como um recurso que será acessado de qualquer "pedaço" do projeto
    provideHttpClient()
  ]
};
