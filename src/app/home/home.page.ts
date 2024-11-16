import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 s="12"
 b="13"
 letter = ["s","b"]

 books=[
  {a:"Пушка",n:"Гец"},
  {a:"Камень",n:"Лужа"}]

  constructor() {}

}
