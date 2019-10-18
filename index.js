module.exports = url => url
    .replace(
        /http(s?):\/\/([^:.@/]+):([^:.@/]+)@/,
        (match, p1, p2, p3) => `http${p1}://${p2}:${p3.split('').map(v => '*').join('')}@`
    );
