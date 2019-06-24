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
  originalCards: CardInterface[];
  sports = SPORTS;
  teams = TEAMS;
  isDisabled: Boolean = true;
  selectedSport: String = 'All';
  selectedTeam: String = 'All';
  searchName: String = '';
  isAuto: Boolean = false;
  isRelic: Boolean = false;
  isRookie: Boolean = false;

  result: CardInterface[];


  constructor(private cardService: CardService) { }

  getCards() {
    this.cardService.getCardsFirestore().subscribe(card => {
        if (card) {
          this.cards = card.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data()
            } as CardInterface;
          });
          this.originalCards = this.cards;
        }
      });
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

    this.cards = this.originalCards;
    this.cards = this.filterByName(searchFields);
    this.cards = this.filterBySport(searchFields);
    this.cards = this.filterByTeam(searchFields);
    this.cards = this.filterByAuto(searchFields);
    this.cards = this.filterByRelic(searchFields);
    this.cards = this.filterByRookie(searchFields);
    return this.cards;
  }

  filterByName(searchFields) {
    if (searchFields.searchName === '') {
      return this.cards;
    } else {
      return this.cards.filter(card => {
        return card.playerName.toLowerCase().includes( searchFields.searchName.trim().toLowerCase());
      });
    }
  }

  filterBySport(searchFields) {
    if (searchFields.selectedSport === 'All') {
      return this.cards;
    } else {
      return this.cards.filter(card => {
        return card.sport.toLowerCase().includes( searchFields.selectedSport.toLowerCase());
      });
    }
  }

  filterByTeam(searchFields) {
    if (searchFields.selectedTeam === 'All') {
      return this.cards;
    } else {
      return this.cards.filter(card => {
        return card.team.toLowerCase().includes( searchFields.selectedTeam.toLowerCase());
      });
    }
  }

  filterByAuto(searchFields) {
    if (searchFields.isAuto) {
      return this.cards.filter(card => {
        if (card.auto) {
          return card;
        }
      });
    } else {
      return this.cards;
    }
  }

  filterByRelic(searchFields) {
    if (searchFields.isRelic) {
      return this.cards.filter(card => {
        if (card.relic) {
          return card;
        }
      });
    } else {
      return this.cards;
    }
  }

  filterByRookie(searchFields) {
    if (searchFields.isRookie) {
      return this.cards.filter(card => {
        if (card.rookieCard) {
          return card;
        }
      });
    } else {
      return this.cards;
    }
  }

  ngOnInit() {
    this.getCards();
  }
}
