import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkDTO } from '../model/link-dto';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private readonly service : MainService) { }

  ngOnInit(): void {
  }

  check(url : string){
    this.service.check(url)
  }

  list(){
    this.service.listLinks()
  }

  postNewLink(url : string){
    let dto = new LinkDTO()
    dto.url = url
    this.service.postNewLink(dto)
  }

  removeLinks(){
    this.service.removeLinks()
  }

}
