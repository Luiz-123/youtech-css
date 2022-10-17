/* Menu Suave 
    $('header a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top,
            menuHeight = $('header').innerHeight();

        $('html, body').animate({
            scrollTop: targetOffset - menuHeight + 63
        }, 1000);
    });
*/



// Menu Suave Media Query
    function myFunction(x) {
        if (x.matches) { // If media query matches
            $('header a').click(function(e){
                e.preventDefault();
                var id = $(this).attr('href'),
                    targetOffset = $(id).offset().top,
                    menuHeight = $('header').innerHeight();

                $('html, body').animate({
                    scrollTop: targetOffset - menuHeight + 103
                }, 1000);
            });
        } else {
            $('header a').click(function(e){
                e.preventDefault();
                var id = $(this).attr('href'),
                    targetOffset = $(id).offset().top,
                    menuHeight = $('header').innerHeight();

                $('html, body').animate({
                    scrollTop: targetOffset - menuHeight + 63
                }, 1000);
            });
        }
    }
    var x = window.matchMedia("(max-width: 760px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
// Menu Suave Media Query Fim 



// Botão de Scrollbar //
    var mybutton = document.getElementById("btnScroll");
    // quando rolar a página 20px do topo para baixo, o botão será exibido
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    
    // // jQuery quando clicar no botão, a página rola para o topo do documento
    var btn = $("#btnScroll");

    btn.click(function() {
        $('html, body').animate({scrollTop:0}, 'slow');
    });
// Botão de Scrollbar Fim //