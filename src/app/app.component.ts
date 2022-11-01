import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введіть радіус:</label>
                <input type = "number" [(ngModel)]="R"> 
                 <h1>Довжина кола  {{2 * pi * R }}</h1>
                 <h1>Площа кола  {{pi * R * R }}</h1>
                 <h1>Об'єм шара  {{(4/3) * pi * R * R * R }}</h1>`
})
export class AppComponent {
    R:number = 0;
    pi:number = 3.14159265359;
}




