import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      content: string;
      yesFunc?: (value?: any) => any;
      noFunc?: (value?: any) => any;
      okFunc?: (value?: any) => any;
    }
  ) { }

  ngOnInit(): void {
  }

  clkYes() {
    if(this.data.yesFunc){
      this.data.yesFunc();
    }
  }

  clkNo(){
    if(this.data.noFunc){
      this.data.noFunc();
    }
  }

  clkOk(){
    if(this.data.okFunc){
      this.data.okFunc();
    }
  }

}

