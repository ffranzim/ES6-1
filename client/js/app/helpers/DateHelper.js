class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode/deve ser instanciada.');
    }

    static textoParaData(texto) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            return new Date(
                ...texto.split('-')
                    .map((item, indice) => (item - indice % 2)));
                
        }
        throw new Error('Data fora do formato: yyyy-MM-dd');
    }

    static dataParaTexto(data) {
        return  `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }


}