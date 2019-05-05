import { Component } from '@angular/core';
import { getNgModuleDef } from '@angular/core/src/render3/definition';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Teste } from '../services/teste';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome = "Jefferson"

  constructor(private alert: AlertController, private router: Router) {
  
  }

  public getNome() {
    return this.nome
  }

  async abrirAlerta() {
    const alert = await this.alert.create({
      message: 'Bem vindo ' + this.nome,
      buttons: ['OK']
    })
    
    alert.present()
  }

  public irParaOutraPagina() {
    this.router.navigateByUrl("/hello")
  }
}
