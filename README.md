# NationalCookies

![enter image description here](https://www.pluralsight.com/content/dam/pluralsight/newsroom/brand-assets/logos/pluralsight-logo-vrt-color-2.png)  


This repo is based off the demo app for the Pluralsight course [Microsoft Azure Developer: Implementing Azure Cache](https://app.pluralsight.com/library/courses/microsoft-azure-cache-implementing/).


The solution consists of:

 - NationalCookies.MVC
	 - This is the website for the Nationalcookies cookie store using APS.NET 
 - NationalCookies.Forms
	 - This is the website for the Nationalcookies cookie store ,based on ASP.NET 4.7
	 - This contains the database schema and seed script
	 - Technology: Visual Studio Database project
 - NationalCookies.Data
	 - This is a class library that contains classes to connect to the database and work with cookies and orders
	 - Technology: 
	 	- Class library (.NET Standard 2.0)
		- Entity Framework Core 2.1
 - NationalCookies.Angular
	 - This is the website, loosely based on the MVC Version. It is based on Angular 11

This is a very simple solution that consists out of a website (either NationalCookies.MVC, NationalCookies.Forms, NationalCookies.Angular) that connects to Azure Redis Cache.


![Image of Nationalcookies solution](https://dnz.blob.core.windows.net/cdn/Nationalcookies%20solution.png)


## TBD Describe Branches