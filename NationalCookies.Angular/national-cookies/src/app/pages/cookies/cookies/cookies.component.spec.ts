import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from 'src/app/services/config/config.service';
import { CONFIG } from 'src/app/services/config/constants';

import { CookiesComponent } from './cookies.component';

describe('CookiesComponent', () => {
  let component: CookiesComponent;
  let fixture: ComponentFixture<CookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ CookiesComponent ],
      providers: [
        ConfigService,
        {
          provide: CONFIG,
          useValue: {
            apiUrl: 'https://localhost:44304/'
          }
        }
      ]
    })
    .compileComponents();
    TestBed.inject(ConfigService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
