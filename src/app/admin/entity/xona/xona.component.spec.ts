import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XonaComponent } from './xona.component';

describe('XonaComponent', () => {
  let component: XonaComponent;
  let fixture: ComponentFixture<XonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XonaComponent]
    });
    fixture = TestBed.createComponent(XonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
