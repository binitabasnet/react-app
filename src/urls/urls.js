const urls = "https://route-init.gallimap.com/";

const searchUrl = `${urls}searchApi/geojson_searchResult?accessToken=${process.env.REACT_APP_TOKEN_KEY}`;
const autocompleteUrl = `${urls}searchApi/geojson_getAll/search?accessToken=${process.env.REACT_APP_TOKEN_KEY}`;

export { urls, searchUrl, autocompleteUrl };
