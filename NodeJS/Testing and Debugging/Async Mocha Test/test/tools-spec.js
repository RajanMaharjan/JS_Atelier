var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function() {

	//Object literal enhancement from ES6

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Rajan", last: "Maharjan"});
			expect(results).to.equal("Maharjan, Rajan");
		});
	});

describe("loadWiki()", function() {

		this.timeout(5000);

		it("Load Abraham Lincoln's wikipedia page", function(done) {

			tools.loadWiki({ first: "Abraham", last: "Lincoln"}, function(html) {
				expect(html).to.be.ok;
				done();
			});

		});

	});

});


