var projectsModalWindowArray = [];

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

var snakeProjectObject = 
{
	name: "Snake game remake",
	description: "A relativly simple remake of the classic snake \
					game. Made with the ncurses library, runs in the terminal/console.",
	website: "<a target='_blank' href='https://github.com/gabrielKerekes/snake-nCurses'>GitHub</a>",
	languages: "C",
	responsibilities: "--",
	learned: "ncurses, game mechanics",
	state: "Working and available on GitHub",
}

var minesweeperProjectObject =
{
	name: "Minesweeper remake",
	description: "A remake of the classic minesweeper game. Not keyboard \
					controlled, requires you to enter the coordinates you \
					wish to mark and the type of the mark.",
	website: "<a target='_blank' href='https://github.com/gabrielKerekes/nstlMinesweeper'>GitHub</a>",
	languages: "C",
	responsibilities: "--",
	learned: "game mechanics",
	state: "Working and available on GitHub. Built quite a long time ago, \
				so it isn't too sophisticated.",
}

var ticTacToeProjectObject = 
{
	name: "Unbeatable 3x3 TicTacToe",
	description: "Made using the Minmax algorithm and runs in the console. The game should also be \
					scalable, although the minmax algorithm gets too slow at \
					larger scales, since there are too many options even \
					for the first move at 3x3 (9! = 362880 possible outcomes), \
					so it isn't used for larger game fields, where the AI player will \
					play random moves.",
	website: "<a target='_blank' href='https://github.com/gabrielKerekes/nstlMinesweeper'>GitHub</a>",
	languages: "C++",
	responsibilities: "--",
	learned: "Practiced OOP in C++, minmax algorithm, some C++ algorithms",
	state: "Wroking and available on GitHub."
}

projectsModalWindowArray["sco-project"] = scoProjectObject;
projectsModalWindowArray["lifeclick-project"] = lifeClickProjectObject;
projectsModalWindowArray["minesweeper-project"] = minesweeperProjectObject;
projectsModalWindowArray["snake-project"] = snakeProjectObject;
projectsModalWindowArray["tictactoe-project"] = ticTacToeProjectObject;