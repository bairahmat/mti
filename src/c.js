$(document).ready(function(){
	var 	tema = $("#daftartema"),
			ttema = tema.html(),
	      c = ttema.split("|");

			tema.load("tema.txt");
			$("#daftartemaa").html(c[0]);		
})
