"use strict";
{

angular.module ("app")

.controller ("ToDoController", function(){

		const $ctrl = this;



		$ctrl.list = [
		{ todo:"Walk the dog", done: false},
     	{ todo:"Go to the store", done: true},
     	{ todo: "Get gas", done: false},
     	{ todo: "Wash the car", done: false}
    ];
    
   })
 }





