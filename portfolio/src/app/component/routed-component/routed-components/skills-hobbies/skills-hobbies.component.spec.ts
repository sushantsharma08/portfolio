import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHobbiesComponent } from './skills-hobbies.component';

describe('SkillsHobbiesComponent', () => {
  let component: SkillsHobbiesComponent;
  let fixture: ComponentFixture<SkillsHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
