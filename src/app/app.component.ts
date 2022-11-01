import { Component } from '@angular/core';
const pi: number = 3.14159265359;    
@Component({
    selector: 'my-app',
    template: `<label>Введіть і’мя:</label>
                 <input [(ngModel)]="name" placeholder="R">
                 <h1>Довжина кола  {{2}*{pi}*{R}}</h1>
                 <h1>площа :  {{pi}*{Math.pow(R)}}</h1>`
})
export class AppComponent {
    name= '';
}




