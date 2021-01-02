using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NationalCookies.Data;
using NationalCookies.Data.Interfaces;

namespace NationalCookies.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CookiesController : ControllerBase
    {


        private readonly ILogger<CookiesController> _logger;
        private readonly ICookieService _cookieService;

        public CookiesController(ILogger<CookiesController> logger, ICookieService cookieService)
        {
            _logger = logger;
            _cookieService = cookieService;
        }

        [HttpGet("{sessionId}")]
        public async Task<IEnumerable<Cookie>> Get(string sessionId)
        {
            return await _cookieService.GetAllCookies(sessionId);
        }
    }
}
