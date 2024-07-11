import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string ="" // "https://archive.org/download/placeholder-image/placeholder-image.jpg";
  @Input()
  cardTitle:string ="" // "Nova versão do Angular"
  @Input()
  cardDescription:string = "" // "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
