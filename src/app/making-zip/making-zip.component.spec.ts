import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingZipComponent } from './making-zip.component';

describe('MakingZipComponent', () => {
  let component: MakingZipComponent;
  let fixture: ComponentFixture<MakingZipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingZipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
