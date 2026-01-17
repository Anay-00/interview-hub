
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrendingComponent } from './components/trending/trending.component';
import { CreatePostComponent } from './components/create/create-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompanyComponent } from './components/company/company.component';
import { CollegeFeedComponent } from './components/college/college-feed.component';
import { LoginComponent } from './components/auth/login.component';
import { SearchComponent } from './components/search/search.component';
import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { authGuard } from './services/data.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'trending', component: TrendingComponent, canActivate: [authGuard] },
  { path: 'create', component: CreatePostComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'company/:name', component: CompanyComponent, canActivate: [authGuard] },
  { path: 'college/:name', component: CollegeFeedComponent, canActivate: [authGuard] },
  { path: 'search', component: SearchComponent, canActivate: [authGuard] },
  { path: 'hashtags', component: HashtagsComponent, canActivate: [authGuard] },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
