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

        public async Task AddCookiesToCache(string sessionId)
        {
            // get the cookies from the database
            var cookies = _context.Cookies.ToList();

            // set cache expiration policy for "cookies" KVP.
            var policyOptions = new DistributedCacheEntryOptions();
            policyOptions.SetAbsoluteExpiration(new System.TimeSpan(0, 0, 30));

            await _cache.SetStringAsync(sessionId, JsonConvert.SerializeObject(cookies), policyOptions);
        }

        public async Task ClearCache()
        {
             await _cache.RemoveAsync("cookies");
        }

        public async Task<List<Cookie>> GetAllCookies(string sessionId)
        {
            var cachedCookies = await _cache.GetStringAsync(sessionId);
            if (!string.IsNullOrEmpty(cachedCookies))
            {
                return JsonConvert.DeserializeObject<List<Cookie>>(cachedCookies);
            }
            return null;
        }
    }
}
