import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEMComponent } from './bem.component';

describe('BEMComponent', () => {
  let component: BEMComponent;
  let fixture: ComponentFixture<BEMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BEMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BEMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
