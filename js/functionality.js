// FAB Certfication Brochure JavaScript Document
// by MLP

var gddval;
var intddval;
var coursetxt;
var courseImg;

/* first dropdown list */
var groupList = ['Compliance', 'Corporate and Investment Banking', 'Credit', 'Finance', 'Corporate Relationship', 'Digital, Fintech, AI and ML', 'ESG', 'Project Management', 'Quality and Innovation', 'Risk Management', 'Transaction Banking', 'Wealth Management', 'All Courses'];

/* second dropdown list based on the first DD selection */
var ComplList = ['ICA', 'ACAMS'];
var CIBList = ['CFA Institute','ACI Financial Markets Association (ACI FMA)','CAIA Association','Corporate Finance Institute (CFI)'];
var CredList = ['Corporate Finance Institute (CFI)'];
var CRList = ['Corporate Finance Institute (CFI)', 'The London Institute of Banking & Finance (LIBF)'];
var FinList = ['Institute of Management Accountants (IMA)'];
var DMLList = ['Corporate Finance Institute (CFI)', 'International Chamber of Commerce (ICC) Academy'];
var ESGList = ['CFA Institute', 'Corporate Finance Institute (CFI)'];
var PMList = ['Project Management Institute (PMI)'];
var QIList = ['The London Institute of Banking & Finance (LIBF)'];
var RMList = ['ACFE'];
var TBList = ['Association of Corporate Treasurers (ACT)', 'Bankers Association For Finance and Trade (BAFT)', 'International Chamber of Commerce (ICC) Academy'];
var WMList = ['Corporate Finance Institute (CFI)'];
	
var gList = $('#grpList.dropdown-menu');
var iList = $('#InstiList.dropdown-menu');

$(document).ready(function(e) {

	LoadCourse();
	
	$.each(groupList, function(i)
	{
		var li = $('<li/>')
			.appendTo(gList);
		var aaa = $('<a/>')
			.addClass('dropdown-item')
			.attr('href', 'javascript:void(0)')
			.text(groupList[i])
			.appendTo(li);
	});
	
	$('.btnred').addClass('disabled_class');
	
	$('.btnred').off('click');
	
	// button and drop down functionality
	
	$('#grpList li a').click(function(e) {
		$('#idd_btn').html("Certification Institute");
		gddval = this.text;
		$('#gdd_btn').html(gddval);
		$('#courseTitleTxt, #contentGrid, #courseGrid').hide();
		$('#sbt_btn').prop('disabled', true);
		$('#idd_btn').prop('disabled', false);
		ddchange();
	});
	
	
	
//$('#courseTitleTxt, #contentGrid, #courseGrid').hide();

$('#idd_btn, #sbt_btn').prop('disabled', true);

$('#sbt_btn').click(function(e) {
	$('#courseTitleTxt').html('Certification Course');
	$('#courseTitleTxt, #contentGrid').show();
	LoadCourse();
});

});


