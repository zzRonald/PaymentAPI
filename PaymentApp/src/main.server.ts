import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // MUDOU DE App PARA AppComponent
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config); // AQUI TAMBÉM

export default bootstrap;