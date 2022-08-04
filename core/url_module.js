const url  = require('url');

const ibraheemUrl = new URL('https://facebook.com?id=200&status=active');

// * Serialized URL -> get the main url
console.log(ibraheemUrl.href);
// ! OR
console.log(ibraheemUrl.toString());


// * Host (root domain)
console.log(ibraheemUrl.host);


// * Hostname
// ! [Hostname] doesn't include the port address or number
console.log(ibraheemUrl.hostname);


// * Pathname
console.log(ibraheemUrl.pathname);

// * Serialized query -> straight up query parameters, get everything after the question mark.
console.log(ibraheemUrl.search);

// * Params object -> get object from the url parameters
console.log(ibraheemUrl.searchParams);


// * Add params -> add parameters dynamically
ibraheemUrl.searchParams.append('astro', 'ibraheem');
console.log(ibraheemUrl.searchParams);


// * Loop through parameters
ibraheemUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));