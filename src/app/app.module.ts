import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkersService } from './workers/workers.service';
// import { reducers, metaReducers } from './reducers';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatMenuModule, MatButtonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'di devTools',
      maxAge: 10,
      logOnly: environment.production
    })
  ],
  providers: [WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
