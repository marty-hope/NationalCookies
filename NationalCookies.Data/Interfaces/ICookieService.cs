using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NationalCookies.Data.Interfaces
{
    public interface ICookieService
    {
        Task<List<Cookie>> GetAllCookies(string sessionId);
        Task ClearCache();
        Task AddCookiesToCache(string sessionId);
    }
}
