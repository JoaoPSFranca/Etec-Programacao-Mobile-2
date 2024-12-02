import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receba',
  templateUrl: './receba.page.html',
  styleUrls: ['./receba.page.scss'],
})
export class RecebaPage implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  url = 'http://localhost/aplicativo/';
  par:any;
  lista:any;

  ngOnInit() {
    this.listar();
  }

  //Carrega a lista inicialmente
  listar(){
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.par = params.id
    });

    return this.http.get<any>(`${this.url}`+`selectUnico.php?id=${this.par}`).subscribe((resp) => {
      this.lista = resp;
      console.log(this.lista);
    })
  }

}
