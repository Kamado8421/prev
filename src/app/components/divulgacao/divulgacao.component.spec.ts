import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivulgacaoComponent } from './divulgacao.component';

describe('DivulgacaoComponent', () => {
  let component: DivulgacaoComponent;
  let fixture: ComponentFixture<DivulgacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivulgacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivulgacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
