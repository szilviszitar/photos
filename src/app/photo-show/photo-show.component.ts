import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent {
  imageUrl = '';

  onClick() {
    this.fetchPhoto();

  }

  constructor(private PhotoService: PhotosService) {
    this.fetchPhoto();


  };

  fetchPhoto() {
    this.PhotoService.getPhoto().subscribe((response) => {
      this.imageUrl = response.urls.regular;

    })
  };


}
