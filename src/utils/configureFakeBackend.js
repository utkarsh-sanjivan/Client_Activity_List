import TESTJSON from './TEST JSON.json';

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method } = opts;
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            handleRoute();

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/getClientActivityList') && method === 'GET':
                        return getClientActivityList();
                    default:
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions
            function getClientActivityList() {
                return ok(TESTJSON);
            }

            // helper functions
            function ok(body) {
                resolve(body);
            }
        });
    }
}
