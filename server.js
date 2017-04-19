var app = require('express')();
var faker =  require('faker');

var port = process.env.PORT || 3333;


faker.locale = "fr";

app.get('/', function(req, res){
	res.send('hello');
});

app.get('/user', function(req,res){
	res.json({
		name: faker.name.firstName(),
		lastName: faker.name.lastName(),
		avatar: faker.image.avatar(),
		job: {
			role: faker.name.jobType(),
			company: faker.company.companyName(),
		}
	});
});

app.get('/avatar', function(req,res){
	res.send(faker.image.avatar());
});



app.listen(port, function(){
	console.log('ouvrir le nav à l adresse ip courante + :'+port);
});
