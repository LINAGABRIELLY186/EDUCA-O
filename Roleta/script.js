// Objeto com todas as questões separadas por turma
const questoes = {
    '2ano': [
    // ---- LÍNGUA PORTUGUESA ----
    { pergunta: "Leia o trecho: 'O gato correu para o telhado.' Qual é o animal citado na frase?", 
      opcoes: ["Cachorro", "Gato", "Pássaro", "Peixe"], respostaCorreta: 1 },

    { pergunta: "Leia: 'Maria ganhou uma boneca nova.' Quem ganhou a boneca?", 
      opcoes: ["Maria", "Ana", "João", "Pedro"], respostaCorreta: 0 },

    { pergunta: "Na palavra 'cachorro', quantas vezes aparece a letra 'r'?", 
      opcoes: ["1", "2", "3", "4"], respostaCorreta: 1 },

    { pergunta: "Leia: 'O menino chutou a bola no quintal.' O que o menino chutou?", 
      opcoes: ["Pedra", "Boneca", "Bola", "Cadeira"], respostaCorreta: 2 },

    { pergunta: "Qual palavra está escrita de forma correta?", 
      opcoes: ["Caza", "Kaza", "Casa", "Cassa"], respostaCorreta: 2 },

    { pergunta: "Em qual das opções todas as palavras têm a letra 'A'?", 
      opcoes: ["Pato, Mesa, Bola", "Pato, Pente, Livro", "Gato, Pato, Casa", "Gato, Livro, Pé"], respostaCorreta: 2 },

    { pergunta: "Leia: 'O sol brilha forte no céu.' Qual é o sujeito da frase?", 
      opcoes: ["O Sol", "Céu", "Forte", "Brilha"], respostaCorreta: 0 },

    { pergunta: "Qual das palavras representa um lugar?", 
      opcoes: ["Escola", "Correr", "Pular", "Bonito"], respostaCorreta: 0 },


    // ---- MATEMÁTICA ----
    { pergunta: "Qual é o resultado de 10 - 7?", 
      opcoes: ["2", "3", "4", "5"], respostaCorreta: 1 },

    { pergunta: "João tinha 5 balas e ganhou mais 4. Com quantas balas ele ficou?", 
      opcoes: ["7", "8", "9", "10"], respostaCorreta: 2 },

    { pergunta: "Qual número vem depois do 19?", 
      opcoes: ["18", "20", "21", "22"], respostaCorreta: 1 },

    { pergunta: "Se tenho 2 caixas com 6 lápis em cada uma, quantos lápis eu tenho no total?", 
      opcoes: ["10", "11", "12", "13"], respostaCorreta: 2 },
],

    '5ano': [
        { pergunta: "Ana acordou cedo naquele sábado ensolarado. Depois do café saiu com seu pai para a feira. Compraram frutas frescas e pão quentinho. No caminho de volta, ela avistou um cãozinho perdido e decidiu levá-lo para casa. O que Ana fez depois do café?", opcoes: ["Brincou com o cachorro", "Foi dormi novamente", "Foi à feira com o Pai", "Tomou banho"], respostaCorreta: 2 },
        { pergunta: "“As árvores balançavam suavemente com o vento, como se dançassem uma valsa silenciosa.” A expressão como se dançassem uma valsasilenciosa indica:", opcoes: ["Uma ordem", "Um fato", "Uma comparação", "Uma dúvida"], respostaCorreta: 2 },
        { pergunta: "Qual é o tema mais provável de um texto com o título: A Importância da Reciclagem?", opcoes: ["Como preparar bolos", " Cuidados com animais", "Separação de lixo e preservação do meio ambiente", "Jogos eletrônicos"], respostaCorreta: 2 },
        { pergunta: "“O menino chorava de alegria ao reencontrar sua mãe.” Qual o sentido da palavra “alegria” nesse contexto?", opcoes: ["Medo", "Tristeza", "Felicidade", "Desespero"], respostaCorreta: 2 },
        { pergunta: "A onça, com muita fome, procurava por comida. Encontrou um tatu, mas ele logo cavou um buraco e escapou. O que motivou a onça a procurar comida?", opcoes: ["Estava entediada", "Estava com fome", "Queria brincar", "Tinha medo de tatu"], respostaCorreta: 1 },
        { pergunta: "O livro é um amigo que nos acompanha em qualquer lugar.” Esse trecho utiliza:", opcoes: ["Uma explicação literal", "Uma comparação figurada", "Uma lista de características", " Uma instrução direta"], respostaCorreta: 1 },
        { pergunta: "Em qual alternativa há fato e não opinião?", opcoes: ["A borboleta é o inseto mais bonito do mundo", "As flores devem ser sempre rosas", "O Sol nasce todos os dias no Leste", "Todo mundo gosta de brigadeiro"], respostaCorreta: 2 },
        { pergunta: "Qual das palavras pode substituir “feliz” no trecho: “A menina estava feliz com o presente”?", opcoes: ["Alegria", "Triste", "Cansada", "Doente"], respostaCorreta: 0 },
        { pergunta: "Qual dessas planificações pode formar um cubo?", opcoes: ["Seis triângulos", "Seis quadrados", "Quatro retângulos", "Dois círculos"], respostaCorreta: 1 },
        { pergunta: "Assinale a alternativa que mostra apenas figuras planas:", opcoes: ["Cubo, Esfera, Pirâmide", " Retângulo, Círculo, Triângulo", "Cone, Cubo, Cilindro", "Esfera, Quadrado, Cubo"], respostaCorreta: 1 },
        { pergunta: "Qual instrumento usamos para medir o tempo?", opcoes: ["Balança", "Relógio", "Régua", "Termômetro"], respostaCorreta: 1 },
        { pergunta: "Faltam 3 meses para o aniversário de Ana. Em que mês será, se estamos em julho?", opcoes: ["Agosto", "Setembro", "Outubro", "Novembro"], respostaCorreta: 2 },

    ],
    '9ano': [
    // ---- LÍNGUA PORTUGUESA ----
        { pergunta: "Leia o trecho: 'A chuva caiu durante toda a noite, mas, pela manhã, o sol apareceu.' O conectivo 'mas' indica:", 
        opcoes: ["Adição", "Oposição/contraste", "Causa", "Conclusão"], respostaCorreta: 1 },

        { pergunta: "No trecho: 'Ela correu rápido para não perder o ônibus', a expressão 'para não perder' indica:", 
        opcoes: ["Causa", "Finalidade", "Condição", "Tempo"], respostaCorreta: 1 },

        { pergunta: "Qual das opções apresenta apenas substantivos?", 
        opcoes: ["Casa, amizade, caderno", "Correr, livro, estudar", "Bonito, escola, rápido", "Amar, vida, correr"], respostaCorreta: 0 },

        { pergunta: "Em 'O aluno estudou bastante, portanto tirou boa nota', a palavra 'portanto' indica:", 
        opcoes: ["Causa", "Adição", "Conclusão", "Condição"], respostaCorreta: 2 },

        { pergunta: "No período: 'Se chover, não sairemos de casa', a oração 'Se chover' expressa:", 
        opcoes: ["Causa", "Condição", "Conclusão", "Explicação"], respostaCorreta: 1 },

        { pergunta: "No texto narrativo, qual é o papel do narrador?", 
        opcoes: ["Descrever apenas personagens", "Relatar a história", "Ensinar regras de escrita", "Mostrar gráficos e tabelas"], respostaCorreta: 1 },

        { pergunta: "Em uma notícia, qual elemento é essencial?", 
        opcoes: ["A opinião do autor", "A data de publicação", "A apresentação de fatos reais", "O uso de rimas"], respostaCorreta: 2 },

        { pergunta: "Na frase: 'O aluno é esforçado, mas precisa de orientação', a conjunção 'mas' poderia ser substituída por:", 
        opcoes: ["Logo", "Porém", "Portanto", "E"], respostaCorreta: 1 },


        // ---- MATEMÁTICA ----
        { pergunta: "Resolva: 2x + 5 = 15. O valor de x é:", 
        opcoes: ["4", "5", "6", "7"], respostaCorreta: 0 },

        { pergunta: "Um celular custa R$ 1.200,00 e teve desconto de 10%. Qual foi o valor pago?", 
        opcoes: ["R$ 1.080,00", "R$ 1.100,00", "R$ 1.090,00", "R$ 1.020,00"], respostaCorreta: 0 },

        { pergunta: "Em uma turma de 40 alunos, 60% são meninas. Quantas meninas há nessa turma?", 
        opcoes: ["20", "22", "24", "26"], respostaCorreta: 2 },

        { pergunta: "O gráfico de barras mostra as notas de João em quatro provas: 5, 7, 8 e 10. Qual foi a média das notas?", 
        opcoes: ["7", "7,5", "8", "8,5"], respostaCorreta: 1 },
    ]

};

