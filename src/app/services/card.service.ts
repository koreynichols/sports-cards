import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

import { CARDS } from '../mocks/mock-cards';
import { CardInterface } from '../interfaces/card-interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private api: ApiService) { }

  getCards(): CardInterface[] {
    return CARDS;
  }

  getIndividualCard(params: object): CardInterface {
    const id: number = +params['id'];
    const selectedCard: CardInterface = CARDS.find( card => card.id === id);
    return selectedCard;
  }

  filterCards(searchFields) {
    if (searchFields !== '') {
      console.log("hello");
    }
    console.log(CARDS.filter(card => {
      if (searchFields.searchName !== '') { return card.firstName.toLowerCase().includes(searchFields.searchName.toLowerCase()); }
     }));
    console.log(searchFields);
  }

/*  getEbayListing() {
    return this.api.get('');
  }
  */
}
