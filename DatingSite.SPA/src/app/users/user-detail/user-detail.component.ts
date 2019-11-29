import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryActionComponent, NgxGalleryImageComponent, NgxGalleryArrowsComponent, NgxGalleryOrderedImage } from 'ngx-gallery';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDatailComponent implements OnInit {

  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

              getImages() {
                const imagesUrls = [];

                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.user.photos.length; i++) {
                  imagesUrls.push({
                    small: this.user.photos[i].url,
                    medium: this.user.photos[i].url,
                    big: this.user.photos[i].url,
                    description: this.user.photos[i].description
                  });
                 }
                 // tslint:disable-next-line:align
                 return imagesUrls;
              }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
    this.galleryOptions = [
      {
          width: '500px',
          height: '500px',
          thumbnailsColumns: 4,
          imagePercent: 100,
          preview: false,
          imageAnimation: NgxGalleryAnimation.Slide
      }
  ];

    this.galleryImages = this.getImages();
  }


// tslint:disable-next-line:eofline
}
