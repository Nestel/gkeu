var modalWindowArray = [];

var lifeClickProjectObject = 
{

}

var scoProjectObject = 
{
	name: "Shopping city online",
	description: "A website which serves as a catalog for \
					small local shops. These shops can add \
					their products, branches and other information \
					and the people from their area can then find \
					the shop on this website",
	website: "<a target='_blank' href='http://www.shopping-city-online.at'>www.shopping-city-online.at</a>",
	languages: "HTML, CSS, JavaScript, PHP framework Nette",
	responsibilities: "I worked mainly on the admin section of the \
						website (user registration/login, shops \
						management, products management, subscribers \
						management), although I also spent a fair amount \
						of time on the public part of the website e.g \
						<a target='_blank' href='http://bruck.shopping-city-online.at/shop/more/1/'> \
						Shop page</a>, \
						<a target='_blank' href='http://bruck.shopping-city-online.at/product/1/7'> \
						Product page</a>. \
						I was also one of the people designing the \
						database for this website.",
	learned: "",
	state: "Website is online and currently being tested in the city Bruck in Austria."
}

var lifeClickProjectObject = 
{
	name: "LifeClick",
	description: "LifeClick is an application which allows a person \
					in a life threatening situation to call for help using \
					his/her smartphone. After the call for help, LifeClick rescuers \
					in the area will be notified and will be able to come to aid \
					the person in need.",
	website: "<a target='_blank' href='http://www.lifeclick.eu'>www.lifeclick.eu</a>",
	languages: "Java, Android, HTML, CSS, JavaScript, PHP framework Nette",
	responsibilities: "Login, registration and user profile was what I was responsible \
						for in the android app. The website was built by me alone, \
						with small help from the LifeClick team. Login, registration, \
						bug report, subscriptions, database, fiddling with the template and \
						som other things had to be done here.",
	learned: "This project taught me basics of android application programming. How \
				shared preferences work, how http requests and responses work, how \
				the application layout in android works and a bunch of other things. \
				As for the website, that was just reviewing what I learned in the SCO \
				project and getting better at it.",
	state: "Website publicly available, Android application in testing phase."
}

modalWindowArray["sco-project"] = scoProjectObject;
modalWindowArray["lifeclick-project"] = lifeClickProjectObject;

var modalWindow;
var modalWindowContent;
var modalWindowCloseButton;

var projects;

$(function(){
	projects = $(".project");
	modalWindow = $(".modal-window");
	modalWindowContent = $(".modal-window-content");
	modalWindowCloseButton = $(".modal-window-close");

	projects.each(function(){
		$(this).click(function(){
			var id = $(this).attr("id");
			modalWindowContent.find("#name").html(modalWindowArray[id].name);
			modalWindowContent.find("#description").html(modalWindowArray[id].description);
			modalWindowContent.find("#website").html(modalWindowArray[id].website);
			modalWindowContent.find("#languages").html(modalWindowArray[id].languages);
			modalWindowContent.find("#responsibilities").html(modalWindowArray[id].responsibilities);
			modalWindowContent.find("#learned").html(modalWindowArray[id].learned);
			modalWindowContent.find("#state").html(modalWindowArray[id].state);
			modalWindow.show();
		});
	});

	modalWindow.click(function(){
		$(this).hide();
	});

	modalWindowContent.click(function(event){
		event.stopPropagation();
	});

	modalWindowCloseButton.click(function(){
		modalWindow.hide();
	});
});