import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritoComponent } from './favorito.component';

describe('FavoritoComponent', () => {
  let component: FavoritoComponent;
  let fixture: ComponentFixture<FavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
