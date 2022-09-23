export class Pessoa {

    constructor(nome) {
        if (nome === undefined || nome.length <= 0) {
            throw new Error("O nome é obrigatório para uma Pessoa");
        }
        this.nome = nome;
    }

    apresentar() {
        document.getElementById('app').innerHTML = `<h2>${this.nome}</h2>`;
    }

}