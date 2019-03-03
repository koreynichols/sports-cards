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
  isDisabled: Boolean = true;
  selectedSport: String = 'All';
  selectedTeam: String = 'All';
  searchName: String = '';
  isAuto: Boolean = false;
  isRelic: Boolean = false;
  isRookie: Boolean = false;

  constructor(private cardService: CardService) { }

  getCards() {
    this.cards = this.cardService.getCards();
  }

  getTeamNames() {
    if (this.selectedSport === 'All') {
      this.selectedTeam = 'All';
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
      this.teams = TEAMS.filter(team => team.sport === this.selectedSport);
    }
  }

  filterCards() {
    const searchFields = {
      searchName: this.searchName,
      selectedSport: this.selectedSport,
      selectedTeam: this.selectedTeam,
      isAuto: this.isAuto,
      isRelic: this.isRelic,
      isRookie: this.isRookie
    };

    this.cards = this.cardService.filterCards(searchFields);
  }

  ngOnInit() {
    this.getCards();
  }
}
