function fillData(){
	var obj1 = $("#title").val();
	$("#titulo").empty();
	$("#titulo").append(obj1);

	var obj2 = $("#btn1").val();
	$("#clave").empty();
	$("#clave").append(obj2);

	var obj3 = $("#btn2").val();
	$("#texto").empty();
	$("#texto").append(obj3);

	var obj4 = $("#typeText").val();
	$("#title-2").empty();
	$("#title-2").append(obj4);

	var obj5 = $("#titleCard").val();
	$("#subtitulo").empty();
	$("#subtitulo").append(obj5);

	var obj6 = $("#subtituloCard").val();
	$("#subtitulo2").empty();
	$("#subtitulo2").append(obj6);

	var obj7 = $("#bodyCard").val();
	$("#content").empty();
	$("#content").append(obj7);

}
$("#submit-button").on("click", function() {
	fillData();
});




