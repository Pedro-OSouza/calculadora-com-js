export default class Calculator {
    
    constructor({ operator = "", number1 = null, number2 = null, operation = "" } = {}){
        
        this.operator = operator
        this.operation = operation
        if (this.validarNum(number1, number2)){
            this.num1 = Number(number1)
            this.num2 = Number(number2)
        }
        this.operations = {
            somar: this.num1 + this.num2,
            multiplicar: this.num1 * this.num2,
            dividir: this.num1 / this.num2,
            subtrair: this.num1 - this.num2
        }
    }

    validarNum(num1, num2){
        return typeof num1 === "number" && typeof num2 === "number" && !Number.isNaN(num1) && !Number.isNaN(num2)  || "Erro, número inválido"
    }

    calcular(){
        if(!this.num1 || !this.num2){
            return alert("Números inválidos")
        }
        const calculo = this.operations[this.operation]

        return calculo
    }

}