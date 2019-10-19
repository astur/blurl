module.exports = (url, {blurPassword = true} = {}) => url
    .replace(
        /http(s?):\/\/([^:.@/]+):([^:.@/]+)@/,
        (match, p1, p2, p3) => blurPassword ? `http${p1}://${p2}:${p3.split('').map(v => '*').join('')}@` : match
    );
