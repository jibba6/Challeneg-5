





    $("button").on("click", function(){
    
        var input = $(this).siblings("textarea").val()
        var hour = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(hour, input)
    
    
        });






$(".time-block").each(function(){
    var hour=$(this).attr("id").split("-")[1];
    var currentHour=moment().hours()
    if(currentHour > hour){
        $(this).addClass("past")
    } else if (currentHour < hour) {
        $(this).addClass("future")
    }
    else {
        $(this).addClass ("present")
    }
});

$("#hour-09").children("textarea").val(localStorage.getItem("09"));
$("#hour-10").children("textarea").val(localStorage.getItem("10"));
$("#hour-11").children("textarea").val(localStorage.getItem("11"));
$("#hour-12").children("textarea").val(localStorage.getItem("12"));
$("#hour-13").children("textarea").val(localStorage.getItem("13"));
$("#hour-14").children("textarea").val(localStorage.getItem("14"));
$("#hour-15").children("textarea").val(localStorage.getItem("15"));
$("#hour-16").children("textarea").val(localStorage.getItem("16"));
$("#hour-17").children("textarea").val(localStorage.getItem("17"));

$("#currentDay").text(moment().format("DD/MM/YYYY"));