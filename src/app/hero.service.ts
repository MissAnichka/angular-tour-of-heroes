import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("(HeroService): Heroes are flyin at ya!")
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`(HeroService): Got your signal, hero no. ${id} to the rescue!`)
    return of(HEROES.find(hero => hero.id === id));
  }
}
