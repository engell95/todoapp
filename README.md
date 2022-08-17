using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;

using FlujoCoreApiExt.DTO;
using FlujoCoreApiExt.Settings;

using System;
using System.Linq;
using System.Net;
using System.Collections.Generic;



namespace FlujoCoreApiExt.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly AppSettings _appSettings;
        private readonly ILogger<AccountController> _logger;

        public AccountController(IOptionsSnapshot<AppSettings> appSettings, ILogger<AccountController> logger)
        {
            _appSettings = appSettings.Value;
            _logger = logger;
        }

        [HttpPost("[action]")]
        public IActionResult Login(LoginRequest login)
        {
            try
            {

                if (login == null)
                    return BadRequest("No se encontro usuario o contraseña");

                string[] users = _appSettings.Username.Split(',');
                string[] pass = _appSettings.Password.Split(',');

                IEnumerable<string> lstUsers = users;

                var NameUser = lstUsers.Where(x => x.Equals(login.Username)).FirstOrDefault();

                if (NameUser == null)
                    return Unauthorized();

                var index = Array.IndexOf(users, login.Username);

                var passUser = pass[index];

                if (passUser == null)
                    return Unauthorized();

                bool isValid = (login.Password.Equals(passUser) && login.Username.Equals(NameUser));

                if (!isValid)
                    return Unauthorized();

                var token = TokenGenerator.GenerateTokenJwt(login.Username);


                return Ok(token);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error en autenticar");
                return BadRequest(ex.Message.ToString());
            }




        }

    }
}