function ddchange(){
	$('#InstiList li').remove();
	
	//var InsList = gddval+'List';
	intddval = undefined;
	
	//console.log(intddval);
	
	/* based on the second drop down selection and to tag json file */
	if(gddval == 'All Courses'){
		LoadCourse();
	}
	
	if(gddval == 'Compliance'){
		
		$.each(ComplList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(ComplList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	
	if(gddval == 'Corporate and Investment Banking' ){
		
		$.each(CIBList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(CIBList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Credit'){
		
		$.each(CredList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(CredList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Corporate Relationship'){
		
		$.each(CRList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(CRList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Finance'){
		
		$.each(FinList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(FinList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Digital, Fintech, AI and ML'){
		
		$.each(DMLList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(DMLList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'ESG'){
		
		$.each(ESGList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(ESGList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Project Management'){
		
		$.each(PMList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(PMList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Quality and Innovation'){
		
		$.each(QIList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(QIList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Risk Management'){
		
		$.each(RMList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(RMList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Transaction Banking'){
		
		$.each(TBList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(TBList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	if(gddval == 'Wealth Management'){
		
		$.each(WMList, function(i)
		{
			var li = $('<li/>')
				.appendTo(iList);
			var aaa = $('<a/>')
				.addClass('dropdown-item')
				.attr('href', 'javascript:void(0)')
				.text(WMList[i])
				.appendTo(li);
		});
		LoadCourse();
	}
	
	$('#InstiList li a').click(function(e) {
		intddval = this.text;
		$('#idd_btn').html(intddval);
		//$('#sbt_btn').prop('disabled', false);
		LoadCourse();
	});
}

function LoadCourse(){

	var dbURL;
	$('#courseTitleTxt, #contentGrid, #courseGrid').hide();
	
	$('#courseTitleTxt, #contentGrid').show();
	
	$("#CourseAreaRow").empty();
	
	$('#sbt_btn').prop('disabled', true);
	
	dbURL = 'database/'+intddval+'.json';
	
	if((gddval == undefined && intddval == undefined) || (gddval == 'All Courses' && intddval == undefined)){
		$('#courseTitleTxt').html('All Courses');
		dbURL = 'database/allcourse.json';
	}
	
	if(gddval == 'Compliance' && intddval == undefined){
		$('#courseTitleTxt').html('Compliance Courses');
		dbURL = 'database/Compliance.json';
	}
	
	if(gddval == 'Corporate and Investment Banking' && intddval == undefined){
		$('#courseTitleTxt').html('Corporate and Investment Banking Courses');
		dbURL = 'database/Corp_InvestBanking.json';
	}
	
	if(gddval == 'Corporate Relationship' && intddval == undefined){
		$('#courseTitleTxt').html('Corporate Relationship Courses');
		dbURL = 'database/Corp_Relationship.json';
	}
	
	if(gddval == 'Credit' && intddval == undefined){
		$('#courseTitleTxt').html('Credit Courses');
		dbURL = 'database/Credit_Corporate Finance Institute.json';
	}
	
	if(gddval == 'Finance' && intddval == undefined){
		$('#courseTitleTxt').html('Finance Courses');
		dbURL = 'database/Institute of Management Accountants (IMA).json';
	}
	
	if(gddval == 'Digital, Fintech, AI and ML' && intddval == undefined){
		$('#courseTitleTxt').html('Digital, Fintech, AI and ML Courses');
		dbURL = 'database/Digital_ML.json';
	}
	
	if(gddval == 'ESG' && intddval == undefined){
		$('#courseTitleTxt').html('ESG Courses');
		dbURL = 'database/ESG.json';
	}
	
	if(gddval == 'Project Management' && intddval == undefined){
		$('#courseTitleTxt').html('Project Management Courses');
		dbURL = 'database/Project Management Institute (PMI).json';
	}
	
	if(gddval == 'Risk Management' && intddval == undefined){
		$('#courseTitleTxt').html('ACFE Courses');
		dbURL = 'database/ACFE.json';
	}
	
	if(gddval == 'Transaction Banking' && intddval == undefined){
		$('#courseTitleTxt').html('Transaction Banking Courses');
		dbURL = 'database/Transaction Banking.json';
	}
	
	if(gddval == 'Wealth Management' && intddval == undefined){
		$('#courseTitleTxt').html('Wealth Management Courses');
		dbURL = 'database/WM_Corporate Finance Institute.json';
	}
	
	if(gddval == 'Corporate and Investment Banking' && intddval == 'CFA Institute'){
		dbURL = 'database/Corp_CFA_Institute.json';
	}
	
	if(gddval == 'Corporate and Investment Banking' && intddval == 'Corporate Finance Institute (CFI)'){
		dbURL = 'database/Corp_Corporate Finance Institute.json';
	}
	
	if(gddval == 'Credit' && intddval == 'Corporate Finance Institute (CFI)'){
		dbURL = 'database/Credit_Corporate Finance Institute.json';
	}
	
	if(gddval == 'Corporate Relationship' && intddval == 'Corporate Finance Institute (CFI)'){
		dbURL = 'database/CorpRel_Corporate Finance Institute.json';
	}
	
	if(gddval == 'Corporate Relationship' && intddval == 'The London Institute of Banking & Finance (LIBF)'){
		dbURL = 'database/CorpRel_The London Institute of Banking & Finance (LIBF).json';
	}
	
	if(gddval == 'Digital, Fintech, AI and ML' && intddval == 'Corporate Finance Institute (CFI)'){
		dbURL = 'database/Dig_Corporate Finance Institute.json';
	}
	
	if(gddval == 'Digital, Fintech, AI and ML' && intddval == 'International Chamber of Commerce (ICC) Academy'){
		dbURL = 'database/Dig_International Chamber of Commerce (ICC) Academy.json';
	}
	
	if(gddval == 'ESG' && intddval == 'Corporate Finance Institute (CFI)'){
		dbURL = 'database/ESG_Corporate Finance Institute.json';
	}
	
	if(gddval == 'ESG' && intddval == 'CFA Institute'){
		dbURL = 'database/ESG_CFA_Institute.json';
	}
	
	if((gddval == 'Quality and Innovation' && intddval == 'The London Institute of Banking & Finance (LIBF)') || (gddval == 'Quality and Innovation' && intddval == undefined) || (gddval == undefined && intddval == 'The London Institute of Banking & Finance (LIBF)') ) {
		$('#courseTitleTxt').html('Quality and Innovation Courses');
		dbURL = 'database/QI_The London Institute of Banking & Finance (LIBF).json';
	}
	
	if(gddval == 'Transaction Banking' && intddval == 'International Chamber of Commerce (ICC) Academy'){
		dbURL = 'database/TB_International Chamber of Commerce (ICC) Academy.json';
	}
	
	if(gddval == 'Wealth Management' && intddval == 'Corporate Finance Institute (CFI)'){
		dbURL = 'database/WM_Corporate Finance Institute.json';
	}
	
	console.log(dbURL);

	  $.ajax({
		type: "GET",
		url: dbURL,
		dataType: "json",
		success: function(data) {
		  var counter = 0;
		 
		  for (var i = 0; i < data.length; i++) {
			if (data[i].tags != -1) {	  

			  var coursebox = $('<div class="col"><div class="card h-100"><a href="javascript:void(0);"><img src="assets/content_imgs/'+data[i].title+'.jpeg" class="card-img-top" title="'+data[i].title+'"><div class="card-body text-center"><h4 class="overlay overlay_1">'+data[i].title+'</h4></div></a></div></div>');
			  //console.log(coursebox);
			  $("#CourseAreaRow").append(
			  
			  	coursebox
			  );
			  counter++;
			}
		  }
		}
 	});
}

$(document).on('click', '.card', function() {
	$('#contentGrid').hide();
	coursetxt = $(this).find('h4').text();
	courseImg = $(this).find('img').attr('src');
	$('#courseTitleTxt').html(coursetxt);
	$('#courseGrid').show();
	$('#coursedesc img').attr('src',courseImg);
	gotoContent();
});