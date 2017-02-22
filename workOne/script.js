$("#count").click(function(){
    var counter = $("#one").val();
    var two = $("#two").val();
    // console.log(two);
	for (counter = counter; counter <= two; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
})
function billFunc(argument) {
    var cash = $("#cash").val()
    var people = $("#people").val()
    var discount = $("#discount").val()
    var result = cash*discount/100;
    result = result/people;
    console.log(result);

}
// $("#count").click(function(){
//     for (var counter = 0; counter <= 100; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }
// })