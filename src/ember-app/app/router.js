import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kyrs10-билетная-касса-l');
  this.route('i-i-s-kyrs10-билетная-касса-e',
  { path: 'i-i-s-kyrs10-билетная-касса-e/:id' });
  this.route('i-i-s-kyrs10-билетная-касса-e.new',
  { path: 'i-i-s-kyrs10-билетная-касса-e/new' });
  this.route('i-i-s-kyrs10-перевозчик1-l');
  this.route('i-i-s-kyrs10-перевозчик1-e',
  { path: 'i-i-s-kyrs10-перевозчик1-e/:id' });
  this.route('i-i-s-kyrs10-перевозчик1-e.new',
  { path: 'i-i-s-kyrs10-перевозчик1-e/new' });
  this.route('i-i-s-kyrs10-покуп-или-возв-б-l');
  this.route('i-i-s-kyrs10-покуп-или-возв-б-e',
  { path: 'i-i-s-kyrs10-покуп-или-возв-б-e/:id' });
  this.route('i-i-s-kyrs10-покуп-или-возв-б-e.new',
  { path: 'i-i-s-kyrs10-покуп-или-возв-б-e/new' });
  this.route('i-i-s-kyrs10-покупатель-l');
  this.route('i-i-s-kyrs10-покупатель-e',
  { path: 'i-i-s-kyrs10-покупатель-e/:id' });
  this.route('i-i-s-kyrs10-покупатель-e.new',
  { path: 'i-i-s-kyrs10-покупатель-e/new' });
});

export default Router;
