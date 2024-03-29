const test = require('ava');
const blurl = require('.');

test('base', t => {
    t.is(blurl(''), '');
    t.is(blurl('not-site'), 'not-site');
    t.is(blurl('not-http://www.site.ru'), 'not-http://www.site.ru');
    t.is(blurl('http://www.site.ru'), 'http://www.site.ru');
    t.is(blurl('http://www.site.ru/'), 'http://www.site.ru/');
    t.is(blurl('https://www.site.ru/'), 'https://www.site.ru/');
    t.is(blurl('http://www.site.ru?a=1'), 'http://www.site.ru?a=1');
    t.is(blurl('http://www.site.ru/?a=1'), 'http://www.site.ru/?a=1');
    t.is(blurl('http://user@www.site.ru'), 'http://user@www.site.ru');
    t.is(blurl('http://www.site.ru/path/to/dir?a=1&b=2#link'), 'http://www.site.ru/path/to/dir?a=1&b=2#link');
    t.is(blurl('http://www.site.ru?q=%D1%82%D0%B5%D1%81%D1%82'), 'http://www.site.ru?q=%D1%82%D0%B5%D1%81%D1%82');
});

test('blur password', t => {
    t.is(
        blurl('http://user:password@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link'),
        'http://user:********@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
    );
    t.is(
        blurl(
            'http://user:password@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
            {blurPassword: true},
        ),
        'http://user:********@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
    );
    t.is(
        blurl(
            'http://user:password@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
            {blurPassword: false},
        ),
        'http://user:password@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
    );
    t.is(
        blurl(
            'http://user:password@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
            {blurPassword: [1, 1]},
        ),
        'http://user:p******d@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
    );
    t.is(
        blurl(
            'http://user:password@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
            {blurPassword: [4, 5]},
        ),
        'http://user:password@www.site.ru:1703/path/to/file.html?a=123&q=%D1%82%D0%B5%D1%81%D1%82#link',
    );
});
