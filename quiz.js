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

  const perguntasMuitoDificeis = [
    {
      pergunta: "Qual animal tem o maior tempo de gestação entre os mamíferos?",
      opcoes: ["Elefante Africano", "Baleia-azul", "Girafa", "Rinoceronte"],
      resposta: "Elefante Africano", // Até 22 meses
    },
    {
      pergunta: "Qual é o único mamífero capaz de voar de verdade?",
      opcoes: ["Morcego", "Esquilo-voador", "Lêmure-voador", "Pterodáctilo"],
      resposta: "Morcego",
    },
    {
      pergunta:
        "Qual animal é conhecido por ter a mordida mais forte do reino animal?",
      opcoes: ["Crocodilo do Nilo", "Leão", "Tubarão-branco", "Hiena"],
      resposta: "Crocodilo do Nilo", // Força de mordida de até 5.000 psi
    },
    {
      pergunta:
        "Qual é o animal mais venenoso do mundo, capaz de matar um humano em poucas horas?",
      opcoes: [
        "Rã-dourada-venenosa",
        "Cobra Taipan",
        "Aranha-armadeira",
        "Escorpião-amarelo",
      ],
      resposta: "Rã-dourada-venenosa", // Uma rã contém veneno suficiente para matar 10 humanos
    },
    {
      pergunta:
        "Qual pássaro é conhecido por imitar sons, incluindo vozes humanas?",
      opcoes: ["Papagaio-cinza-africano", "Corvo", "Mainá", "Lira"],
      resposta: "Papagaio-cinza-africano",
    },
    {
      pergunta:
        "Qual animal marinho é famoso por ter três corações e mudar de cor para se camuflar?",
      opcoes: ["Polvo", "Lula", "Choco", "Náutilo"],
      resposta: "Polvo",
    },
    {
      pergunta:
        "Qual é o maior crustáceo do mundo, que pode viver mais de 100 anos?",
      opcoes: [
        "Caranguejo-dos-coqueiros",
        "Lagosta",
        "Siri-azul",
        "Caranguejo-real",
      ],
      resposta: "Caranguejo-dos-coqueiros", // Pode pesar até 4 kg e medir 1 metro
    },
    {
      pergunta:
        "Qual animal é conhecido por sua habilidade de regenerar membros inteiros, incluindo o cérebro?",
      opcoes: ["Estrela-do-mar", "Lagarto", "Polvo", "Salamandra"],
      resposta: "Estrela-do-mar",
    },
    {
      pergunta:
        "Qual é o menor mamífero do mundo, pesando apenas cerca de 2 gramas?",
      opcoes: [
        "Musaranho-pigmeu",
        "Morcego-abelha",
        "Rato-pigmeu",
        "Toupeira-anã",
      ],
      resposta: "Morcego-abelha",
    },
    {
      pergunta:
        "Qual animal é conhecido por dormir pendurado de cabeça para baixo e usar ecolocalização?",
      opcoes: ["Morcego", "Preguiça", "Tamanduá", "Tatu"],
      resposta: "Morcego",
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
  const fireworksContainer = document.getElementById("fireworks");

  // Função para iniciar a animação de fogos de artifício
  function startFireworks() {
    fireworksContainer.style.display = "block";
    particlesJS("fireworks", {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: {
          value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
        }, // Cores variadas
        shape: { type: "circle" },
        opacity: {
          value: 0.8,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0 },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.1 },
        },
        line_linked: { enable: false },
        move: {
          enable: true,
          speed: 6,
          direction: "top",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true,
        },
      },
      retina_detect: true,
    });
    if (fireworksTimeout) {
      clearTimeout(fireworksTimeout); // Limpa qualquer temporizador anterior
    }
    fireworksTimeout = setTimeout(() => {
      stopFireworks();
    }, 15000); // 15 segundos
  }

  // Função para parar a animação de fogos de artifício
  function stopFireworks() {
    fireworksContainer.style.display = "none";
    // Limpa as partículas existentes
    if (window.pJSDom && window.pJSDom[0]) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
  }

  function mostrarPergunta() {
    if (perguntaAtual < perguntas.length && nivelAtual !== "Muito Difícil") {
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

    if (pontuacao === perguntas.length && nivelAtual !== "Muito Difícil") {
      // Se acertou todas as perguntas e não está no último nível, mostra o popup
      popup.style.display = "flex";
      elementoResultado.innerHTML = "";
      startFireworks();
      // Atualiza o texto do popup com base no nível atual
      const popupContent = document.querySelector(".popup-content");
      if (nivelAtual === "Fácil") {
        popupContent.querySelector("h2").textContent = "Você passou de nível!";
        popupContent.querySelector("p").textContent =
          "Parabéns! Você acertou todas as perguntas. Deseja acessar perguntas mais difíceis?";
        botaoProximoNivel.textContent = "Acessar Perguntas Mais Difíceis";
      } else if (nivelAtual === "Difícil") {
        popupContent.querySelector("h2").textContent =
          "Você é um especialista!";
        popupContent.querySelector("p").textContent =
          "Incrível! Você acertou todas as perguntas difíceis. Deseja enfrentar o nível muito difícil?";
        botaoProximoNivel.textContent = "Acessar Nível Muito Difícil";
      }
    } else {
      stopFireworks();
      // Se não acertou todas ou está no nível "Muito Difícil", mostra o resultado final
      let resultadoHTML = "";
      if (nivelAtual === "Muito Difícil" && pontuacao === perguntas.length) {
        resultadoHTML = `<span class="mensagem-aprovado">Parabéns, você é um mestre dos animais! Você acertou todas as perguntas do nível Muito Difícil com ${pontuacao} de ${perguntas.length} acertos!</span>`;
      } else {
        resultadoHTML =
          porcentagemAcerto >= 70
            ? `<span class="mensagem-aprovado">Parabéns, você passou no teste com ${pontuacao} de ${perguntas.length} acertos!</span>`
            : `<span class="mensagem-reprovado">Você não passou no teste. Você acertou ${pontuacao} de ${perguntas.length} acertos, tente novamente!</span>`;
      }

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
    perguntas = novoConjuntoPerguntas || perguntasIniciais;
    if (novoConjuntoPerguntas === perguntasDificeis) {
      nivelAtual = "Difícil";
    } else if (novoConjuntoPerguntas === perguntasMuitoDificeis) {
      nivelAtual = "Muito Difícil";
    } else {
      nivelAtual = "Fácil";
    }
    perguntaAtual = 0;
    pontuacao = 0;
    respostaUsuario = [];
    elementoResultado.innerHTML = "";
    popup.style.display = "none";
    elementPergunta.style.display = "block";
    elementOpcoes.style.display = "flex";
    botaoSubmeter.style.display = "block";
    stopFireworks();
    mostrarPergunta();
  }

  botaoSubmeter.addEventListener("click", verificarResposta);

  botaoProximoNivel.addEventListener("click", () => {
   if (nivelAtual === "Fácil") {
     reiniciarQuiz(perguntasDificeis);
   } else if (nivelAtual === "Difícil") {
     reiniciarQuiz(perguntasMuitoDificeis);
   }
  });

  botaoFecharPopup.addEventListener("click", () => {
    popup.style.display = "none";
    reiniciarQuiz(); // Reinicia o quiz com as perguntas iniciais
  });
  mostrarPergunta();
});
