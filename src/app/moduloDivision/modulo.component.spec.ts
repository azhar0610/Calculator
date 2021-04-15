import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloDivisionComponent } from './modulo.component';

describe('ModuloDivisionComponent', () => {
  let component: ModuloDivisionComponent;
  let fixture: ComponentFixture<ModuloDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
