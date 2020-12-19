var T9n = require('meteor-accounts-t9n').T9n;

AT.prototype.atOauthHelpers = {
    oauthService: function() {
        return AccountsTemplates.oauthServices();
    },
};
