/** fazer um função verificar()
 *  Consturir um if para idade
 * if idade menor que 10 anos --> criança
 * if idada entre 11 e 18 anos --> jovem
 * if idade entre 19 e 44 anos --> adulto
 * if idade maior que 44 anos --> velho
 */

 function verificar(){

    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#teste');
    var foto = document.getElementById('foto');


    if(fano.value.length == 0 || Number(fano.value) > ano){ // faz uma validação para saber se a idade e difernte de 0
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sexo = document.getElementsByName('sexo'); // seleciona o sexo
        var idade = ano - Number(fano.value); // transforma o valor em inteiro
        var genero = ''; //força o genero a inicar sem valor 
        if(sexo[0].checked){ // valida o campo radio
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                foto.src = 'foto-bebe-m.png';
            }else if (idade < 21){
                //jovem
                foto.src = 'foto-jovem-m.png';
            }else if (idade < 50){
                //adulto
                foto.src = 'foto-adulto-m.png';
            }else{
                //velho
                foto.src = 'foto-idoso-m.png'
            }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                foto.src = 'foto-bebe-f.png';
            }else if (idade < 21){
                //jovem
                foto.src = 'foto-jovem-f.png';
            }else if (idade < 50){
                //adulto
                foto.src = 'foto-adulto-f.png';
            }else{
                //velho
                foto.src = 'foto-idoso-f.png'
            }
        }
        res.innerHTML = `Detectamos que você é um(a) ${genero} com idade de ${idade} anos.`
    }     
 }
