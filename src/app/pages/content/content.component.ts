import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover?:string ="0" //="https://archive.org/download/placeholder-image/placeholder-image.jpg";
  contentTitle?:string = "0" //="Minha notícia";
  contentDescription?:string = "0" //="Ola mudo";

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponents(this.id)
  }

   setValuesToComponents(id:string | null){

    const result = dataFake.filter(article => article?.id == id)[0]

    this.contentDescription = result?.description
    this.contentTitle = result?.title
    this.photoCover = result?.photCover



  }

}
