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

  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  getCard() {
    return this.route.params.subscribe( params => {
      this.card = this.cardService.getIndividualCard(params);
    });
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
