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
  const perguntasPaisesFacil = [
    {
      pergunta: "Qual é a capital do Brasil?",
      opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      resposta: "Brasília",
    },
    {
      pergunta: "Qual é a capital da França?",
      opcoes: ["Paris", "Londres", "Berlim", "Madri"],
      resposta: "Paris",
    },
    {
      pergunta: "Qual é a capital dos Estados Unidos?",
      opcoes: ["Nova York", "Los Angeles", "Chicago", "Washington, D.C."],
      resposta: "Washington, D.C.",
    },
    {
      pergunta: "Qual é a capital do Reino Unido?",
      opcoes: ["Manchester", "Edimburgo", "Birmingham", "Londres"],
      resposta: "Londres",
    },
    {
      pergunta: "Qual é a capital da Rússia?",
      opcoes: ["São Petersburgo", "Novosibirsk", "Ekaterinburg", "Moscou"],
      resposta: "Moscou",
    },
    {
      pergunta: "Qual é a capital do Japão?",
      opcoes: ["Osaka", "Quioto", "Nagoya", "Tóquio"],
      resposta: "Tóquio",
    },
  ];
  const perguntasPaisesDificeis = [
    {
      pergunta: "Qual é a capital da Nova Zelândia?",
      opcoes: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
      resposta: "Wellington",
    },
    {
      pergunta: "Qual é a capital do Cazaquistão?",
      opcoes: ["Almaty", "Astana", "Karaganda", "Shymkent"],
      resposta: "Astana",
    },
    {
      pergunta: "Qual é a capital do Canadá?",
      opcoes: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      resposta: "Ottawa",
    },
    {
      pergunta: "Qual é a capital da Austrália?",
      opcoes: ["Sydney", "Melbourne", "Perth", "Canberra"],
      resposta: "Canberra",
    },
    {
      pergunta: "Qual é a capital da Suécia?",
      opcoes: ["Gothenburg", "Malmö", "Uppsala", "Stockholm"],
      resposta: "Stockholm",
    },
    {
      pergunta: "Qual é a capital da Noruega?",
      opcoes: ["Bergen", "Trondheim", "Stavanger", "Oslo"],
      resposta: "Oslo",
    },
  ];
  const perguntasPaisesMuitoDificeis = [
    {
      pergunta: "Qual é a capital de Vanuatu?",
      opcoes: ["Port Vila", "Luganville", "Isangel", "Sola"],
      resposta: "Port Vila",
    },
    {
      pergunta: "Qual é a capital de Tuvalu?",
      opcoes: ["Funafuti", "Vaitupu", "Nukufetau", "Nanumea"],
      resposta: "Funafuti",
    },
    {
      pergunta: "Qual é a capital de Palau?",
      opcoes: ["Koror", "Melekeok", "Babeldaob", "Ngerulmud"],
      resposta: "Ngerulmud",
    },
    {
      pergunta: "Qual é a capital de San Marino?",
      opcoes: ["Serravalle", "Borgo Maggiore", "Domagnano", "San Marino"],
      resposta: "San Marino",
    },
    {
      pergunta: "Qual é a capital de Mônaco?",
      opcoes: ["Monte Carlo", "La Condamine", "Fontvieille", "Monaco-Ville"],
      resposta: "Monaco-Ville",
    },
    {
      pergunta: "Qual é a capital de Nauru?",
      opcoes: ["Aiwo", "Anabar", "Buada", "Yaren District"],
      resposta: "Yaren District",
    },
  ];
  const perguntasHistoriaFacil = [
    {
      pergunta: "Em que ano o Brasil foi descoberto pelos portugueses?",
      opcoes: ["1500", "1822", "1889", "1922"],
      resposta: "1500",
    },
    {
      pergunta: "Quem foi o primeiro imperador do Brasil?",
      opcoes: ["Dom Pedro II", "Dom João VI", "Dom Pedro I", "Tiradentes"],
      resposta: "Dom Pedro I",
    },
    {
      pergunta: "Quem foi o líder da Independência do Brasil em 1822?",
      opcoes: ["Dom Pedro I", "Dom João VI", "Getúlio Vargas", "Tiradentes"],
      resposta: "Dom Pedro I",
    },
    {
      pergunta: "Qual é o nome da cidade onde fica o Palácio do Planalto?",
      opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      resposta: "Brasília",
    },
  ];
  const perguntasHistoriaDificeis = [
    {
      pergunta:
        "Qual tratado definiu os limites entre Portugal e Espanha no Brasil colonial?",
      opcoes: [
        "Tratado de Tordesilhas",
        "Tratado de Utrecht",
        "Tratado de Madri",
        "Tratado de Paris",
      ],
      resposta: "Tratado de Tordesilhas",
    },
    {
      pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
      opcoes: ["1889", "1822", "1922", "1964"],
      resposta: "1889",
    },
    {
      pergunta: "Qual foi a principal causa da Revolução Farroupilha?",
      opcoes: [
        "Questão agrária",
        "Impostos sobre o charque",
        "Escravidão",
        "Independência de Portugal",
      ],
      resposta: "Impostos sobre o charque",
    },
    {
      pergunta:
        "Quem foi o presidente do Brasil durante a construção de Brasília?",
      opcoes: [
        "Juscelino Kubitschek",
        "Getúlio Vargas",
        "Eurico Gaspar Dutra",
        "Itamar Franco",
      ],
      resposta: "Juscelino Kubitschek",
    },
  ];
  const perguntasHistoriaMuitoDificeis = [
    {
      pergunta: "Qual foi o principal líder da Revolta dos Malês em 1835?",
      opcoes: [
        "Luiz Gama",
        "Zumbi dos Palmares",
        "Pacífico Licutan",
        "João Fernandes",
      ],
      resposta: "Pacífico Licutan",
    },
    {
      pergunta:
        "Qual foi o último presidente do período militar no Brasil (1964-1985)?",
      opcoes: [
        "Ernesto Geisel",
        "João Figueiredo",
        "Humberto de Alencar Castelo Branco",
        "Emílio Garrastazu Médici",
      ],
      resposta: "João Figueiredo",
    },
    {
      pergunta:
        "Qual foi a província brasileira que mais resistiu à Confederação do Equador em 1824?",
      opcoes: ["Pernambuco", "Bahia", "Ceará", "Rio de Janeiro"],
      resposta: "Pernambuco",
    },
    {
      pergunta:
        "Quem foi o autor do manifesto que deu origem à Revolução de 1930?",
      opcoes: [
        "Oswaldo Aranha",
        "Getúlio Vargas",
        "Plínio Salgado",
        "Luís Carlos Prestes",
      ],
      resposta: "Oswaldo Aranha",
    },
  ];

  let perguntas = perguntasIniciais;
  let perguntaAtual = 0;
  let pontuacao = 0;
  let respostaUsuario = [];
  let nivelAtual = "Fácil"; // Nova variável para rastrear o nível
  let assuntoSelecionado = "animais";

  const elementPergunta = document.getElementById("pergunta");
  const elementOpcoes = document.getElementById("opcoes");
  const botaoSubmeter = document.getElementById("submeter");
  const elementoResultado = document.getElementById("resultado");
  const elementoNivel = document.getElementById("nivel"); // Novo elemento
  const popup = document.getElementById("popup");
  const botaoProximoNivel = document.getElementById("proximo-nivel");
  const botaoFecharPopup = document.getElementById("fechar-popup");
  const fireworksContainer = document.getElementById("fireworks");
  const assuntoSelect = document.getElementById("assunto");
  const botaoSelecionarAssunto = document.getElementById("selecionar-assunto");

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

  // Função para carregar perguntas com base no assunto e nível
  function carregarPerguntas(assunto, nivel) {
    if (assunto === "paises") {
      if (nivel === "Fácil") perguntas = perguntasPaisesFacil;
      else if (nivel === "Difícil") perguntas = perguntasPaisesDificeis;
      else perguntas = perguntasPaisesMuitoDificeis;
    } else if (assunto === "historia") {
      if (nivel === "Fácil") perguntas = perguntasHistoriaFacil;
      else if (nivel === "Difícil") perguntas = perguntasHistoriaDificeis;
      else perguntas = perguntasHistoriaMuitoDificeis;
    } else {
      // Animais (padrão)
      if (nivel === "Fácil") perguntas = perguntasIniciais;
      else if (nivel === "Difícil") perguntas = perguntasDificeis;
      else perguntas = perguntasMuitoDificeis;
    }
    reiniciarQuiz();
  }

  // Evento para selecionar assunto
  botaoSelecionarAssunto.addEventListener("click", () => {
    assuntoSelecionado = assuntoSelect.value;
    carregarPerguntas(assuntoSelecionado, "Fácil");
  });

 function mostrarPergunta() {
   if (perguntaAtual < perguntas.length) {
     // Removido nivelAtual !== "Muito Difícil" para continuar sempre
     const pergunta = perguntas[perguntaAtual];
     if (!pergunta || !pergunta.opcoes) {
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

  // function mostrarResultado() {
  //   console.log("mostrarResultado chamado, pontuacao:", pontuacao);
  //   elementPergunta.style.display = "none";
  //   elementOpcoes.style.display = "none";
  //   botaoSubmeter.style.display = "none";
  //   elementoNivel.textContent = "";

  //   const porcentagemAcerto = (pontuacao / perguntas.length) * 100;

  //   if (pontuacao === perguntas.length && nivelAtual !== "Muito Difícil") {
  //     // Se acertou todas as perguntas e não está no último nível, mostra o popup
  //     popup.style.display = "flex";
  //     elementoResultado.innerHTML = "";
  //     startFireworks();
  //     // Atualiza o texto do popup com base no nível atual
  //     const popupContent = document.querySelector(".popup-content");
  //     if (nivelAtual === "Fácil") {
  //       popupContent.querySelector("h2").textContent = "Você passou de nível!";
  //       popupContent.querySelector("p").textContent =
  //         "Parabéns! Você acertou todas as perguntas. Deseja acessar perguntas mais difíceis?";
  //       botaoProximoNivel.textContent = "Acessar Perguntas Mais Difíceis";
  //     } else if (nivelAtual === "Difícil") {
  //       popupContent.querySelector("h2").textContent =
  //         "Você é um especialista!";
  //       popupContent.querySelector("p").textContent =
  //         "Incrível! Você acertou todas as perguntas difíceis. Deseja enfrentar o nível muito difícil?";
  //       botaoProximoNivel.textContent = "Acessar Nível Muito Difícil";
  //     }
  //   } else {
  //     stopFireworks();
  //     // Se não acertou todas ou está no nível "Muito Difícil", mostra o resultado final
  //     let resultadoHTML = "";
  //     if (nivelAtual === "Muito Difícil" && pontuacao === perguntas.length) {
  //       resultadoHTML = `<span class="mensagem-aprovado">Parabéns, você é um mestre dos animais! Você acertou todas as perguntas do nível Muito Difícil com ${pontuacao} de ${perguntas.length} acertos!</span>`;
  //     } else {
  //       resultadoHTML =
  //         porcentagemAcerto >= 70
  //           ? `<span class="mensagem-aprovado">Parabéns, você passou no teste com ${pontuacao} de ${perguntas.length} acertos!</span>`
  //           : `<span class="mensagem-reprovado">Você não passou no teste. Você acertou ${pontuacao} de ${perguntas.length} acertos, tente novamente!</span>`;
  //     }

  //     resultadoHTML += "<br><br><h2>Respostas:</h2><br>";

  //     perguntas.forEach((pergunta, index) => {
  //       resultadoHTML += `<p><strong>Pergunta ${index + 1} -</strong> ${
  //         pergunta.pergunta
  //       }<br>`;
  //       resultadoHTML += `<strong>Resposta Correta:</strong> ${pergunta.resposta}<br>`;
  //       resultadoHTML += `<strong>Sua Resposta:</strong> ${
  //         respostaUsuario[index] ? respostaUsuario[index] : "Não respondida"
  //       }<br></p>`;
  //     });

  //     elementoResultado.innerHTML = resultadoHTML;
  //   }
  // }
  function mostrarResultado() {
    elementPergunta.style.display = "none";
    elementOpcoes.style.display = "none";
    botaoSubmeter.style.display = "none";
    elementoNivel.textContent = "";

    const porcentagemAcerto = (pontuacao / perguntas.length) * 100;
    let resultadoHTML = "";

    // Verifica se deve mostrar o pop-up para próximo nível
    if (
      pontuacao === perguntas.length &&
      (nivelAtual === "Fácil" || nivelAtual === "Difícil")
    ) {
      popup.style.display = "flex";
      startFireworks();
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
      resultadoHTML = `<h2>Resultado Final - Nível: ${nivelAtual}</h2>`;
      resultadoHTML += `<p>Você acertou ${pontuacao} de ${
        perguntas.length
      } perguntas (${porcentagemAcerto.toFixed(2)}%)</p>`;
      resultadoHTML +=
        porcentagemAcerto >= 70
          ? `<span class="mensagem-aprovado">Parabéns, você passou no teste!</span>`
          : `<span class="mensagem-reprovado">Você não passou no teste, tente novamente!</span>`;
      resultadoHTML += "<br><br><h3>Resumo das Respostas:</h3><br>";

      perguntas.forEach((pergunta, index) => {
        const usuarioResposta = respostaUsuario[index] || "Não respondida";
        const acertou = usuarioResposta === pergunta.resposta;
        resultadoHTML += `
          <p>
            <strong>Pergunta ${index + 1}:</strong> ${pergunta.pergunta}<br>
            <strong>Resposta Correta:</strong> ${pergunta.resposta}<br>
            <strong>Sua Resposta:</strong> <span style="color: ${
              acertou ? "green" : "red"
            }">${usuarioResposta}</span><br>
            <strong>Status:</strong> ${acertou ? "Acerto" : "Erro"}
          </p>`;
      });
      elementoResultado.innerHTML = resultadoHTML;
    }
  }

  function reiniciarQuiz(novoConjuntoPerguntas) {
    perguntas = novoConjuntoPerguntas || perguntas; // Usa o conjunto atual se não especificado
    if (
      novoConjuntoPerguntas === perguntasDificeis ||
      novoConjuntoPerguntas === perguntasPaisesDificeis ||
      novoConjuntoPerguntas === perguntasHistoriaDificeis
    ) {
      nivelAtual = "Difícil";
    } else if (
      novoConjuntoPerguntas === perguntasMuitoDificeis ||
      novoConjuntoPerguntas === perguntasPaisesMuitoDificeis ||
      novoConjuntoPerguntas === perguntasHistoriaMuitoDificeis
    ) {
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

  // Adapte botaoProximoNivel para considerar o assunto
  botaoProximoNivel.addEventListener("click", () => {
    if (nivelAtual === "Fácil") {
      if (assuntoSelecionado === "paises")
        reiniciarQuiz(perguntasPaisesDificeis);
      else if (assuntoSelecionado === "historia")
        reiniciarQuiz(perguntasHistoriaDificeis);
      else reiniciarQuiz(perguntasDificeis);
    } else if (nivelAtual === "Difícil") {
      if (assuntoSelecionado === "paises")
        reiniciarQuiz(perguntasPaisesMuitoDificeis);
      else if (assuntoSelecionado === "historia")
        reiniciarQuiz(perguntasHistoriaMuitoDificeis);
      else reiniciarQuiz(perguntasMuitoDificeis);
    }
  });

  botaoFecharPopup.addEventListener("click", () => {
    popup.style.display = "none";
    reiniciarQuiz(); // Reinicia o quiz com as perguntas iniciais
  });
  mostrarPergunta();
});
