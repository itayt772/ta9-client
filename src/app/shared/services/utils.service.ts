import { Injectable } from "@angular/core";

@Injectable()
export class UtilsService {
  constructor() {}

  generateIp() {
    let arr = [];
    for (let i = 0; i < 4; i++) arr.push(this.getRandomInt(0, 256));
    return arr.join(".");
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
