/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { PhotoService } from "../photo.service"

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [PhotoService]
})
export class HomeComponent {
    photos: string[] = [];
    errMsg: string;
    loading: boolean;

    constructor(private photoService: PhotoService) {
        
    }

    fetchPhotos(value: string) {
        this.loading = true;
        this.photoService.getPhotos(value).subscribe(results => {
            console.log(results);
            if (results.stat === 'ok') {
                this.photos = 
                results.photos.photo.map(photo => {
                    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                });
            } else {
                this.errMsg = results.message;
            }
            this.loading = false;
        });
    }
}
