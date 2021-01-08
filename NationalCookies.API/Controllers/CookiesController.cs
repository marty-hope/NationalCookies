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

        /// <summary>
        /// Retrieve cookies from the cache
        /// </summary>
        /// <param name="sessionId"></param>
        /// <returns></returns>
        [Produces("application/json")]
        [HttpGet("{sessionId}")]
        public async Task<ActionResult> Get(string sessionId)
        {
            var cookies =  await _cookieService.GetAllCookies(sessionId);
            if (cookies == null)
                return BadRequest("Session has expired");
            return Ok(cookies);
;        }
        /// <summary>
        /// Retrieve a session id. Also, for testing purposes, add cookies to the cache and associate them with a session. 
        /// </summary>
        /// <returns></returns>
        [Produces("application/json")]
        [HttpGet(), Route("getSessionId")]
        public async Task<ActionResult> GetSessionId()
        {
            var sessionId = System.Guid.NewGuid().ToString();
            await _cookieService.AddCookiesToCache(sessionId);
            return Ok(sessionId.ToString());
        }
    }

}
