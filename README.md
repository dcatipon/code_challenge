Code Challenge for Software Engineer
======================================

Submission by Daniel Catipon

A simple book searching interface built primarily using Google Books API, ASP.NET (C#/Razor), Bootstrap, and JQuery.

An online demo can be found here: [http://dcatipon-wi.azurewebsites.net/](http://dcatipon-wi.azurewebsites.net/)

## Objective
To build a simple interface for college students to find textbooks for classes in which they are enrolled, using the Amazon Product Advertising API or alternatives such as Google Books API or New York Times Bestsellers List API. This interface should search for BOOKS only and not other products. That is, products suitable for a classroom.  Once searched, the results should be displayed in a simple and easy-to-read manner.

Indvidual titles in search results should include the following information:
- Book Title
- Author Name
- Publisher Name
- Publication Date
- Edition (if available)
- Price
- Format (i.e. Hardcover, Paperback, Kindle Edition, etc.)

## Requirements / Setup
To run this project locally, you will need a copy of Visual Studio 2013. The "Express" version is free and can be found by clicking [here](http://www.visualstudio.com/en-us/products/visual-studio-express-vs.aspx).  Please be sure to select "Visual Studio Express for Web".  System requirements can also be found at the above link.

If you are unable to run the project locally, you can try it [here](http://dcatipon-wi.azurewebsites.net/).

## Configuration
This project uses a Model-View-Controller pattern although there is little server-side utilization.  Source code for Models, Views, and Controllers are located within their respective folders in the main Solution folder.  More information about ASP.NET MVC can be found [here](http://www.asp.net/mvc).

Note: Google Books API does not provide book "Edition" information.
