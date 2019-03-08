import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'akbar',
  templateUrl: './akbar.component.html',
  styleUrls: ['./akbar.component.css']
})
export class AkbarComponent implements OnInit {

  msgs = [];

  constructor(private cs : ChatService) { }

  ngOnInit() {
  }

  send(msg)
  {
    msg = "Akbar : " + msg;
    this.msgs = this.cs.chat(msg);
  }

}
