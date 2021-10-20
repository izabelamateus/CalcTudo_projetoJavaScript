//acessibilidade
tamanho = 20;
 function diminuir() {
     if(tamanho >=20 || tamanho < 20){
        tamanho --;
        document.body.style.fontSize = tamanho +"px";
     }
   
    
}
function aumentar() {
    if(tamanho >=20 || tamanho < 20){
        tamanho ++;
        document.body.style.fontSize = tamanho +"px";
    }
} 



//Dark Model
var controlador = 0;
dark = () => {
    
    if(controlador == 0){
       
        document.getElementById("topo").style.backgroundColor= 'black';
        document.getElementById("bloco1").style.backgroundColor= 'black';
        document.getElementById("bloco1").style.color= 'white';
        document.getElementById("dark").style.backgroundColor= 'white';
        document.getElementById("dark").style.color= 'black';
        document.getElementById("dark").innerHTML="<buttom>LightModel</buttom>";
        document.getElementById("blocos2").style.backgroundColor= 'black';
        document.getElementById("blocos2").style.color= 'white';
        document.getElementById("blocos2").style.backgroundColor= 'black';
        document.getElementById("blocos3").style.color= 'white';
        document.getElementById("blocos3").style.backgroundColor= 'black';
        document.getElementById("footer").style.backgroundColor= 'black';
        document.getElementById("footer").style.color= 'white';
        
        controlador ++
    }else if(controlador == 1){
        document.getElementById("topo").style.backgroundColor= '';
       
        document.getElementById("bloco1").style.backgroundColor= '';
        document.getElementById("bloco1").style.color= '';
        document.getElementById("dark").style.backgroundColor= '';
        document.getElementById("dark").style.color= '';
        document.getElementById("dark").innerHTML="<buttom>DarkModel</buttom>";
        document.getElementById("blocos2").style.backgroundColor= '';
        document.getElementById("blocos2").style.color= '';
        document.getElementById("blocos2").style.backgroundColor= '';
        document.getElementById("blocos3").style.color= '';
        document.getElementById("blocos3").style.backgroundColor= '';
        document.getElementById("footer").style.backgroundColor= '';
        document.getElementById("footer").style.color= '';

       
        controlador = 0;
    }
    
}
  
//conversor
converteMoney = () => {
    money = parseFloat(document.getElementById("money").value);
    moeda = document.getElementById("moedas").value;
    if(moeda == "dolar"){
        document.getElementById('resultado1').innerHTML = `R$ ${money} = US$ ${(money/5.08).toFixed(2)}`
    }else if(moeda == "euro"){
        document.getElementById('resultado1').innerHTML = `R$ ${money} =  &euro; ${(money/6.02).toFixed(2)}`
    }else{
        document.getElementById('resultado1').innerHTML = `Opção inválida!`;
    }
   /*  switch(moeda){
        case 'dolar':
            document.getElementById('resultado1').innerHTML = `R$ ${money} = US$ ${(money/5.08).toFixed(2)}`;
            break;
        case 'euro':
            document.getElementById('resultado1').innerHTML = `R$ ${money} =  &euro; ${(money/6.02).toFixed(2)}`;    
            break;
        default: 
        document.getElementById('resultado1').innerHTML = `Opção inválida!`;   
        break;    
    } */
}
converteTemp = () => {
    temperatura = parseFloat(document.getElementById("valorTemp").value);
    tempEscolhida = document.getElementById("temp").value;
    switch(tempEscolhida){
        case 'fahrenheit':
            document.getElementById('resultado2').innerHTML = ` ${temperatura} &#176;C  =  ${(temperatura* 9/5) + 32} &#176;F`;
            break;
        case 'kelvin':
            document.getElementById('resultado2').innerHTML = ` ${temperatura} &#176;C  =  ${(temperatura + 273.15)} K`; 
            break;
        default:
            document.getElementById('resultado2').innerHTML = `Opção inválida!`;   
            break;   
    }
} 

//calculadora
soma = () => {
    a = parseFloat(document.getElementById("valorA").value);
    b = parseFloat(document.getElementById("valorB").value);
    document.getElementById('resultado').innerHTML = `
    ${a} + ${b} = ${a+b}`
}       
subtrai = () => {
    a = parseFloat(document.getElementById("valorA").value);
    b = parseFloat(document.getElementById("valorB").value);
    document.getElementById('resultado').innerHTML = `
    ${a} - ${b} = ${a-b}`
}
multiplica = () => {
    a = parseFloat(document.getElementById("valorA").value);
    b = parseFloat(document.getElementById("valorB").value);
    document.getElementById('resultado').innerHTML = `
    ${a} x ${b} = ${a*b}`
}
divide = () => {
    a = parseFloat(document.getElementById("valorA").value);
    b = parseFloat(document.getElementById("valorB").value);
    document.getElementById('resultado').innerHTML = `
    ${a} / ${b} = ${a/b}`
}
modulo = () => {
    a = parseFloat(document.getElementById("valorA").value);
    b = parseFloat(document.getElementById("valorB").value);
    document.getElementById('resultado').innerHTML = `
    ${a} % ${b} = ${a%b}`
}
elevaA = () => {
    a = parseFloat(document.getElementById("valorA").value);
    document.getElementById('resultado').innerHTML = `
    ${Math.pow(a, 2)}`
}
elevaB = () => {
    a = parseFloat(document.getElementById("valorA").value);
    document.getElementById('resultado').innerHTML = `
     ${Math.pow(b, 2)}`
}
elevaAB = () => {
    a = parseFloat(document.getElementById("valorA").value);
    b = parseFloat(document.getElementById("valorB").value);
    document.getElementById('resultado').innerHTML = `
    ${Math.pow(a, b)}`
}