import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeCheckerComponent } from './size-checker.component';

describe('SizeCheckerComponent', () => {
  let component: SizeCheckerComponent;
  let fixture: ComponentFixture<SizeCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
