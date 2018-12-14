class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQtd = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    add(event) {
        event.preventDefault();

        this._listaNegociacoes.add(this._createNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._resetForm();

        
        console.log(this._listaNegociacoes.negociacoes);
    }
    
    _createNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQtd.value,
            this._inputValor.value
        );

    }

    _resetForm() {
        this._inputQtd.value = 1;
        this._inputData.value = '';
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}