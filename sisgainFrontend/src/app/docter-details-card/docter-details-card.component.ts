import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docter-details-card',
  templateUrl: './docter-details-card.component.html',
  styleUrls: ['./docter-details-card.component.scss']
})
export class DocterDetailsCardComponent implements OnInit {

  @Input("userData") userData:any;
  @Input("currentCard") currentCard:number;
  @Input("cardIndex") cardIndex:number;
  constructor() { }

  ngOnInit(): void {
  }

}
