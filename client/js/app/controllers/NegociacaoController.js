class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQtd = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }

    add(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQtd.value,
            this._inputValor.value
        );

        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));

    }

}