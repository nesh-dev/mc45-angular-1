import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifyServiceService {
  data:any
  constructor(private http: HttpClient) { }
 

  getTrendingGif(){ 
    const { baseUrl, apiKey } =  environment;
    const trendingGifUrl = `${baseUrl}trending?api_key=${apiKey}&limit=5&rating=g`
    return this.http.get<any>(trendingGifUrl)
  }


}
