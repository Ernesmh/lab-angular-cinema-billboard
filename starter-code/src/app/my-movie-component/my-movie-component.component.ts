import { Component, OnInit } from '@angular/core';
import { movieService } from '../cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movie;
  constructor(private route: ActivatedRoute, public service: movieService) { }

  ngOnInit() {
    this.route.params
     .subscribe((params) => this.movie = this.service.getMovie(params['id']));
  }

}
