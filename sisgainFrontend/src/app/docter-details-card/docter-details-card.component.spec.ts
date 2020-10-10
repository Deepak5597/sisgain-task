import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocterDetailsCardComponent } from './docter-details-card.component';

describe('DocterDetailsCardComponent', () => {
  let component: DocterDetailsCardComponent;
  let fixture: ComponentFixture<DocterDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocterDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocterDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
