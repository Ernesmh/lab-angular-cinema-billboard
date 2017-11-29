import { Component, OnInit } from '@angular/core';
import { movieService } from '../cinema.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movies:Array<object> = this.service.movies
  constructor(public service: movieService) { }

  ngOnInit() {
  }

  getMovies() {
    this.service.getMovie(this.service.movies);
    console.log(this.service.movies)
  };

}
