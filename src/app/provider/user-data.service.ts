import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Http ,HttpModule} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  email : string;
  batch_size : number;
  complete_question_id : number;

  constructor(
    public http: Http,
    public events: Events,
    public storage: Storage
  ) { }

  setUsername(username: string): Promise<any> {
    return this.storage.set('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  setbatch_size(batch_size: number): Promise<any> {
    return this.storage.set('batch_size', batch_size);
  }

  getbatch_size(): Promise<number> {
    return this.storage.get('batch_size').then((value) => {
      return value;
    });
  }

  set_complete_question_id(complete_question_id: number): Promise<any> {
    return this.storage.set('complete_question_id', complete_question_id);
  }

  get_complete_question_id(): Promise<number> {
    return this.storage.get('complete_question_id').then((value) => {
      return value;
    });
  }

  set_flag(flag: boolean): Promise<any> {
    return this.storage.set('flag', flag);
  }

  get_flag(): Promise<boolean> {
    return this.storage.get('flag').then((value) => {
      return value;
    });
  }
}
