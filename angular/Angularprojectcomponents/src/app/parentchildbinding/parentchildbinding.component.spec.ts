import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchildbindingComponent } from './parentchildbinding.component';

describe('ParentchildbindingComponent', () => {
  let component: ParentchildbindingComponent;
  let fixture: ComponentFixture<ParentchildbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentchildbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentchildbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
