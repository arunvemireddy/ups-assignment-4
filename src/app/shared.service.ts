import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  section1Score:number = 0;
  section2Score:number = 0;
  section3Score:number = 0;
  section4Score:number = 0;

  section1Guidelines:string[]=[];
  section2Guidelines:string[]=[];
  section3Guidelines:string[]=[];
  section4Guidelines:string[]=[];

  constructor() { }

}
