function iterate(){
    $("#navbar").css("display","none");
}

$(
    function(){
        setInterval(
            function(){
                iterate();
            },1000
        );
        
    }
);