'use strict';

/* Controllers */
angular.module('librosApp', []).controller('TodosLosLibrosCtrl', function ($scope) {
	$scope.libros = [
		{'titulo': 'Física Universitaria', 'autor': 'Sears Zemansky'},
		{'titulo': 'JavaScript. La guía definitiva', 'autor': 'David Flanagan'},
		{'titulo': 'MySQL Avanzado', 'autor': 'Baron Schwartz'},
		{'titulo': 'C# Al descubierto', 'autor': 'Joseph Mayo'},
		{'titulo': 'CSS Manual avanzado', 'autor': 'Andy Budd'},
		{'titulo': 'PHP y MySQL Práctico para programadores y diseñadores web', 'autor': 'Ellie Quigley'},
		{'titulo': 'Ajax, JavaScript y PHP', 'autor': 'Phil Ballard'},
		{'titulo': 'Java para Desarrollo Android', 'autor': 'Jeff Friesen'}
	];
});