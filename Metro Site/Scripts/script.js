
// $(function(){
//     var content = $('#content');
//     content.on('click','article div.arrow',function(){
//         $(this).closest('article').toggleClass('selected');
//     });
// });


(function (document, window) {
    'use strict';
    $(document).on('click', 'article .arrow', function () {
        $(this).closest('article').toggleClass('selected');
    });

}(document, window));