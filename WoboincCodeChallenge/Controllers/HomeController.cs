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
            string message = string.Format("Successfully processed {0} item(s).", model.searchItems.Count.ToString());

            return PartialView("_SearchResults", model);
            //return Json(new { Success = true, Message = message });
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}