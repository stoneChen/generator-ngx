'use strict';
/**
 * @ngdoc overview
 * @name <%= scriptAppName %>
 * @description
 * # <%= scriptAppName %>
 *
 * Main module of the application.
 */
angular
    .module('<%= scriptAppName %>', [
        'ngRoute',
        'ngAnimate',
        'ngSanitize',
        'ngCustomBase',
        'angular-gestures',
        'LocalStorageModule'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/main'
            });
     })
    .config(function($compileProvider){//链接白名单
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
    })
    .config(function (rootDataServiceProvider) {//注册$rootScope全局对象，传入key的数组
        //rootDataServiceProvider.register(['ROOT_xxxxData'])
    })
    .config(function (hammerDefaultOptsProvider) {
        hammerDefaultOptsProvider.set({
            recognizers: [
                //[Hammer.Swipe,{direction: Hammer.DIRECTION_HORIZONTAL}],
                //[Hammer.Pan, {}],
                //[Hammer.Tap, { event: 'doubletap', taps: 2 }, ['tap']],
                [Hammer.Tap,{threshold:30}]
            ]
        });
    })
;
