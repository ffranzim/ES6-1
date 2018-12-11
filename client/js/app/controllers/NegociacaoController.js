class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQtd = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }

    add(event) {
        event.preventDefault();

        console.log(typeof (this._inputData.value));
        console.log(this._inputData.value);

        let dataExpressaoRegular = new Date(this._inputData.value.replace(/-/g, '-'));
        console.log('dataExpressaoRegular: ' + dataExpressaoRegular);
        let dataExpressaoMuitoLouca = new Date(
            ...this._inputData.value.split('-').map(function (item, indice) {
                if (indice == 1) {
                    return (item - 1);
                }
                return item;
            }));

        console.log('dataExpressaoMuitoLouca: ' + dataExpressaoMuitoLouca);

        let dataExpressaoMuitoLoucaArrowFunction = new Date(
            ...this._inputData.value.split('-').map((item, indice) => {
                (item - indice % 2)
            }));
        console.log('dataExpressaoMuitoLoucaArrowFunction: ' + dataExpressaoMuitoLouca);

        let dataExpressaoMuitoLoucaArrowFunctionUmaUnicaExpressaoOmiteBloco =
            new Date(
                ...this._inputData.value.split('-').map(
                    (item, indice) => (item - indice % 2)
                )
            );
        console.log('dataExpressaoMuitoLoucaArrowFunctionUmaUnicaExpressaoOmiteBloco: ' + dataExpressaoMuitoLouca);


        let negociacao = new Negociacao(
            new Date(this._inputData.value.split('-')),
            this._inputQtd.value,
            this._inputValor.value
        );

        console.log(negociacao);
        // adiciona negociação em uma lista

    }

}