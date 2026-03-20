const display = document.getElementById('display');
const botoes = document.querySelectorAll('button');

let expressao = '';
let resultado = '';

//FUNÇÃO PARA ATUALIZAR O DISPLAY COM O VALOR PASSADO COMO PARÂMETRO
function actualiza_display(valor) {
    display.value = valor;
}

//FUNÇÃO PARA CALCULAR O RESULTADO DA EXPRESSÃO ATUALMENTE NO DISPLAY
function calcula_resultado() {
    try {
        resultado = eval(expressao.replace('🞨', '*').replace('÷', '/').replace('²', '**2').replace('%', '/100'));
        actualiza_display(resultado);
        expressao = resultado.toString();

    } catch (error) {
        actualiza_display('Operação inválida!');
        expressao = '';
    }
}

//ADICIONA UM EVENTO DE CLIQUE A CADA BOTÃO PARA CONSTRUIR A EXPRESSÃO E CALCULAR O RESULTADO
botoes.forEach(botao => {
    botao.addEventListener('click', ()=> {
        const valor = botao.textContent;

        switch(botao.id) {
            case 'limpar':
                expressao = '';
                actualiza_display('')
                break;
            case 'igual':
                calcula_resultado();
                break;
            case 'porcento':
                expressao += '%';
                actualiza_display(expressao)
                break;
            case 'potencia':
                expressao += '²';
                actualiza_display(expressao);
                break;
            case 'pi':
                expressao += '3.1415926536';
                actualiza_display(expressao);
                break;
            default:
                expressao += valor;
                actualiza_display(expressao);
        }
    });
})