let turmaSelecionada = '';
let questaoAtual = null;
let anguloAtual = 0;
const letrasAlternativas = ['A', 'B', 'C', 'D'];

function iniciarJogo(turma) {
    turmaSelecionada = turma;
    document.getElementById('tela-inicial').classList.remove('tela-ativa');
    document.getElementById('tela-inicial').classList.add('tela-oculta');
    document.getElementById('tela-jogo').classList.remove('tela-oculta');
    document.getElementById('tela-jogo').classList.add('tela-ativa');
}

function voltarParaSelecaoDeAno() {
    document.getElementById('tela-jogo').classList.remove('tela-ativa');
    document.getElementById('tela-jogo').classList.add('tela-oculta');
    document.getElementById('tela-inicial').classList.remove('tela-oculta');
    document.getElementById('tela-inicial').classList.add('tela-ativa');
    document.getElementById('questao-container').classList.add('questao-oculta');
}

function girarRoleta() {
    const roleta = document.getElementById('roleta');
    const voltasCompletas = 5;
    const anguloAleatorio = Math.floor(Math.random() * 360);
    const novoAngulo = anguloAtual + (voltasCompletas * 360) + anguloAleatorio;

    roleta.style.transform = `rotate(${novoAngulo}deg)`;
    anguloAtual = novoAngulo;

    setTimeout(() => {
        // A lógica para 12 setores (360/12 = 30)
        // O +15 é para centralizar o ponteiro no meio do setor de 30 graus
        const setorParado = Math.floor(((360 - (anguloAtual % 360) + 15) % 360) / 30);
        exibirQuestao(setorParado);
    }, 3000);
}

