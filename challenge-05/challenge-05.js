/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
 
var array = [1, 2, 3, 4, 5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function myFunction2(arg){
... return arg;}

myFunction(array)
[ 1, 2, 3, 4, 5 ]

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
function myFunction2(arg){
  return arg[1];
}

myFunction2(array); // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function otherFunction(arg, index){
... return arg [ index ];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var valores = [ 'gustavo', 2.5, true, [1, 2, 'Gustavo'], {b :2} ];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
> console.log( otherFunction(valores, 1)  ); // gustavo
gustavo
> console.log( otherFunction(valores, 2)  ); // 2.5
2.5
undefined
> console.log( otherFunction(valores, 4)  );
undefined

undefined
> console.log( otherFunction(valores, 3)  );
true
undefined

> console.log( otherFunction(valores, 5)  );
 NaN
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
