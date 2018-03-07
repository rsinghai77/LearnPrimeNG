import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {EditorModule} from 'primeng/editor';
import {InputMaskModule} from 'primeng/inputmask';

import { AppComponent } from './app.component';
import { TableContentComponent } from './table-content/table-content.component';
import { InputContentComponent } from './input-content/input-content.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { InventoryComponent } from './inventory/inventory.component'
import { MappingComponent } from './mapping/mapping.component'

@NgModule({
    declarations: [
        AppComponent,
        TableContentComponent,
        InputContentComponent,
        TextEditorComponent,
        InventoryComponent,
        MappingComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        EditorModule,
        InputMaskModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
