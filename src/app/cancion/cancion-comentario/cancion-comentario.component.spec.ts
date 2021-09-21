import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionComentarioComponent } from './cancion-comentario.component';

describe('CancionComentarioComponent', () => {
  let component: CancionComentarioComponent;
  let fixture: ComponentFixture<CancionComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
