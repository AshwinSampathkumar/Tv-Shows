import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';
import { CommonService } from '../../services/common.service';
import { GlobalConfig } from '../../common/global-config';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiServices: ApiServicesService,
    private commonServices: CommonService
  ) {}

  id: any = '';
  movieData: any = {};

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const dataSet:any = await this.apiServices.getMovieData(this.id);
    this.movieData = {
      ...dataSet,
      premiered: this.commonServices.getDateFormat(dataSet.premiered),
      runtime: this.commonServices.timeConvert(dataSet.runtime),
    }
  }
  backgroundImage() {
    const style = `background: linear-gradient(rgba(30, 27, 38, 0.95), rgba(30, 27, 38, 0.95)),
    url(${
      this.movieData.image
        ? this.movieData.image.original
        : GlobalConfig.placeholderImage
    })`;
    return style;
  }
  coverImage() {
    return `background: url(${this.movieData.image.original})`;
  }
}
