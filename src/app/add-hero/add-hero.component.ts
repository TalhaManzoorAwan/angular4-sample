import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

 powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
 
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
 
  submitted = false;
 
  onSubmit() { this.submitted = true; }
 
  newHero() {
    this.model = new Hero(42, '', '');
  }
}
