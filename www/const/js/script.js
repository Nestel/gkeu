
var modalWindow;
var modalWindowContent;
var modalWindowCloseButton;

var largeProjects;
var mediumProjects;
var smallProjects;
var project;
var skills;

$(function(){
	largeProjects = $(".large-project");
	mediumProjects = $(".medium-project");
	smallProjects = $(".small-project");
	projects = $(".project");
	skills = $(".skill");

	modalWindow = $(".modal-window");
	modalWindowContent = $(".modal-window-content");
	modalWindowCloseButton = $(".modal-window-close");

	if (largeProjects != undefined)
	{
		projects.each(function(){
			$(this).click(function(){
				modalWindowShow(this);
				modalWindow.show();
			});
		});

		/*smallProjects.each(function(){
			$(this).click(function(){
				modalWindowShow(this);
			});
		});*/
	}

	if (skills != undefined)
	{
		skills.each(function(){
			$(this).click(function(){
				modalWindowShow(this);
				modalWindow.show();
			});
		});
	}

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

function modalWindowShow(clickedElement)
{
	if (modalWindow.attr("id") == "projects-modal-window")
	{
		prepareProjectsModalWindow(clickedElement);
	}
	else if (modalWindow.attr("id") == "skills-modal-window")
	{
		prepareSkillsModalWindow(clickedElement);
	}

	modalWindow.show();
}

function prepareProjectsModalWindow(clickedElement)
{
	var id = $(clickedElement).attr("id");

	modalWindowContent.find("#name").html(projectsModalWindowArray[id].name);
	modalWindowContent.find("#description").html(projectsModalWindowArray[id].description);
	modalWindowContent.find("#website").html(projectsModalWindowArray[id].website);
	modalWindowContent.find("#languages").html(projectsModalWindowArray[id].languages);
	modalWindowContent.find("#responsibilities").html(projectsModalWindowArray[id].responsibilities);
	modalWindowContent.find("#learned").html(projectsModalWindowArray[id].learned);
	modalWindowContent.find("#state").html(projectsModalWindowArray[id].state);
}

function prepareSkillsModalWindow(clickedElement)
{
	var id = $(clickedElement).attr("id");
	
	$("#name").parents("p").show();	
	$("#level").parents("p").show();
	$("#keywords").parents("p").show();
	$("#description").parents("p").show();

	if (skillsModalWindowArray[id].name != undefined)
	{
		modalWindowContent.find("#name").html(skillsModalWindowArray[id].name);
	}
	else
	{
		$("#name").parents("p").hide();
	}

	if (skillsModalWindowArray[id].level != undefined)
	{
		modalWindowContent.find("#level").html(skillsModalWindowArray[id].level);
	}
	else
	{
		$("#level").parents("p").hide();
	}

	if (skillsModalWindowArray[id].keywords != undefined)
	{
		modalWindowContent.find("#keywords").html(skillsModalWindowArray[id].keywords);
	}
	else
	{
		$("#keywords").parents("p").hide();
	}
	
	if (skillsModalWindowArray[id].description != undefined)
	{
		modalWindowContent.find("#description").html(skillsModalWindowArray[id].description);
	}
	else
	{
		$("#description").parents("p").hide();
	}
}