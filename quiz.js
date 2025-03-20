document.addEventListener("DOMContentLoaded", () => {
  const perguntas = [
    {
      pergunta: "Qual é o maior animal terrestre?",
      opcoes: ["Elefante", "Girafa", "Hipopótamo", "Rinoceronte"],
      resposta: "Elefante",
    },
    {
      pergunta: 'Qual animal é conhecido como o "rei da selva"?',
      opcoes: ["Tigre", "Leão", "Urso", "Lobo"],
      resposta: "Leão",
    },
    {
      pergunta: "Qual é o maior mamífero marinho?",
      opcoes: ["Orca", "Baleia-azul", "Golfinho", "Foca"],
      resposta: "Baleia-azul",
    },
    {
      pergunta: "Qual animal tem o pescoço mais longo?",
      opcoes: ["Girafa", "Avestruz", "Cisne", "Camelo"],
      resposta: "Girafa",
    },
    {
      pergunta: "Qual é o animal mais rápido em terra?",
      opcoes: ["Leopardo", "Guepardo", "Cavalo", "Antílope"],
      resposta: "Guepardo",
    },
    {
      pergunta: "Qual animal é conhecido por mudar de cor para se camuflar?",
      opcoes: ["Camaleão", "Polvo", "Lagarto", "Sapo"],
      resposta: "Camaleão",
    },
    {
      pergunta: "Qual é o maior pássaro que não voa?",
      opcoes: ["Avestruz", "Pinguim", "Ema", "Casuar"],
      resposta: "Avestruz",
    },
    {
      pergunta: "Qual animal é símbolo da Austrália?",
      opcoes: ["Canguru", "Coala", "Diabo-da-tasmânia", "Wombat"],
      resposta: "Canguru",
    },
    {
      pergunta: "Qual é o maior réptil do mundo?",
      opcoes: [
        "Crocodilo-de-água-salgada",
        "Cobra-píton",
        "Tartaruga-gigante",
        "Iguana",
      ],
      resposta: "Crocodilo-de-água-salgada",
    },
    {
      pergunta: "Qual animal hiberna durante o inverno?",
      opcoes: ["Urso", "Leão", "Elefante", "Zebra"],
      resposta: "Urso",
    },
    {
      pergunta: "Qual animal é conhecido por sua tromba longa?",
      opcoes: ["Elefante", "Tamanduá", "Porco-espinho", "Anta"],
      resposta: "Elefante",
    },
    {
      pergunta: "Qual é o maior felino do mundo?",
      opcoes: ["Leão", "Tigre", "Leopardo", "Onça-pintada"],
      resposta: "Tigre",
    },
    {
      pergunta: "Qual animal pode viver tanto na água quanto na terra?",
      opcoes: ["Crocodilo", "Pinguim", "Golfinho", "Peixe-boi"],
      resposta: "Crocodilo",
    },
    {
      pergunta: "Qual é o animal mais alto da savana?",
      opcoes: ["Girafa", "Elefante", "Zebra", "Avestruz"],
      resposta: "Girafa",
    },
    {
      pergunta: "Qual animal é famoso por suas listras pretas e brancas?",
      opcoes: ["Zebra", "Tigre", "Panda", "Texugo"],
      resposta: "Zebra",
    },
    {
      pergunta: "Qual é o maior primata do mundo?",
      opcoes: ["Gorila", "Chimpanzé", "Orangotango", "Mandrill"],
      resposta: "Gorila",
    },
    {
      pergunta: "Qual animal usa um casco como proteção?",
      opcoes: ["Tartaruga", "Caranguejo", "Besouro", "Armadillo"],
      resposta: "Tartaruga",
    },
    {
      pergunta: "Qual é o animal mais venenoso do oceano?",
      opcoes: [
        "Água-viva-caixa",
        "Polvo-de-anéis-azuis",
        "Peixe-pedra",
        "Cobra-do-mar",
      ],
      resposta: "Água-viva-caixa",
    },
    {
      pergunta:
        "Qual animal é conhecido por carregar seus filhotes em uma bolsa?",
      opcoes: ["Canguru", "Coala", "Wombat", "Diabo-da-tasmânia"],
      resposta: "Canguru",
    },
    {
      pergunta: "Qual é o maior pássaro voador do mundo?",
      opcoes: ["Águia", "Albatroz", "Condor", "Pelicano"],
      resposta: "Albatroz",
    },
  ];

  let perguntaAtual = 0;
  let pontuacao = 0;
  let respostaUsuario = [];

  const elementPergunta = document.getElementById("pergunta");
  const elementOpcoes = document.getElementById("opcoes");
  const botaoSubmeter = document.getElementById("submeter");
  const elementoResultado = document.getElementById("resultado");

  function mostrarPergunta() {
    if (perguntaAtual >= 0 && perguntaAtual < perguntas.length) {
      const pergunta = perguntas[perguntaAtual];
      if (!pergunta || !pergunta.opcoes) {
        // Verifica se pergunta ou opcoes é undefined
        console.error("Pergunta inválida:", pergunta);
        return;
      }

      elementPergunta.textContent = pergunta.pergunta;
      elementOpcoes.innerHTML = "";

      pergunta.opcoes.forEach((opcao) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "opcao";
        radio.value = opcao;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(`${opcao}`));
        elementOpcoes.appendChild(label);
      });
    } else {
      // Fim do quiz
      elementPergunta.textContent = "Quiz concluído!";
      elementOpcoes.innerHTML = "";
      botaoSubmeter.style.display = "none";
      elementoResultado.textContent = `Sua pontuação: ${pontuacao} de ${perguntas.length}`;
    }
  }

  botaoSubmeter.addEventListener("click", () => {
    const opcaoSelecionada = document.querySelector(
      'input[name="opcao"]:checked'
    );
    if (!opcaoSelecionada) {
      elementoResultado.textContent = "Por favor, selecione uma opção!";
      return;
    }

    const respostaUsuario = opcaoSelecionada.value;
    const respostaCorreta = perguntas[perguntaAtual].resposta;

    if (respostaUsuario === respostaCorreta) {
      pontuacao++;
      elementoResultado.textContent = "Correto!";
    } else {
      elementoResultado.textContent = `Errado! A resposta correta é: ${respostaCorreta}`;
    }
    perguntaAtual++;
    setTimeout(() => {
      elementoResultado.textContent = ""; // Limpa o resultado após 1 segundo
      mostrarPergunta();
    }, 1000); // Aguarda 1 segundo antes de mostrar a próxima pergunta
  });

  mostrarPergunta();
});
