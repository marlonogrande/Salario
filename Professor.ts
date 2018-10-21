import {Funcionario} from"./Funcionario";

export class Professor extends Funcionario{
	private classe: string;

	public constructor (nome : string, classe : string){
		super(nome, 0);
		this.classe = classe;
	}

	public calcSalario() : number{
		switch (this.classe) {
			case "A":
				return 3000 + this.bonus;
				break;
			case "B" :
				return 5000 + this.bonus;
				break;
			case "C" :
				return 7000 + this.bonus;
				break;
			case "D" :
				return 9000 + this.bonus;
				break;
			case "E" :
				return 11000 + this.bonus;
				break;
			default :
				break;
		}
	}

	public show() : void {
		console.log("Prof " + this.nome + " classse " +  this.classe + "\n" + "salario " + this.calcSalario());
	}

}