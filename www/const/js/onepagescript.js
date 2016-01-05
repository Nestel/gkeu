
var modalWindow;
var modalWindowContent;
var modalWindowCloseButton;

var largeProjects;
var mediumProjects;
var smallProjects;
var project;
var skills;

$(function(){
	initVariables();
	setClickEvents();

	$("#mail-form").submit(function(){
		var formValues = 
		{
			name: $("#name").val(),
			email: $("#email").val(),
			content: $("#content").val()
		};

		$.ajax({
			type: 'post',
			data: formValues,
			url: 'mail.php',
			beforeSend: function()
			{
				$("#mail-form").hide();
				$("#spinner").show();
			},
			success: function(data)
			{
				$("#spinner").hide();
				$("#mailResponse").text(data.message);
				$("#mailResponse").show();
			},
			dataType: 'json'
		});

		return false;
	});
    
    $(".navigation-link").click(function(){
        $('html, body').animate({
            scrollTop: $("#"+$(this).data().target).offset().top + 5
        }, 750);

        $("nav .active").removeClass("active");
        $(this).parent().addClass("active");

        return false;
    });  
});

function initVariables()
{
	largeProjects = $(".large-project");
	mediumProjects = $(".medium-project");
	smallProjects = $(".small-project");
	projects = $(".project");
	skills = $(".skill");

	modalWindow = $(".modal-window");
	modalWindowContent = $(".modal-window-content");
	modalWindowCloseButton = $(".modal-window-close");

	projectsModalWindow = $("#projects-modal-window");
	projectsModalWindowContent = projectsModalWindow.children(".modal-window-content");

	skillsModalWindow = $("#skills-modal-window");
	skillsModalWindowContent = skillsModalWindow.children(".modal-window-content");
}

function setClickEvents()
{	
	projects.each(function(){
		$(this).click(function(){
			modalWindowShow(this);
		});
	});
		
	skills.each(function(){
		$(this).click(function(){
			modalWindowShow(this);
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
}

$(window).scroll(function(){
    if ($(window).scrollTop() > 40)
    {
        $("nav").addClass("scrolled");
    }
    else
    {
        $(".scrolled").removeClass("scrolled");
    }

    $("section").each(function(){
        if ($(window).scrollTop() > $(this).offset().top - 100)
        {
            var navigationLinks = $(".navigation-link");

            for (var i = 0; i < navigationLinks.length; i++)
            {
                if ($(navigationLinks[i]).data().target == $(this).attr("id"))
                {
                    $("nav .active").removeClass("active");
                    $(navigationLinks[i]).parent().addClass("active");
                }
            }
        }

        if ($(window).scrollTop() < 135)
        {
            $("nav .active").removeClass("active");
            $("#home-link").parent().addClass("active");
        } 
    });
});

function modalWindowShow(clickedElement)
{
	if ($(clickedElement).hasClass("project") || $(clickedElement).hasClass("small-project"))
	{
		prepareProjectsModalWindow(clickedElement);

		projectsModalWindow.show();
	}
	else if ($(clickedElement).hasClass("skill"))
	{
		prepareSkillsModalWindow(clickedElement);

		skillsModalWindow.show();
	}
}

function prepareProjectsModalWindow(clickedElement)
{
	var id = $(clickedElement).attr("id");

	projectsModalWindowContent.find("#name").html(projectsModalWindowArray[id].name);
	projectsModalWindowContent.find("#description").html(projectsModalWindowArray[id].description);
	projectsModalWindowContent.find("#website").html(projectsModalWindowArray[id].website);
	projectsModalWindowContent.find("#languages").html(projectsModalWindowArray[id].languages);
	projectsModalWindowContent.find("#responsibilities").html(projectsModalWindowArray[id].responsibilities);
	projectsModalWindowContent.find("#learned").html(projectsModalWindowArray[id].learned);
	projectsModalWindowContent.find("#state").html(projectsModalWindowArray[id].state);
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
		skillsModalWindowContent.find("#name").html(skillsModalWindowArray[id].name);
	}
	else
	{
		$("#name").parents("p").hide();
	}

	if (skillsModalWindowArray[id].level != undefined)
	{
		skillsModalWindowContent.find("#level").html(skillsModalWindowArray[id].level);
	}
	else
	{
		$("#level").parents("p").hide();
	}

	if (skillsModalWindowArray[id].keywords != undefined)
	{
		skillsModalWindowContent.find("#keywords").html(skillsModalWindowArray[id].keywords);
	}
	else
	{
		$("#keywords").parents("p").hide();
	}
	
	if (skillsModalWindowArray[id].description != undefined)
	{
		skillsModalWindowContent.find("#description").html(skillsModalWindowArray[id].description);
	}
	else
	{
		$("#description").parents("p").hide();
	}
}