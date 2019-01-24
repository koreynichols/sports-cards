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

/*  getEbayListing() {
    return this.api.get('');
  }
  */
}
