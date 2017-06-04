import { TestBed, inject } from '@angular/core/testing';

import { LeavestatusService } from './leavestatus.service';

describe('LeavestatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeavestatusService]
    });
  });

  it('should be created', inject([LeavestatusService], (service: LeavestatusService) => {
    expect(service).toBeTruthy();
  }));
});
