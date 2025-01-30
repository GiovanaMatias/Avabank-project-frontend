import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necessário para trabalhar com formulários no Angular
import { AuthService } from '../../services/auth.service'; // Serviço de autenticação
import { Router, RouterLink, RouterModule } from '@angular/router'; // RouterModule é importado para trabalhar com navegação
import { CommonModule } from '@angular/common'; // Fornece diretivas e pipes comuns do Angular, como ngIf, ngFor
import { User } from '../../models/user'; // Modelo de usuário
// Nota: Não deve importar 'response' de 'express' no front-end.



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // 0 passo: DEFINIR O TITULO DO COMPONENTE
  tituloComp: string = 'Login de usuário'
  
  //1° passo: definir uma prop/objeto literal para receber como valor credenciais de acesso para o login do usuario
  credentials: any = {
    email: '',
    passwor: ''
  }

  //2° passo: definir o construtor
  constructor(private authService: AuthService, private router: Router){}

  // 3° passo: definir o método onSubmit(); para o seguinte propósito: este método será chamado quando usuario, ao final do formularios de login, clicar no botão para enviar os dados para o service que, por sua vez, vai enviar os dados para o endpoint no backend, os dados autenticados.
  onSubmit(): void{
    //fazer o acesso DI do service
    this.authService.login(this.credentials).subscribe({
      next: (response) =>{
        console.log('Login bem sucedido!', response.message)
        this.router.navigate(['/notes']) // se tudo correr bem, seremos depois da autenticação redirecionados para a tela de anotações onde todas as anotações serão exibidas
      },
      error:(error) =>
        console.error('Erro ao fazer lodin!',error.error.error)
    })
  }

}

