import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycreationComponent } from './mycreation.component';

describe('MycreationComponent', () => {
  let component: MycreationComponent;
  let fixture: ComponentFixture<MycreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycreationComponent]
    });
    fixture = TestBed.createComponent(MycreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
