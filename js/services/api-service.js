'use strict';

const ApiService = {
    get(endpoint, params) {
        const url = endpoint + (params ? '?' + new URLSearchParams(params) : '');
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error;
            });
    },
};

