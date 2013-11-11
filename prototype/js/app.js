var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
	
		var event1 = 'Disussion Group: "LeadingAge Hackfest". <b>Ongoing... JOIN Now!</b> <br> by <i>LeadingAge Organization</i>';
		var event2 = 'Book Discussion: "Crime and Punishment" at <b>11am</b><br> by <i>LeadingAge Organization</i>';
		var event3 = 'Religious Service with Rvd. Jones at <b>12pm</b>. <br> by <i>LeadingAge Organization</i>';
		var event4 = 'Diabetes Talk with Dr. Rosenberg at <b>4pm</b><br> by <i>LeadingAge Organization</i>';
		var event5 = 'Discussion Group: "Obamacare" at <b>5pm</b> <br> by <i>Robson Ranch, Denton, TX</i>';
		var event6 = 'Singing Lessons with Prof. Simpson at <b>6pm</b><br> by <i>Heritage Ranch, Fairview, TX</i>';
		
		
		var event7 = 'Religious Service with Rvd. Jones <b>9am</b>. <br> <i>Heritage Ranch Retirement Community</i>';
		var event8 = 'Book Discussion: "The little Prince" <b>11am</b> <br> by <i>LeadingAge Organization</i>';
		var event9 = 'Disussion Group: "Technology and Ageing. What can we do about it this summer?". <b>Starting at 3pm</p> <br> by <i>LeadingAge Organization</i>';
		var event10 = 'Singing Lessons with Prof. Simpson. <b>6pm</b> <br> <i>Heritage Ranch Retirement Community</i>';
		var event11 = 'Game Tournament: "Chess Tournament" <b>5pm</b> <br> <i>Heritage Ranch Retirement Community</i>';
		var event12 = 'Diabetes Talk with Dr. Rosenberg. <b>4pm</b> <br> <i>Heritage Ranch Retirement Community</i>';


		var icons = {
		   "book-club":"img/Book-White.png",
		   "religious":"img/Eye of Ra-White.png",
		   "discussion-group":"img/Discussion-White.png",
		   "music":"img/Music-White.png",
		   "health":"img/Health-White.png",
		   "game":"img/Chess-White.png"
		};
		

			$("#today").AddMetroDoubleButton('today4', 'metro-azul', icons['discussion-group'], event1, 'openEvent("event1");');
			$("#today").AddMetroDoubleButton('today1', 'metro-vermelho', icons['book-club'], event2, 'openEvent("event2");');
            $("#today").AddMetroDoubleButton('today2', 'metro-azul', icons['religious'], event3 , 'openEvent("event3");');
			$("#today").AddMetroDoubleButton('today3', 'metro-verde', icons['health'], event4, 'openEvent("event4");', 'metro-info');
			$("#today").AddMetroDoubleButton('today4', 'metro-azul', icons['discussion-group'], event5, 'openEvent("event5");', 'metro-azul');
			$("#today").AddMetroDoubleButton('today6', 'metro-laranja', icons['music'], event6, 'openEvent("event6");');


			$("#today-extra").AddMetroDoubleButton('today7', 'metro-verde', icons['religious'], event7, 'openEvent("event1");');
			$("#today-extra").AddMetroDoubleButton('today8', 'metro-laranja', icons['book-club'], event8, 'openEvent("event2");');
			$("#today-extra").AddMetroDoubleButton('today10', 'metro-vermelho', icons['health'], event9, 'openEvent("event4");', 'metro-info');
            $("#today-extra").AddMetroDoubleButton('today9', 'metro-azul', icons['religious'], event10, 'openEvent("event3");');
			$("#today-extra").AddMetroDoubleButton('today11', 'metro-azul', icons['discussion-group'], event11, 'openEvent("event5");', 'metro-azul');
			$("#today-extra").AddMetroDoubleButton('today12', 'metro-verde', icons['music'], event12, 'openEvent("event6");');

				
			$("#jane").AddMetroDoubleButton('today4', 'metro-azul', icons['discussion-group'], event1, 'openEvent("event1");');
			$("#jane").AddMetroDoubleButton('today1', 'metro-vermelho', icons['book-club'], event2, 'openEvent("event2");');
			$("#jane").AddMetroDoubleButton('today3', 'metro-verde', icons['health'], event4, 'openEvent("event4");', 'metro-info');
			$("#jane").AddMetroDoubleButton('today4', 'metro-azul', icons['discussion-group'], event5, 'openEvent("event5");', 'metro-azul');
	
				
			var userCode = GetUserCode();
			
			if (userCode == "Jane123") {
				$("#today").hide();
				$("#today-extra").hide();
				$("#jane").show();
				$("#fullname").text("Jane");
			}
			
    /*app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });*/
});


function openEvent(event) {
	// TODO: eventually, the event keyword should be used to get the HangoutURL
	if (event == "event1") {
		var hangoutUrl = GetHangoutUrl();
		window.open(hangoutUrl);
	} else {
		$('#myModal').modal({ show : "true" });
	}
	
}

function GetHangoutUrl() {

	// Get the Hangout URL from a simple redis key-value server
	// Example: GET http://test.lifeparticipation.org:7379/SET/globalengage/https:%2f%2fhangoutsapi%2etalkgadget%2egoogle%2ecom%2fhangouts%2f_%2f7ecpi517rtv7ptinkosji25gfo 
		$.ajax({
	    type: "GET",
	    url: GetBaseUrl(),
//           	//url: "http://test.reminiscens.me/lifeapi/context/person/"+GetPersonId(),
////			beforeSend: function (request)
////	    	{
////	    	   request.setRequestHeader("PLAY_SESSION", GetSessionKey());
////	    	},
//          processData: false,
//          dataType: "json",
//			contentType:"application/json",
        	error: function (data) {
        	    console.log("couldn't get hangout url");
        	    return "https://hangoutsapi.talkgadget.google.com/hangouts/_/7ecpi517rtv7ptinkosji25gfo";
        	},
			success: function(data) 
			{	
				console.log("Received Data: "+data.GET);
				var hangoutUrl = data.GET;
				var w = window.open(hangoutUrl);            }  	
   		});
		

}

function GetBaseUrl() {
	//return "http://globalengage.co.nf/api/hangouts/";
	return "http://test.lifeparticipation.org:7379/GET/globalengage";
}

function refreshActivities() {
	$("#today").hide();
	$("#today-extra").show();
	$("#jane").hide();
}


