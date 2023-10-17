const urls = "https://route-init.gallimap.com/";

const mapUrl = `${urls}styles/light/style.json`;
// /NabilBank/96a44137f817b3bb4938762a5ec576b720238484924_447.png
const imageUrl = `${urls}images`;
const searchUrl = `${urls}searchApi/geojson_searchResult?accessToken=${process.env.REACT_APP_TOKEN_KEY}`;
const autocompleteUrl = `${urls}searchApi/geojson_getAll/search?accessToken=${process.env.REACT_APP_TOKEN_KEY}`;

export { urls, searchUrl, autocompleteUrl, mapUrl, imageUrl };
