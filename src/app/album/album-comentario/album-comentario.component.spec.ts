import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComentarioComponent } from './album-comentario.component';

describe('AlbumComentarioComponent', () => {
  let component: AlbumComentarioComponent;
  let fixture: ComponentFixture<AlbumComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
