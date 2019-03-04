import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

import { CARDS } from '../mocks/mock-cards';
import { CardInterface } from '../interfaces/card-interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private api: ApiService, private firestore: AngularFirestore) { }

  cards: CardInterface[] = CARDS;

  getCards(): CardInterface[] {
    return CARDS;
  }

  getCardsFirestore() {
    return this.firestore.collection('cards').snapshotChanges();
  }

  createCardFirestore(card: CardInterface) {
    return this.firestore.collection('cards').add(card);
  }

  updateCardFirestore(card: CardInterface) {
    delete card.id;
    this.firestore.doc('cards/' + card.id).update(card);
  }

  deleteCard(cardId: string) {
    this.firestore.doc('cards/' + cardId).delete();
  }

  getIndividualCard(params: object): CardInterface {
    const id: string = params['id'];
    const selectedCard: CardInterface = CARDS.find( card => card.id === id);
    return selectedCard;
  }

  filterCards(searchFields) {
    this.cards = CARDS;
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
        return card.name.toLowerCase().includes( searchFields.searchName.trim().toLowerCase());
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
        if (card.rookie) {
          return card;
        }
      });
    } else {
      return this.cards;
    }
  }

/*  getEbayListing() {
    return this.api.get('');
  }
  */
}
