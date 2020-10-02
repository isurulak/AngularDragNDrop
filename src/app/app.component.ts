import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragndrop';
  elementCount: number = 1;

  public elements = {
    0: {
      img_order: 0,
      description: "this is first description",
      img_url: "https://miro.medium.com/max/3492/1*P7x-_0XfQz6CVmMY_QAv0w.png",
      contentArr: ["img", "description"]
    },
    1: {
      img_order: 1,
      description: "this is second description",
      img_url: "https://volosoft.com/api/blogging/files/www/7c534470db65020c692139f5fde00ceb.png",
      contentArr: ["description", "img"]
    }
  }



  drop(event: CdkDragDrop<string[]>, key: number) {
    moveItemInArray(this.elements[key].contentArr, event.previousIndex, event.currentIndex);
    if (this.elements[key].contentArr[0] == "img") this.elements[key].img_order = 0;
    else this.elements[key].img_order = 1;
    console.log(this.elements);
  }

  addElement(): void {
    let elementObj = {
      img_order: 0,
      description: "",
      img_url: "",
      contentArr: ["img", "description"]
    }
    this.elements[this.elementCount + 1] = elementObj;
    this.elementCount++;
  }

}
