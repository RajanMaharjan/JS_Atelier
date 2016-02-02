var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("printName()", function() {
	it("it should print the last name first",function(){
		var results = tools.printName({first:"Rajan", last:"Maharjan"});
		expect(results).to.equals("Maharjan,Rajan");
	});	
});
