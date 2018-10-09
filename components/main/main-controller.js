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

    $ctrl.addTask = function(todo){
    	$ctrl.list.push({todo: $ctrl.newtoDo,
            done: false});
        $ctrl.newtoDo = "";
    }
    
    $ctrl.removeTask = function(index){
        $ctrl.list.splice(index, 1)
          
    }

    $ctrl.completeTask = function (items){
        items.done = true;
    }

   });
 }





