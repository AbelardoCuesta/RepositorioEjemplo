import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCompartirComponent } from './album-compartir.component';

describe('AlbumCompartirComponent', () => {
  let component: AlbumCompartirComponent;
  let fixture: ComponentFixture<AlbumCompartirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCompartirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCompartirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