function exibirQuestao(indice) {
    const questoesDaTurma = questoes[turmaSelecionada];
    
    // Agora que o setor pode ser de 0 a 11, não precisamos mais do fallback
    // Mas é uma boa prática ter, caso o indice seja maior que o número de questões
    if (questoesDaTurma[indice]) {
        questaoAtual = questoesDaTurma[indice];
    } else {
        const indiceAleatorio = Math.floor(Math.random() * questoesDaTurma.length);
        questaoAtual = questoesDaTurma[indiceAleatorio];
    }
    
    const questaoContainer = document.getElementById('questao-container');
    const enunciado = document.getElementById('enunciado-questao');
    const opcoesContainer = document.getElementById('opcoes-container');
    const feedback = document.getElementById('feedback');

    enunciado.textContent = questaoAtual.pergunta;
    opcoesContainer.innerHTML = '';
    feedback.textContent = '';

    questaoAtual.opcoes.forEach((opcao, i) => {
        const botaoOpcao = document.createElement('button');
        botaoOpcao.textContent = `${letrasAlternativas[i]}) ${opcao}`;
        botaoOpcao.onclick = () => verificarResposta(i);
        opcoesContainer.appendChild(botaoOpcao);
    });

    questaoContainer.classList.remove('questao-oculta');
}

function verificarResposta(indiceResposta) {
    const feedback = document.getElementById('feedback');

    if (indiceResposta === questaoAtual.respostaCorreta) {
        feedback.textContent = 'Parabéns! Resposta correta!🤩👏🏼';
        feedback.style.color = 'white';
        
        // Adiciona a classe de animação
        feedback.classList.add('animacao-correta');

        // Remove depois para poder reaplicar na próxima vez
        setTimeout(() => feedback.classList.remove('animacao-correta'), 2000);

        // Dispara a animação de confetes com emojis
        jsConfetti.addConfetti({
            emojis: ['🥳', '🎉', '🎈'],
            emojiSize: 40,
            confettiNumber: 150,
        });

        // Confete colorido normal também
        jsConfetti.addConfetti({
            confettiColors: ['#ff0', '#0f0', '#00f', '#f0f', '#ff5733'],
            confettiNumber: 200,
        });

    } else {
        feedback.textContent = `Ops! Resposta incorreta. A resposta correta era: ${letrasAlternativas[questaoAtual.respostaCorreta]}) ${questaoAtual.opcoes[questaoAtual.respostaCorreta]}`;
        feedback.style.color = 'red';
    }
}
