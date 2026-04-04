const display = document.getElementById('display') as HTMLInputElement | null;

const botoes: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');

let expressao: string = '';
let resultado: string | number = '';

/**
 * @param valor
 */
function actualiza_display(valor: string | number): void {
    if (display) {
        display.value = valor.toString();
    }
}

function calcula_resultado(): void {
    try {
        const expressaoFormatada = expressao
            .replace(/🞨/g, '*')
            .replace(/÷/g, '/')
            .replace(/²/g, '**2')
            .replace(/%/g, '/100');

        const conta = eval(expressaoFormatada);
        
        resultado = conta;
        actualiza_display(resultado);

        expressao = resultado.toString();

    } catch (error) {
        actualiza_display('Operação inválida!');
        expressao = '';
    }
}

botoes.forEach((botao: HTMLButtonElement) => {
    botao.addEventListener('click', () => {

        const valor: string = botao.textContent ?? '';

        switch (botao.id) {
            case 'limpar':
                expressao = '';
                actualiza_display('');
                break;
            case 'igual':
                calcula_resultado();
                break;
            case 'porcento':
                expressao += '%';
                actualiza_display(expressao);
                break;
            case 'potencia':
                expressao += '²';
                actualiza_display(expressao);
                break;
            case 'pi':
                expressao += Math.PI.toString();
                actualiza_display(expressao);
                break;
            default:
                expressao += valor;
                actualiza_display(expressao);
        }
    });
});