import { Component, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/services/space.service';
import { tube } from 'src/app/tube';


@Component({
  selector: 'app-space-tube',
  templateUrl: './space-tube.component.html',
  styleUrls: ['./space-tube.component.scss']
})
export class SpaceTubeComponent implements OnInit {

  constructor(private spaceService:SpaceService) { }

  ngOnInit(): void {
    this.retrieveGeoStatusInformation();
  }
  copyright?: string
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  titleRes?: string;
  url?: string

    /**
   *Retrieve data from backend
   */
   public retrieveGeoStatusInformation(): void {
    this.spaceService.retrieveNasaInfo().subscribe((response: tube) => {
      this.setAllStatusValues(response);
    });
  }
  /**
   * Sets all values matching api response
   * @param response
   */
  private setAllStatusValues(response: tube) {
    this.copyright=response.copyright;
    this.date=response.date;
    this.explanation=response.explanation;
    this.hdurl=response.hdurl;
    this.media_type=response.media_type;
    this.service_version=response.service_version;
    this.titleRes=response.title;
    this.url=response.url;
  }

}
