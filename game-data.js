/* =========================================================
   Projeto EFE — Quiz de Perfil Financeiro
   game-data.js
   Fonte única de verdade: perguntas, eixos e perfis.
   Usado por index.html (quiz) e tv.html (telão).
   ========================================================= */

// Eixo X: planejamento  -2 = Impulso  |  +2 = Controle
// Eixo Y: segurança     -2 = Ansiedade |  +2 = Confiança
//
// Cada opção representa um "canto" do quadrado (um dos 4 perfis).
// A soma das 12 respostas define em que quadrante o aluno cai.
const VECTORS = {
  gastador:   { x: -2, y:  2 }, // impulso + confiante
  poupador:   { x:  2, y: -2 }, // controle + ansioso
  malabarista:{ x: -2, y: -2 }, // impulso + ansioso (reativo, sem plano)
  investidor: { x:  2, y:  2 }, // controle + confiante
};

const QUESTIONS = [
  {
    text: "Você achou R$ 200 no bolso de uma jaqueta velha. O que você faz?",
    options: [
      { key: "gastador",    label: "Aproveito pra comprar algo que eu já queria, sem pensar muito." },
      { key: "poupador",    label: "Guardo tudo — prefiro ter de sobra caso precise depois." },
      { key: "malabarista", label: "Uso pra resolver o que estiver pendente no momento." },
      { key: "investidor",  label: "Coloco numa reserva e penso com calma no que fazer depois." },
    ],
  },
  {
    text: "Seu celular quebrou a tela, mas ainda funciona. O que você decide?",
    options: [
      { key: "gastador",    label: "Aproveito a desculpa e já troco por um modelo mais novo." },
      { key: "poupador",    label: "Prefiro continuar usando assim a gastar com conserto." },
      { key: "malabarista", label: "Vou deixando pra resolver depois, conforme sobrar tempo ou dinheiro." },
      { key: "investidor",  label: "Pesquiso os preços antes de decidir se compensa consertar ou trocar." },
    ],
  },
  {
    text: "Um amigo te chama de última hora pra um show que você queria muito ir.",
    options: [
      { key: "gastador",    label: "Vou, e resolvo o resto do mês depois." },
      { key: "poupador",    label: "Não vou, mesmo com vontade, porque não estava nos meus planos." },
      { key: "malabarista", label: "Decido na hora, sem saber direito se vai sobrar depois." },
      { key: "investidor",  label: "Confiro se o que separei pra lazer nesse mês ainda cobre isso." },
    ],
  },
  {
    text: "Como você costuma reagir a promoções tipo \u201cLeve 3, Pague 2\u201d?",
    options: [
      { key: "gastador",    label: "Acabo levando mais do que vim buscar, porque é vantagem." },
      { key: "poupador",    label: "Levo só o estritamente necessário, se tanto." },
      { key: "malabarista", label: "Levo na empolgação e só depois vejo o que isso mexeu no mês." },
      { key: "investidor",  label: "Só compro se for algo que eu já uso no dia a dia." },
    ],
  },
  {
    // pergunta direta de autoavaliação (estilo Quizur), em vez de cenário
    text: "Como você descreveria seu conhecimento sobre finanças pessoais hoje?",
    options: [
      { key: "gastador",    label: "Sei o básico, mas confesso que não coloco muito em prática." },
      { key: "poupador",    label: "Sei guardar dinheiro, mas tenho receio de investir no que não conheço." },
      { key: "malabarista", label: "Vou aprendendo aos poucos, mas ainda não organizei isso na prática." },
      { key: "investidor",  label: "Gosto de estudar sobre o assunto e tento aplicar o que aprendo." },
    ],
  },
  {
    text: "Quando o assunto é cartão de crédito, você\u2026",
    options: [
      { key: "gastador",    label: "Uso bastante — o limite meio que vira uma extensão da minha renda." },
      { key: "poupador",    label: "Evito usar, prefiro Pix ou dinheiro à vista." },
      { key: "malabarista", label: "Uso sem muito planejamento, geralmente decido na hora." },
      { key: "investidor",  label: "Uso estrategicamente pra acumular benefícios, mas pago a fatura inteira." },
    ],
  },
  {
    // pergunta direta de autoavaliação (estilo Quizur), em vez de cenário
    text: "Qual frase te representa melhor quando o assunto é dinheiro?",
    options: [
      { key: "gastador",    label: "Vivo o momento — penso nas consequências financeiras depois." },
      { key: "poupador",    label: "Prefiro abrir mão de coisas boas a correr o risco de faltar dinheiro." },
      { key: "malabarista", label: "Vou decidindo as coisas conforme elas aparecem, sem muito plano." },
      { key: "investidor",  label: "Prefiro pensar antes de agir, mesmo que demore um pouco mais." },
    ],
  },
  {
    text: "Faltam 5 dias pro fim do mês e você quer sair. Como está seu saldo?",
    options: [
      { key: "gastador",    label: "Já não tenho muita margem, mas dou um jeito de sair mesmo assim." },
      { key: "poupador",    label: "Sobra bastante, porque eu saio pouco justamente pra não gastar." },
      { key: "malabarista", label: "Não sei bem quanto tenho — decido na hora se dá pra ir." },
      { key: "investidor",  label: "Controlado — ainda tenho a parte que separei pro lazer desse mês." },
    ],
  },
  {
    text: "Você quer comprar um videogame ou notebook caro. Qual sua estratégia?",
    options: [
      { key: "gastador",    label: "Parcelo em várias vezes e vou ajustando o orçamento depois." },
      { key: "poupador",    label: "Acabo desistindo, prefiro não gastar tanto de uma vez." },
      { key: "malabarista", label: "Decido no impulso e vou ajustando o mês conforme os boletos chegam." },
      { key: "investidor",  label: "Guardo aos poucos até ter o valor pra pagar à vista ou negociar desconto." },
    ],
  },
  {
    text: "Qual frase melhor define sua relação com roupas?",
    options: [
      { key: "gastador",    label: "Compro com frequência, gosto de renovar o guarda-roupa." },
      { key: "poupador",    label: "Só compro quando realmente preciso substituir algo." },
      { key: "malabarista", label: "Compro na empolgação e só depois vejo como encaixa nos meus gastos." },
      { key: "investidor",  label: "Compro o necessário, buscando custo-benefício." },
    ],
  },
  {
    // pergunta direta de autoavaliação (estilo Quizur), em vez de cenário
    text: "Qual seu principal objetivo com o dinheiro hoje?",
    options: [
      { key: "gastador",    label: "Ter liberdade pra aproveitar o presente." },
      { key: "poupador",    label: "Nunca ser pego de surpresa por um imprevisto." },
      { key: "malabarista", label: "Dar conta do que aparece, sem um plano de longo prazo ainda." },
      { key: "investidor",  label: "Construir algo maior no futuro, mesmo que exija paciência agora." },
    ],
  },
  {
    text: "Como você acompanha seus gastos mensais?",
    options: [
      { key: "gastador",    label: "Não acompanho de perto, vou pelo que sinto que tenho disponível." },
      { key: "poupador",    label: "Anoto cada centavo, gosto de ter controle total." },
      { key: "malabarista", label: "Não tenho um método fixo — às vezes anoto, às vezes esqueço." },
      { key: "investidor",  label: "Uso um app, planilha ou caderno pra ter uma visão organizada." },
    ],
  },
];

