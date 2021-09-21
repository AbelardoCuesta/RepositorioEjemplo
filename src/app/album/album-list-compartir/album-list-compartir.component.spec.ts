import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListCompartirComponent } from './album-list-compartir.component';

describe('AlbumListCompartirComponent', () => {
  let component: AlbumListCompartirComponent;
  let fixture: ComponentFixture<AlbumListCompartirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumListCompartirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListCompartirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
