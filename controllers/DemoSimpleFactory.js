var SimpleFactory=require('../service/SimpleFactory')
exports.post= function(req,res) {  
    var simpleFactory = SimpleFactory.getInstance('SimpleEmployeeFactory');

    console.log("inside factory demo");

    console.log('The factory is called: [' + simpleFactory.getName() + ']');

    console.log('We have a new sales colleague:');
    var janeDoe = simpleFactory.getSales('Jane', 'Doe');
    console.log(JSON.stringify(janeDoe, null, 2));

    console.log();
    console.log('We have a new engineer colleague:');
    var billDoe = simpleFactory.getEngineer('Bill', 'Doe');
    console.log(JSON.stringify(billDoe, null, 2));

    res.write(SimpleFactory.getName())
}
