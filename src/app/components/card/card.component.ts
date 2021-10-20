import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { GlobalConfig } from '../../common/global-config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  {
  constructor(private router: Router,private commonServices: CommonService) {}

  @Input() data = {
    score:0,
    show: {
      id:'',
      name:'',
      type:'',
      genres:[],
      runtime:0,
      language:'',
      image: { original: '' },
      network:{
        country:{name:''},
      },
      premiered:'',
      summary:'',
      rating:{
        average:'',
      },
    },
  };

  backgroundImage() {
    return `background-image: url(${
      this.data.show.image
        ? this.data.show.image.original
        : GlobalConfig.placeholderImage
    });`;
  }
  getDetails(){
    this.router.navigate(['tv-shows/details',this.data.show.id]);
  }
}
