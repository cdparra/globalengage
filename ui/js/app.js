var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
			$("#today").AddMetroDoubleButton('today4', 'metro-azul', 'img/white6-100x100-inverted.png', 'Disussion Group: "LeadingAge Hackfest". <b>Ongoing... JOIN Now!</p>', 'openEvent("event1");');
			$("#today").AddMetroDoubleButton('today1', 'metro-vermelho', 'img/white6-100x100.png', 'Book Discussion: "Crime and Punishment" <b>11am</b>', 'openEvent("event2");');
            $("#today").AddMetroDoubleButton('today2', 'metro-azul', 'img/church1-inverted.png', 'Religious Service with Rvd. Johnes <b>12pm</b>. <i>"XYZ" Retirement Community</i>', 'openEvent("event3");');
			$("#today").AddMetroDoubleButton('today3', 'metro-verde', 'img/admin.png', 'Diabetes Talk with Dr. Rosenberg. <b>4pm</b>', 'openEvent("event4");', 'metro-info');
			$("#today").AddMetroDoubleButton('today4', 'metro-azul', 'img/admin.png', 'Discussion Group: "Obamacare" <b>5pm</p>', 'openEvent("event5");', 'metro-azul');
			$("#today").AddMetroDoubleButton('today6', 'metro-laranja', 'img/carta.png', 'Singing Lessons with Prof. Simpson. <b>6pm</b>', 'openEvent("event6");');

    /*app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });*/
});


function openEvent(event) {
	if (event == "event1") {
		window.open("https://hangoutsapi.talkgadget.google.com/hangouts/_/72cpil68rhse9op5892b6mk5k4?authuser=0");
	} else {
		//create a modal window
	}
	
	
	// Get the Hangout URL 
//		$.ajax({
//	    type: "GET",
//	    url: GetBaseUrl() + event+".json",
//           	//url: "http://test.reminiscens.me/lifeapi/context/person/"+GetPersonId(),
////			beforeSend: function (request)
////	    	{
////	    	   request.setRequestHeader("PLAY_SESSION", GetSessionKey());
////	    	},
//            processData: false,
//            dataType: "json",
//			contentType:"application/json",
//        	error: function (data) {
//        	    alert("create a modal window with info about the event but no join button");
//        	},
//			success: function(data) 
//			{	
//				var hangoutUrl = data.url;
//				var w = window.open(hangoutUrl);
//				//w.getURL
//            }  	
//   		});
		

}

function GetBaseUrl() {
	//return "http://globalengage.co.nf/api/hangouts/";
	//return "http://test.lifeparticipation.org/globalengage/hangouts/";
}

