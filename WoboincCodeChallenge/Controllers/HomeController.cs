using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WoboincCodeChallenge.Models;

namespace WoboincCodeChallenge.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SearchResults(BookListModel model)
        {
            return PartialView("_SearchResults", model);
        }

        public ActionResult About()
        {
            return View();
        }
    }
}