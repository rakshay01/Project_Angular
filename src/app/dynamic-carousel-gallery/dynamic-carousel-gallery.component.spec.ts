import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCarouselGalleryComponent } from './dynamic-carousel-gallery.component';

describe('DynamicCarouselGalleryComponent', () => {
  let component: DynamicCarouselGalleryComponent;
  let fixture: ComponentFixture<DynamicCarouselGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicCarouselGalleryComponent]
    });
    fixture = TestBed.createComponent(DynamicCarouselGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
