/*
 *
 *
 *
 */

var currentOption;

function select(){

	var option = $('input[name=option]:checked').val()
	if(option != currentOption){
		$("#formList").load(option+".html");
		currentOption = option;
	}
}

function init(){
	$("#formList").load("mangaShounen.html");
	currentOption = "mangaShounen";
}