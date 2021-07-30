
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";
import { AppComponent } from 'src/app/app.component';


describe('Structural | Component | AppComponent', () => { // Comp Creation
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let link: DebugElement;
  let routerOutletTag: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    link = fixture.debugElement.query(By.css('nav >  ul > li > a'));
    routerOutletTag = fixture.debugElement.query(By.css('router-outlet'));

  });

  it('Verifying the structure of AppComponent', () => {   // 1. AppComp Creation
    expect(component).toBeTruthy();
  });
});
describe('Structural | Routing | AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let link: DebugElement;
  let routerOutletTag: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    link = fixture.debugElement.query(By.css('nav >  ul > li > a'));
    routerOutletTag = fixture.debugElement.query(By.css('router-outlet'));

  });

  it('Verifying the structur of routing', () => { //2. Router
    expect(link.attributes['ng-reflect-router-link']).toMatch('register');
  })

  it('Verifying the structure of routing', () => { //3. Router tag
    expect(routerOutletTag).toBeTruthy();
  })

});
