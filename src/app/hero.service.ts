import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/Heros';

  constructor(
    private msgService: MessageService,
    private http: HttpClient,
  ) { }

  private log(msg: string) {
    this.msgService.add(`HeroService: ${msg}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(() => this.log('fethced Heros')),
      catchError(this.handleError<Hero[]>('getHeros', []))
    );
  }

  /** get */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
    .pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>('getHero id=${id}'))
    );
  }

  /** update */
  updatehero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions)
    .pipe(
      tap(_ => this.log(`update Hero id=${hero.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  /** add Hero */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      tap((putHero: Hero) => this.log(`added hero id=${putHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** delete */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, httpOptions)
    .pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero')),
    );
  }
  /** search */
  searchHero(queryKey: string): Observable<Hero[]> {
    if (!queryKey.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${queryKey}` , httpOptions)
    .pipe(
      tap(_ => this.log(`fund hero matchs "${queryKey}"`)),
      catchError(this.handleError<Hero[]>('searchHero', []))
    );
  }
}
