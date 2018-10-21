import {Funcionario} from"./Funcionario";

export class STA extends Funcionario{
	private nivel : number;

	public constructor (nome : string, nivel : number){
		super(nome, 0);
		this.nivel = nivel;
	}

	public calcSalario() : number{
		return 3000 + (300 * this.nivel);
	}

	public show() : void {
		console.log("STA " + this.nome + "nivel " + this.nivel + "\n" + "salario " + this.calcSalario());
	}
}