/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancionListCompartirComponent } from './cancion-list-compartir.component';

describe('CancionListCompartirComponent', () => {
  let component: CancionListCompartirComponent;
  let fixture: ComponentFixture<CancionListCompartirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionListCompartirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionListCompartirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
