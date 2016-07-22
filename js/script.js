 //jQuery Datepicker 
$(function() {
    $( "#datepicker" ).datepicker();
  });

//angular controllers 
var timeLine = angular.module('timeLine', [])
	.controller('timelineCtrl', 
	function timelineCtrl($scope){
		$scope.show = false;
		$scope.events = [];
		$scope.data = {
			date: '',
			color: '',	
			name: ''
		};

   	$scope.addEvent = function(){

	  this.data.date = $('#datepicker').datepicker("getDate");
	  var year  = this.data.date.getFullYear();
	  var month = ('0' + (parseInt(this.data.date.getMonth()) + 1) ).slice(-2);
	  var day = ('0' + this.data.date.getDate()).slice(-2);
		this.data.date = day + '.' + month + '.' + year;
        this.events.push(this.data);
		console.log(this.events);
    	this.data={};
        this.show = true; 	
    };
});


