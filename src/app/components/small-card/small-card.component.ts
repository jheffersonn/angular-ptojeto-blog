import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photocover:string ="" //"https://archive.org/download/placeholder-image/placeholder-image.jpg"
  @Input()
  cardTitle:string = "" //"Nova versão do Angular"


  constructor() { }

  ngOnInit(): void {
  }

}
