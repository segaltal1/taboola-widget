'use strict';

const BASE_URL = 'https://api.taboola.com//1.2/json/feed/recommendations.get';
const APP_TYPE = 'desktop';
const API_KEY = '143ca6bf153893c690249736df6a383615bb9e92'
const COUNT = 6;
const APP_NAME = 'msn-casualgames-sudoku-us';
const USER_SESSION = 'init';
const SOURCE_TYPE = 'text';
const SOURCE_ID = 'https://www.microsoft.com/en-us/p/microsoft-sudoku/9wzdncrfhv60';
const SOURCE_URL = 'https://www.microsoft.com/en-us/p/microsoft-sudoku/9wzdncrfhv60';
const SOURCE_PLACEMENT = 'Any';

const params = {
    'app.type': APP_TYPE,
    'app.apikey': API_KEY,
    'app.name': APP_NAME,
    'rec.count': COUNT,
    'source.type': SOURCE_TYPE,
    'source.id': SOURCE_ID,
    'source.url': SOURCE_URL,
    'source.placement': SOURCE_PLACEMENT,
    'user.session': USER_SESSION
};

function getWidgets() {
    return ApiService.get(BASE_URL, params)
}

if(typeof module !== 'undefined') {
    module.exports = {
        getWidgets,
    }
}