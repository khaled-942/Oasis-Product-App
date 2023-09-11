import { Component, OnInit } from '@angular/core';
import { LoaderstatusService } from 'src/app/shared/services/loaderstatus.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoaded!: boolean
  constructor(private LoaderstatusServices: LoaderstatusService) { }

  ngOnInit(): void {
    this.LoaderstatusServices.pageLoadedObserv.subscribe((data) => {console.log(data) 
      this.isLoaded = data })
  }

}
