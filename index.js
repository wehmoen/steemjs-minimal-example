var steem = require('steem');

steem.api.setOptions({ url: 'https://api.steemit.com' });


steem.api.getAccounts(["wehmoen"], function(err, result) {
    console.log("Hello "+ result[0].name)
});

steem.api.getContentReplies("wehmoen", "77ab17e0-fcae-11e7-93ef-8bd1085cbd90", function(err, result) {
    for (i = 0; i < result.length; i++) {
        console.log(result[i].author + ' wrote: ' + result[i].body)
    }
});