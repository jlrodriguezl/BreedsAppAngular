import { TestBed } from '@angular/core/testing';

import { ConsultaRazasService } from './consulta-razas.service';

describe('ConsultaRazasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaRazasService = TestBed.get(ConsultaRazasService);
    expect(service).toBeTruthy();
  });
});
