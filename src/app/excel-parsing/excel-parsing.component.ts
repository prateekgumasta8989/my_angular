import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-parsing',
  templateUrl: './excel-parsing.component.html',
  styleUrls: ['./excel-parsing.component.scss'],
})
export class ExcelParsingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  importExcelFile(event) {
    const target = event.target;
    if (target.files.length !== 1) {console.log();}
    const reader: FileReader = new FileReader();
    reader.onload = (ev: any) => {
      const bstr: string = ev.target.result;
      const headerWb: XLSX.WorkBook = XLSX.read(bstr, {
        type: 'binary',
        sheetRows: 1,
      });
      const headerWsName: string = headerWb.SheetNames[0];
      const headerWs: XLSX.WorkSheet = headerWb.Sheets[headerWsName];
      let importedExcelHeader: any[][] = XLSX.utils.sheet_to_json(headerWs, {
        header: 1,
      });
      console.log(importedExcelHeader);
      console.log(importedExcelHeader.length);
      let arr = importedExcelHeader[0];
      console.log(arr);
      console.log(arr.length);
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsName: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsName];
      let myDataInJson = XLSX.utils.sheet_to_json(ws, { raw: true });
    };
    let file = target.files[0];
    reader.readAsBinaryString(file);
  }
}
