import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

  getPhotos(val = "flower") {
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=520141d0852abaa0cb9d5ff091359d02&tags=${val}&per_page=10&format=json&nojsoncallback=1`;
    return this.http.get(url).map(data => data.json());
  }

}
