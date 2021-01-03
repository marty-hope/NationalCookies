import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cookie } from 'src/app/services/api/cookie';

import { CookieComponent } from './cookie.component';

describe('CookieComponent', () => {
  let component: CookieComponent;
  let fixture: ComponentFixture<CookieComponent>;
  let cookie : Cookie;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieComponent);
    component = fixture.componentInstance;
    component.cookie = new Cookie(1, 'test', 'http://localhost', 1.2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
