$(document).ready(function(){
	$("#content").fullpage({
		anchors:["page1","page2","page3","page4"],
		menu:"#mainMenu",
		verticalCentered:false,
		navigation:true,
		navigationPosition:"right",
		navigationTooltips:["DEMO","技能","经历","简介"],
		controlArrowColor:"rgba(0,0,0,0.3)",
		afterLoad:function(link,index){
			switch(index){
				case 1:
				move(".demo h2").scale(1.5).set("color","#06cbbc").end();
				break;
				case 2:
				move(".skill h2").scale(1.5).set("color","#06cbbc").end();
				break;
				case 3:
				move(".experience h2").scale(1.5).set("color","#06cbbc").end();
				break;
				case 4:
				move(".about h2").scale(1.5).set("color","#06cbbc").end();
				break;
				default:
				break;
			}
		},
		onLeave:function(link,index){
			switch(index){
				case 1:
				move(".demo h2").rotate(360).end();
				break;
				case 2:
				move(".skill h2").rotate(360).end();
				break;
				case 3:
				move(".experience h2").rotate(360).end();
				break;
				case 4:
				move(".about h2").rotate(360).end();
				break;
				default:
				break;
			}
		},
		afterRender:function(){
			
		},
	});
})
