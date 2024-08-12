import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextphaseComponent } from './nextphase.component';

describe('NextphaseComponent', () => {
  let component: NextphaseComponent;
  let fixture: ComponentFixture<NextphaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextphaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
