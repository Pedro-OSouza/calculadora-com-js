// modules/view.js
import Calculator from "./calculadora.js";

class View {
    constructor(input, btn) {
        this.input = document.getElementById(input);
        this.button = document.querySelectorAll(`.${btn}`);
        this.objeto = {};
        this.button.forEach((btn) => {
            btn.addEventListener("click", () => this.type(btn));
        });
    }

    static regrasValidacao(input, objeto, btn) {
        return {
            primeiroCaractere: btn?.classList?.contains("operator") && input.length === 0,
            operadorDuplicado: btn?.classList?.contains("operator") && objeto.operator,
            operadorNoFinal: btn?.classList?.contains("equal") && isNaN(input[input.length - 1]),
            igualSemOperador: btn?.classList?.contains("equal") && !objeto.operator
        };
    }

    limpar() {
        this.input.value = "";
        this.objeto.operator = "";
        this.objeto.operation = "";
    }

    type(btn) {
        const acoes = {
            "clear": () => this.limpar(),
            "delete": () => {
                const lastChar = this.input.value.slice(-1);
                this.input.value = this.input.value.slice(0, -1);
                if (["+", "-", "*", "/"].includes(lastChar)) {
                    this.objeto.operator = "";
                    this.objeto.operation = "";
                }
            },
            "calcular": () => { this.objetoConstructor(); this.calcular(); },
            "somar": () => { this.definirOperador(btn); this.exibir(btn.value); },
            "subtrair": () => { this.definirOperador(btn); this.exibir(btn.value); },
            "multiplicar": () => { this.definirOperador(btn); this.exibir(btn.value); },
            "dividir": () => { this.definirOperador(btn); this.exibir(btn.value); }
        };

        if (!this.validarView(btn)) return;

        (acoes[btn.getAttribute("operation")] || (() => this.exibir(btn.value)))();
    }

    definirOperador(btn) {
        this.objeto.operator = btn.value;
        this.objeto.operation = btn.getAttribute("operation");
    }

    validarView(btn) {
        let input = this.input.value;
        let objeto = this.objeto;

        return !Object.values(View.regrasValidacao(input, objeto, btn)).some(validacao => validacao);
    }

    exibir(value, result) {
        if (result) {
            this.input.value = Number(value).toLocaleString('pt-BR');
            return;
        }
        this.input.value += value;
    }

    objetoConstructor() {
        const valueToCalc = this.input.value;
        const [number1, number2] = valueToCalc.split(this.objeto.operator);

        this.objeto.number1 = number1;
        this.objeto.number2 = number2;
    }

    calcular() {
        let calculadora = new Calculator(this.objeto);
        if (calculadora.calcular()) {
            this.exibir(calculadora.calcular(), true);
            this.objeto.operator = "";
            this.objeto.operation = "";
        }
    }
}

export default View;