const PROFILES = {
  gastador: {
    id: "gastador",
    name: "O Gastador",
    nickname: "\u201cCarpe Diem\u201d",
    emoji: "🎉",
    color: "#FF3D3D",
    description:
      "Você vive o hoje com intensidade máxima — se o dinheiro chegou, ele já sabe que vai rolar. Planejamento financeiro pra você é tipo série: sempre fica pra próxima temporada. Ninguém comemora uma vitória (ou um dia comum) melhor que você.",
    tips: [
      "Antes de comprar por impulso, espera 24h. Se ainda quiser depois, compra com consciência.",
      "Separa uma \u201cgrana de curtição\u201d fixa por mês — assim dá pra aproveitar sem culpa e sem susto.",
      "Testa a regra 50-30-20: 50% necessidades, 30% desejos, 20% reserva. Seu \u201cdesejos\u201d já tá garantido.",
    ],
  },
  poupador: {
    id: "poupador",
    name: "O Poupador",
    nickname: "\u201cTio Patinhas\u201d",
    emoji: "🐷",
    color: "#3D7BFF",
    description:
      "Você é o guardião oficial da poupança — cada real é sagrado e tem destino certo. Só que às vezes a ansiedade fala mais alto que a razão, e você acaba abrindo mão de coisas boas com medo do \u201ce se der errado\u201d.",
    tips: [
      "Define um valor pequeno todo mês só pra gastar sem culpa — economizar também é cuidar de você.",
      "Calcula uma reserva de emergência com valor definido (não \u201cinfinito\u201d). Meta clara dá segurança.",
      "Experimenta investir uma parte do que guarda — dinheiro parado embaixo do colchão perde valor com o tempo.",
    ],
  },
  malabarista: {
    id: "malabarista",
    name: "O Malabarista",
    nickname: "\u201cEquilibrista\u201d",
    emoji: "🤹",
    color: "#FF8A3D",
    description:
      "Você vive apagando incêndio financeiro — decide na hora, ajeita depois, e vai levando a vida nos malabarismos. Não é falta de esforço, é falta de um plano por trás da correria.",
    tips: [
      "Antes de qualquer compra, respira e pergunta: \u201cisso pode esperar até eu checar o resto do mês?\u201d",
      "Anota (no papel ou no app) só 3 gastos fixos que você tem certeza. Já tira boa parte do caos.",
      "Escolhe um dia fixo por semana só pra olhar as contas. Vira hábito, não sufoco de última hora.",
    ],
  },
  investidor: {
    id: "investidor",
    name: "O Investidor",
    nickname: "\u201cAprendiz\u201d",
    emoji: "📈",
    color: "#7B4DFF",
    description:
      "Você já sacou que dinheiro é ferramenta, não só destino — pesquisa, pergunta, planeja antes de agir. Só cuidado pra não travar de tanto estudar sem nunca dar o primeiro passo de verdade.",
    tips: [
      "Escolhe UM assunto (tipo Tesouro Direto) e estuda só ele por 2 semanas antes de partir pro próximo.",
      "Começa pequeno — investir R$20 ensina mais na prática do que 10 artigos sobre o assunto.",
      "Compartilha o que aprende com um amigo. Ensinar é a melhor forma de fixar conhecimento.",
    ],
  },
};

