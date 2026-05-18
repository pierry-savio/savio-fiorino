# 🚚 Savio Fiorino — Fretes & Transportes

> Site institucional de um motorista autônomo especializado em fretes e transportes na cidade de São Paulo e interior do estado.

**🔗 Acesse o site:** [pierry-savio.github.io/savio-fiorino](https://pierry-savio.github.io/savio-fiorino/)

---

## 📋 Sobre o Projeto

Landing page profissional desenvolvida para o motorista **Savio Fiorino**, que atua com fretes e transportes em São Paulo (capital e interior) utilizando uma Fiorino 2020. O site apresenta os serviços oferecidos, diferenciais, área de cobertura, formas de pagamento e um formulário de contato integrado ao WhatsApp.

---

## ✨ Funcionalidades

- **Formulário de contato via WhatsApp** — o cliente preenche nome, local de partida, destino e tipo de carga; ao clicar no botão, uma mensagem pré-formatada é enviada diretamente pelo WhatsApp
- **Botão flutuante do WhatsApp** — ícone fixo com animação de pulsação para contato rápido em qualquer seção da página
- **Menu hambúrguer responsivo** — navegação lateral com animação de slide para dispositivos móveis
- **Mapa interativo** — iframe do Google Maps mostrando o estado de São Paulo, área de cobertura do serviço
- **Scroll suave** — navegação por âncoras com transição suave entre as seções
- **Design totalmente responsivo** — breakpoints para mobile, tablet (960px) e desktop (1200px)

---

## 🗂️ Estrutura do Projeto

```
savio-fiorino/
├── index.html        # Estrutura principal da página
├── style.css         # Estilos e responsividade
├── script.js         # Lógica do formulário WhatsApp e menu hambúrguer
└── img/
    ├── fiorino.png       # Foto do veículo (hero section)
    ├── whatsapp.jfif     # Ícone flutuante do WhatsApp
    ├── whatsapp.png      # Ícone no botão de contato
    ├── menu_icon.png     # Ícone do menu hambúrguer
    └── favicon.png       # Favicon do site
```

---

## 📄 Seções da Página

| Seção | ID | Descrição |
|---|---|---|
| Início | `#home` | Hero com foto da Fiorino, título, descrição e estatísticas (experiência, cobertura, capacidade) |
| Serviços | `#services` | 6 cards de serviços: fretes em geral, pequenas mudanças, cargas frágeis, materiais de construção, viagens intermunicipais, coleta e entrega |
| Qualidades | `#special` | Diferenciais do motorista e especificações técnicas da Fiorino 2020 |
| Localidade | `#where-i-work` | Mapa do estado de São Paulo com descrição da área de atendimento |
| Pagamento | `#payment` | Formas de pagamento aceitas: Pix, dinheiro e preço por negociação |
| Contato | `#call-me` | Formulário para solicitar frete com envio via WhatsApp |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica
- **CSS3** — estilização com variáveis CSS, Grid, Flexbox, animações e media queries
- **JavaScript (Vanilla)** — lógica do formulário e menu hambúrguer
- **Google Fonts** — tipografia com as fontes *Bebas Neue* (títulos) e *DM Sans* (corpo)
- **Google Maps Embed API** — mapa interativo da área de atendimento
- **WhatsApp API (`wa.me`)** — redirecionamento com mensagem pré-formatada

---

## 🎨 Design System

### Paleta de Cores

| Variável | Cor | Uso |
|---|---|---|
| `--black` | `#0d0d0d` | Fundo principal |
| `--white` | `#f5f0e8` | Texto principal (off-white quente) |
| `--orange` | `#f4600c` | Destaque primário |
| `--orange-dark` | `#c44a07` | Hover e botões pressionados |
| `--orange-light` | `#ff7f3e` | Tags e badges |
| `--gray` | `#1a1a1a` | Fundo de seções alternadas |
| `--gray-mid` | `#2e2e2e` | Bordas e detalhes |
| `--text-muted` | `#888888` | Textos secundários |

### Tipografia

- **Bebas Neue** — títulos, headers e destaques
- **DM Sans** — textos corridos e interface geral

---

## 📱 Responsividade

O layout adapta-se a três tamanhos principais:

- **Mobile** (padrão) — coluna única, foco em legibilidade e toque
- **Tablet** (`≥ 960px`) — grid de 3 colunas para serviços e qualidades
- **Desktop** (`≥ 1200px`) — layout de 2 colunas no hero, formulário expandido, tipografia ampliada

---

## ⚙️ Como Funciona o Formulário

O formulário de contato **não envia dados para nenhum servidor**. Ao clicar em "Chamar no WhatsApp", o JavaScript monta uma mensagem personalizada e abre o WhatsApp com o texto pré-preenchido:

```
Olá Savio! Me chamo [Nome]. Gostaria de solicitar um frete de [Tipo de Carga],
de [Local de Partida] para [Destino].
```

Se algum campo estiver vazio, uma mensagem genérica é utilizada como fallback:

```
Olá Savio! Gostaria de solicitar um frete.
```

---

## 🚀 Deploy

O projeto está hospedado via **GitHub Pages**, sem necessidade de build ou dependências externas.

Para rodar localmente, basta clonar o repositório e abrir o `index.html` no navegador:

```bash
git clone https://github.com/pierry-savio/savio-fiorino.git
cd savio-fiorino
# abra o index.html no seu navegador
```

---

## 📞 Contato

**Savio Fiorino** — Fretes & Transportes · São Paulo  
📱 WhatsApp: [+55 11 98095-0396](https://wa.me/5511980950396)  
🏢 CNPJ: 53.759.721/0001-46  
✅ Direção Defensiva & MOP Certificado
