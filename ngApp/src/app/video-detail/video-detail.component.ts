import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  video: any;

  private editTitle:boolean = false;
  private updateVideoEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onTitleClick(){
	  this.editTitle=true;
  }

  ngOnChanges(){
    this.editTitle=false;
  }

  updateVideo(){        
        this.updateVideoEvent.emit(this.video);
    }

}
