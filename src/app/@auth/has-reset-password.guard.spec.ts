import { TestBed } from '@angular/core/testing';

import { HasResetPasswordGuard } from './has-reset-password.guard';

describe('HasResetPasswordGuard', () => {
  let guard: HasResetPasswordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasResetPasswordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
