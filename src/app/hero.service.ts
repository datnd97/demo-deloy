import { Injectable } from '@angular/core';
import {HEROES} from "./mock-up";
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():Observable<Hero[]> {
    this.messageService.add("HeroService: fetch the heroes");
    return of(HEROES);
  }
  constructor(private messageService:MessageService) { }
}
