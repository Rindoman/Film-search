import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService, Film } from '../film.service';

@Component({
  selector: '.films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {

  films: Film[];
  description: string = 'Middle card description';  
  
  constructor(public filmsService: FilmService) { }
  
  ngOnInit() {
    this.getFilms()
  }
  
  getFilms() {
    this.films = this.filmsService.getFilms();
  }
}
