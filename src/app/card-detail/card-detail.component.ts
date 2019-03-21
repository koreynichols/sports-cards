import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardInterface } from '../interfaces/card-interface';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: CardInterface;
  id: String;
  result: CardInterface[];

  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  getCard() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.cardService.getIndividualCardFirestore(this.id).subscribe(card => {
      if (card) {
        console.log(card);
        card.map( item => {
          console.log(item);
        });
      }
    });
    /*return this.route.params.subscribe( params => {
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
