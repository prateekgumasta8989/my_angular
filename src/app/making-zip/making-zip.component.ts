import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
import { ExcelService } from './../excel.service';
import { ExcelParsingComponent } from './../excel-parsing/excel-parsing.component';
import { process } from '@progress/kendo-data-query';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
@Component({
  selector: 'app-making-zip',
  templateUrl: './making-zip.component.html',
  styleUrls: ['./making-zip.component.scss'],
})
export class MakingZipComponent implements OnInit {
  @ViewChild(ExcelParsingComponent) excelCom: ExcelParsingComponent;
  public exportDataExcel: any = [];
  public zip;
  constructor(private excelService: ExcelService) {}

  ngOnInit(): void {
    this.zip = new JSZip();
  }

  getJsonFromExcelParsing(ref) {
    /*const json = this.excelCom.getJsonData();
    if (!json){
      alert('json data nhi mila');
      return;
    }
    console.log(json);
    */
    const myJson = [
      {
        Company: 'Bank of America',
        FirstName: 'Amy',
        LastName: 'Evans',
        list: {
          Title: 'Assistant & Global VP, Information Security Communications',
          Email: 'amy.evans@bankofamerica.com',
        },
      },
      {
        Company: 'Ocwen Financial Corporation',
        FirstName: 'Mihir',
        LastName: 'Malode',
        list: {
          Title: 'Assistant Manager - Information Security',
          Email: 'mihir.malode@ocwen.com',
        },
      },
      {
        Company: 'Fidelity Investments',
        FirstName: 'Richard',
        LastName: 'Vaillancourt',
        list: {
          Title: 'Assistant Manager Global Security Operations Center',
          Email: 'richard.vaillancourt@fmr.com',
        },
      },
    ];
    console.log(this.exportDataExcel);
    setTimeout(() => {
      this.exportDataExcel = process(myJson, {}).data;
      console.log(this.exportDataExcel);
      setTimeout(() => {
        console.log('saving--------------');
        ref.save();
      }, 1500);
    }, 1500);

    /***
      TO SAVE JSON IN TEXT FILE TO SEE

    var theJSON = JSON.stringify(json);
    var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
    var a = document.createElement('a');
    a.href = uri;
    a.innerHTML = "Right-click and choose 'save as...'";
    document.body.appendChild(a);*/

    /***
      MAKE ZIP OF THIS EXCEL
    const blob = this.excelService.getBlobOfJson(myJson);
    this.zip.file('myexcel.xlsx', blob);
    this.generateZip();*/
  }

  generateZip() {
    this.zip.generateAsync({ type: 'blob' }).then(
      (blob) => {
        // 1) generate the zip file
        FileSaver.saveAs(blob, 'hello.zip'); // 2) trigger the download
        alert('inside generate zip');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  function123() {
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
