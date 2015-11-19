// Get in there before browserify. Require gets overwritten by browserify, so we
// have to reimplement it from scratch - boo :(
var core_require = require;
