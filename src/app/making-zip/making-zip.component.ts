import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
import { ExcelService } from './../excel.service';
import { ExcelParsingComponent } from './../excel-parsing/excel-parsing.component';

@Component({
  selector: 'app-making-zip',
  templateUrl: './making-zip.component.html',
  styleUrls: ['./making-zip.component.scss']
})
export class MakingZipComponent implements OnInit {
  @ViewChild(ExcelParsingComponent)excelCom: ExcelParsingComponent;

  public zip;
  constructor(
    private excelService: ExcelService
  ) { }

  ngOnInit(): void {
    this.zip = new JSZip();
  }


  getJsonFromExcelParsing(){
    //let blob = this.excelService.getBlobOfJson(json);
    let json = this.excelCom.getJsonData();
    if(!json){
      alert('json data nhi mila');
      return;
    }
    let blob = this.excelService.getBlobOfJson(json);
    this.zip.file('myexcel.xlsx', blob);
    this.generateZip();
  }

  generateZip(){
    this.zip.generateAsync({type:"blob"})
    .then(function (blob) { // 1) generate the zip file
      FileSaver.saveAs(blob, "hello.zip");  // 2) trigger the download
      alert('inside generate zip');
    }, function (err) {
      console.log(err);
    });
  }

  function123(){
    /*// create a file
    this.zip.file("hello.txt", "Hello World\n");

    // create a file and a folder
    zip.file("nested/hello.txt", "Hello World\n");
    // same as
    zip.folder("nested").file("hello.txt", "Hello World\n");

    var photoZip = zip.folder("photos");
    // this call will create photos/README
    photoZip.file("README", "a folder with photos");

    zip.file("hello.txt").async("string").then(function (data) {
      // data is "Hello World\n"
    });



    Read a zip file
    With .loadAsync(data) you can load a zip file.

    var new_zip = new JSZip();
    // more files !
    new_zip.loadAsync(content)
    .then(function(zip) {
        // you now have every files contained in the loaded zip
        zip.file("hello.txt").async("string"); // a promise of "Hello World\n"
    });
    */
  }  
}
