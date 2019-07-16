function sequencia(num) { 
    let cont = 1;
    while ( num > 1) {
        if( num % 2 === 0 ) {
            num = num / 2;
        }else {
            num = ( num * 3 ) + 1;
        }

        cont++;
    }

    return cont;
}

let maiorNumero;
let maiorSequencia = 0;

for ( let i = 1; i < 1000000; i++ ) {
    let countSequencia = sequencia( i );
    if( countSequencia > maiorSequencia ) {
        maiorSequencia = countSequencia;
        maiorNumero = i;
    }
}

console.log( `Maior número: ${ maiorNumero } `);
console.log( `Sequência maior: ${ maiorSequencia } `);