import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { ConfigService } from '../config/config.service';
import { CONFIG } from '../config/constants';
import { v4 as uuidv4 } from 'uuid';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  const config = {
    apiUrl: 'https://localhost:44304/'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [
        ConfigService,
        {
          provide: CONFIG,
          useValue: config
        }
      ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call the correct http target and use the right method', () => {
    const sessionId = uuidv4();
    service.getCookies(sessionId).subscribe(
      data => {
        expect(data.length > 0);
      }
    );
    const req = httpMock.expectOne(`${config.apiUrl}cookies/${sessionId}`);
    expect(req.request.method).toBe('GET');
  });

});
