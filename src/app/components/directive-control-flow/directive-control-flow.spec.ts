import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectiveControlFlow } from './directive-control-flow';

describe('DirectiveControlFlow', () => {
  let component: DirectiveControlFlow;
  let fixture: ComponentFixture<DirectiveControlFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveControlFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveControlFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
