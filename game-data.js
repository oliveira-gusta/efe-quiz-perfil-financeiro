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
      { key: "gastador",    label: "Bora pedir um lanche ou comprar aquela blusinha!" },
      { key: "poupador",    label: "Guardo na mesma hora, vai que eu precise de urgência." },
      { key: "malabarista", label: "Uso pra resolver o que estiver \u2018gritando\u2019 mais alto no momento." },
      { key: "investidor",  label: "Coloco numa reserva que rende, enquanto penso com calma." },
    ],
  },
  {
    text: "Seu celular quebrou a tela, mas ainda funciona. O que você decide?",
    options: [
      { key: "gastador",    label: "Já aproveito e parcelo o último modelo de última geração." },
      { key: "poupador",    label: "Continuo usando quebrado, consertar é muito caro." },
      { key: "malabarista", label: "Vou empurrando e resolvendo aos poucos, sem plano." },
      { key: "investidor",  label: "Pesquiso em três lugares e avalio se vale mais arrumar ou trocar." },
    ],
  },
  {
    text: "Um amigo te chama de última hora pra um show imperdível.",
    options: [
      { key: "gastador",    label: "Passo o cartão e depois eu vejo como pago." },
      { key: "poupador",    label: "Digo que não vou, mesmo querendo, porque não tava no planejado." },
      { key: "malabarista", label: "Decido na hora, sem saber direito se vai sobrar depois." },
      { key: "investidor",  label: "Confiro se o orçamento de lazer do mês ainda cobre isso." },
    ],
  },
  {
    text: "Como você lida com promoções de \u201cLeve 3, Pague 2\u201d?",
    options: [
      { key: "gastador",    label: "Compro de tudo, é promoção! Não posso perder!" },
      { key: "poupador",    label: "Não compro, só levo o que vim buscar e olhe lá." },
      { key: "malabarista", label: "Levo na empolgação e só depois vejo o que isso mexeu no mês." },
      { key: "investidor",  label: "Só compro se for algo que eu já uso sempre." },
    ],
  },
  {
    text: "O que você sente quando abre o app do banco?",
    options: [
      { key: "gastador",    label: "Emoção! Nunca sei o que vou encontrar." },
      { key: "poupador",    label: "Um receio, mesmo sabendo que não gastei nada." },
      { key: "malabarista", label: "Evito abrir \u2014 prefiro não saber até precisar mesmo." },
      { key: "investidor",  label: "Tranquilidade, entro pra conferir rendimento e orçamento." },
    ],
  },
  {
    text: "Quando o assunto é cartão de crédito, você\u2026",
    options: [
      { key: "gastador",    label: "Acho o limite mágico, uso sempre que posso." },
      { key: "poupador",    label: "Tenho pavor, prefiro Pix ou dinheiro vivo." },
      { key: "malabarista", label: "Uso sem muito planejamento, decido na hora." },
      { key: "investidor",  label: "Uso estrategicamente pra acumular pontos, mas pago a fatura toda." },
    ],
  },
  {
    text: "Alguém te fala sobre investir em criptomoedas ou bolsa de valores:",
    options: [
      { key: "gastador",    label: "Acho legal, mas prefiro gastar meu dinheiro hoje." },
      { key: "poupador",    label: "Deus me livre! Só de ouvir \u2018risco\u2019 eu fujo." },
      { key: "malabarista", label: "Tenho curiosidade, mas nunca paro pra organizar isso." },
      { key: "investidor",  label: "Tenho interesse, mas sei que primeiro preciso estudar." },
    ],
  },
  {
    text: "Faltam 5 dias pro fim do mês e você quer muito sair. Como está seu saldo?",
    options: [
      { key: "gastador",    label: "Zerado, já usei o cheque especial, mas a gente dá um jeito." },
      { key: "poupador",    label: "Intacto. Eu raramente saio pra não gastar." },
      { key: "malabarista", label: "Não sei bem quanto tenho \u2014 decido na hora se dá." },
      { key: "investidor",  label: "Controlado, ainda tenho a cota separada pro fim de semana." },
    ],
  },
  {
    text: "Você quer comprar um videogame ou notebook caro. Qual sua estratégia?",
    options: [
      { key: "gastador",    label: "Parcela em 12x ou 24x e seja o que Deus quiser." },
      { key: "poupador",    label: "Desisto, dá dor no coração gastar isso de uma vez." },
      { key: "malabarista", label: "Decido no impulso e vou ajustando o mês conforme os boletos chegam." },
      { key: "investidor",  label: "Guardo todo mês até ter o valor pra pedir desconto à vista." },
    ],
  },
  {
    text: "Qual frase melhor define sua relação com roupas?",
    options: [
      { key: "gastador",    label: "\u201cRoupa nova levanta a autoestima!\u201d" },
      { key: "poupador",    label: "\u201cSó compro se rasgar a que eu tô usando.\u201d" },
      { key: "malabarista", label: "\u201cCompro na empolgação e só depois vejo como encaixa nos gastos.\u201d" },
      { key: "investidor",  label: "\u201cCompro o necessário, busco custo-benefício.\u201d" },
    ],
  },
  {
    text: "Qual seu principal objetivo com o dinheiro hoje?",
    options: [
      { key: "gastador",    label: "Ter liberdade pra comprar o que eu quiser." },
      { key: "poupador",    label: "Nunca passar por nenhum sufoco na vida." },
      { key: "malabarista", label: "Ir resolvendo as coisas conforme elas aparecem." },
      { key: "investidor",  label: "Fazer o patrimônio crescer pra ter tranquilidade no futuro." },
    ],
  },
  {
    text: "Como você acompanha seus gastos mensais?",
    options: [
      { key: "gastador",    label: "Acompanhar? Eu confio na minha memória (ou seja, não acompanho)." },
      { key: "poupador",    label: "Anoto cada centavo obsessivamente numa planilha." },
      { key: "malabarista", label: "Não tenho método fixo \u2014 às vezes anoto, às vezes esqueço." },
      { key: "investidor",  label: "Uso um app, planilha ou caderninho pra ter visão organizada." },
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
  let profileId;
  if (x >= 0 && y >= 0) profileId = "investidor";
  else if (x >= 0 && y < 0) profileId = "poupador";
  else if (x < 0 && y >= 0) profileId = "gastador";
  else profileId = "malabarista";
  return { x, y, profileId };
}

function generateRoomCode() {
  const chars = "23456789ABCDEFGHJKMNPQRSTUVWXYZ"; // sem 0/O/1/I pra evitar confusão
  let code = "";
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}
