import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string){
    this.messageService.add('(HeroService)' + message);
  }

  private heroesUrl = 'api/heroes';
  private heroUrl = 'api/detail/:id';

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("(HeroService): Heroes are flyin at ya!")
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`(HeroService): Got your signal, hero no. ${id} to the rescue!`)
    return this.http.get<Hero>(this.heroUrl);
  }
}
