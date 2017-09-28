$(document).ready(function(){
    
    $('form').submit(function(){
        var fn = $("input[type=text][name=firstname]").val();
        var ln = $("input[type=text][name=lastname]").val();
        var des = $("textarea[name=description]").val();
        // alert(des);
        $("#card").append('<div class="cardItem tog"><h3>' + fn + '</h3><h5>' + ln + '</h5><p>Click for description</p><div class="description tog"><p>'+des+'</p></div></div>');
        // $("#cardItem").append('<div class="cardItem description tog"><p>'+des+'</p></div>');
        return false;
    });

    $(document).on('click', '.cardItem', function(){
        // console.log($(this));
        $(this).children().toggle(200);
    });

});