class Aluno{
    private nome: string;
    private matricula: number;
    public passou: boolean = false;


    constructor(nome:string, matricula:number){
        this.nome = nome;
        this.matricula = matricula;

    }
    // this.passou = this.aprovado(this.media)
    aprovado (media:number){
        if(media >= 7){
            this.passou = true;
        
        }else{
            this.passou = false;
        }
        
        return this.passou
    }
}

interface Nota{
    cadeira:string;
    ponto:number;
    aluno:Aluno
}

export { Aluno, Nota };