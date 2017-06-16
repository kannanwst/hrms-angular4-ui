import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsDashboardComponent } from './departments-dashboard.component';

describe('DepartmentsDashboardComponent', () => {
  let component: DepartmentsDashboardComponent;
  let fixture: ComponentFixture<DepartmentsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
