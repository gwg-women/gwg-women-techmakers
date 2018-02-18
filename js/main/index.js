import loadScripts from '../utils/loadScripts';
import IndexController from './IndexController';

const polyfillsNeeded = [];

if (!('Promise' in self)) polyfillsNeeded.push('../polyfills/promise.js');

try {
  new URL('b', 'http://a');
}
catch (e) {
  polyfillsNeeded.push('../polyfills/url.js');
}

loadScripts(polyfillsNeeded, function() {
  new IndexController(document.querySelector('.main'));
});