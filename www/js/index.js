/**
 * Created by BPIPO on 05/12/2016.
 */

// Esconde e exibe o campo de pesquisa
$(".divBusca").hide();
$(".btnFiltrar").on('touchstart', function () {
    $("body").scrollTop(0);
    $(".btnFiltrar").fadeOut();
    $(".divBusca").slideDown(500);
});
$(".btnOkBusca").on('touchstart', function () {
    $(".btnFiltrar").fadeIn();
    $(".divBusca").slideUp();
});
//Volta a página
$('.btnVoltar').on('touchend', function() {
    history.back()
});
