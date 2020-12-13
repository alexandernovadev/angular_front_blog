import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { IdentityGuard } from './identity.guard';

describe('IdentityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdentityGuard]
    });
  });

  it('should ...', inject([IdentityGuard], (guard: IdentityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
