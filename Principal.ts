declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Funcionario} from "./Funcionario";
import {Professor} from "./Professor";
import {STA} from "./STA";
import {Terceirizado} from "./Terceirizado";

let funcionarios : Array<Funcionario> = [];

console.log("\n");
console.log("sair - Sai do programa");
console.log("addprof - Adiciona um novo professor");
console.log("addsta - Adiciona um novo técnico administrativo");
console.log("addter - Adiciona um novo terceirizado");
console.log("descadastrar - Remove um funcionário da lista");
console.log("show - Mostra os dados do funcionário");
console.log("\n");

let comando : string = readline.question("Digite um comando: ");
while(comando != "sair"){

	if (comando == "addprof"){
		cadastrarProf();
	}

	else if (comando == "addsta"){
		cadastrarSta();
	}

	else if(comando == "addter"){
		cadastrarTer();
	}

	else if(comando == "descadastrar"){
		descadastrar();
	}

	else if(comando == "show"){
		let mostra: string = readline.question("Digite o nome do funcionario: ");
		let achou : boolean = false;
		for(let i of funcionarios){
			if(i.getNome() == mostra){
				i.show();
				achou = true;
				break;
			}
		}
		if(!achou){
			console.log("funcionario " + mostra + " nao existe");
		}
	}

	console.log("\n");
	console.log("sair - Sai do programa");
	console.log("addprof - Adiciona um novo professor");
	console.log("addsta - Adiciona um novo técnico administrativo");
	console.log("addter - Adiciona um novo terceirizado");
	console.log("descadastrar - Remove um funcionário da lista");
	console.log("show - Mostra os dados do funcionário");
	console.log("\n");

	comando = readline.question("Digite um comando: ");
}

function cadastrarProf() : void{
	let n:string = readline.question("Digite um nome: ");
	for(let i of funcionarios){
		if(i.getNome() == n){
			console.log("O funcionário já existe");
			return;
		}
	}
	let c:string = readline.question("Digite a classe: ");
	let prof: Professor = new Professor(n, c);// Objeto
	funcionarios.push(prof);
}

function cadastrarSta() : void{
	let n:string = readline.question("Digite um nome: ");
	for(let i of funcionarios){
		if(i.getNome() == n){
			console.log("O funcionário já existe");
			return;
		}
	}
	let nv:number = readline.question("Digite o nivel: ");
	let sta: STA = new STA(n, nv);//Objeto
	funcionarios.push (sta);0
}

function cadastrarTer() : void{
	let n:string = readline.question("Digite um nome: ");
	for(let i of funcionarios){
		if(i.getNome() == n){
			console.log("O funcionário já existe");
			return;
		}
	}
	let horas:number = readline.question("Digite as horas: ");
	let insalubre: string = readline.question("O funcionário é insalubre?: ");
	let ter: Terceirizado;
	if (insalubre == "nao"){
		ter = new Terceirizado(n,horas,false);
	} else if (insalubre == "sim") {
		ter = new Terceirizado(n,horas,true);
	} else {
		console.log("VIADO ESCREVE ESSE CARLAHO DIREITO");
	}
	funcionarios.push(ter);
}

function descadastrar() : void{
	let n : string = readline.question("Digite o nome a remover: ");
		for(let i = 0; i < funcionarios.length; i++){
			if(funcionarios[i].getNome() == n){
				funcionarios.splice(i)
				console.log("Funcionário descadastrado");
				return;
			}
		}
		console.log("O funcionário não está cadastrado")
	}








