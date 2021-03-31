module.exports = (url, {blurPassword = true} = {}) => url
    .replace(
        /http(s?):\/\/([^:.@/]+):([^:.@/]+)@/,
        (match, p1, p2, p3) => {
            if(Array.isArray(blurPassword)){
                const pArr = p3.split('');
                const [i, j] = blurPassword;
                if(i + j > pArr.length) return match;
                const n = pArr.length - i - j;
                pArr.splice(i, n, '*'.repeat(n));
                return `http${p1}://${p2}:${pArr.join('')}@`;
            }
            return blurPassword ? `http${p1}://${p2}:${p3.split('').map(v => '*').join('')}@` : match;
        },
    );
