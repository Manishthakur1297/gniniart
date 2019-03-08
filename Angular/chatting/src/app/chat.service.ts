export class ChatService {

  chatMsgs = [];

  constructor() { }

  chat(msg)
  {
    this.chatMsgs.push(msg);
    return this.chatMsgs;
  }

}
