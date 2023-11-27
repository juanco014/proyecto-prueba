import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSalaComponent } from './detalle-sala.component';

describe('DetalleSalaComponent', () => {
  let component: DetalleSalaComponent;
  let fixture: ComponentFixture<DetalleSalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleSalaComponent]
    });
    fixture = TestBed.createComponent(DetalleSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
