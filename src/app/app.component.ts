import { Pipe, PipeTransform } from '@angular/core';
import { Component } from '@angular/core';
import { FilterArrayPipe } from './filter.pipe';


@Component({
  selector: 'app-root',
 template: `
  

  <br><br><br>
<h1> Angular Pipes</h1>
<h2> {{ name | uppercase }}</h2>
<h2> {{ name | lowercase }}</h2>
<h2> {{ birthday | date:'shortDate' }}</h2>
<h2> {{ birthday | date:'longDate' }}</h2>
<h2> {{ birthday | date:'shortTime' }}</h2>
<h2> {{ price | currency:'USD' }}</h2>
<h2> {{ price | currency:'GBP':'true' }}</h2>
<hr>
<input type="text" [(ngModel)]="filterText">
<ul>
  <li *ngFor="#todo of todos | filter: filterText">
  {{todo.text}}
  </li>
</ul>




  `,
 
  
})
export class AppComponent {
  private name;
  private birthday;
  private price;
  private todos = [{
    text:'Angular',
  },{
  text:'React',
},{
text:'Node'}];


  constructor() {  
    this.name = 'Afroz Mohd';
    this.birthday = new Date(1947, 8, 15);
    this.price = 200;
    this.todos
  
  }
}
