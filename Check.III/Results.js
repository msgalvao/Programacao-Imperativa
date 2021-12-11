const Aluno = require('./aluno');
const curso = require('./curso');

const estudante1 = new Aluno('João', 2, [7, 8, 9]);
const estudante2 = new Aluno('Maria', 3, [9, 7, 8]);
const estudante3 = new Aluno('José', 1, [9, 7, 8]);
const estudante4 = new Aluno('Pedro', 2, [9, 7, 8]);
const estudante5 = new Aluno('Ana', 1, [6, 7, 7]);

curso.adicionarAluno(estudante1, estudante2, estudante3, estudante4, estudante5)
console.log(curso.aprovarAluno(estudante5))
console.log(curso.listarAprovados())