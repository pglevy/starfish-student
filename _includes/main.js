$( document ).ready(function() {
	console.log('ready');


	function successFunc(data) {
	  	console.log(data);
	  	goToURL('http://127.0.0.1:4000/starfish-student/help/confirmation.html');
	}

	function goToURL(url){
		window.location.href = url;
	}

	$('#type-continue').on('click', function(){
		console.log('clicked');
		localStorage.setItem('type', $('input[name=type]:checked').val());
		console.log(localStorage.getItem('type'));
	});

	$('#type-course').on('click', function(){
		console.log('clicked');
		localStorage.setItem('course', $('input[name=course]:checked').val());
		console.log(localStorage.getItem('course'));
	});

	$('#review').on('click', function(){
		console.log('clicked');
		localStorage.setItem('note', $('#note').val());
		console.log(localStorage.getItem('note'));
	});

	
	//load the local storage on the review page
	$('p#type').html(localStorage.getItem('type'));
	$('p#course').html(localStorage.getItem('course'));
	$('p#note').html(localStorage.getItem('note'));


	$('#send').on('click', function(event){
	  event.preventDefault();
	  $('#send').addClass('disabled');
	  $('#send').html('Sending…');
	  var type = localStorage.getItem('type');
	  var course = localStorage.getItem('course');
	  var note = localStorage.getItem('note');
	  var url = "https://sheetsu.com/apis/v1.0su/af78447eb931/sheets/help";
	  var params = { type:type, course:course, note:note };
	  $.ajax({ type:"POST", url:url, data:params, success:successFunc });
	});

});