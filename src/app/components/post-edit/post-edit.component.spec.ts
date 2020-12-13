import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostEditComponent } from './post-edit.component';

describe('PostEditComponent', () => {
  let component: PostEditComponent;
  let fixture: ComponentFixture<PostEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
