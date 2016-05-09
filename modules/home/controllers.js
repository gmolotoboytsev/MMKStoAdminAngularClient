'use strict';

angular.module('Home')
.controller('HomeController',  ['$http',
    function HomeController($http) {


        var home = this;

        home.cars = [];
        home.service = [];
        home.users = [];
        home.orders = [];

        home.modal = false;

        home.tab = 2;





        var loadCars = function () {
            $http.get(
                'http://localhost:52511/api/Car'
            ).success(function (data) {

                home.cars = data;

            });

        };

        var loadOrder = function () {
            $http.get(
                'http://localhost:52511/api/Order'
            ).success(function (data) {

                home.orders = data;

            });

        };

        var loadService = function () {
            $http.get(
                'http://localhost:52511/api/Service'
            ).success(function (data) {

                home.service = data;

            });
        };

        var loadUsers = function () {

            $http.get(
                'http://localhost:52511/api/User'
            ).success(function (data) {

                home.users = data;

            });
        };

        loadService();
        loadCars();
        loadUsers();
        loadOrder();





        home.delete_car = function(car_id) {

           var number = -1;

           home.cars.forEach(function(item, i, arr) {
                if (item.id == car_id) {
                    number = i;
                }
            });

            home.cars.splice(number, 1);

            $http({
                method: 'DELETE',
                data: {"id": car_id},
                headers: {
                    'Content-Type': "application/json"
                },

                url: 'http://localhost:52511/api/Car'
            }).success(function(data) {
            });

        };

        home.delete_service = function(service_id) {

            var number = -1;

            home.service.forEach(function(item, i, arr) {
                if (item.id == service_id) {
                    number = i;
                }
            });

            home.service.splice(number, 1);

            $http({
                method: 'DELETE',
                data: {"id": service_id},
                headers: {
                    'Content-Type': "application/json"
                },

                url: 'http://localhost:52511/api/Service'
            }).success(function(data) {
            });

        };

        home.delete_user = function(user_id) {

            var number = -1;

            home.users.forEach(function(item, i, arr) {
                if (item.id == user_id) {
                    number = i;
                }
            });

            home.users.splice(number, 1);

            $http({
                method: 'DELETE',
                data: {"id": user_id},
                headers: {
                    'Content-Type': "application/json"
                },

                url: 'http://localhost:52511/api/User'
            }).success(function(data) {
            });

        };

        home.delete_order = function(order_id) {

            var number = -1;

            home.orders.forEach(function(item, i, arr) {
                if (item.id == order_id) {
                    number = i;
                }
            });

            home.orders.splice(number, 1);

            $http({
                method: 'DELETE',
                data: {"id": order_id},
                headers: {
                    'Content-Type': "application/json"
                },

                url: 'http://localhost:52511/api/Order'
            }).success(function(data) {
            });

        };

        home.add_service_name = "";
        home.add_service_description = "";
        home.add_service_price = "";

        home.add_service = function() {


            var new_id = -1;

            $http({
                method: 'PUT',
                data: {"name": home.add_service_name, "price": home.add_service_price, "description": home.add_service_description},
                headers: {
                    'Content-Type': "application/json"
                },

                url: 'http://localhost:52511/api/Service'
            }).success(function(data) {
                $http.get(
                    'http://localhost:52511/api/Service'
                ).success(function (data) {

                    home.service = data;

                });
            });




            home.add_service_name = "";
            home.add_service_description = "";
            home.add_service_price = "";
        };



    }]);
