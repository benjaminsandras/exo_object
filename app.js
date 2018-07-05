// console.log("coucou")

$('#normal').click(function () {
	$("#table").empty();

	var key;
	var key2;
	var key3;
	var displayobjects = ""
	var displaytab = ""
	var books = [
	{
		title: 'CSS: The Definitive Guide',
		author: 'Eric Meyer',
		link: 'http://shop.oreilly.com/product/0636920012726.do',
		type: 'css'
	},
	{
		title: 'CSS Development with CSS3',
		author: 'Zachary Kingston',
		link: 'http://shop.oreilly.com/product/0636920057970.do',
		type: 'css'
	},
	{
		title: 'You Don\'t Know JS: Up & Going',
		author: 'Kyle Simpson',
		link: 'http://shop.oreilly.com/product/0636920039303.do',
		type: 'js'
	},
	{
		title: 'Programming JavaScript Applications',
		author: 'Eric Elliott',
		link: 'http://shop.oreilly.com/product/0636920033141.do',
		type: 'js'
	},
	{
		title: 'Modern JavaScript',
		author: 'unknown',
		link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp',
		type: 'js'
	}
	] ;

	for (key in books) {
		var object = books[key];
		displaytab = displaytab + object;
		$("#table").append("<ul>");
		for (key2 in object){
			displayobjects = displayobjects + object[key2];
			var display = $("#table").append("<li>"+object[key2]+"</li>");
		}
	}


	$('#js').click(function () {
		display.empty();

		for (key in books) {
			var object = books[key];
			displaytab = displaytab + object;
			console.log(object)

			if(object.type == "js"){

				for (key2 in object){
					displayobjects = displayobjects + object[key2];
					$("#table").append("<li>"+object[key2]+"</li>");

				}
			}
		}

	});

	$('#css').click(function () {
		display.empty();

		for (key in books) {
			var object = books[key];
			displaytab = displaytab + object;
			console.log(object)

			if(object.type == "css"){

				for (key2 in object){
					displayobjects = displayobjects + object[key2];
					$("#table").append("<li>"+object[key2]+"</li>");

				}
			}
		}

	});

});


$('#json').click(function () {
	$("#table").empty();

	$.ajax({
		url:'jason.json',
		type : 'GET',
		dataType : 'json', 



	}).done(function(data) {

		$("#table").append("<th>" + "title" + "</th><th>" + "author" + "</th><th>" + "link" + "</th><th>" + "type" + "</th>");

		for (i=0; i<data.length; i++){
			$("#table").append("<tr><td>" + data[i].title + "</td><td>" + data[i].author 
				+ "</td><td>" + data[i].link + "</td><td>" + data[i].type + "</td></tr>");
		} 

		$('#js').click(function () {
			$("#table").empty();
			$("#table").append("<th>" + "title" + "</th><th>" + "author" + "</th><th>" + "link" + "</th><th>" + "type" + "</th>");
			for (i=0; i<data.length; i++){
				if (data[i].type == "js"){
					$("#table").append("<tr><td>" + data[i].title + "</td><td>" + data[i].author 
						+ "</td><td>" + data[i].link + "</td><td>" + data[i].type + "</td></tr>");
				} 
			}
		});

		$('#css').click(function () {
			$("#table").empty();
			$("#table").append("<th>" + "title" + "</th><th>" + "author" + "</th><th>" + "link" + "</th><th>" + "type" + "</th>");
			for (i=0; i<data.length; i++){
				if (data[i].type == "css"){
					$("#table").append("<tr><td>" + data[i].title + "</td><td>" + data[i].author 
						+ "</td><td>" + data[i].link + "</td><td>" + data[i].type + "</td></tr>");
				} 
			}
		});

		

	}).fail(function() {

		alert( "error" );

	});

});