// Embaralha um array (Fisher-Yates) — usado pra randomizar a ORDEM das
// opções na tela, sem nunca mudar a pontuação de cada uma.
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Recebe um array de 12 keys escolhidas (ex: ['gastador','investidor',...])
// e devolve { x, y, profileId }
function computeResult(chosenKeys) {
  let x = 0, y = 0;
  chosenKeys.forEach((key) => {
    x += VECTORS[key].x;
    y += VECTORS[key].y;
  });
  // em caso de empate exato num eixo (ex: 6 respostas pra cada lado),
  // sorteia o lado em vez de sempre favorecer o mesmo perfil
  const sideX = x > 0 ? 1 : x < 0 ? -1 : (Math.random() < 0.5 ? 1 : -1);
  const sideY = y > 0 ? 1 : y < 0 ? -1 : (Math.random() < 0.5 ? 1 : -1);
  let profileId;
  if (sideX >= 0 && sideY >= 0) profileId = "investidor";
  else if (sideX >= 0 && sideY < 0) profileId = "poupador";
  else if (sideX < 0 && sideY >= 0) profileId = "gastador";
  else profileId = "malabarista";
  return { x, y, profileId };
}

function generateRoomCode() {
  const chars = "23456789ABCDEFGHJKMNPQRSTUVWXYZ"; // sem 0/O/1/I pra evitar confusão
  let code = "";
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}
