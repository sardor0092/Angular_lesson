import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UquvchilarComponent } from './uquvchilar.component';

describe('UquvchilarComponent', () => {
  let component: UquvchilarComponent;
  let fixture: ComponentFixture<UquvchilarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UquvchilarComponent]
    });
    fixture = TestBed.createComponent(UquvchilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
