# Quiz de Perfil Financeiro — Projeto EFE

Quiz de personalidade financeira com 3 formas de jogar:
1. **Sozinho, pelo celular** — sem sala, sem facilitador, resultado na hora.
2. **Em sala de aula** — com código/QR, telão mostrando progresso e o mapa da turma no final.
3. **Embutido no site oficial do EFE** (sites.ufpe.br/efe) via iframe.

## Arquivos do projeto

- `index.html` → tela que o aluno acessa (celular ou embutida no site)
- `tv.html` → tela projetada no telão (na prática, a tela de um notebook
  espelhada/conectada no projetor ou TV da sala)
- `game-data.js` → perguntas, perfis e lógica de pontuação
- `firebase-config.js` → chave de conexão com o banco de dados em tempo real
- `logo-efe.png` → logo oficial do projeto
- `Marimpa.ttf` → fonte oficial usada nos títulos
- `vercel.json` → libera o jogo pra ser embutido via iframe no site da UFPE

**Importante:** todos os arquivos precisam ficar juntos, na mesma pasta,
quando publicados — o código referencia `logo-efe.png`, `Marimpa.ttf` etc.
pelo nome relativo.

---

## Visão geral da arquitetura

```
[Repositório no GitHub] → [Vercel publica o site] → 2 formas de acessar:
                                                       ├─ link direto (QR/sala de aula)
                                                       └─ iframe dentro do
                                                          sites.ufpe.br/efe
```

Os celulares e o telão "conversam" em tempo real através de um banco de
dados gratuito (Firebase Realtime Database) — só precisa ser configurado
**uma vez**. Depois disso, qualquer facilitador, em qualquer escola, só
abre o link — sem criar conta em nada.

---

## FASE 1 — Configurar o Firebase (uma vez só, ~5 minutos)

1. Acesse https://console.firebase.google.com e faça login com uma conta
   Google do projeto (ou pessoal).
2. Clique em **Adicionar projeto** → nome (ex: `efe-quiz`) → pode
   desativar o Google Analytics → **Criar projeto**.
3. No menu lateral: **Build → Realtime Database → Criar banco de dados**.
   Escolha a região mais próxima (ex: `us-east1`) e **Iniciar no modo de
   teste**.
4. Na aba **Regras**, apague o conteúdo e cole:

   ```json
   {
     "rules": {
       "sessions": {
         "$sessionId": {
           ".read": true,
           ".write": true
         }
       },
       "global": {
         "totalCompleted": {
           ".read": true,
           ".write": true
         }
       }
     }
   }
   ```
   Clique em **Publicar**.
5. Ícone de engrenagem → **Configurações do projeto** → role até
   **Seus apps** → clique no ícone `</>` (Web) → registre um app
   (ex: `efe-quiz-web`). **Não** marque Firebase Hosting.
6. Copie o bloco `firebaseConfig = {...}` que aparece e cole no arquivo
   **`firebase-config.js`**, substituindo os `"COLE_AQUI"`.

> **Custo:** o plano gratuito (Spark) cobre esse uso tranquilamente
> (algumas turmas por semana + acessos solo). Não precisa cartão.

---

## FASE 2 — Colocar o código no GitHub

1. Crie uma conta em https://github.com se ainda não tiver.
2. Clique em **"+"** → **New repository**. Nome: `quiz-perfil-financeiro`.
   Marque **Public**. Clique em **Create repository**.
3. Clique em **"uploading an existing file"** e arraste todos os arquivos
   do projeto (incluindo `vercel.json`, `logo-efe.png`, `Marimpa.ttf`, e o
   `firebase-config.js` já preenchido).
4. **Commit changes**.

Esse repositório é a "fonte" do site — toda vez que vocês editarem algo
aqui (por exemplo, uma pergunta em `game-data.js`) e subirem a alteração,
o site publicado atualiza sozinho (ver Fase 3).

---

## FASE 3 — Publicar no Vercel (grátis)

1. Acesse https://vercel.com e clique em **Sign Up** → escolha
   **Continue with GitHub** (assim ele já vê seus repositórios).
2. No painel, clique em **"Add New..." → "Project"**.
3. Selecione o repositório `quiz-perfil-financeiro` → **Import**.
4. Não precisa mudar nenhuma configuração (é um site estático puro) →
   clique em **Deploy**.
5. Em ~30 segundos vai aparecer um link tipo:
   `https://quiz-perfil-financeiro.vercel.app`
6. Teste abrindo `https://quiz-perfil-financeiro.vercel.app/index.html`
   e `https://quiz-perfil-financeiro.vercel.app/tv.html`.

