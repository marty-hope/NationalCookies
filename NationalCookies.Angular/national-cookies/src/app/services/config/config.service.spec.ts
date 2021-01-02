import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { CONFIG } from './constants';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService,
      {
        provide: CONFIG,
        useValue: {
          apiUrl: "http://localhost"
        }
      }]
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialized correctly', () => {
    const expectedConfig = {
      apiUrl: "http://localhost"
    };
    expect(service.config).toEqual(expectedConfig);
  })
});
