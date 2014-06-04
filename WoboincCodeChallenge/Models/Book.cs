using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WoboincCodeChallenge.Models
{
    public class Book
    {
        public string title { get; set; }
        public string subtitle { get; set; }
        public string[] authors { get; set; }
        public string publisher { get; set; }
        public string publicationDate { get; set; }
        //public string edition { get; set; }
        public decimal listPrice { get; set; }
        public decimal retailPrice { get; set; }
        public bool isEbook { get; set; }
        public string thumbnail { get; set; }
        public string description { get; set; }
        public string infoLink { get; set; }


    }

    public class BookListModel
    {
        public List<Book> searchItems { get; set; }
    }
}