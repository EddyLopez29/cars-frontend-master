import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilometersComponent } from './kilometers.component';

describe('KilometersComponent', () => {
  let component: KilometersComponent;
  let fixture: ComponentFixture<KilometersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilometersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
