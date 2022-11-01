import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<label>Введіть і’мя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Вітаємо вас  {{name}}!</h1>`
})
export class AppComponent {
    name= '';
}




