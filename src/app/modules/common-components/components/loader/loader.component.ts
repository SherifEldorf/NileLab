import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { SharedValueService } from 'src/app/shared/service/shared-value-service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  load: boolean;
  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
