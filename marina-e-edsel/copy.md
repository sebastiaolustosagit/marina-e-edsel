# Copy — Marina & Édsel

## SEO
- **Title:** Marina & Édsel — 05 de Setembro de 2026 | Casamento na Praia de Maracajaú
- **Description:** Celebre conosco! Site oficial do casamento de Marina & Édsel. 05 de setembro de 2026, às 15h30, na Buji — Praia de Maracajaú, RN.

## Open Graph
- **og:title:** Marina & Édsel — Casamento na Praia de Maracajaú
- **og:description:** 05 de setembro de 2026, às 15h30, na Buji. Venha celebrar esse momento especial conosco!
- **og:type:** website

---

## NAV
- Home
- Cerimônia
- Recepção
- Lista de Presentes
- Confirme sua Presença

---

## HERO

**Nomes:** Marina & Édsel

**Data:** 05 de setembro de 2026

**Local:** Praia de Maracajaú — RN

---

## BOAS-VINDAS (Mensagem do casal)

**Título:** Nosso Grande Dia

**Texto:**
Criamos esse site para compartilhar com vocês os detalhes do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!

É importante confirmar sua presença. Para isso, contamos com sua ajuda clicando no botão "Confirme sua Presença" e preenchendo os dados necessários.

Para nos presentear, escolha qualquer item da Lista de Presentes ou, caso prefiram, entrem em contato conosco diretamente. Fiquem à vontade!

Aguardamos vocês no nosso grande dia!

---

## CERIMÔNIA E FESTA

**Título:** Cerimônia e Festa

**Texto:**
Gostaríamos muito de contar com a presença de todos nossos amigos e familiares para celebrar a nossa união. A cerimônia ocorrerá no dia 05 de setembro de 2026, às 15h30, na Buji — Praia de Maracajaú, Maxaranguape/RN. Não há igreja: a cerimônia e a festa acontecem no mesmo local, na Buji.

**Fotos:** local-buji.jpeg (entrada/arco da Buji) + local-jardim.jpeg (gramado à beira-mar). A antiga local-praia.jpeg (igreja) saiu de uso.

**Mapa:** Embed Google Maps — Buji, Maracajaú, Maxaranguape - RN

---

## HOSPEDAGEM

**Título:** Hospedagem

**Texto introdutório:**
Deixamos uma lista de sugestões de hotéis e pousadas com condições especiais para o casamento durante o final de semana.

**Opções:**
*(Placeholder — o casal deve fornecer hotéis/pousadas parceiras)*

1. **Pousada Maracajaú**
   - Reservas pelo WhatsApp ou e-mail
   - contato@pousadamaracajau.com.br
   - +55 84 99999-0001

2. **Hotel Praia Azul**
   - Reservas pelo site ou WhatsApp
   - reservas@hotelpraiazul.com.br
   - +55 84 99999-0002

3. **Pousada Beira Mar**
   - Reservas via WhatsApp
   - contato@beiramar.com.br
   - +55 84 99999-0003

*Informem que são convidados do casamento de Marina & Édsel (05/09/2026) para garantir as condições especiais.*

---

## SALÕES (Dicas de Beleza)

**Título:** Beleza

**Texto introdutório:**
Algumas dicas de salões na região para quem precisar arrumar cabelo e maquiagem para o grande dia:

*(Placeholder — o casal deve fornecer salões da região)*

1. **Studio Beauty Maracajaú**
   - (84) 9999-0001
   - Endereço no Google Maps

2. **Salão Praia & Glamour**
   - (84) 9999-0002
   - Endereço no Google Maps

---

## LISTA DE PRESENTES

**Título:** Lista de Presentes

**Texto introdutório:**
Nosso maior sonho agora é viver uma lua de mel inesquecível. Se quiser fazer parte desse momento, escolha uma das experiências abaixo e contribua via PIX. Os valores são apenas sugestões — qualquer quantia é muito bem-vinda!

**Chave PIX:** mariamarinaleo@gmail.com (e-mail)
**Nome:** Marina Leonardo
**Banco:** *(placeholder)*

**Itens (12 experiências de lua de mel — só coisas de viagem), em ordem crescente de R$150 a R$3.000. Miniaturas em aquarela geradas via GPT Image 2 (Codex 5.5): gift-*.webp. Valores SUGERIDOS (o casal pode ajustar):**

| Item | Valor sugerido | Imagem |
|------|----------------|--------|
| Mergulho nos Parrachos | R$ 150 | gift-mergulho.webp |
| Passeio de Barco | R$ 250 | gift-barco.webp |
| Passeio de Buggy nas Dunas | R$ 350 | gift-buggy.webp |
| Café da Manhã na Cama | R$ 500 | gift-cafe.webp |
| Jantar de Lua de Mel | R$ 650 | gift-jantar.webp |
| Passeio de Catamarã ao Pôr do Sol | R$ 800 | gift-catamara.webp |
| Spa & Massagem a Dois | R$ 950 | gift-spa.webp |
| Passagens Aéreas | R$ 1.000 | gift-passagem.webp |
| Aluguel de Carro na Viagem | R$ 1.200 | gift-carro.webp |
| Ensaio Fotográfico do Casal | R$ 1.500 | gift-ensaio.webp |
| Diárias de Hotel na Praia | R$ 2.000 | gift-hotel.webp |
| Pacote Completo de Lua de Mel | R$ 3.000 | gift-pacote.webp |

**Botão:** Presentear (copia a chave PIX)

---

## CONFIRME SUA PRESENÇA

**Título:** Confirme sua Presença

**Texto:** Ficaremos muito felizes com a sua presença! Confirme o quanto antes para garantir sua hospedagem com tranquilidade.

**Formulário (grava no Supabase via Netlify Function):** Nome completo (obrigatório), Você vai comparecer? (Sim/Não, obrigatório), Quantas pessoas. WhatsApp e Recado foram REMOVIDOS a pedido do casal. Envia via AJAX para `/.netlify/functions/rsvp-submit` e mostra "Presença confirmada!" na própria página.

**Banco de dados:** Supabase projeto `opmyeulzfinndcqbaeaz` (Projetos Germano), tabela `public.rsvp_marina_edsel` (colunas: id, created_at, nome, comparecimento, pessoas). RLS ligado; acesso só via service key nas functions.

**Painel da dona do site:** `/painel.html` (ou `/painel`) — protegido por senha (`DASHBOARD_PASSWORD` no Netlify, valor inicial `MarinaEEdsel2026`). Lê via `/.netlify/functions/rsvp-list` (senha conferida no servidor). Mostra cards (confirmados, total de convidados, não poderão ir, total de respostas) + tabela.

**Env vars Netlify:** `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `DASHBOARD_PASSWORD`.

---

## FOOTER

&copy; 2026 Marina & Édsel. Feito com amor.