Pronto — esse link do Vercel é o "site de verdade" do jogo, hospedado
fora do WordPress da UFPE. Ele é rápido, gratuito e atualiza sozinho
sempre que vocês alterarem algo no GitHub.

> Se quiser, dá pra configurar um domínio próprio tipo `quiz.efe.com`
> depois, direto no painel do Vercel (aba "Domains") — não é obrigatório.

---

## FASE 4 — Embutir no site oficial (sites.ufpe.br/efe)

Sua ideia está certa: como o WordPress + Elementor limita o que dá pra
programar direto nele, a solução é hospedar o jogo fora (Vercel, feito
acima) e só **encaixar uma janela** com ele dentro da página oficial.

1. Entre no painel: `https://sites.ufpe.br/efe/wp-admin/`.
2. Edite (ou crie) a página onde o quiz vai aparecer, com o **Elementor**.
3. Arraste o widget **"HTML"** (às vezes aparece como "Custom HTML" ou,
   na versão gratuita, dentro de "Geral/Basic") pro lugar da página onde
   o jogo deve aparecer.
4. Cole este código dentro do widget, trocando a URL pela do seu projeto
   no Vercel:

   ```html
   <iframe
     src="https://quiz-perfil-financeiro.vercel.app/index.html"
     style="width:100%; height:900px; border:none; border-radius:16px; overflow:hidden;"
     loading="lazy">
   </iframe>
   ```
5. Publique a página e teste no celular e no computador.

**Por que isso funciona sem limitação nenhuma:** o `vercel.json` que já
está no projeto configura o site pra permitir ser exibido dentro de um
`<iframe>` vindo do domínio `ufpe.br`. Sem esse arquivo, alguns
navegadores bloqueiam iframes de sites externos por segurança.

**Dica para a sala de aula:** o QR code gerado pela tela da TV aponta
direto pro link do Vercel (não pro iframe do WordPress) — isso é
proposital, é mais rápido e evita qualquer travamento de iframe no
celular do aluno. O iframe no site oficial serve principalmente pro
**modo solo** (visitante curioso que caiu na página do projeto).

---

## FASE 5 — Como cada modo funciona na prática

### Modo solo (sozinho, sem sala)
1. Pessoa acessa `index.html` (direto ou pelo iframe do site oficial).
2. Escolhe **"Só eu, agora"**.
3. Responde as 12 perguntas e já vê o resultado ali mesmo, sem precisar
   de TV nem de facilitador.
4. Pode compartilhar o resultado (imagem pronta pra postar no story) e
   convidar um amigo (manda o link direto, puxando o app de mensagens
   do celular).

### Modo sala de aula
1. Facilitador abre `tv.html` num notebook conectado ao projetor/TV da
   sala — essa tela gera um **código de 4 letras + QR** automaticamente.
2. Alunos escaneiam o QR (ou digitam o código em `index.html`, escolhendo
   **"Estou em sala de aula"**).
3. A TV mostra ao vivo quantos já terminaram, sem identificar ninguém.
4. Ao final, o facilitador toca na tela da TV (ou aperta espaço) e
   aparece o **mapa da turma**: cada aluno é um ponto anônimo, ótimo
   gancho pra puxar discussão.
5. Pra nova turma: botão **"Nova turma"** no canto da TV.

---

## FASE 6 — Editar o conteúdo do quiz

Todo o texto (perguntas, opções, perfis, dicas) está em `game-data.js`.
Depois de editar:
1. Suba a alteração no GitHub (pode ser direto pelo site do GitHub,
   clicando no arquivo → ícone de lápis → editar → **Commit changes**).
2. O Vercel detecta sozinho e republica em segundos — não precisa fazer
   mais nada.

---

## Privacidade

- Não é coletado nome, foto ou qualquer dado que identifique a pessoa.
- Cada participante recebe um ID anônimo temporário só pra evitar
  contagem duplicada (fica só no navegador da pessoa).
- O contador global (`global/totalCompleted`) é só um número — não
  guarda quem fez o quê.
- Dados de sala (`sessions/{codigo}`) e do contador global ficam salvos
  no Firebase. Pra apagar periodicamente, dá pra fazer manualmente no
  console do Firebase, ou eu configuro uma limpeza automática depois —
  é só pedir.

## Ideias pra próxima versão (não implementadas ainda)

- Pergunta bônus opcional em texto livre pra virar nuvem de palavras na TV.
- Domínio próprio (tipo `quiz.efe.com`) apontando pro Vercel.
- Limpeza automática de sessões antigas no Firebase.
