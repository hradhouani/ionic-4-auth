// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDiRnpsSwTMcp5GqCqoSdhd5bvnbr_0Muw',
        authDomain: 'uber-eb0a1.firebaseapp.com',
        databaseURL: 'https://uber-eb0a1.firebaseio.com',
        projectId: 'uber-eb0a1',
        storageBucket: 'uber-eb0a1.appspot.com',
        messagingSenderId: '205238616192'
    },
    url:'http://localhost:8000/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
