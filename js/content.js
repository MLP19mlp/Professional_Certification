// FAB Certfication Brochure Content Document

function gotoContent(){
	//console.log($("#courseTitleTxt").html());
	
	var dbURL = 'database/content.json';
	var searchText = $("#courseTitleTxt").html();

	searchText.replace(/[\(\]']+/g,'')
	searchText.replace(/[\)\]']+/g,'')
	
	console.log(searchText);
	
	  $.ajax({
		type: "GET",
		url: "database/content.json",
		dataType: "json",
		success: function(data) {
		 
		  for (var i = 0; i < data.length; i++) {
			if (data[i].courseName.search(new RegExp(searchText, "i")) != -1) {	
			console.log(data[i].courseName)
			  $("#crsmode").html(data[i].coursemode);
			  $("#crsduration").html(data[i].duration);
			  $("#crscost").html(data[i].audience);
			  $("#coursedesc .crsdescp div").html(data[i].contTxt);
			  var detailsclk = data[i].details;
			  $("#btndetails").attr('href', detailsclk);
			  var applycrse = data[i].apply;
			  $("#btnapply").attr('href', applycrse);
			  
			}
		  }
		}
		
 	});
	$("#backBtn").on('click', function(){
	  LoadCourse(catList)
  });
}
