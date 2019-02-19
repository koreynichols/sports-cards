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

  constructor(private cardService: CardService) { }

  getCards() {
    this.cards = this.cardService.getCards();
  }

  get selectedSportMod() {
    return this.selectedSport;
  }

  set selectedSportMod(value) {
    this.selectedSport = value;
    this.getTeamNames();
  }

  get selectedTeamMod() {
    return this.selectedTeam;
  }

  set selectedTeamMod(value) {
    this.selectedTeam = value;
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
      selectedTeam: this.selectedTeam
    };

    this.cardService.filterCards(searchFields);
  }

  ngOnInit() {
    this.getCards();
  }
}
