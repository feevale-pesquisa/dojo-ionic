import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {

  public funcionarios: any = [];

  constructor(private http: HttpClient, private storage: Storage) { 


  }

  ngOnInit() {
    this.buscarFuncionariosDB();
  }

  async buscarFuncionariosDB() {
    this.funcionarios = await this.storage.get("funcionarios")
  }

  async chamarApi() {
    
    this.funcionarios = await this.http.get("http://dummy.restapiexample.com/api/v1/employees").toPromise();
    
    this.storage.set("funcionarios", this.funcionarios)

  }

}
