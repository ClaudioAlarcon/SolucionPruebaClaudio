import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatafalseComponent } from './datafalse.component';

describe('DatafalseComponent', () => {
  let component: DatafalseComponent;
  let fixture: ComponentFixture<DatafalseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatafalseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatafalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
