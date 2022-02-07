import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService } from './../../services/backend.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  returnStr: number = 0;
  viewId: number = 0;
  param1: number = 0;
  param2: string = '';
  arrInfo: any[] = [];
  isMainAttkList: boolean = true;
  arrAirAttkSum: any[] = [];
  arrAirAttkGpbyDay: any[] = [];
  arrAttkListBydate: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public receivedString: any,
    private backendService: BackendService
  ) {}
  //

  //
  imgPath: string = '';
  get_data_for_modal_ready() {
    let str = this.receivedString.split('-');
    this.viewId = str[0];
    let docExt =
      str[4] == 1
        ? '.jpg'
        : str[4] == 2
        ? '.png'
        : str[4] == 3
        ? '.pdf'
        : '.docx';
    this.imgPath =
      this.backendService.imgPath +
      '/' +
      str[1] +
      '/' +
      str[2] +
      '/' +
      str[3] +
      docExt;
    console.log(this.imgPath);
  }
  //
  ngOnInit(): void {
    this.get_data_for_modal_ready();
  }
}
