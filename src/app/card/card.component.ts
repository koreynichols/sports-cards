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
  get autoMod() {
    return this.isAuto;
  }

  set autoMod(value) {
    this.isAuto = value;
  }
  get relicMod() {
    return this.isRelic;
  }

  set relicMod(value) {
    this.isRelic = value;
  }
  get rookieMod() {
    return this.isRookie;
  }

  set rookieMod(value) {
    this.isRookie = value;
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
