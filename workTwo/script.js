function funcs(){
	var person = {name: "Daniil", lastname: "Shushpanov"};
	var array = [
	{
		name: "Daniil",
		lastname: "Shushpanov"
	},{
		name: "Luis",
		lastname: "Shushpanov"
	},{
		name: "Silvana",
		lastname: "Shushpanov"
	},
]
	// document.getElementById("text").innerHTML = array[1].name;
	$("#text").text(array[0].name).attr({
		class: 'loremRed',
		property2: 'value2'
	});
	console.log(person);
}

function hideAndShow(argument) {
	// if($("#one").a)
	$("#one").toggle("slow");
	$("#one").text('Silvana');

	// $("#one").show('100/400/fast').attr('class', 'show one');


}