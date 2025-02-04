// recurso que da a possibilidade de usar o decorator @Injectable
import { booleanAttribute, Injectable } from '@angular/core';
 
//fazer os imports necessarios
import { HttpClient} from '@angular/common/http';//classe que vai auxiliar na construção das requisições http feitas para o backend
import{Observable, tap} from 'rxjs'; // bibliotecas usada para operar com a assincronicidade necessaria para o funcionamento das requisições e respostas http
//Observable: representa o fluxo de dados assincrono do projeto - na camada lógica
//tap: operador que permite executar ações secundárias sem modificar o fluxo principal
 
import { User } from '../models/user';//importação do model User
import { response } from 'express';
 
// o uso deste decorator permite que esta classe, se necessario for, possa ser "injetada" por outra classe
//ou seja, o uso do Injectable diz que esta classe é passivel de receber uma injeção de dependencia
// o @Component- decorator que define cada componente do projeto é "filho" do decorator @Injectable
@Injectable({
  providedIn: 'root' //esta expressão lógica indica o seguinte: que o service será disponibilizado no nível "raiz/root" da aplicação(singleton), ou seja, uma única instancia será compartilhada em toda a aplicação o sigleton: nada mais é do que uma instancia unica de uma classe qualquer
})
export class AuthService {

  // 1º passo: definir a url-base para a integração do front-end com o backend, aqui é importante indicar em qual "endereço" o backen está "rodando"

  // exemplo: queremos inserir um registro no banco de dados. Como pode ser feito?
  // no backend, o endpoint é o seguinte: '/users/register'
  // http:localhost:8080/api/users/register
  private apiUrl = 'http:localhost:8080/api'

  //2º passo: definir no construtor a injeção de dependencia da classe HttpClient. Por quê? R.: porque é a partir do uso desta injeção de dependencia é que serão realizadas a requisições http para as APIs do backend: 'http://localhost:8080:api'
  // o service depende deste recurso para fazer as requisições http 
  constructor(private http: HttpClient) { } // a var http é a injeção de dependencia gerada da classe HttpCleint; esta var será conhecida por nós como um objeto referencial

  /*
  ===========================================================================================================================
                      AQUI, VAMOS DEFINIR AS REQUISIÇÕES AIS ENDPOINTS DAS APIs
  ===========================================================================================================================
  */

  //3º passo: definir a requisição - e seus elementos logicos necessários - para o endpoint de cadastro
  // definir o método register (){}: porque é a partir dele que a requisição ao backend será feita ao usar esta expressão: register(): Observable<{message: string}>{} acabamos de definir que o metodo register (){} passa a ser uma tarefa assincrona
  register(user: User, roleName: string): Observable<{message: string}>{
    //agora, será preciso definir a expressão de retorno do método
    return this.http.post<{message: string}>(`${this.apiUrl}/users/register?roleName=${roleName}`, user)
  }

  /*
  user: parametro/objeto vai conter os dados que queremos enviar para a base roleName: nome do "papel" do usuario dentro do sistema ('admin' ou 'user')
  Requisição ao backend: estamos fazendo uma requisição POST - para enviar dados para o backend - através da "rota/endpoint"  ${apiUrl}/user/register; além disso, também estamos passando, por esta "rota" o "papel" do usuario como um parametro da consulta(roleName)
  retorno: um elemento Observable que emite um objeto com uma mensagem de sucesso ou erro.
  */

  //4º passo: definir o método de login
  // temos de transforma-lo numa requisição assincrona parametrizado o método para receber os dados com os quais ele vai lidar
  login(credentials: {email: string, password: string}): Observable<{message: string}>{
    // definir a espressão de retorno do método/ requisição ao backend
    //http://localhost:8080/api/users/login
    return this.http.post<{message: string}>(`${this.apiUrl}/users/login`, credentials, {withCredentials: true}).pipe(
      tap((response)=>{
        console.log('Login bem sucedido!', response.message)
        localStorage.setItem('isLoggedIn', 'true') //atualiza o state/estado da aplicação
      })
    )

  }

  /*
  withCredentials: true: esta é a instrução que permite o uso de Cookies - o uso dos cookies é importante, pois estamos lidando com a instauração de sessões - sessions - para o redirecionamento e navegação entre componentes do projeto; integrados, totalmente com o backend onde possuimos rotas protegidas por ROLES.

  tap: operador que permite executar ações secundárias sem modificar o flux principal; armazenando no localStorage  que o usuario está authenticado - ou seja, estamos mantendo a sessão do usuario, ativa!
  */

  //5º passo: definir um método para obter o usuário atual - que, no momento, está logado no sistema
  getCurrentUserEmail(): Observable<{email: string}>{
    //definir a expressão de retorno do método
    return this.http.get<{email: string}>(`${this.apiUrl}/users/current-user`,{withCredentials: true})

    // método/ tarefa assincrona que recupera o usuário logado no sistema // requisição: get para a rota `${this.apiUrl}/users/current-user`,habilitando o uso de cookies {withCredentials: true}
  }

  //6º passo: definir o método de logout
  // também tarefa assincrona
  logout(): Observable<void>{
    return this.http.post<void>(`${this.apiUrl}/users/logout`,{}, {withCredentials: true}).pipe(
      tap(() =>{
        localStorage.removeItem('isLoggedIn') // remove o state/estado da autenticação, ou seja, encerrando a sessão de usuário.
      })
    )

    // pipe(): este método é usado para auxiliar na execução de tarefas assincronas. O propoito do pipe é estabelecer um "canal" de comunicação direta entre recursos assincronos do componente.
  }
    //7º passo: definir um novo método. Este método possui um unico objetivo simples: verificar se o usuario esta logado no sistema
    isLoggedIn():boolean{
      return localStorage.getItem('isLoggedIn') ==='true' // verificando se ele, usuario, esta logado. Se não, não tem sessão para persistir
    }

  }

