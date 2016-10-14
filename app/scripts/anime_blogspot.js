function iterate(){
    $("#Navbar1").css("display","none");
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