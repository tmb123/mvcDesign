var template=require('../views/template-main');
var test_data=require('../models/test-data');
exports.get=function(req,res){
	var teamlist=test_data.teamlist;
	var strTeam="";
	var i =0;
	for (var i = 0; i < teamlist.count; i++) {
		strTeam=strTeam+"<li>"+teamlist.teams[i].country+"</li>";
	}
	strTeam="<ul>"+strTeam+"</ul>";
	res.writeHead(200,{
		'Content-Type':'text/html'

	});
	res.write(template.build("Test Web Page On Node.js"," Hello there","<p>The team in Group "+teamlist.GroupName+" For Euro 2012 are:</p>"+strTeam));
	res.end();

};


