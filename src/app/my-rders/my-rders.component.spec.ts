import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRdersComponent } from './my-rders.component';

describe('MyRdersComponent', () => {
  let component: MyRdersComponent;
  let fixture: ComponentFixture<MyRdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
