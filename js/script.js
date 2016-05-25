//CODE FOR THE WEB MANAGEMENT

$(document).ready(function() {
    
    $('#arrow_01').click(function() {

        $('#round').animate({
			marginTop : "-=60px",
			opacity : "-=0.4",
			marginBottom : "+=0px"
			
        },700);
		$('#intro').animate({
			marginTop : "-=50px",
			marginBottom : "+=50px",
			opacity : "-=0.2",
			fontSize : "-=1.2em"
        },700);
			$('#paragraph_01').animate({
			marginTop : "-=200px",
			opacity : "+=1.0"
        },700);
		$('#arrow_01').animate({
			opacity : "-=1.0",
			visibility: "hidden"
        },500);
		
    });
});



//CODE FOR THE SLIDERS


$(document).ready(function() {
	
	//Hide all the images except the first one
    $(".mobile_imgs_8 img:gt(0)").hide();
	
    setInterval(function() {
        //get the current image - It´s the visible one
		var current = $('.mobile_imgs_8 img:visible');
		
		//Get the immediate next image after the current if exist 
		//Otherwise find the first one
        var next = current.next().length ? current.next() : $('.mobile_imgs_8 img:eq(0)');
        current.fadeOut();
        next.fadeIn();
    }, 3000);

});
$(document).ready(function() {
	
	//Hide all the images except the first one
    $(".mobile_imgs_7 img:gt(0)").hide();
	
    setInterval(function() {
        //get the current image - It´s the visible one
		var current = $('.mobile_imgs_7 img:visible');
		
		//Get the immediate next image after the current if exist 
		//Otherwise find the first one
        var next = current.next().length ? current.next() : $('.mobile_imgs_7 img:eq(0)');
        current.fadeOut();
        next.fadeIn();
    }, 3000);

});
$(document).ready(function() {
	
	//Hide all the images except the first one
    $(".mobile_imgs_1 img:gt(0)").hide();
	
    setInterval(function() {
        //get the current image - It´s the visible one
		var current = $('.mobile_imgs_1 img:visible');
		
		//Get the immediate next image after the current if exist 
		//Otherwise find the first one
        var next = current.next().length ? current.next() : $('.mobile_imgs_1 img:eq(0)');
        current.fadeOut();
        next.fadeIn();
    }, 3000);

});
$(document).ready(function() {
	
	//Hide all the images except the first one
    $(".mobile_imgs_2 img:gt(0)").hide();
	
    setInterval(function() {
        //get the current image - It´s the visible one
		var current = $('.mobile_imgs_2 img:visible');
		
		//Get the immediate next image after the current if exist 
		//Otherwise find the first one
        var next = current.next().length ? current.next() : $('.mobile_imgs_2 img:eq(0)');
        current.fadeOut();
        next.fadeIn();
    }, 3000);

});
$(document).ready(function() {
	
	//Hide all the images except the first one
    $(".tablet_imgs_1 img:gt(0)").hide();
	
    setInterval(function() {
        //get the current image - It´s the visible one
		var current = $('.tablet_imgs_1 img:visible');
		
		//Get the immediate next image after the current if exist 
		//Otherwise find the first one
        var next = current.next().length ? current.next() : $('.tablet_imgs_1 img:eq(0)');
        current.fadeOut();
        next.fadeIn();
    }, 3000);

});
$(document).ready(function() {
	
	//Hide all the images except the first one
    $(".web_imgs_1 img:gt(0)").hide();
	
    setInterval(function() {
        //get the current image - It´s the visible one
		var current = $('.web_imgs_1 img:visible');
		
		//Get the immediate next image after the current if exist 
		//Otherwise find the first one
        var next = current.next().length ? current.next() : $('.web_imgs_1 img:eq(0)');
        current.fadeOut();
        next.fadeIn();
    }, 3000);

});
$(document).ready(function() {
	
	//Hide all the images except the first one
    $(".web_imgs_2 img:gt(0)").hide();
	
    setInterval(function() {
        //get the current image - It´s the visible one
		var current = $('.web_imgs_2 img:visible');
		
		//Get the immediate next image after the current if exist 
		//Otherwise find the first one
        var next = current.next().length ? current.next() : $('.web_imgs_2 img:eq(0)');
        current.fadeOut();
        next.fadeIn();
    }, 3000);

});
$(document).ready(function() {
	
	//Hide all the images except the first one
    $(".electro_imgs_1 img:gt(0)").hide();
	
    setInterval(function() {
        //get the current image - It´s the visible one
		var current = $('.electro_imgs_1 img:visible');
		
		//Get the immediate next image after the current if exist 
		//Otherwise find the first one
        var next = current.next().length ? current.next() : $('.electro_imgs_1 img:eq(0)');
        current.fadeOut();
        next.fadeIn();
    }, 3000);

});


//Code AJAX to send mail


function send_mail(){

var xmlhttp;
if(window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest();
}else{
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");   
}

var a_name = document.getElementById('name').value;
var a_emailaddress = document.getElementById('emailaddress').value;
var a_comment = document.getElementById('comment').value;

xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState==4){
		document.getElementById('myDiv').innerHTML=xmlhttp.responseText;
	}
}

url = "../php/messages.php?uname="+a_name+"&uemailaddress="+a_emailaddress+"&ucomment="+a_comment;
xmlhttp.open("GET",url,true);
xmlhttp.send();

}

//This code allows visual efect for the images and also a random effect

$(document).ready(function() {
    var a = [];
    var temp;
    var i = 1;
	while (i < 7) {
		temp=Math.floor(Math.random() * (13-i)) + 1;
		if (a.indexOf(temp)==-1){
			a[i]=temp;
			i++;
		}else{
			i=i+0;
		}
	}
    for (i = 1; i < 7 ; i++) {
		var imgName ="pic_"+a[i]+".jpg";
		document.getElementById("image_"+i).src="images/"+imgName;
	}
});