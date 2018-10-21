export class Funcionario{
	protected nome : string;
	private diaria : number;
	protected bonus : number;

	public constructor (nome : string, diaria : number){
		this.nome = nome;
		this.diaria = diaria;
		this.bonus = 0;
	}

	public setBonus(bonus : number) : void {
		this.bonus = bonus;
	}

	public addDiaria() : void {
		this.diaria++;
	}
	public getNome() : string {
		return this.nome;
	}

	public show() : void {
		return;
	}
}

