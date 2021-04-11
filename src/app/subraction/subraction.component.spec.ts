import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubractionComponent } from './subraction.component';

describe('SubractionComponent', () => {
  let component: SubractionComponent;
  let fixture: ComponentFixture<SubractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
