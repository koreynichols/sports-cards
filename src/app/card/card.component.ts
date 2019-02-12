import { TEAMS } from './../mocks/mock-teams';
import { Component, OnInit } from '@angular/core';

import { CardService } from '../services/card.service';
import { CardInterface } from '../interfaces/card-interface';

import { SPORTS } from './../mocks/mock-sports';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: CardInterface[];
  sports = SPORTS;
  teams = TEAMS;
  isDisabled: Boolean = true;
  selectedSport: String = 'All';
  selectedTeam: String = 'All';

  constructor(private cardService: CardService) { }

  getCards() {
    this.cards = this.cardService.getCards();
  }

  get selectedSportMod() {
    return this.selectedSport;
  }

  set selectedSportMod(value) {
    this.selectedSport = value;
    console.log(this.selectedSport);
    this.getTeamNames(this.selectedSport);
  }

  getTeamNames(sport) {
    if (sport === 'All') {
      this.selectedTeam = 'All';
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
      this.teams = TEAMS.filter(team => team.sport === this.selectedSport);
    }
  }

  ngOnInit() {
    this.getCards();
    console.log(this.teams);
  }
}
