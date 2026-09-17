# Guia de Publicação - Larissa Ponce Psicanálise

Este projeto foi construído usando **React** e **Vite**, o que significa que ele é um Single Page Application (SPA). O projeto está 100% focado no frontend e não requer um servidor backend ou banco de dados para ser executado. 

Siga as instruções abaixo para publicar seu projeto na Hostinger ou em qualquer hospedagem compatível.

## 1. Exportando o Projeto do AI Studio

No canto superior esquerdo ou no menu do AI Studio, selecione a opção de exportar ou baixar o projeto. Isso vai gerar um arquivo compactado (ZIP) com todo o código-fonte atual. Descompacte esse arquivo no seu computador.

## 2. Preparando a Versão de Produção (Build)

Antes de enviar os arquivos para a Hostinger, você precisa gerar a versão otimizada de produção.

### Requisitos Prévios
- Ter o **Node.js** instalado no seu computador (recomendado versão 18 ou superior).

### Passo a passo
1. Abra o terminal (ou prompt de comando) na pasta onde você descompactou o projeto.
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Gere os arquivos de produção executando:
   ```bash
   npm run build
   ```
4. Aguarde o processo finalizar. Será criada uma nova pasta chamada **`dist`** dentro do seu projeto. 
> **Atenção:** É **exclusivamente o conteúdo da pasta `dist`** que deve ser enviado para a hospedagem, e **não** o projeto inteiro.

## 3. Publicando na Hostinger

1. Acesse o painel da Hostinger e vá para o **Gerenciador de Arquivos** (File Manager) do seu domínio (`larissaponcepsi.com`).
2. Navegue até a pasta pública do seu site, geralmente chamada de **`public_html`**.
3. Apague ou mova qualquer arquivo padrão que estiver lá (como `default.php` ou um `index.php` da Hostinger).
4. Faça o upload de **todo o conteúdo da sua pasta `dist`** (arquivos e pastas) para dentro do `public_html`.
   - Você verá arquivos como `index.html`, a pasta `assets`, e o arquivo `.htaccess`.

## 4. Rotas e Arquivo .htaccess

Como a aplicação é um SPA (Single Page Application), todas as requisições precisam ser redirecionadas para o `index.html`. 
Um arquivo `.htaccess` já foi criado automaticamente na pasta `public` e incluído no seu build (dentro da pasta `dist`). Ele resolve erros de página 404 caso o visitante tente acessar links diretos do seu site (ex: larissaponcepsi.com/sobre).

## Variáveis de Ambiente e Backend
- O projeto atual **não possui chamadas diretas a banco de dados** ou **uso ativo da API do Gemini** no front-end que exija chaves secretas.
- Portanto, **não há necessidade** de configurar um servidor backend, configurar Node.js na Hostinger, ou definir chaves de API. O site pode rodar numa hospedagem compartilhada simples.

## Resumo de Arquivos e Pastas Enviadas para Produção (`dist/`)
- `index.html`
- `assets/` (pasta com o JavaScript e CSS compactados)
- `.htaccess`
- Demais imagens públicas que você adicionou

Pronto! Seu site já deve estar acessível pelo seu domínio.
