import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoscasaComponent } from './fotoscasa.component';

describe('FotoscasaComponent', () => {
  let component: FotoscasaComponent;
  let fixture: ComponentFixture<FotoscasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoscasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoscasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
