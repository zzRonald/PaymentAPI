using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configurações para OpenAPI e Swagger UI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddOpenApi();

// Configuração do Banco de Dados
builder.Services.AddDbContext<PaymentDetailsContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Gera o endpoint do documento OpenAPI (v3)
    app.MapOpenApi();

    // Habilita a interface visual do Swagger
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        // Define a rota padrão para o Swagger (ex: localhost:PORTA/swagger)
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = "swagger";
    });
}

app.UseCors(options =>
options.WithOrigins("http://localhost:4200")
.AllowAnyMethod()
.AllowAnyHeader()
);

app.UseAuthorization();

app.MapControllers();

app.Run();