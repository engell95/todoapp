using System;
using System.Configuration;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

using Microsoft.IdentityModel.Tokens;


using FlujoCoreApiExt.Settings;

namespace FlujoCoreApiExt.Controllers
{
    internal static class TokenGenerator
    {
        public static string GenerateTokenJwt(string username)
        {
            var securityKey = new SymmetricSecurityKey(System.Text.ASCIIEncoding.ASCII.GetBytes(JwtConfig.SecretKey));
            var signIngCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, username) });

            var tokenHandler = new JwtSecurityTokenHandler();

            var jwtToken = tokenHandler.CreateJwtSecurityToken(
              subject: claimsIdentity,
              notBefore: DateTime.UtcNow,
              expires: DateTime.UtcNow.AddHours(JwtConfig.HourExpirationTime),
              signingCredentials: signIngCredentials

            );

               var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject =claimsIdentity,
                Expires = DateTime.UtcNow.AddHours(JwtConfig.HourExpirationTime),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(System.Text.ASCIIEncoding.ASCII.GetBytes(JwtConfig.SecretKey)), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            

            //var jwtTokenStr = tokenHandler.WriteToken(jwtToken);
            return tokenString;

        }
    }
}
