import { Injectable } from '@angular/core';

@Injectable()
export class FileSharingService {
  private _bpmn: string;
  private _xes: string;
  private _json: string;

  set(fileFormat: string, fileSrc: string) {
    this['_' + fileFormat] = fileSrc;
  }

  get(fileFormat: string) {
    return this['_' + fileFormat];
  }

}
