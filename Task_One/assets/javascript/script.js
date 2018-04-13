$(document).ready(function(){
    $("#clickbutton").click(function(){
        if($('.hidedata').css("display") == 'none') {
        	$('.hidedata').css("display","block")
        }
        else {
        	$('.hidedata').css("display","none")
        }
    });
    $("#appendData").click(function(){
    	if($('#dataInput').val() === '') {
    		alert('Please enter the message');
    	} else {
	        $('.chat_user_data_position').append('<br/><span>' + $('#dataInput').val() + '</span>');
	        $('#dataInput').val('');
	        $('#dataInput').attr("placeholder", "Type your message.....");
	    }
    });
});

function color(color) {
	$('.main_container').css("background", color);
	$('body,.navbar-brand').css("color", "black");
	$('.custom_color').css("color", "black");
	$('.main_container_navbar,.chat_content_container,.chatbox_user_details_icon').css("border-bottom", "1px solid black");
	$('.chat_box_border').css("border-right", "1px solid black");
	$('.chat_settings,.chat_box_settings,.chat_box_chat_area,.chat_box_users').css("background", "transparent");
}

function customColor(color,secondcolor,thirdcolor) {
	$('.main_container').css("background", color);
	$('body,.navbar-brand').css("color", "white");
	$('.custom_color').css("color", "black");
	$('.main_container_navbar,.chat_settings,.chat_content_container,.chatbox_user_details_icon').css("border-bottom", "1px solid gray");
	$('.chat_box_border').css("border-right", "1px solid gray");
	$('.chat_settings').css("background", secondcolor);
	$('.chat_box_settings,.chat_box_chat_area,.chat_box_users').css("background", thirdcolor);
	$('.chat_box_settings,.chat_box_chat_area,.chat_box_users').css("color", "black");
	$('#exampleModalLong').modal('hide')
}
