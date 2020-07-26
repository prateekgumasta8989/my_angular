import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelParsingComponent } from './excel-parsing.component';

describe('ExcelParsingComponent', () => {
  let component: ExcelParsingComponent;
  let fixture: ComponentFixture<ExcelParsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelParsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelParsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
