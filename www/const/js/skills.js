var skillsModalWindowArray = [];

var slovakSkillObject =
{
	name: "Slovak",
	level: "C2",
	description: "Slovak is my mother language."
}

var englishSkillObject =
{
	name: "English",
	/*description: "I first learned English when I was 9 years old and living in \
					Leavenworth, KA. At the time I was able to speak english \
					almost at the same level as my mother language. However, \
					I am not as confident in the language at the moment. Since then \
					I also learned English at school for 10 years.. I can write and \
					understand anything, but have small problems with speaking, \
					since I haven't spoken so much, but I am able to have a \
					meaningful conversation, with small pauses to think of words."*/
	level: "C1 - C2",
	description: "I learned English when I was 9 years old and living in the USA. Since\
					then I have been learning English every year at school, watching movies,\
					reading books, stack overflow, documentations, etc. I haven't spoken the language much,\
					but doing so, isn't much of a problem."
}

var germanSkillObject =
{
	name: "German",
	level: "C1",
	description: "I learned German while living in Germany for 3 years. I also\
					have learned it at school and it is my weaker language, although\
					I am also able to speak/write German fluently."
}

var cSkillObject =
{
	name: "C++/C",
	level: "Proficient",
	keywords: "pointer, reference, class, virtual class/method, inheritance, \
				encapsulation, lambdas, auto, standard library, containers, \
				algorithms, static, const, try, catch, throw, threads, semaphore + \
				mutex",
	description: "I have written about 20-30 smaller programs (snake, minesweeper,\
					sorting algorithms, trees, LAN chat, LAN battleships) in C++/C.\
					We have studied algorithms (e.g. DFS, BFS, sorting algorithms)\
					using C++ at school. Operating system and synchronisation algorithms were studied\
					in C. This is the language I use, when I want to create something\
					in my free time and it was the first language I learned."
}

var phpSkillObject =
{
	name: "PHP - Nette",
	level: "Proficient",
	keywords: "MVC, templates, forms, database operations, user authorisation/authentification, \
				routing, e-mail, language localisation, cookies",
	description: "I have built three websites using the PHP framework Nette, although\
					these websites share a fair amount of code. I don't have much \
					experience with pure PHP, but I know more than just the basics. \
					"
}

var htmlSkillObject =
{
	name: "HTML/CSS",
	level: "Proficient",
	keywords: "bootstrap - responsive",
	description: "Although HTML/CSS are not considered programming languages by many,\
					I think they are important to know. I have made several websites from \
					scratch and some also using premade templates. I also \
					designed a website based on a PSD (<a target='_blank' href='fromPsd/index.html'>website</a> -- \
					<a target='_blank' href='fromPsd/image.png'>image</a>)."
}

var jsSkillObject =
{
	name: "JS/jQuery",
	level: "Proficient",
	keywords: "event handling, DOM, workers, objects, regex, built-in objects, \
				event timers, anonymous functions, form validation, cookies",
	description: "I used Javascript quite a lot and I really enjoyed it, because \
					of its simplicity. However, I think I don't write the best \
					Javascript code there is, because I don't use the more complex \
					parts of the language. Some javascript can also be found on this \
					website."
}

var javaSkillObject =
{
	name: "Java",
	level: "Proficient",
	keywords: "encapsulation, inheritance, class, lambdas, interface, override, \
				abstract, static, final, super, try, catch, throw, swing, JSF, \
				facade, ORM, Android",
	description: "I used Java for a few Android applications and a lot at school. \
					I designed some simple GUIs, \
					built some games with simple graphics (e.g. snake game), created \
					a language analysing tool (cyphers course), worked with android \
					studio (LifeClick app, bachelor thesis), built a rather simple \
					facebook-like Java website."
}

skillsModalWindowArray["slovak-skill"] = slovakSkillObject;
skillsModalWindowArray["english-skill"] = englishSkillObject;
skillsModalWindowArray["german-skill"] = germanSkillObject;
skillsModalWindowArray["c-skill"] = cSkillObject;
skillsModalWindowArray["php-skill"] = phpSkillObject;
skillsModalWindowArray["html-skill"] = htmlSkillObject;
skillsModalWindowArray["js-skill"] = jsSkillObject;
skillsModalWindowArray["java-skill"] = javaSkillObject;

var skills;

$(function(){
	skills = $(".skill");	
});