// FAB Certfication Brochure JavaScript Document

var Cat_Val;
var coursetxt;
var courseImg;
var dbURL;

var catList = [];

$(document).ready(function(e) {
	LandingLoad();
	$("#homeBtn").on('click', function() {
    	location.reload();
	}); 
});

function LandingLoad(){
	catList = [];
	catList.length = 0;
	$("#CourseAreaRow").empty();
	dbURL = 'database/categories.json';
	$('#courseTitleTxt, #contentGrid, #courseGrid').hide();
	
	$('#courseTitleTxt, #contentGrid').show();
	
	$('#courseTitleTxt').html('Categories');
	
	//console.log(dbURL);

	  $.ajax({
		type: "GET",
		url: dbURL,
		dataType: "json",
		success: function(data) {
		  var counter = 0;
		 
		  for (var i = 0; i < data.length; i++) {
			if (data[i].tags != -1) {	  

			  var coursebox = $('<div class="col"><div class="card h-100"><a href="javascript:void(0);"><img src="assets/content_imgs/'+data[i].thumb+'.jpeg" class="card-img-top" title="'+data[i].title+'"><div class="card-body text-center"><h4 class="overlay overlay_1">'+data[i].title+'</h4></div></a></div></div>');
			  //console.log(coursebox);
			  $("#CourseAreaRow").append(coursebox);
			  counter++;
			}
		  }
		}
 	});
	$(document).on('click', '.card', function() {
		$('#contentGrid').hide();
		
		coursetxt = $(this).find('h4').text();
		courseImg = $(this).find('img').attr('src');
		$('#courseTitleTxt').html(coursetxt);
		$('#courseGrid').show();
		$('#coursedesc img').attr('src',courseImg);	
		catList.push(coursetxt);
		
		LoadCourse(coursetxt);
	}); 
	
}

function LoadCourse(info) {
    // Mapping of course titles to their respective URLs
    const courseUrlMap = {
        'Compliance': 'database/Compliance.json',
        'Corporate and Investment Banking': 'database/Corp_InvestBanking.json',
        'Corporate Relationship': 'database/Corp_Relationship.json',
        'Credit': 'database/Credit.json',
        'Finance': 'database/Institute of Management Accountants (IMA).json',
        'Digital, Fintech, AI and ML': 'database/Digital_ML.json',
        'ESG': 'database/ESG.json',
        'Quality and Innovation': 'database/QI.json',
        'Internal Audit': 'database/IA_EIF.json',
        'Islamic Banking': 'database/IB_EIF.json',
        'Project Management': 'database/Project Management Institute (PMI).json',
        'Risk Management': 'database/Risk_Management.json',
        'Treasury': 'database/Treasury.json',
        'Transaction Banking': 'database/Transaction Banking.json',
        'Wealth Management': 'database/WM.json'
    };

    $("#CourseAreaRow").empty();
    Cat_Val = info;

    $('#courseTitleTxt, #contentGrid, #courseGrid').hide();
    $('#courseTitleTxt, #contentGrid').show();

    // to set the title and URL based on the mapping
    if (courseUrlMap[Cat_Val]) {
        $('#courseTitleTxt').html(Cat_Val + ' Courses');
        dbURL = courseUrlMap[Cat_Val];
    }
	
	$.ajax({
		type: "GET",
		url: dbURL,
		dataType: "json",
		success: function(data) {
		  var counter = 0;
		 $("#CourseAreaRow").empty();
		  for (var i = 0; i < data.length; i++) {
			if (data[i].tags != -1) {	  

			  var coursebox = $('<div class="col"><div class="card h-100"><a href="javascript:void(0);"><img src="assets/content_imgs/'+data[i].title+'.jpeg" class="card-img-top" title="'+data[i].title+'"><div class="card-body text-center"><h4 class="overlay overlay_1">'+data[i].title+'</h4></div></a></div></div>');
			  			  
			  $("#CourseAreaRow").append(coursebox);
			  counter++;
			}
		  }
		}
 	});
	
	$(document).on('click', '.card', function() {
		$('#contentGrid').hide();
		coursetxt = $(this).find('h4').text();
		courseImg = $(this).find('img').attr('src');
		$('#courseTitleTxt').html(coursetxt);
		$('#courseGrid').show();
		$('#coursedesc img').attr('src',courseImg);
		gotoContent();
	});
}

function gotoContent(){
	
	var dbURL = 'database/content.json';
	var searchText = $("#courseTitleTxt").html();

	searchText = searchText.replace(/[\(\]']+/g,'');
	searchText = searchText.replace(/[\)\]']+/g,'');
	
	console.log(searchText);
	
	  $.ajax({
		type: "GET",
		url: dbURL,
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
