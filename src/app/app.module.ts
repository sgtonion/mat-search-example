import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
