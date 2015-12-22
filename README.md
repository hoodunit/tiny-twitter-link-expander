# Tiny Twitter Link Expander

This is a Firefox extension that replaces the Twitter short URL used in timeline links with the actual URL being shared. This makes it more difficult for Twitter to track what links you click (and makes your Twitter links load faster).

The functionality is identical to the [Twitter Link Expander](https://addons.mozilla.org/en-US/firefox/addon/twitter-link-expander/?src=search) extension. The differences are that this is explicitly open source and uses only a few lines of JavaScript instead of the jQuery and jQuery.whenLive plugins.

## To build

For installation, build the XPI and add it to Firefox through "Open File".

```
npm install
./node_modules/.bin/jpm xpi
```

For development, you can use JPM tools to post updated versions to a Firefox browser that is listening:

```
./watch.sh
```