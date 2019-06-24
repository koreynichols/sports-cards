import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

import { CARDS } from '../mocks/mock-cards';
import { CardInterface } from '../interfaces/card-interface';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  formData: Card;

  constructor(private api: ApiService,
    private firestore: AngularFirestore,
    private afStorage: AngularFireStorage) { }

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  cards: CardInterface[] = CARDS;

  getCards(): CardInterface[] {
    return CARDS;
  }

  getCardsFirestore() {
    return this.firestore.collection('cards').snapshotChanges();
  }

  getIndividualCardFirestore(id: String) {
    return this.firestore.doc('cards/' + id).get();
  }

  createCardFirestore(cardData) {
    this.firestore.collection('cards').add(cardData);
  }

  addImageToFireStorage(imageData, id) {
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(imageData[0]);
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
}
