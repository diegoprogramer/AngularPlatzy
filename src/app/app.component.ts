import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CursoAngular empezando el codigo';
  //constructor(public ageper:number,public lastName:string){}

  imag = "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg"
  imag2 = "/assets/img/bulma2.jpg"
  imag3 = "/assets/img/bulma3.jpg"
  imag4 = "/assets/img/bulma4.jpg"

  telefono = '312740 7896';

  //disabled button
  disabled = true;
  btnDisabled = false;

  person  ={
    name : 'Nicolas',
    age : 18
  }

  person2 = {
    name :'Diego',
    age:33

  }


}
