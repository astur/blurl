const {parse, format} = require('url');

module.exports = url => {
    const obj = parse(url);
    return format(obj);
};
