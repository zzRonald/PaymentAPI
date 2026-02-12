# 💳 Payment Register System | Full-Stack Solution

<div align="center"> <b>Desenvolvido com foco e Clean Code por Ronald ⚔️</b> 


<div align="center">

---
  
![.NET](https://img.shields.io/badge/.NET-8.0-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

---

## 🔥 Sobre o Projeto
O **PaymentSystem** é um ecossistema completo que une a robustez do **ASP.NET Core 8** com a agilidade do **Angular 17**. O foco principal foi a criação de uma interface reativa que se comunica com uma API RESTful seguindo padrões de **Clean Code**.

---

## 📂 Estrutura do Ecossistema

O repositório utiliza separação de responsabilidades para facilitar a escalabilidade:

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" width="25"/> **PaymentAPI (Backend)**
* 📂 **Controllers** -> `PaymentDetailsController.cs` (Orquestração de Endpoints CRUD)
* 📂 **Models** -> `PaymentDetail.cs` & `Context` (Domínio e Mapeamento de Dados)
* ⚙️ **Program.cs** -> Configuração de Injeção de Dependência e Políticas de **CORS**
* 📄 **appsettings** -> Configurações de conexão com **SQL Server**

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="25"/> **PaymentApp (Frontend)**
* 📂 **payment-details** -> Componentes de UI (Formulários e Listagem Dinâmica)
* 📂 **shared** -> `payment-detail.service.ts` (Consumo de API via HttpClient)
* 🚀 **main.ts** -> Inicialização do App com **Standalone Components**

---

## 🛠️ Setup de Combate

### 1. Backend (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" width="15"/> .NET 8)
```bash
# Entrar na pasta da API
cd PaymentAPI

# Sincronizar banco de dados via Migrations
dotnet ef database update

# Executar servidor
dotnet run
2. Frontend (<img src="https://www.google.com/search?q=https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="15"/> Angular)
Bash
# Entrar na pasta do App
cd PaymentApp

# Instalar dependências (npm)
npm install

# Iniciar servidor de desenvolvimento
ng serve -o
🔌 Configuração de Dados
No seu appsettings.json, a conexão utiliza Trusted Connection:

JSON
"ConnectionStrings": {
  "DevConnection": "Server=.;Database=PaymentDb;Trusted_Connection=True;TrustServerCertificate=True"
}
🚀 Skills Implementadas
<div align="center">
<img src="https://www.google.com/search?q=https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" width="40" title="Visual Studio"/>
<img src="https://www.google.com/search?q=https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="40" title="VS Code"/>
<img src="https://www.google.com/search?q=https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" title="Git"/>
<img src="https://www.google.com/search?q=https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="40" title="Bootstrap"/>
<img src="https://www.google.com/search?q=https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" title="NodeJS"/>
</div>


</p>
