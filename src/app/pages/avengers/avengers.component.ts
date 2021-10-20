import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../services/api-services.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.scss']
})
export class AvengersComponent implements OnInit {

  constructor(private apiServices: ApiServicesService,private commonServices: CommonService) { }

  listOfCards:any = [];

  async ngOnInit() {
    const dataSet:any = await this.apiServices.getList();
    this.listOfCards = dataSet.map((item: any)=>{
      return{
        score: (item.score*100).toFixed(1),
        show:{
          ...item.show,
          genres: item.show.genres.splice(0,3),
          premiered: this.commonServices.getDateFormat(item.show.premiered),
          runtime: this.commonServices.timeConvert(item.show.runtime),
        }
      }
    })
  }

}
