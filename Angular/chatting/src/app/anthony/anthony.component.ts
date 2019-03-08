import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'anthony',
  templateUrl: './anthony.component.html',
  styleUrls: ['./anthony.component.css']
})
export class AnthonyComponent implements OnInit {

  msgs = [];

  constructor(private cs : ChatService) { }

  ngOnInit() {
  }

  send(msg)
  {
    msg = "Anthony : " + msg;
    this.msgs = this.cs.chat(msg);
  }

}

