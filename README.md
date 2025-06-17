# API NestJS RabbitMQ

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descrição

Este projeto é uma API desenvolvida com o [NestJS](https://nestjs.com/), integrando mensageria com [RabbitMQ](https://www.rabbitmq.com/) e envio de e-mails via SMTP. O objetivo é fornecer uma base robusta para aplicações que necessitam de comunicação assíncrona e notificações por e-mail.

---

## Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/):** Framework Node.js para construção de aplicações escaláveis e eficientes.
- **[RabbitMQ](https://www.rabbitmq.com/):** Broker de mensagens para comunicação assíncrona entre serviços.
- **[@nestjs-modules/mailer](https://github.com/nest-modules/mailer):** Módulo para envio de e-mails.
- **TypeScript:** Linguagem principal do projeto.
- **Docker Compose:** Facilita a orquestração dos serviços (RabbitMQ, etc).

---

## Funcionalidades

- **Mensageria:** Consome eventos do RabbitMQ, como `schedule_created` e `send_email`.
- **Envio de E-mails:** Dispara notificações por e-mail utilizando SMTP.
- **Estrutura Modular:** Separação clara entre módulos de mensageria, e-mail e notificações.
- **Configuração via .env:** Variáveis de ambiente para fácil customização.

---

## Como executar o projeto

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) (v16+)
- [pnpm](https://pnpm.io/) ou [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (opcional, recomendado para RabbitMQ)

### 2. Instalação das dependências

```bash
pnpm install
```


### 3. Configuração do ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```env
RABBITMQ_URL=amqp://localhost:5672
MAIL_HOST=smtp.seuprovedor.com
MAIL_PORT=587
MAIL_USER=usuario
MAIL_PASSWORD=senha
MAIL_FROM=seu@email.com
```

### 4. Subindo o RabbitMQ com Docker

```bash
docker-compose up -d
```
Ou
```bash
make start
```

### 5. Executando a aplicação
Modo desenvolvimento:

```bash
pnpm run start:dev
```

A aplicação irá se conectar automaticamente às filas schedule_queue e mail_queue do RabbitMQ.

### Estrutura do Projeto
src/
  [app.controller.ts]
  [app.module.ts]
  [app.service.ts]
  [main.ts]
  mail/
    [mail.consumer.ts]
    [mail.module.ts]
    [mail.service.ts]
  notification/
    dto/
      [notification.dto.ts]
  rabbitMQ/
    [rabbitMQ.controller.ts]
    [rabbitMQ.module.ts]


Como funciona
- Consumo de Mensagens:
O rabbitMQController consome eventos da fila schedule_queue e processa os dados recebidos.

- Envio de E-mails:
O MailConsumer escuta eventos send_email na fila mail_queue e utiliza o MailService para enviar e-mails.

- DTO de Notificação:
O DTO NotificationDto define o formato das notificações enviadas por e-mail.