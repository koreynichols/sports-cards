import { Component, OnInit } from '@angular/core';

import { CardService } from '../services/card.service';
import { CardInterface } from '../interfaces/card-interface';

import { SPORTS } from './../mocks/mock-sports';
import { TEAMS } from './../mocks/mock-teams';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: CardInterface[];
  sports = SPORTS;
  teams = TEAMS;

  constructor(private cardService: CardService) { }

  getCards() {
    this.cards = this.cardService.getCards();
  }

  ngOnInit() {
    this.getCards();
  }
}
