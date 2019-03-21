import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
        this.ref.getDownloadURL().subscribe(image => {
          this.card.imageLink = image;
        });
      }
    });
   /* return this.route.params.subscribe( params => {
      this.card = this.cardService.getIndividualCard(params);
    });*/
  }

  getEbayListings() {
    /*this.cardService.getEbayListing().subscribe((cards) => {
      console.log(cards);
    });
    */
  }

  ngOnInit() {
    this.getCard();
  }

}
