import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkDTO } from '../model/link-dto';

const baseURL = "localhost:9091/url"

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private readonly http: HttpClient) { }

  check(url: string): Observable<any> {
    return this.http.post(`${baseURL}/check`, url)
  }

  listLinks(): Observable<any> {
    return this.http.get(baseURL)
  }

  postNewLink(dto: LinkDTO): Observable<any> {
    return this.http.post(`${baseURL}/new`, dto)
  }

  removeLinks(): Observable<any> {
    return this.http.delete(baseURL)
  }

}
