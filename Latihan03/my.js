$(
    function() {
        /**
            JQuery Tutorial
            JQuery is a library created by other developer which can be used to 
            1. manipulating html elements, xml elements
            2. navigating or calling a page from server

            JQuery actually an object / function
            you can call it using jQuery(parameter) or $(parameter)

            ELEMENT MANIPULATION :
                1. CREATE ELEMENT, we can create new element
                    using $('ELEMENT_STRING')  ex. $('<TABLE></TABLE>')
                2. SEARCHING ELEMENT :
                    using $('[selector]') and this will return an array of items founds
                    ex. $('div') will return [div,div,div,div....]
                3. MANIPULATING ELEMENT ATTRIBUTES/PROPERTY
                    a. add/remove property/attribute  ==> $('selector').attr([attributename],[attributevalue])
                        will result <element attributename="attributevalue">
                    b. get or set attribute value, you can use command above to set or get attribute value
                    c. add class, ==> $('selector').addClass('[classname]')
                    d. remove class ==> $('selector').removeClass('[classname]');
                    e. add inline style   ===> $('selector').css('[property]','[values]')
                    f. get inline style   ===> $('selector').css('[property]')
                    g. adding interactivity / events   ==> 
                            $('selector').on('[event_name]', function(e){
                                ...put your code here
                            });
                    h. trigger an event   $('selector').trigger('[event_name]');
                    i. remove an event 
                        $('selector').unbind('[event_name]', function(){

                       })
                       documentation : https://api.jquery.com/unbind/
                    j. remove an event 
                        $('selector').off('[event_name]', function(){

                        })
                        documentation : https://api.jquery.com/off/


                    MOST USED EVENTS
                        blur, focus
                        keyup, keydown, keypress
                        click, dblclick
                        mouseenter, mouseleave, mousemove, hover, toggle
                        

         * 
         * 
         */

        $('#tombol').on('click', function(){
            //we change #data value with namaku
            $('#data').val('namaku');
            $('#data').trigger('change')
        });

        $('#data').on('change',function(){
            $('#catatan').text($(this).val())
        })

        $('#data2').on('keydown',function(){
            $('#catatan').text($(this).val())
        })

        $('#data2').on('keyup',function(){
            $('#catatan').text($(this).val())
        })
    }
)

