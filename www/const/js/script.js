
var modalWindow;
var modalWindowContent;
var modalWindowCloseButton;

var projects;
var skills;

$(function(){
	projects = $(".project");	
	skills = $(".skill");

	modalWindow = $(".modal-window");
	modalWindowContent = $(".modal-window-content");
	modalWindowCloseButton = $(".modal-window-close");

	if (projects != undefined)
	{
		projects.each(function(){
			$(this).click(function(){
				modalWindowShow(this);
				modalWindow.show();
			});
		});
	}

	if (projects != undefined)
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

	modalWindowContent.find("#name").html(modalWindowArray[id].name);
	modalWindowContent.find("#description").html(modalWindowArray[id].description);
	modalWindowContent.find("#website").html(modalWindowArray[id].website);
	modalWindowContent.find("#languages").html(modalWindowArray[id].languages);
	modalWindowContent.find("#responsibilities").html(modalWindowArray[id].responsibilities);
	modalWindowContent.find("#learned").html(modalWindowArray[id].learned);
	modalWindowContent.find("#state").html(modalWindowArray[id].state);
}

function prepareSkillsModalWindow(clickedElement)
{
	var id = $(clickedElement).attr("id");

	modalWindowContent.find("#name").html(modalWindowArray[id].name);
	modalWindowContent.find("#level").html(modalWindowArray[id].level);
	modalWindowContent.find("#description").html(modalWindowArray[id].description);
}