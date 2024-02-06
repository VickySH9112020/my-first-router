import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { RedirectHereComponent } from './redirect-here/redirect-here.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{ 
  path: 'parent',
  component: ParentComponent,
  children: [
    {
    path: 'first-child',
    component: FirstChildComponent
    },{
    path: 'second-child',
    component: SecondChildComponent  
    }
  ],
  // pathMatch: 'full'
},
{
  path: 'parent/first-child',
  component: FirstChildComponent
},
{
  path: 'bad-path',
  redirectTo: '/redirect-here' // 我尝试用redirect-here不设置斜杠
                              // 但是当访问 /bad-path/test的时候，路径居然变成了/redirect-here/test 
                              // 最终显示Not Found字样
},
{
  path: 'redirect-here',
  component: RedirectHereComponent
},
{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
