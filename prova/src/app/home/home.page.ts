import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor( private http: HttpClient, public navCtrl: NavController, public toastController: ToastController) {}

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

  async ErrorLogar() {
    const toast = await this.toastController.create({
      message: '[Erro] Email e/ou Senha Incorretos',
      duration: 3000
    });
    toast.present();
  }

  async Logado() {
    const toast = await this.toastController.create({
      message: 'Loguin efetuado com sucesso',
      duration: 3000
    });
    toast.present();
  }

  email: any;
  senha: any;
  teste: any;

  ngOnInit() {
  }

  Logar(){

    if(this.email == null || this.email == "")
    { 
      this.ErrorEmail();
      return;
    }

    if(this.senha == null || this.senha == "")
    {
      this.ErrorSenha();
      return;
    }

    this.http.get(`http://localhost/aplicativo/select.php?senha=${this.senha}&email=${this.email}`)
      .subscribe(data =>{
        this.teste = data;
        console.log(this.teste);

        if(this.teste != undefined){
          this.Logado();
        }
      }, 
        (error) =>{
        this.ErrorLogar();
        return;
      }); 

  }

  metodo(){
    this.navCtrl.navigateForward('paginadenavegacao');
  }


}
