
$(document).ready(function() {
	$("form#survey").submit(function(event) {
    event.preventDefault();
    const music = $("#music").val();
    const flavor = $("input:radio[name=food]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();
    const otherFood = $("#other").val();

    $(".music").text(music);
    $(".flavor").text(flavor);
    $(".dob").text(dob);

    $("#story").css("color", favoriteColor);
    $("#story").show();
  });
});