const hbs = require('hbs');
const moment = require('moment');

// Iteration 2: register partials - dirname es el path entero hasta donde estoy - 

hbs.registerPartials(__dirname + '/../views/partials/');


// Iteration 2: register active helper for nav

hbs.registerHelper('active', (options) => {
    const { path, match } = options.hash;
    return path === match ? 'active' : '';
    });


// Iteration 3: register date helper for tweets
