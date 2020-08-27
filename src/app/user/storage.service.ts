import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  set(key:string,data:any) : Promise<any> { }

  get(key:string) : Promise<any> { }

  delete(key:string) : Promise<any> { }

}
