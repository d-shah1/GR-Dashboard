import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComplaintsInfoComponent } from './new-complaints-info.component';

describe('NewComplaintsInfoComponent', () => {
  let component: NewComplaintsInfoComponent;
  let fixture: ComponentFixture<NewComplaintsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComplaintsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComplaintsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
