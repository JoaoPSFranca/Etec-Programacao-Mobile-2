import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private http: HttpClient, public navCtrl: NavController, public toastController: ToastController) { }

  email: any;
  senha: any;
  nome: any;

  ngOnInit() 
  {
    
  }

  async ErrorNome() {
    const toast = await this.toastController.create({
      message: '[Erro] Campo de Nome Vazio!',
      duration: 1000
    });
    toast.present();
  }

  async ErrorEmail() {
    const toast = await this.toastController.create({
      message: '[Erro] Campo de Email Vazio!',
      duration: 1000
    });
    toast.present();
  }

  async ErrorSenha() {
    const toast = await this.toastController.create({
      message: '[Erro] Campo de Senha Vazio!',
      duration: 1000
    });
    toast.present();
  }
  
  voltar(){
    this.navCtrl.navigateForward('/home');
  }

  Cadastrar(){
    //#region Validções
    if(this.nome == null)
    {
      this.ErrorNome();
      return;
    }
    if(this.email == null)
    { 
      this.ErrorEmail();
      return;
    }
    if(this.senha == null)
    {
      this.ErrorSenha();
      return;
    }
    //#endregion

    this.http.get("http://localhost/aplicativo/insert.php?nome=" + this.nome + "&email=" + this.email + "&senha=" + this.senha ).subscribe(data=>{
      console.log(data);
    });
    
    console.log(this.email);

    this.voltar();
  }


}
