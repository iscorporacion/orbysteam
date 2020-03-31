function msgBox(param) {
    Swal.fire({
        heightAuto: false,
        icon: param.type,
        text: param.text,
        confirmButtonText:"Aceptar"
    })
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("body").on("click",".item-empleado",function(e){
        e.preventDefault();
        console.log($(this).attr('id'));
    })
})