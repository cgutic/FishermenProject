'use strict';

const contentful = require('contentful');
/*
This file contains any server side modules needed.
*/

module.exports = {
    // Returns page content to the Autheicted Routes File when it is called
    getContent: function (conSpace, conToken, id) {

        console.log('Getting page content from contenful');

        var contenfulClient = contentful.createClient({
            space: conSpace,
            accessToken: conToken,
        })

        return new Promise(function (fulfill, reject) {

            contenfulClient.getEntries({
                'sys.id': id,
                include: 5
            }).then(function (entries) {
                fulfill(entries.items[0]); // content sent to page .items[0]
            }).catch(function (error) {
                reject(error)
            })
        })
    }
};