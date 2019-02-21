import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

import { CARDS } from '../mocks/mock-cards';
import { CardInterface } from '../interfaces/card-interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private api: ApiService) { }

  cards: CardInterface[] = CARDS;

  getCards(): CardInterface[] {
    return CARDS;
  }

  getIndividualCard(params: object): CardInterface {
    const id: number = +params['id'];
    const selectedCard: CardInterface = CARDS.find( card => card.id === id);
    return selectedCard;
  }

  filterCards(searchFields) {
    this.cards = CARDS;
    this.cards = this.filterByName(searchFields);
    this.cards = this.filterBySport(searchFields);
    this.cards = this.filterByTeam(searchFields);
    return this.cards;
  }

  filterByName(searchFields) {
    if (searchFields.searchName === '') {
      return this.cards;
    } else {
      return this.cards.filter(card => {
        return card.firstName.toLowerCase().includes( searchFields.searchName.toLowerCase());
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

/*  getEbayListing() {
    return this.api.get('');
  }
  */
}
