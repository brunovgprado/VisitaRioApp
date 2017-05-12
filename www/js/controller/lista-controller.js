/**
 * Created by BPIPO on 07/12/2016.
 */
angular.module('visitario').controller('ListaController', function ($scope, $http, $timeout) {

    $scope.goDetalhes = false;
    $scope.filtro = '';

    var promise = $http.get('https://brunovitorprado.github.io/visitario/visitario.json')
        .success(function (dados) {

            var dadosVisitario = localStorage.getItem('dadosVisitario');
            var recebeDados = JSON.stringify(dados);

            //Verifica se o JSON está no localStorage
             if(!dadosVisitario){
                window.localStorage.setItem('dadosVisitario', JSON.stringify(dados));
                $scope.dados = dados;
                console.log("Pegou zerada!");
            }
            //Verifica se o JSON no localStorage é diferente do retorno da função
            else if(dadosVisitario != recebeDados){
                window.localStorage.setItem('dadosVisitario', JSON.stringify(dados));
                $scope.dados = dados;
                console.log("Pegou diferença!");
            }
            //Usa o JSON do localStorage caso as condições acima sejam "false"
            else{
                 $scope.dados = JSON.parse(dadosVisitario);
                 console.log("Usou dados locais");
             }
        })
        .error(function (erro) {
            console.log(erro);

            //Tenta usar o localStorage caso dê erro no promise
            var dadosVisitario = localStorage.getItem('dadosVisitario');
            var resgateDados = JSON.parse(dadosVisitario);
            $scope.dados = resgateDados;
            console.log("Usou dados locais após erro");
        });

    $timeout(function () {
        $scope.class = "show";
        $scope.iconeCarrega = "hide";
    }, 500);

    $scope.volta = function () {
        history.back();
    }

});

