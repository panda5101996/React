const siteConfig = require(`../siteConfig`);

var TtcHelper = {

    imgUrl(img, path = null) {
        if (path) {
            return `${siteConfig.baseUrl}img/${path}/${img}`;
        }
        return `${siteConfig.baseUrl}img/${img}`;
    },

    _html(content) {
        return { __html: content };
    }
};

module.exports = TtcHelper;