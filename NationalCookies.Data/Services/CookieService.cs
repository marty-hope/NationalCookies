using Microsoft.Extensions.Caching.Distributed;
using NationalCookies.Data.Interfaces;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace NationalCookies.Data.Services
{
    public class CookieService : ICookieService
    {
        private CookieContext _context;
        private IDistributedCache _cache;

        public CookieService(CookieContext context, IDistributedCache cache)
        {
            _context = context;
            _cache = cache;
        }

        public async Task<List<Cookie>> GetAllCookies()
        {
            List<Cookie> cookies;

            var cachedCookies = await _cache.GetStringAsync("cookies");
            if (!string.IsNullOrEmpty(cachedCookies))
            {
                cookies = JsonConvert.DeserializeObject<List<Cookie>>(cachedCookies);
            }
            else
            {
                //get the cookies from the database
                cookies = _context.Cookies.ToList();

                await _cache.SetStringAsync("cookies", JsonConvert.SerializeObject(cookies));
            }

            return cookies;
        }
    }
}
