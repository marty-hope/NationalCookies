using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NationalCookies.Data.Interfaces;

namespace NationalCookies.Controllers
{
    public class CookieController : Controller
    {
        private ICookieService _cookieService;

        public CookieController(ICookieService cookieService)
        {
            _cookieService = cookieService;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _cookieService.GetAllCookies());
        }

        public async Task<IActionResult> ClearCache()
        {
            await _cookieService.ClearCache();
            return RedirectToAction("Index", "Home");
        }
    }
}
