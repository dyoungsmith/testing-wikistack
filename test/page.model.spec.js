var chai = require('chai');
var expect = chai.expect;
var models = require('../models/index.js');
var Page = models.Page;
var User = models.User;

describe('Page model', function () {

	describe('Virtuals', function () {
		beforeEach(function() {
			var page = new Page.build({
	            title: 'Test Virtuals',
	            content: 'I am content',
	         })
		})
		describe('route', function () {
			it('returns the url_name prepended by "/wiki/"', function() {
				expect(page.route).to.be.equal('/wiki/Test_Virtuals');
			});
		});
		describe('renderedContent', function () {
			it('converts the markdown-formatted content into HTML');
		});
	});

	describe('Class methods', function () {
		describe('findByTag', function () {
			it('gets pages with the search tag');
			it('does not get pages without the search tag');
		});
	});

	describe('Instance methods', function () {
		describe('findSimilar', function () {
			it('never gets itself');
			it('gets other pages with any common tags');
			it('does not get other pages without any common tags');
		});
	});

	describe('Validations', function () {
		it('errors without title');
		it('errors without content');
		it('errors given an invalid status');
	});

	describe('Hooks', function () {
		it('it sets urlTitle based on title before validating');
	});

});