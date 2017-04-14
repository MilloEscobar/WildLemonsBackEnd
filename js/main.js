$( document ).ready(
	function(window , $) {
    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

	  var get = function (url , callback) {
	  	$.get( url, function() {
			})
			  .done(function(data) {
			  	var response = JSON.parse(data);
			  	callback(response.data);
			  	return response.data;
			  })
			  .fail(function() {
			    alert( "error conecting to the server" );
			  })
	  };

	  function post(url , obj , callback) {
	  	var jqxhr = $.post( url, data)
			  .done(function(data) {
			  	var response = JSON.parse(data);
			  	callback(response);
			  })
			  .fail(function() {
			    alert( "error conecting to the server" );
			  })
	  }



	  var getNames = function (data) {
	  	var names = '';
	  	for (var i = 0; i < data.length; i++) { 		
	  		names += '<option value="'+data[i]['ID']+'">'+data[i]['Name']+'</option>';
	  	}
	  	$('#cars_select').html(names);
	  };

	  var init = function (argument) {
	  	get("carsAPI.php/api/?names=names" , getNames );  		  
	  }();
	  
}(window , jQuery ));