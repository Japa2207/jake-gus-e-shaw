const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultados = document.querySelector(".caixa-resultados")
const textoResultado = document.querySelector(".texto-resultado")




const perguntas = [
            {
                enunciado: "No sofá da casa do parque, Mordecai e Rigby veem na TV um novo chat de Inteligência Artificial capaz de responder qualquer dúvida, criar imagens insanas e imitar vozes. Qual o primeiro pensamento?",
                alternativas: [
                    {
                        texto: "Isso é assustador! Podem criar um clone nosso!",
                        afirmacao: "No início ficou com medo de criar um clone digital e causar o caos no parque."
                    },
                    {
                        texto: "Isso é maravilhoso! Nunca mais vamos precisar pensar!",
                        afirmacao: "Se empolgou com a ideia de usar IA para facilitar as tarefas do dia a dia."
                    }
                ]
            },
            {
                enunciado: "Benson aparece gritando exigindo um relatório de manutenção do parque até o fim da tarde, ou vocês serão DEMITIDOS! Qual atitude tomar?",
                alternativas: [
                    {
                        texto: "Usar a IA para pesquisar os manuais técnicos e resumir tudo numa linguagem simples para vocês escreverem.",
                        afirmacao: "Conseguiu usar a IA como ferramenta de estudo para entregar o trabalho sem levar bronca do Benson."
                    },
                    {
                        texto: "Escrever o relatório conversando com o Saltitão, o Pairulito e usando seus próprios conhecimentos do parque.",
                        afirmacao: "Preferiu confiar nos próprios recursos e no conhecimento da galera do parque."
                    }
                ]
            },
            {
                enunciado: "Na hora do almoço, rola um debate acalorado sobre como a Inteligência Artificial pode impactar os empregos dos funcionários do parque no futuro. Como você se posiciona?",
                alternativas: [
                    {
                        texto: "Defender que a IA cria novas oportunidades e ajuda os funcionários a evoluírem.",
                        afirmacao: "Defendeu que a inovação pode abrir novos caminhos e melhorar o trabalho no parque."
                    },
                    {
                        texto: "Se preocupar com o Benson substituindo todos por robôs e defender a proteção aos trabalhadores.",
                        afirmacao: "Lutou pela importância do trabalho humano e por discussões éticas sobre tecnologia."
                    }
                ]
            },
            {
                enunciado: "Benson exige um cartaz para divulgar o grande evento do parque até o final do dia. O que fazer?",
                alternativas: [
                    {
                        texto: "Desenhar o cartaz no Paint do computador velho da recepção.",
                        afirmacao: "Mostrou que dominar ferramentas tradicionais ainda tem seu valor e ensinou os outros no parque."
                    },
                    {
                        texto: "Usar um gerador de imagens por IA para criar o cartaz em três segundos.",
                        afirmacao: "Usou a tecnologia para acelerar o processo criativo e surpreender a todos com imagens incríveis."
                    }
                ]
            },
            {
                enunciado: "O relatório de biologia do parque tá atrasado e o Rigby fez 100% pelo robô. O texto gerado acabou invocando um monstro dos anos 80 direto da tela! O que você faz?",
                alternativas: [
                    {
                        texto: "Achar que usar o texto direto do chat sem alterar nada não é um problema.",
                        afirmacao: "Infelizmente virou dependente da tecnologia e quase destruiu o parque no processo!"
                    },
                    {
                        texto: "Desligar o roteador, revisar o texto inteiro e corrigir os erros da máquina antes que o portal abra.",
                        afirmacao: "Percebeu que toda máquina erra e que o pensamento crítico humano é essencial para não causar o caos."
                    }
                ]
            }
        ];

        let atual = 0;
        let perguntaAtual;
        let historiaFinal = ""
        
        function mostraPergunta() {
            if(atual >= perguntas.length){
                mostraResultado()
       return
            }     
        perguntaAtual = perguntas[atual]
        caixaPerguntas.textContent ="";
         caixaAlternativas.textContent=""
        mostraAlternativas()
      }
     
        function mostraAlternativas(){
for  (const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button")
    botaoAlternativas.textContent = alternativa.texto
    botaoAlternativas.addEventListener("click",  ()=> respostasSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativas)
}
        }

        function respostasSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao
            historiaFinal += afirmacoes + ""
            atual++
            mostraPergunta()
        }
            function mostraResultado(){
                caixaPerguntas.textContent + "Em 2049 ..."
                textoResultado.textContent = historiaFinal
                caixaAlternativas.textContent = "";
            }
        

        
  mostraPergunta()  