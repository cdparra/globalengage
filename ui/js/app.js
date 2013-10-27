var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
            $("#today").AddMetroDoubleWithTrailer('today1', 'metro-vermelho', 'img/white6-100x100.png', 'Book Discussion: "Crime and Punishment" <b>11am</b>', 'openEvent("201310271100","BookDiscussion");');
            $("#today").AddMetroDoubleButton('today2', 'metro-azul', 'img/carta.png', 'Religious Service with Rvd. Johnes <b>12pm</b>. <i>"XYZ" Retirement Community</i>', 'openEvent("201310271200","ReligiousService");');
			$("#today").AddMetroDoubleWithTrailer('today3', 'metro-azul', 'img/admin.png', 'Diabetes Talk with Dr. Rosenberg. <b>4pm</b>', 'openEvent("201310271600","DiabetesTalk");', 'metro-info');
			$("#today").AddMetroDoubleWithTrailerWithBG('today4', 'img/fundo_metro.png', 'Discussion Group: "Obamacare" <b>5pm</p>', 'openEvent("201310271700","DiscussionObamacare");', 'metro-azul');
			$("#today").AddMetroDoubleButton('today5', 'metro-verde', 'img/carta.png', 'Bible Study: "The creation from a modern perspective" <b>5pm</b>', 'openEvent("201310271700","BibleStudy");');
            $("#today").AddMetroDoubleButton('today6', 'metro-laranja', 'img/carta.png', 'Singing Lessons with Prof. Simpson. <b>6pm</b>', 'openEvent("20131026","TestHangout");');

    /*app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });*/
});


function openEvent(date,title) {

	// Get the Hangout URL 
		$.ajax({
	    type: "GET",
	    url: GetBaseUrl() + date+"-"+title+".json",
           	//url: "http://test.reminiscens.me/lifeapi/context/person/"+GetPersonId(),
			//beforeSend: function (request)
	    	//{
	    	//request.setRequestHeader("PLAY_SESSION", GetSessionKey());
	    	//},
            processData: false,
            dataType: "json",
			contentType:"application/json",
        	error: function (data) {
        	    alert("create a modal window with info about the event but no join button");
        	},
			success: function(data) 
			{	
				var hangoutUrl = data.url;
				window.open(hangoutUrl);
            }  	
   		});
		

}

function GetBaseUrl() {
	return "http://globalengage.co.nf/hangouts/";
}

