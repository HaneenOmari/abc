import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectTableComponent } from './defect-table.component';

describe('DefectTableComponent', () => {
  let component: DefectTableComponent;
  let fixture: ComponentFixture<DefectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
