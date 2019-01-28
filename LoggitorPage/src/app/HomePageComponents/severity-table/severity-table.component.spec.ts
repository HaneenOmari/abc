import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityTableComponent } from './severity-table.component';

describe('SeverityTableComponent', () => {
  let component: SeverityTableComponent;
  let fixture: ComponentFixture<SeverityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
