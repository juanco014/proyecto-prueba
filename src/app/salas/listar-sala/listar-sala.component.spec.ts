import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSalaComponent } from './listar-sala.component';

describe('ListarSalaComponent', () => {
  let component: ListarSalaComponent;
  let fixture: ComponentFixture<ListarSalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSalaComponent]
    });
    fixture = TestBed.createComponent(ListarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
