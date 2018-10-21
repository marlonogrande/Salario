import {Funcionario} from"./Funcionario";

export class Terceirizado extends Funcionario{
	private horas_trab : number;
	private insalubre : boolean;
	
	public constructor (nome : string, horas : number, insalubre : boolean) {
		super(nome, 0)
		this.horas_trab = horas;
		this.insalubre = insalubre;
	}

	public calcSalario () : number {
		if (this.insalubre){
			return (4 * this.horas_trab) + 500;
		}
		return (4 * this.horas_trab);
	}

	public show() : void {
		if (this.insalubre){
			console.log("Ter " + this.nome + this.horas_trab + "h insalubre" + "\n" + "salario " + this.calcSalario());
		} else {
			console.log("Ter " + this.nome + " " + this.horas_trab + "h" + "\n" + "salario " + this.calcSalario());
		}
	}
}