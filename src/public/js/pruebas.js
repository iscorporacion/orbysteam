$(document).ready(function () {
    (function ($) {        
        function btnPulsar(e) {
            let btnId = $(this).data("id");
            switch (btnId) {
                case 1:
                    msgBox({type:"error",text:"Pulsaste en el boton 1"})
                    break;
                case 2:
                    msgBox({type:"success",text:"Pulsaste en el boton 2"})
                    break;
                case 3:
                    msgBox({type:"info",text:"Pulsaste en el boton 3"})
                    break;
                case 4:
                    msgBox({type:"warning",text:"Pulsaste en el boton 4"})
                    break;

                default:

                    break;
            }
        }
        $("body").on("click", ".btnPulsar", btnPulsar);

        $(".card-body").append(`<button class="btn btn-success btnPulsar" data-id="4" data-cargo="cargo2">Pulsar 4</button>`);
    })(jQuery);
});

