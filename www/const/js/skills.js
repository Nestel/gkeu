var modalWindowArray = [];

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
					but doing so, shouldn't be a problem."
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
	name: "C/C++",
	level: "Proficient",
	description: "I have written about 20-30 smaller programs (snake, minesweeper\
					sorting algorithms, trees, LAN chat, LAN battleships) in C/C++.\
					We have studied algorithms (e.g. DFS, BFS, sorting algorithms)\
					using C++ at school. Operating system/synchronisation algorithms were studied\
					in C. This is the language I use, when I want to create something\
					in my free time and it was the first language I learned."
}

var phpSkillObject =
{
	name: "PHP - Nette",
	level: "Proficient",
	description: "I have built three websites using the PHP framework Nette, although\
					these websites share a fair amount of code. DOPISAT"
}

var htmlSkillObject =
{
	name: "HTML/CSS",
	level: "Proficient",
	description: "Although HTML/CSS are not considered programming languages by many,\
					I think they are important to know"
}

var jsSkillObject =
{
	name: "JS/jQuery",
	level: "Proficient",
	description: ""
}

var javaSkillObject =
{
	name: "Java",
	level: "Proficient",
	description: ""
}

modalWindowArray["slovak-skill"] = slovakSkillObject;
modalWindowArray["english-skill"] = englishSkillObject;
modalWindowArray["german-skill"] = germanSkillObject;
modalWindowArray["c-skill"] = cSkillObject;
modalWindowArray["php-skill"] = phpSkillObject;
modalWindowArray["html-skill"] = htmlSkillObject;
modalWindowArray["js-skill"] = jsSkillObject;
modalWindowArray["java-skill"] = javaSkillObject;

var skills;

$(function(){
	skills = $(".skill");	
});