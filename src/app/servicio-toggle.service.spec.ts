import { TestBed } from '@angular/core/testing';

import { ServicioToggleService } from './servicio-toggle.service';

describe('ServicioToggleService', () => {
  let service: ServicioToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
