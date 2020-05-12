import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWalletUserComponent } from './update-wallet-user.component';

describe('UpdateWalletUserComponent', () => {
  let component: UpdateWalletUserComponent;
  let fixture: ComponentFixture<UpdateWalletUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWalletUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWalletUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
