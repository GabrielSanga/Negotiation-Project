export class Negociacao {

    constructor(
        public readonly _data: Date,
        public readonly _quantidade: number,
        public readonly _valor: number
    ){}

    get volume(): number{
        return this._valor * this._quantidade 
    }
}