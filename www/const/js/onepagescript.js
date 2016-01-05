
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

	if (projectsModalWindowArray[id].name != undefined)
	{
		projectsModalWindowContent.find("#project-name").html(projectsModalWindowArray[id].name);
	}
	else
	{
		$("#project-name").parents("p").hide();
	}

	if (projectsModalWindowArray[id].description != undefined)
	{
		projectsModalWindowContent.find("#project-description").html(projectsModalWindowArray[id].description);
	}
	else
	{
		$("#project-description").parents("p").hide();
	}

	if (projectsModalWindowArray[id].website != undefined)
	{
		projectsModalWindowContent.find("#project-website").html(projectsModalWindowArray[id].website);
	}
	else
	{
		$("#project-website").parents("p").hide();
	}

	if (projectsModalWindowArray[id].languages != undefined)
	{
		projectsModalWindowContent.find("#project-languages").html(projectsModalWindowArray[id].languages);
	}
	else
	{
		$("#project-languages").parents("p").hide();
	}

	if (projectsModalWindowArray[id].responsibilities != undefined)
	{
		projectsModalWindowContent.find("#project-responsibilities").html(projectsModalWindowArray[id].responsibilities);
	}
	else
	{
		$("#project-responsibilities").parents("p").hide();
	}

	if (projectsModalWindowArray[id].learned != undefined)
	{
		projectsModalWindowContent.find("#project-learned").html(projectsModalWindowArray[id].learned);
	}
	else
	{
		$("#project-learned").parents("p").hide();
	}

	if (projectsModalWindowArray[id].state != undefined)
	{
		projectsModalWindowContent.find("#project-state").html(projectsModalWindowArray[id].state);
	}
	else
	{
		$("#project-state").parents("p").hide();
	}

	if (projectsModalWindowArray[id].image != undefined)
	{
		projectsModalWindowContent.find("#project-image").attr("href", projectsModalWindowArray[id].image);
	}
	else
	{
		$("#project-image").parents("p").hide();
	}
}

function prepareSkillsModalWindow(clickedElement)
{
	var id = $(clickedElement).attr("id");
	
	$("#skill-name").parents("p").show();	
	$("#skill-level").parents("p").show();
	$("#skill-keywords").parents("p").show();
	$("#skill-description").parents("p").show();

	if (skillsModalWindowArray[id].name != undefined)
	{
		skillsModalWindowContent.find("#skill-name").html(skillsModalWindowArray[id].name);
	}
	else
	{
		$("#skill-name").parents("p").hide();
	}

	if (skillsModalWindowArray[id].level != undefined)
	{
		skillsModalWindowContent.find("#skill-level").html(skillsModalWindowArray[id].level);
	}
	else
	{
		$("#skill-level").parents("p").hide();
	}

	if (skillsModalWindowArray[id].keywords != undefined)
	{
		skillsModalWindowContent.find("#skill-keywords").html(skillsModalWindowArray[id].keywords);
	}
	else
	{
		$("#skill-keywords").parents("p").hide();
	}
	
	if (skillsModalWindowArray[id].description != undefined)
	{
		skillsModalWindowContent.find("#skill-description").html(skillsModalWindowArray[id].description);
	}
	else
	{
		$("#skill-description").parents("p").hide();
	}
}