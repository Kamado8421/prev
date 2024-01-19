import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoPlanoComponent } from './inscricao-plano.component';

describe('InscricaoPlanoComponent', () => {
  let component: InscricaoPlanoComponent;
  let fixture: ComponentFixture<InscricaoPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscricaoPlanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscricaoPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
