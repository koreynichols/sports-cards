import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CardInterface } from '../interfaces/card-interface';
import { CardService } from '../services/card.service';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card;
  id: String;
  result: CardInterface[];
  ref: AngularFireStorageReference;
  downloadURL: Observable<string>;


  constructor(private cardService: CardService,
              private route: ActivatedRoute,
              private afStorage: AngularFireStorage) { }

  getCard() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.cardService.getIndividualCardFirestore(this.id).subscribe( (card) => {
      if (card) {
        this.card = card.data();
        this.ref = this.afStorage.ref(this.card.imageLink);
        this.downloadURL = this.ref.getDownloadURL();
      }
    });
  }

  getEbayListings() {

  }

  ngOnInit() {
    this.getCard();
  }

}
