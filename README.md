# 💳 PaymentAPI

[![.NET](https://img.shields.io/badge/.NET-8.0-blue)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-language-blue.svg)](https://learn.microsoft.com/dotnet/csharp/)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)
[![SQL Server](https://img.shields.io/badge/Database-SQL%20Server-blue)](https://www.microsoft.com/en-us/sql-server)
[![Swagger](https://img.shields.io/badge/Swagger-API%20Docs-orange)](https://swagger.io/)

---

## 🔥 Sobre o Projeto

**PaymentAPI** é uma *API REST* construída com **ASP.NET Core 8** e **Entity Framework Core**, projetada para gerenciar detalhes de pagamento com operações CRUD completas.

Essa API é perfeita para aprender a estruturar APIs reais, integrar com banco de dados SQL Server e versionar o esquema do banco com migrations do Entity Framework.

---

## 🚀 Funcionalidades

✨ Operações CRUD completas:

- 📥 **POST** – Criar um registro de pagamento
- 📦 **GET** – Listar todos os pagamentos
- 🔍 **GET by Id** – Buscar pagamento por ID
- ✏️ **PUT** – Atualizar pagamento
- 🗑️ **DELETE** – Remover pagamento

🎯 Suporte a:

- 💾 Migrations com EF Core
- 🛠️ Banco de dados SQL Server
- 🧾 Documentação automática com Swagger/OpenAPI

---

## 📁 Estrutura do Projeto

PaymentAPI
│
├── Controllers
│ └── PaymentDetailsController.cs
│
├── Models
│ ├── PaymentDetail.cs
│ └── PaymentDetailsContext.cs
│
├── Migrations ← (gerada automaticamente após rodar migration)
│
├── Program.cs
├── appsettings.json
└── README.md

---

## 🛠️ Pré-Requisitos

Antes de rodar localmente, certifique-se de ter instalado:

- [.NET SDK 8](https://dotnet.microsoft.com/download)
- SQL Server (Express ou versão completa)
- Visual Studio 2022/2025 ou VS Code
- dotnet-ef (CLI tool)

📌 Instale o EF CLI caso não tenha:

```bash
dotnet tool install --global dotnet-ef
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DevConnection": "Server=.;Database=PaymentDb;Trusted_Connection=True;TrustServerCertificate=True;MultipleActiveResultSets=true"
  }
}



