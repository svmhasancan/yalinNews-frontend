using Autofac;
using Autofac.Extensions.DependencyInjection;
using Business.DependencyResolvers.Autofac;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Core.Security.Encryption;
using Core.Security.JWT;
using Microsoft.AspNetCore.Http;
using Core.Utilities.IoC;
using Core.DependencyResolvers;
using Core.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Autofac configuration
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
builder.Host.ConfigureContainer<ContainerBuilder>(builder => 
    builder.RegisterModule(new AutofacBusinessModule()));

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddHttpContextAccessor();

// Swagger/OpenAPI configuration
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS yapılandırması
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// JWT Authentication yapılandırması
var tokenOptions = builder.Configuration.GetSection("TokenOptions").Get<TokenOptions>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = tokenOptions.Issuer,
            ValidAudience = tokenOptions.Audience,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = SecurityKeyHelper.CreateSecurityKey(tokenOptions.SecurityKey)
        };
    });

builder.Services.AddDependencyResolvers(new ICoreModule[] {
    new CoreModule()
});

ServiceTool.Create(builder.Services);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

// CORS middleware'ini en başa al
app.UseCors("AllowAll");

app.UseHttpsRedirection();

// Authentication ve Authorization middleware'lerinin sırası önemli
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run(); 