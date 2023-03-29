import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsergioComponent } from './layoutsergio.component';

describe('LayoutsergioComponent', () => {
  let component: LayoutsergioComponent;
  let fixture: ComponentFixture<LayoutsergioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsergioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsergioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
