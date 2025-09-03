$(document).ready(function() {
	
	var NegroM = 0;
	var NegroD = 0;
	var Menu2M = 0;
	var Menu2D = 0;
	var Menu3M = 0;
	var Menu3D = 0;
	var mM = 0;
	var mD = 0;
	
	$(".juan").hide();
	$(".glass").animate({opacity: 0},{duration:1, easing: 'easeOutCirc'});
	$(".boxM").hide();
	$(".boxD").hide();
	$(".boxM h1").hide();
	$(".boxM h2").hide();
	$(".boxD h1").hide();
	$(".boxD h2").hide();
	$(".proyectosM").hide();
	$(".contenidoM").hide();
	$(".proyectosD").hide();
	$(".contenidoD").hide();
	$(".mascara").css('marginTop','-330px');
	$(".menuM, .menuD").css('marginTop','-300px');
	$(".toolM").hide();
	$(".toolD").hide();
	$(".sombraV").hide();
	$(".menuReel").hide();
	$(".menuReel a").first().css('background-image','url(./images/btnSlider1.png)');
	$(".loadD").hide();
	$(".diagonales").css( {backgroundPosition: "0px -500px"} )
	//$(".demo1 a").hide();
	$("ul.demo1").ytplaylist();
	
	
//*---------intro---------------*//

	$(".logo").delay(2100).animate({top:"10%"},{duration:1000, easing: 'easeOutCirc'});
	$(".juan").delay(2700).fadeIn("slow");
	$(".boxM").delay(2900).fadeIn("slow");
	$(".boxD").delay(3100).fadeIn("slow");

	 
//*---------Menu 1---------------*//

	//---------Click Menu1--------//

	$('.btnMusic1').click(function (){
		
		NegroM = 1;
		mM = 1;
		
		$(".diagonales").stop().animate({backgroundPosition:"(0px -1000px)"}, {duration:2500});
		$("body").css('background-image','url(./images/texturaRoja.jpg)');
		$(".boxM").fadeOut("slow");
		$(".boxD").delay(200).fadeOut("slow");
		$(".negroM").hide("slow");
		$(".juan").fadeOut("slow");
		$(".logo").animate({left:"0%"},{duration:1000, easing: 'easeOutCirc'}).css("marginLeft","0px");
		$(".music").animate({width:"100%"},{duration:1000, easing: 'easeOutCirc'});
		$(".design").animate({width:"0%"},{duration:1000, easing: 'easeOutCirc'});
		$(".contenidoM").show();
		$(".proyectosM").delay(2000).slideDown(1000);
		$(".contenidoM").delay(2000).animate({top:"0%"},{duration:1000, easing: 'easeOutCirc'});
		$(".footerM").delay(2500).animate({marginBottom:"-225px"},{duration:1000, easing: 'easeOutCirc'});
		$(".sombraV").delay(2500).fadeIn("slow");
		setTimeout( function(){
			$(".footerM").css('position','relative');
			$(".contenedor").css('height','auto')
    	},2500);
		$(".menu2").css('left','0px');
		$(".menuM").delay(3200).animate({marginTop:"0px"},{duration:1500, easing: 'easeOutElastic'});
		$(".btnMusic2").delay(3500).animate({marginRight:"-155px"},{duration:1000, easing: 'easeOutCirc'});
		
		
		
	});	
	
	$('.btnDesign1').click(function (){	
		
		NegroD = 1;
		mD = 1;
		$(".diagonales").delay(800).stop().animate({backgroundPosition:"(0px 0px)"}, {duration:2500});
		$("body").css('background-image','url(./images/texturaAzul.jpg)');
		$(".boxD").fadeOut("slow");
		$(".boxM").delay(200).fadeOut("slow");
		$(".negroD").hide("slow");
		$(".juan").fadeOut("slow");
		$(".logo").animate({left:"100%"},{duration:1000, easing: 'easeOutCirc'}).css("marginLeft","-237px");
		$(".design").animate({width:"100%"},{duration:1000, easing: 'easeOutCirc'});
		$(".music").animate({width:"0%"},{duration:1000, easing: 'easeOutCirc'});
		$(".contenidoD").show();
		$(".proyectosD").delay(2000).slideDown(1000);
		$(".contenidoD").delay(2000).animate({top:"0%"},{duration:1000, easing: 'easeOutCirc'});
		$(".footerD").delay(2500).animate({marginBottom:"-225px"},{duration:1000, easing: 'easeOutCirc'});
		setTimeout( function(){
			$(".footerD").css('position','relative');
			$(".contenedor").css('height','auto');
			$(".contenidoD").css('width','100%');
    	},2500);
		$(".menu2").css('left','-237px');
		$(".menuD").delay(3200).animate({marginTop:"0px"},{duration:1500, easing: 'easeOutElastic'});
		$(".btnDesign2").delay(3500).animate({marginLeft:"-155px"},{duration:500, easing: 'easeOutCirc'});
		
	});
	
	//---------RollOver Menu 1--------//
	
	$('.btnMusic1').mouseenter(function (){
		
		$(".glass").animate({marginTop:"+=15px",opacity: 1},{duration:400, easing: 'easeOutCirc'});
		$(".negroM").fadeOut(200);
		$('.btnMusic1 img').css("marginTop","-150px");
		$('.masM img').animate({marginLeft:"-70px"},200);
		$(".boxM h1").delay(300).slideDown(200);
		$(".boxM h2").delay(500).slideDown(200);
	
	});
	$('.btnMusic1').mouseleave(function (){
		
		if (NegroM == 0){
			$(".negroM").fadeIn(300);
			$(".glass").animate({marginTop:"-=15px",opacity: 0},{duration:300, easing: 'easeOutCirc'});
			};

		
		$('.btnMusic1 img').css("marginTop","0px");
		$('.masM img').animate({marginLeft:"0px"},200);
		$(".boxM h1").delay(100).slideUp(200);
		$(".boxM h2").delay(50).slideUp(100);
	
	});
	$('.btnDesign1').mouseenter(function (){
			
		$(".glass").animate({marginTop:"+=15px",opacity: 1},{duration:400, easing: 'easeOutCirc'});
		$(".negroD").fadeOut(200);
		$('.btnDesign1 img').css("marginTop","-147px");
		$('.masD img').animate({marginLeft:"-70px"},200);
		$(".boxD h1").delay(300).slideDown(200);
		$(".boxD h2").delay(500).slideDown(200);
	
	});
	$('.btnDesign1').mouseleave(function (){
		
		if (NegroD == 0){
			$(".negroD").fadeIn(300);
			$(".glass").animate({marginTop:"-=15px",opacity: 0},{duration:300, easing: 'easeOutCirc'});
			};	
		
		$('.btnDesign1 img').css("marginTop","0px");
		$('.masD img').animate({marginLeft:"0px"},200);
		$(".boxD h1").delay(100).slideUp(200);
		$(".boxD h2").delay(50).slideUp(100);
	
	});
 
//*---------Menu Follow---------------*//
 
	//---------Click Menu Follow--------//

	$('#followM').click(function (){
		
		if(Menu2M == 1){
			$(".mascara").animate({marginTop:"-330px"},{duration:1000, easing: 'easeOutElastic'});
			$(this).css("marginLeft","0px");
			Menu2M = 0;
			}
		else{
			$(".mascara").animate({marginTop:"0px"},{duration:1000, easing: 'easeOutElastic'});
			$(this).css("marginLeft","-342px");
			Menu2M = 1;
		};
	});	
	
	$('#followD').click(function (){	
		
		if(Menu2D == 1){
			$(".mascara").animate({marginTop:"-330px"},{duration:1000, easing: 'easeOutElastic'});
			$(this).css("marginLeft","0px");
			Menu2D = 0;
			}
		else{
			$(".mascara").animate({marginTop:"0px"},{duration:1000, easing: 'easeOutElastic'});
			$(this).css("marginLeft","-342px");
			Menu2D = 1;
		};
		
	});
	
	//---------RollOver Menu Follow--------//
	
	$('#followM').mouseenter(function (){
		
		if(Menu2M == 1){
			$(this).css("marginLeft","-513px");
			}
		else{
			$(this).css("marginLeft","-171px");
		};
	});
	
	$('#followM').mouseleave(function (){
		
		if(Menu2M == 1){
			$(this).css("marginLeft","-342px");
			}
		else{
			$(this).css("marginLeft","0px");
		};
	});
	
	$('#followD').mouseenter(function (){
		
		if(Menu2D == 1){
			$(this).css("marginLeft","-513px");
			}
		else{
			$(this).css("marginLeft","-171px");
		};
	});
	
	$('#followD').mouseleave(function (){
		
		if(Menu2D == 1){
			$(this).css("marginLeft","-342px");
			}
		else{
			$(this).css("marginLeft","0px");
		};
	});
	
	//____----------- REDES SOCIALES ----------------//
	
	$(document).bind('mousemove', function(e){
    		$('.toolM').css({
       			left:  e.pageX + 35,
       			top:   e.pageY + 0
    		});
		});
	$(document).bind('mousemove', function(e){
    		$('.toolD').css({
       			left:  e.pageX - 170,
       			top:   e.pageY + 0
    		});
		});
	$('.linksM a').each(function(index){
			
			$(this).mouseenter(function() {	
				var text= $(this).attr("id");
				$(".toolM").show();
				$(".toolM").html(text);
			});
			$(this).mouseleave(function() {	
				$(".toolM").hide();
			});
	});
	
	$("#Behance").mouseenter(function() {	
		$(".toolD").show();
		$(".toolD").html("Behance");
		$(".toolD").css("marginLeft","80px");
	});
	$("#Face").mouseenter(function() {	
		$(".toolD").show();
		$(".toolD").html("Facebook");
		$(".toolD").css("marginLeft","80px");
	});
	$("#gmail").mouseenter(function() {	
		$(".toolD").show();
		$(".toolD").html("juanmora.dg@gmail.com");
		$(".toolD").css("marginLeft","0px");
	});

	$('.linksD a').each(function(index){
			
		$(this).mouseleave(function() {	
			$(".toolD").hide();
		});
	});
	
//*---------Menu 2---------------*//

	//---------Click Menu 2--------//
	$(".btnMusic2").click(function (){
		
		Menu3M = 1;
		NegroD = 1;
		Menu3D = 0;
		Menu2M = 0;
		
		$(".loadD").hide();
		$(".diagonales").delay(800).stop().animate({backgroundPosition:"(0px 0px)"}, {duration:3000});
		$.scrollTo('.contenedor',500);
		$("#followM").css("marginLeft","0px");
		$("body").css('background-image','url(./images/texturaAzul.jpg)');
		$(".btnMusic2").animate({marginRight:"-250px"},{duration:500, easing: 'easeOutCirc'});
		$(".mascara").delay(300).animate({marginTop:"-330px"},{duration:1000, easing: 'easeOutElastic'});
		$(".menuM").delay(500).animate({marginTop:"-155px"},{duration:1000, easing: 'easeOutElastic'});
		$(".contenidoM").delay(1000).fadeOut(500);
		$(".sombraV").delay(1000).fadeOut("slow");
		setTimeout( function(){
      		$(".logo").css('marginLeft','-237px');
    	},1400);
		
		$(".negroD").hide();
		$(".logo").delay(1400).animate({left:"100%"},{duration:1000, easing: 'easeOutCirc'})
		$(".design").delay(1400).animate({width:"100%"},{duration:1000, easing: 'easeOutCirc'});
		$(".music").delay(1400).animate({width:"0%"},{duration:1000, easing: 'easeOutCirc'});
		$(".contenidoD").delay(1400).fadeIn(1000);
		$(".reelD").animate({left:"0px"},{duration:500, easing: 'easeOutCirc'});
		$(".menuReel a").css('background-image','url(./images/btnSlider2.png)');
		$(".menuReel a").first().css('background-image','url(./images/btnSlider1.png)');
		$(".menuReel h1").html("1/2");
		
		if(mD == 1){
			setTimeout( function(){
				$(".footerD").css('position','relative');
				$(".contenedor").css('height','auto');
				$(".menu2").css('left','-237px');
			},2000);
			$(".menuD").delay(2500).animate({marginTop:"0px"},{duration:1500, easing: 'easeOutElastic'});
			$(".btnDesign2").delay(2800).animate({marginLeft:"-155px"},{duration:1000, easing: 'easeOutCirc'});
		}else{
			mD = 1;
			setTimeout( function(){
      			$(".contenedor").css('height','100%');
    		},900);
			$(".proyectosD").delay(3400).slideDown(1000);
			$(".contenidoD").delay(1000).animate({top:"0%"},{duration:1000, easing: 'easeOutCirc'});
			$(".footerD").delay(3400).animate({marginBottom:"-225px"},{duration:1000, easing: 'easeOutCirc'});
			setTimeout( function(){
				$(".footerD").css('position','relative');
				$(".contenedor").css('height','auto');
				$(".contenidoD").css('width','100%');
				$(".menu2").css('left','-237px');
			},4000);
			$(".menuD").delay(4500).animate({marginTop:"0px"},{duration:1500, easing: 'easeOutElastic'});
			$(".btnDesign2").delay(4800).animate({marginLeft:"-155px"},{duration:1000, easing: 'easeOutCirc'});
		};
	});
	
	$(".btnDesign2").click(function (){
		
		Menu3D = 1;
		NegroM = 1;
		Menu3M = 0;
		Menu2D = 0;
		
		$(".diagonales").delay(800).stop().animate({backgroundPosition:"(0px -1000px)"}, {duration:3000});
		$.scrollTo('.contenedor',500);
		$("#followD").css("marginLeft","0px");
		$("body").css('background-image','url(./images/texturaRoja.jpg)');
		$(".btnDesign2").animate({marginLeft:"-250px"},{duration:500, easing: 'easeOutCirc'});
		$(".mascara").delay(300).animate({marginTop:"-330px"},{duration:1000, easing: 'easeOutElastic'});
		$(".menuD").delay(500).animate({marginTop:"-155px"},{duration:1000, easing: 'easeOutElastic'});
		$(".contenidoD").delay(1000).fadeOut(500);
		setTimeout( function(){
      		$(".logo").css('marginLeft','0px');
    	},1400);
		
		$(".negroM").hide();
		$(".logo").delay(1400).animate({left:"0%"},{duration:1000, easing: 'easeOutCirc'})
		$(".music").delay(1400).animate({width:"100%"},{duration:1000, easing: 'easeOutCirc'});
		$(".design").delay(1400).animate({width:"0%"},{duration:1000, easing: 'easeOutCirc'});
		$(".contenidoM").delay(1400).fadeIn(500);
		
		
		if (mM == 1){
			setTimeout( function(){
				$(".footerM").css('position','relative');
				$(".contenedor").css('height','auto');
				$(".menu2").css('left','0px');
			},2000);
			$(".menuM").delay(2500).animate({marginTop:"0px"},{duration:1500, easing: 'easeOutElastic'});
			$(".btnMusic2").delay(2800).animate({marginRight:"-155px"},{duration:500, easing: 'easeOutCirc'});
			$(".sombraV").delay(3200).fadeIn("slow");
		}else{
			mM = 1;
			setTimeout( function(){
      			$(".contenedor").css('height','100%');
    		},900);
			$(".proyectosM").delay(3400).slideDown(1000);
			$(".contenidoM").delay(1500).animate({top:"0%"},{duration:1000, easing: 'easeOutCirc'});
			$(".footerM").delay(3400).animate({marginBottom:"-225px"},{duration:1000, easing: 'easeOutCirc'});
			$(".sombraV").delay(4400).fadeIn("slow");
			setTimeout( function(){
				$(".footerM").css('position','relative');
				$(".contenedor").css('height','auto');
				$(".menu2").css('left','0px');
			},4000);
			$(".menuM").delay(4500).animate({marginTop:"0px"},{duration:1500, easing: 'easeOutElastic'});
			$(".btnMusic2").delay(4800).animate({marginRight:"-155px"},{duration:500, easing: 'easeOutCirc'});

		};
	});
	
	
	//---------RollOver Menu 2--------//
	$(".btnMusic2").mouseenter(function (){
		
		if(Menu3M == 0){
			$(".btnMusic2").animate({marginRight:"-23px"},{duration:500, easing: 'easeOutCirc'});
		};
	});
	
	$(".btnMusic2").mouseleave(function (){
		
		if(Menu3M == 0){
			$(".btnMusic2").animate({marginRight:"-155px"},{duration:500, easing: 'easeOutCirc'});
		};
	});
	$(".btnDesign2").mouseenter(function (){
		if(Menu3D == 0){
			$(".btnDesign2").animate({marginLeft:"-23px"},{duration:500, easing: 'easeOutCirc'});
		};
	});
	
	$(".btnDesign2").mouseleave(function (){
		if(Menu3D == 0){
			$(".btnDesign2").animate({marginLeft:"-155px"},{duration:500, easing: 'easeOutCirc'});
		};
	});
	
//*---------CONTENIDO DESIGN---------------*//
	$(".proyectoD ul li").each(function(i){
		
		$(this).mouseenter(function() {	
			$(this).css('background-image','url(./images/TextuAzul1.png)');
			$(this).find('img').css('background-image','none');
			$(this).find('h2').css('background','#F33F4B');
			$(this).find('.rollOver').fadeIn("fast");
		});
		$(this).mouseleave(function() {	
			$(this).css('background-image','none');
			$(this).find('img').css('background-image','url(./images/TextuAzul3.png)');
			$(this).find('h2').css('background','#005566');
			//$(this).find('.rollOver').fadeOut("fast");
		});
		$(this).click(function (){
			var pp = $(this).attr("id")
			$(".loadD").load("./proyectosD/" + pp + ".html");
			$(".loadD").delay(200).slideDown("slow");
			$.scrollTo('.proyectosD',1000);
		});
	
	});
	$(".subD a").each(function(){
		
		$(this).click(function (){
			var pA = $(this).attr("id")
			$(".loadD").load("./proyectosD/" + pA + ".html");
			$(".loadD").delay(200).slideDown("slow");
			$.scrollTo('.proyectosD',1000);
		});
	});
	
	$(".menuReel a").each(function(index){
		
		$(this).click(function (){
			$(".menuReel a").css('background-image','url(./images/btnSlider2.png)');
			$(this).css('background-image','url(./images/btnSlider1.png)');
			var valor = -(index * $(".proyectoD").width());
			$(".reelD").animate({left:valor},{duration:500, easing: 'easeOutCirc'});
			$(".menuReel h1").html((index + 1) + "/2");
			$.scrollTo('.mascaraD',1000);
		});
	});
	
	
	
	
});

