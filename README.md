# Conference Ticket Generator

## Descrição
Este projeto é uma solução para o desafio **Conference Ticket Generator** da plataforma [Frontend Mentor](https://www.frontendmentor.io/). O objetivo é criar uma aplicação funcional que gere tickets de conferência com base nas informações fornecidas pelo usuário. Este projeto utiliza **HTML**, **CSS** (incluindo responsividade), e **JavaScript** para oferecer uma experiência de usuário fluida e interativa.

---

## [Visualize o projeto clicando aqui](https://yudiyamada.github.io/conference-ticket-generator-main/)

---

## Funcionalidades
- **Upload de Imagem**:
  - Permite o upload de uma imagem de perfil por meio de arrastar e soltar (drag & drop) ou seleção direta de arquivos.
  - Suporte para tipos de arquivo **JPG** e **PNG** com tamanho máximo de 500kb.
  - Validações amigáveis e mensagens de erro personalizadas.

- **Formulário Interativo**:
  - Entradas para nome completo, e-mail e nome de usuário do GitHub.
  - Validação dinâmica para garantir que todos os campos sejam preenchidos corretamente.

- **Gerador de Tickets**:
  - Exibe um ticket gerado com as informações fornecidas pelo usuário.
  - Mostra uma visualização do perfil, incluindo imagem e nome de usuário do GitHub.

- **Design Responsivo**:
  - Totalmente otimizado para telas de diferentes tamanhos (desktop, tablet e dispositivos móveis).

---

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica para o conteúdo da aplicação.
- **CSS3**: Estilos modernos, incluindo:
  - Variáveis CSS para consistência de cores.
  - Responsividade com media queries.
  - Efeitos visuais com `backdrop-filter`, gradientes e animações sutis.
- **JavaScript (ES6)**:
  - Manipulação do DOM para validações, interatividade e geração dinâmica de tickets.
  - APIs nativas, como `FileReader`, para exibir imagens enviadas.

---

## Estrutura do Projeto
```bash
/
├── index.html         # Estrutura principal da aplicação.
├── style/
│   ├── styles.css     # Estilos principais do projeto.
│   ├── responsive.css # Estilos específicos para telas menores.
├── main.js            # Lógica interativa e validações do projeto.
├── images/            # Imagens usadas no design (logos, ícones, etc.).
└── README.md          # Documentação do projeto.
```

---

## Como Usar
1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/YudiYamada/conference-ticket-generator-main.git
   ```
2. **Navegue até o Diretório**:
   ```bash
   cd conference-ticket-generator
   ```
3. **Abra o arquivo `index.html` no navegador**:
   Você pode fazer isso clicando duas vezes no arquivo ou usando a extensão Live Server do VS Code para uma experiência mais dinâmica.

---

## Créditos
Desenvolvido por [YudiYamada](https://github.com/YudiYamada) como parte do desafio **Frontend Mentor**.

