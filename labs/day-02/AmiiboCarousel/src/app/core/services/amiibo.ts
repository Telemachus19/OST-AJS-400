// core/services/amiibo.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Character, ApiResponse } from '../models/carousel.model';

@Injectable({
  providedIn: 'root',
})
export class AmiiboService {
  private http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  getCarouselData(): Observable<Character[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map((response) => {
        // The API returns 20 characters by default.
        // We will just grab the first 3 for our carousel.
        return response.results.slice(0, 3);
      }),
    );
  }
}
