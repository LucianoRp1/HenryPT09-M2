$("#boton").click(function () {
$("#lista").empty();

	$.get(`http://localhost:5000/amigos` , function(amigos){
		amigos.forEach(e =>{
			$("#lista").append(`<li id="${e.id}">${e.name} X</li>`)
		})
	})
});



$("#search").click(function () {

	let id = $("#input").val() ;

	if(id){
		$.get(`http://localhost:5000/amigos/${id}`, function (friend) {
			$("#amigo").text(`El nombre de mi amigo es : ${friend.name} `);
			$("#input").val();
			
		})
	}else {
		$("#amigo").text("Tienes que ingresar una ID");
	}
	
});



let deleteFriend = function (){
	let id = $("#inputDelete").val() ;
	let friend;
	if(id){
		$.get(`http://localhost:5000/amigos/${id}`, function(f){
			friend = f ;
		});
		$.ajax({
			url:`http://localhost:5000/amigos/${id}`,
			type: "DELETE",
			success: function(){
				$("#success").text(`Tu amigo, ${friend.name} fue eliminado de la lista con exito`);
				$("#inputDelete").val("");
				showFriends();
			}
		})
	}else{
		$("#success").text(`Tienes que ingresar una ID`)

	}
};
$("#delete").click(deleteFriend) ;





