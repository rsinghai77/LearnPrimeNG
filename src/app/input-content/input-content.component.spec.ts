import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputContentComponent } from './input-content.component';

describe('InputContentComponent', () => {
  let component: InputContentComponent;
  let fixture: ComponentFixture<InputContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
