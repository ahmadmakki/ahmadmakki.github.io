jQuery(document).ready(function(){

/* 
calling code to slider
*/

    "use strict";
    $('#slider-carousel').caroufredsel
    ({
        responsive:true,
        width:"100%",
        circular:true,
        scroll:{
            item:1,
            duration:500,
            pauseOnHover:true

        },
        auto:true,
        items:{

            visible:
            {
                min:1,
                max:1
            },
            height:"variable"

        },
        pagination:
        {
            container:".sliderpager",
            pageAnchorBuilder:false
        }
        
    });

/* 
to make the navbar return invible wen top page and colorfull when scroll 
*/

});








