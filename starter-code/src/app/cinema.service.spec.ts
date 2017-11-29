import { TestBed, inject } from '@angular/core/testing';
import { movieService } from './cinema.service';

describe('CinemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [movieService]
    });
  });

  it('should be created', inject([movieService], (service: movieService) => {
    expect(service).toBeTruthy();
  }));
});
