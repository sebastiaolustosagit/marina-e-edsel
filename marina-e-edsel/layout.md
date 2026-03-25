# Layout — Marina & Édsel

## Identidade Visual

### Conceito
Casamento praiano na Praia de Maracajaú — RN. Estilo litorâneo, leve, arejado. Inspirado no save the date com farol, céu azul, areia e mar turquesa. Elegância descontraída.

### Paleta de Cores
| Token | Cor | Uso |
|-------|-----|-----|
| --color-bg | #F7FAFE | Fundo principal — quase branco com toque azulado |
| --color-text | #2C3E50 | Texto principal — azul-escuro sofisticado |
| --color-text-muted | #7B9AAF | Texto secundário — azul acinzentado |
| --color-primary | #5BA4C9 | Cor primária — azul-céu oceânico |
| --color-primary-hover | #4890B5 | Hover da primária |
| --color-accent | #D4A574 | Acento — areia/dourado quente |
| --color-accent-light | #E8D5BC | Areia claro para fundos alternados |
| --color-border | #D6E4ED | Bordas — azul muito suave |
| --color-error | #E74C3C | Erro |
| --color-success | #27AE60 | Sucesso |
| --color-hero-overlay | rgba(247, 250, 254, 0.85) | Overlay translúcido no hero |

### Tipografia (Font Pairing #47 — Elegante Litorâneo)
- **Heading:** `Cormorant Garamond` (300, 400, 600) — Serifada elegante, clássica para casamento
- **Script/Nomes:** `Tangerine` (400, 700) — Cursiva delicada para os nomes do casal
- **Body:** `Karla` (400, 500, 600) — Sans-serif limpa e moderna

### Elementos Decorativos
- Dividers com ondas SVG suaves entre seções (remetendo ao mar)
- Ícones de conchas, estrelas-do-mar e ondas como separadores
- Linhas finas horizontais com gradiente azul-areia
- Padrão sutil de ondas no background de seções alternadas

---

## Seções e Arquétipos

### 1. NAV
- **Tipo:** Sticky transparent → solid on scroll
- **Mobile:** Hamburger menu com slide-in lateral
- **Estilo:** Links uppercase letter-spaced, fonte Karla 500

### 2. HERO — Arquétipo: "Layered Atmospheric"
- **Constraint:** Full-viewport, parallax sutil, tipografia em camadas
- **Layout:** Viewport inteiro com background gradient (céu para mar)
- **Camada 1:** Gradient de topo (#C9E2F0 → #A8D5E8 → #7CC4D1 → #E8D5BC) simulando céu-horizonte-mar-areia
- **Camada 2:** Overlay translúcido central com conteúdo
- **Nomes:** "Marina & Édsel" em Tangerine, tamanho gigante (clamp 3rem-7rem)
- **Ampersand:** Estilizado com cor accent dourada
- **Data:** Karla, uppercase, letter-spacing amplo
- **Local:** Karla, text-muted
- **Decoração:** Onda SVG sutil na parte inferior como transição
- **Nenhuma imagem:** Tudo via CSS gradients e SVG (performance máxima, LCP rápido)

### 3. BOAS-VINDAS — Arquétipo: "Prose Cinematic"
- **Constraint:** Texto centralizado com largura estreita (max 640px), espaçamento generoso
- **Layout:** Seção limpa, fundo branco
- **Título:** Cormorant Garamond 600, tamanho grande
- **Texto:** Karla 400, line-height 1.8, parágrafos com margin entre si
- **Decoração:** Pequeno ícone de concha SVG acima do título
- **Animação:** Fade-in suave com AOS

### 4. CERIMÔNIA E FESTA — Arquétipo: "Split Reveal"
- **Constraint:** Layout dividido assimétrico, imagem de um lado, texto do outro
- **Layout Desktop:** Grid 55% imagem | 45% texto
- **Layout Mobile:** Stack vertical, imagem primeiro
- **Imagem:** Placeholder de cerimônia na praia (div com gradient simulando cena praiana + ícone)
- **Texto:** Alinhado à esquerda, com data e horário em destaque (accent color)
- **Mapa:** Embed Google Maps abaixo, full-width com border-radius
- **Decoração:** Borda accent no lado do texto
- **Animação:** Slide-in da esquerda (imagem) e direita (texto)

### 5. HOSPEDAGEM — Arquétipo: "Card Stack Offset"
- **Constraint:** Cards empilhados com offset visual, não grid simétrico
- **Layout:** Cards com leve rotação/offset (-1deg, +1deg alternando)
- **Cada card:** Ícone de hotel/pousada, nome em Cormorant, detalhes em Karla
- **Fundo da seção:** --color-accent-light (areia claro) para contraste
- **Decoração:** Onda SVG no topo como transição da seção anterior
- **Animação:** Fade-up escalonado

### 6. BELEZA (Salões) — Arquétipo: "Minimal List"
- **Constraint:** Lista simples e elegante, sem cards pesados
- **Layout:** Lista vertical com separadores finos, ícone de tesoura/pincel
- **Cada item:** Nome do salão em destaque, telefone e link discretos
- **Fundo:** Branco, seção compacta
- **Animação:** Fade-in sequencial

### 7. LISTA DE PRESENTES — Arquétipo: "Bento Grid Irregular"
- **Constraint:** Grid com tamanhos variados (itens destacados maiores), hover reveal do valor
- **Layout:** CSS Grid com auto-fill, alguns itens span 2 colunas
- **Cada item:** Placeholder/ícone do presente, nome abaixo, valor revelado no hover
- **Topo:** Texto introdutório + dados PIX em destaque (card accent)
- **Card PIX:** Fundo accent, ícone PIX, chave copiável com botão
- **Grid itens:** 3 colunas desktop, 2 tablet, 1 mobile
- **Botão "Presentear":** Abre modal com QR code PIX ou copia chave
- **Animação:** Stagger fade-up nos itens

### 8. CONFIRME SUA PRESENÇA — Arquétipo: "CTA Immersive"
- **Constraint:** Seção de destaque com background diferenciado, CTA único e poderoso
- **Layout:** Fundo com gradient reverso (areia → azul), texto claro
- **Título:** Cormorant Garamond, grande
- **Texto:** Breve, convidativo
- **Botão WhatsApp:** Grande, verde WhatsApp (#25D366), ícone WA + texto
- **Decoração:** Onda SVG no topo invertida
- **Animação:** Zoom-in sutil

### 9. FOOTER
- **Estilo:** Simples, fundo escuro (--color-text), texto claro
- **Conteúdo:** "2026 Marina & Édsel. Feito com amor." + ícone coração
- **Fonte:** Karla 400, small

---

## Transições entre seções
- Seção 2→3: Onda SVG (azul para branco)
- Seção 3→4: Linha fina accent
- Seção 4→5: Onda SVG (branco para areia)
- Seção 5→6: Onda SVG (areia para branco)
- Seção 6→7: Linha fina accent
- Seção 7→8: Onda SVG (branco para gradient)

## Responsividade
- Hero: Nomes escalam de 3rem (mobile) a 7rem (desktop)
- Grid presentes: 1col (mobile) → 2col (tablet) → 3col (desktop)
- Split cerimônia: Stack vertical (mobile) → side-by-side (desktop)
- Cards hospedagem: Stack vertical (mobile) → 2-3 col (desktop)
- Nav: Hamburger (mobile) → inline links (desktop)
