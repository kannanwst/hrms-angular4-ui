import { TestBed, inject } from '@angular/core/testing';

import { DepartmentsDashboardService } from './departments-dashboard.service';

describe('DepartmentsDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentsDashboardService]
    });
  });

  it('should be created', inject([DepartmentsDashboardService], (service: DepartmentsDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
