import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})



export class HeroComponent {
  public name:string = 'Ironman';
  public age:number = 45;

  changeName():void{
    this.name = 'Spiderman';
  }
  changeAge():void{
    this.age = 25;
  }

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name} - ${ this.age}`;
  }

  resetForm():void {
    this.name = "iroman";
    this.age = 45;
  }

}
