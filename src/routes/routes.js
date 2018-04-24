'use strict';

const express = require("express");
const router = express.Router();
const contentful = require('../server/contentful');

router.get('/', (req, res) => {
    loadStartContent(res, 'index');
});

// Loads content from Contentful and renders the start page
//  page: String with the name of the page to load
function loadStartContent(res, page) {

    contentful.getContent(process.env.space, process.env.accessToken, process.env.indexId).then((data) => {

        return res.render(page, {
            content: data
        });

    }).catch((e) => {

        res.status(500, {
        error: e,

    });
  });
}

module.exports = router;