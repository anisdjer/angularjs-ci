/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module', function () {
    "use strict";
    beforeEach(module('post'));

    var Post;

    beforeEach(inject(function ($injector) {
        Post = $injector.get("Post");
    }));

    afterEach(function() {});

    describe("Post Model", function () {
        it('should be initialized', function () {
            var data = {title: "Titile 1", body: "Body 1"},
                post = new Post(data);

            expect(post.title).toEqual(data.title);
        });
        it('should be initialized if data is empty', function () {
            var post = new Post();

            expect(post.title).toEqual("Title");
        });
    });

});
