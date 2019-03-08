import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'amar',
  templateUrl: './amar.component.html',
  styleUrls: ['./amar.component.css']
})
export class AmarComponent implements OnInit {

  msgs = [];

  constructor(private cs : ChatService) { }

  ngOnInit() {
  }

  send(msg)
  {
    msg = "Amar : " + msg;
    this.msgs = this.cs.chat(msg);
  }

}
