import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  text: String;

  constructor() { }

  ngOnInit() {
    this.text = 'This should be displayed as initial text in the Text Editor';
  }

}
