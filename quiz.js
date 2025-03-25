document.addEventListener("DOMContentLoaded", () => {
  const perguntasIniciais = [
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
  ];
  const perguntasDificeis = [
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

  let perguntas = perguntasIniciais;
  let perguntaAtual = 0;
  let pontuacao = 0;
  let respostaUsuario = [];
  let nivelAtual = "Fácil"; // Nova variável para rastrear o nível

  const elementPergunta = document.getElementById("pergunta");
  const elementOpcoes = document.getElementById("opcoes");
  const botaoSubmeter = document.getElementById("submeter");
  const elementoResultado = document.getElementById("resultado");
  const elementoNivel = document.getElementById("nivel"); // Novo elemento
  const popup = document.getElementById("popup");
  const botaoProximoNivel = document.getElementById("proximo-nivel");
  const botaoFecharPopup = document.getElementById("fechar-popup");

  function mostrarPergunta() {
    if (perguntaAtual < perguntas.length) {
      const pergunta = perguntas[perguntaAtual];
      if (!pergunta || !pergunta.opcoes) {
        // Verifica se pergunta ou opcoes é undefined
        console.error("Pergunta inválida:", pergunta);
        return;
      }

      elementoNivel.textContent = `Nível: ${nivelAtual}`;
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

      elementPergunta.style.display = "flex";
      elementOpcoes.style.display = "flex";

      elementoResultado.textContent = "";
      popup.style.display = "none";
    } else {
      mostrarResultado();
    }
  }

  // mostrarPergunta(perguntas[perguntaAtual]);

  function verificarResposta() {
    const opcaoSelecionada = document.querySelector(
      'input[name="opcao"]:checked'
    );
    if (!opcaoSelecionada) {
      elementoResultado.textContent = "Por favor, selecione uma opção!";
      return;
    }
    const resposta = opcaoSelecionada.value;
    respostaUsuario.push(resposta);

    const respostaCorreta = perguntas[perguntaAtual].resposta;

    if (resposta === respostaCorreta) {
      pontuacao++;
      elementoResultado.textContent = "Correto";
    } else {
      elementoResultado.textContent = `Errado, a resposta correta é: ${respostaCorreta}`;
    }
    perguntaAtual++;
    botaoSubmeter.disabled = true;

    setTimeout(() => {
      botaoSubmeter.disabled = false;
      elementoResultado.textContent = "";
      mostrarPergunta();
    }, 1000);
  }

  function mostrarResultado() {
    console.log("mostrarResultado chamado, pontuacao:", pontuacao);
    elementPergunta.style.display = "none";
    elementOpcoes.style.display = "none";
    botaoSubmeter.style.display = "none";
    elementoNivel.textContent = "";

    const porcentagemAcerto = (pontuacao / perguntas.length) * 100;

    if (pontuacao === perguntas.length) {
      popup.style.display = "flex";
      elementoResultado.innerHTML = "";
    } else {
      let resultadoHTML =
        porcentagemAcerto >= 70
          ? `<span class="mensagem-aprovado">Parabéns, você passou no teste com ${pontuacao} de ${perguntas.length} acertos!</span>`
          : `<span class="mensagem-reprovado">Você não passou no teste. Você acertou ${pontuacao} de ${perguntas.length} acertos, tente novamente!</span>`;

      resultadoHTML += "<br><br><h2>Respostas:</h2><br>";

      perguntas.forEach((pergunta, index) => {
        resultadoHTML += `<p><strong>Pergunta ${index + 1} -</strong> ${
          pergunta.pergunta
        }<br>`;
        resultadoHTML += `<strong>Resposta Correta:</strong> ${pergunta.resposta}<br>`;

        resultadoHTML += `<strong>Sua Resposta:</strong> ${
          respostaUsuario[index] ? respostaUsuario[index] : "Não respondida"
        }<br></p>`;
      });

      elementoResultado.innerHTML = resultadoHTML;
    }
  }

  function reiniciarQuiz(novoConjuntoPerguntas) {
    console.log(
      "reiniciarQuiz chamado, novoConjuntoPerguntas:",
      novoConjuntoPerguntas
    );
    perguntas = novoConjuntoPerguntas || perguntasIniciais;
    console.log("Conjunto de perguntas atualizado:", perguntas);// Se não passar novo conjunto, usa o inicial
    nivelAtual =
      novoConjuntoPerguntas === perguntasDificeis ? "Difícil" : "Fácil";
    perguntaAtual = 0;
    pontuacao = 0;
    respostaUsuario = [];
    elementoResultado.innerHTML = "";
    popup.style.display = "none";
    mostrarPergunta();
  }

  botaoSubmeter.addEventListener("click", verificarResposta);

  botaoProximoNivel.addEventListener("click", () => {
    console.log("Carregando perguntas difíceis...");
    reiniciarQuiz(perguntasDificeis); // Carrega as perguntas difíceis
  });

  botaoFecharPopup.addEventListener("click", () => {
    popup.style.display = "none";
    reiniciarQuiz(); // Reinicia o quiz com as perguntas iniciais
  });
  mostrarPergunta();
});
