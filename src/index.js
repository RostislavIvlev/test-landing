// Autoadd all scss/css/ts files
let $ = require('jquery');
import '../node_modules/jquery/dist/jquery';

import "../node_modules/modern-normalize/modern-normalize.css"

function importAll (r) {
    r.keys().forEach(r);
}
  
importAll(require.context('./', true, /\.scss|css|ts$/));