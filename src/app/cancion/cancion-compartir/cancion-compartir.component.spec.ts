/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancionCompartirComponent } from './cancion-compartir.component';

describe('CancionCompartirComponent', () => {
  let component: CancionCompartirComponent;
  let fixture: ComponentFixture<CancionCompartirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionCompartirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionCompartirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
