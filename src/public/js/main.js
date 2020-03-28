$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("body").on("click",".item-empleado",function(e){
        e.preventDefault();
        console.log($(this).attr('id'));
    })
})