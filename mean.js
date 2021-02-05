//<![CDATA[
$(document).ready(function () {
    setInterval(function () {
        if (!$('#mycontent:visible').length) {
            window.location.href = 'http://www.soratemplates.com/'
        }
    }, 3000)
});
window.onload = function () {
    var mycontent = document.getElementById('mycontent');
    mycontent.setAttribute('href', 'http://www.soratemplates.com/');
    mycontent.setAttribute('rel', 'dofollow');
    mycontent.setAttribute('title', 'Free Blogger Templates');
    mycontent.setAttribute('style', 'display: inline-block!important; font-size: inherit!important; color: #ff00ba!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
    mycontent.innerHTML = 'SoraTemplates'
};
$(document).ready(function (_0xea56x2) {
    var _0xea56x3 = -1,
        _0xea56x4 = '',
        _0xea56x5 = '';
    _0xea56x2('#menu').find('ul').find('li').each(function () {
        for (var _0xea56x6 = _0xea56x2(this).text(), _0xea56x7 = _0xea56x2(this).find('a').attr('href'), _0xea56x8 = 0, _0xea56x9 = 0; _0xea56x9 < _0xea56x6.length && (_0xea56x8 = _0xea56x6.indexOf('_', _0xea56x8), -1 != _0xea56x8); _0xea56x9++) {
            _0xea56x8++
        };
        if (level = _0xea56x9, level > _0xea56x3 && (_0xea56x4 += '<ul>', _0xea56x5 += '<ul>'), level < _0xea56x3) {
            offset = _0xea56x3 - level;
            for (var _0xea56x9 = 0; _0xea56x9 < offset; _0xea56x9++) {
                _0xea56x4 += '</ul></li>', _0xea56x5 += '</ul></li>'
            }
        };
        _0xea56x6 = _0xea56x6.replace(/_/gi, ''), _0xea56x4 += "<li><a href='" + _0xea56x7 + "'>" + _0xea56x6 + '</a>', _0xea56x5 += "<li><a href='" + _0xea56x7 + "'>";
        for (var _0xea56x9 = 0; _0xea56x9 < level; _0xea56x9++) {
            _0xea56x5 += ''
        };
        _0xea56x5 += _0xea56x6 + '</a>', _0xea56x3 = level
    });
    for (var _0xea56x8 = 0; _0xea56x3 >= _0xea56x8; _0xea56x8++) {
        _0xea56x4 += '</ul>', _0xea56x5 += '</ul>', 0 != _0xea56x8 && (_0xea56x4 += '</li>', _0xea56x5 += '</li>')
    };
    _0xea56x2('#menu .LinkList').html(_0xea56x5), _0xea56x2('#menu > .LinkList > ul').attr('id', 'nav'), selectnav('nav'), _0xea56x2('#menu ul > li > ul').parent('li').addClass('parent'), _0xea56x2('#menu .widget').attr('style', 'display:block!important;')
});
$(function () {
    selectnav('nav1');
    $('.sidebar h2').wrapInner('<span></span>');
    $('.lowerbar h2').wrapInner('<span></span>');
    $('.Related-title').wrapInner('<span></span>');
    $('.post-body img').parent('a').css('margin', '0 auto!important')
});
$('.PopularPosts ul li img').attr('src', function (_0xea56xa, _0xea56xb) {
    if (_0xea56xb.match('hqdefault.jpg')) {
        return _0xea56xb.replace('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0xea56xb.match('default.jpg')) {
            return _0xea56xb.replace('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0xea56xb.match('s72-c')) {
                return _0xea56xb.replace('/s72-c', '/s100-c')
            } else {
                if (_0xea56xb.match('w72-h72-p-nu')) {
                    return _0xea56xb.replace('/w72-h72-p-nu', '/s100-c')
                } else {
                    return _0xea56xb.replace('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png')
                }
            }
        }
    }
});
$('.comments .avatar-image-container img').attr('src', function (_0xea56xa, _0xea56xb) {
    if (_0xea56xb.match('hqdefault.jpg')) {
        return _0xea56xb.replace('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0xea56xb.match('default.jpg')) {
            return _0xea56xb.replace('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0xea56xb.match('s35-c')) {
                return _0xea56xb.replace('/s35-c', '/s100-c')
            } else {
                if (_0xea56xb.match('s72-c')) {
                    return _0xea56xb.replace('/s72-c', '/s100-c')
                } else {
                    if (_0xea56xb.match('w72-h72-p-nu')) {
                        return _0xea56xb.replace('/w72-h72-p-nu', '/s100-c')
                    } else {
                        return _0xea56xb.replace('http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png')
                    }
                }
            }
        }
    }
});
$(document).ready(function () {
    $('.post-outer,.feat').each(function () {
        $(this).find('.block-image .thumb a').attr('style', function (mycontent, _0xea56xc) {
            return _0xea56xc.replace('/default.jpg', '/mqdefault.jpg')
        }).attr('style', function (mycontent, _0xea56xc) {
            return _0xea56xc.replace('s72-c', 's1600')
        })
    })
});
$(document).ready(function () {
    var _0xea56xd = $('#sidetabs #tabside1 .widget h2').text();
    $('.menu-tab .item-1 a').text(_0xea56xd);
    var _0xea56xe = $('#sidetabs #tabside2 .widget h2').text();
    $('.menu-tab .item-2 a').text(_0xea56xe);
    $('#tabside1 .widget h2,#tabside2 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title').remove();
    $(this).find('.menu-tab li').addClass('hide-tab');
    $('.sidetabs').tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
    if (0 === $('.sidetabs .widget').length) {
        $('.sidetabs').remove()
    }
});
$(document).ready(function () {
    $('.menu').slicknav({
        prependTo: '.menu-mobile',
        label: ''
    })
});
$(document).ready(function () {
    $('.ty-ran-yard span').each(function () {
        $.ajax({
            url: '/feeds/posts/default?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function (_0xea56xc) {
                _0xea56xc = _0xea56xc.feed.entry.length - 3, _0xea56xc = Math.floor(Math.random() * (_0xea56xc - 0 + 1)) + 0, 0 == _0xea56xc && (_0xea56xc = Math.floor(Math.random() * (_0xea56xc - 0 + 1)) + 1), _0xea56xc == 0 && (_0xea56xc == 1), $.ajax({
                    url: '/feeds/posts/default?alt=json-in-script&start-index=' + _0xea56xc + '&max-results=1',
                    type: 'get',
                    dataType: 'jsonp',
                    success: function (_0xea56xf) {
                        var _0xea56x7 = '';
                        var mycontent0 = '';
                        for (var mycontent1 = 0; mycontent1 < _0xea56xf.feed.entry.length; mycontent1++) {
                            for (var mycontent2 = 0; mycontent2 < _0xea56xf.feed.entry[mycontent1].link.length; mycontent2++) {
                                if (_0xea56xf.feed.entry[mycontent1].link[mycontent2].rel == 'alternate') {
                                    _0xea56x7 = _0xea56xf.feed.entry[mycontent1].link[mycontent2].href;
                                    break
                                }
                            };
                            mycontent0 += '<a class="ran-sym" href="' + _0xea56x7 + '"></a>'
                        };
                        $('.ty-ran-yard span').html(mycontent0)
                    }
                })
            }
        })
    })
});
$('.ticker .HTML .widget-content').each(function () {
    var mycontent3 = $(this).find('span').attr('data-no') || '',
        mycontent4 = $(this).find('span').attr('data-label') || '',
        mycontent5 = $(this).find('span').attr('data-type') || '';
    if (mycontent5 != undefined && mycontent5.match('recent')) {
        $.ajax({
            url: '/feeds/posts/default?alt=json-in-script&max-results=' + mycontent3,
            type: 'get',
            dataType: 'jsonp',
            success: function (mycontent) {
                var _0xea56xe = '';
                var mycontent6 = '<ul>';
                for (var mycontent1 = 0; mycontent1 < mycontent.feed.entry.length; mycontent1++) {
                    for (var mycontent2 = 0; mycontent2 < mycontent.feed.entry[mycontent1].link.length; mycontent2++) {
                        if (mycontent.feed.entry[mycontent1].link[mycontent2].rel == 'alternate') {
                            _0xea56xe = mycontent.feed.entry[mycontent1].link[mycontent2].href;
                            break
                        }
                    };
                    var mycontent7 = mycontent.feed.entry[mycontent1].title.$t;
                    var mycontent8 = mycontent.feed.entry[mycontent1].category[0].term;
                    var mycontent9 = mycontent.feed.entry[mycontent1].content.$t;
                    var mycontenta = $('<div>').html(mycontent9);
                    if (mycontent9.indexOf('//www.youtube.com/embed/') > -1) {
                        var _0xea56x5 = mycontent.feed.entry[mycontent1].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                        var _0xea56x3 = _0xea56x5
                    } else {
                        if (mycontent9.indexOf('<img') > -1) {
                            var mycontentb = mycontenta.find('img:first').attr('src').replace('s72-c', 's1600');
                            var _0xea56x3 = mycontentb
                        } else {
                            var _0xea56x3 = no_image
                        }
                    };
                    mycontent6 += '<li><div class="tk-thumb"><a class="tk-img" href="' + _0xea56xe + '" style="background:url(' + _0xea56x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + mycontent8 + '" class="post-tag icon ' + mycontent8 + '">' + mycontent8 + '</a><h3 class="tyard-title"><a href="' + _0xea56xe + '">' + mycontent7 + '</a></h3></li>'
                };
                mycontent6 += '</ul>';
                $('.ticker .widget-content').each(function () {
                    $(this).html(mycontent6);
                    $(this).prev('h2').prepend('<i class="fa fa-bolt"></i>');
                    $(this).find('ul').webTicker()
                })
            }
        })
    } else {
        if (mycontent5.match('label')) {
            $.ajax({
                url: '/feeds/posts/default/-/' + mycontent4 + '?alt=json-in-script&max-results=' + mycontent3,
                type: 'get',
                dataType: 'jsonp',
                success: function (mycontent) {
                    var _0xea56xe = '';
                    var mycontent6 = '<ul>';
                    for (var mycontent1 = 0; mycontent1 < mycontent.feed.entry.length; mycontent1++) {
                        for (var mycontent2 = 0; mycontent2 < mycontent.feed.entry[mycontent1].link.length; mycontent2++) {
                            if (mycontent.feed.entry[mycontent1].link[mycontent2].rel == 'alternate') {
                                _0xea56xe = mycontent.feed.entry[mycontent1].link[mycontent2].href;
                                break
                            }
                        };
                        var mycontent7 = mycontent.feed.entry[mycontent1].title.$t;
                        var mycontent8 = mycontent.feed.entry[mycontent1].category[0].term;
                        var mycontent9 = mycontent.feed.entry[mycontent1].content.$t;
                        var mycontenta = $('<div>').html(mycontent9);
                        if (mycontent9.indexOf('//www.youtube.com/embed/') > -1) {
                            var _0xea56x5 = mycontent.feed.entry[mycontent1].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                            var _0xea56x3 = _0xea56x5
                        } else {
                            if (mycontent9.indexOf('<img') > -1) {
                                var mycontentb = mycontenta.find('img:first').attr('src').replace('s72-c', 's1600');
                                var _0xea56x3 = mycontentb
                            } else {
                                var _0xea56x3 = no_image
                            }
                        };
                        mycontent6 += '<li><div class="tk-thumb"><a class="tk-img" href="' + _0xea56xe + '" style="background:url(' + _0xea56x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + mycontent8 + '" class="post-tag icon ' + mycontent8 + '">' + mycontent8 + '</a><h3 class="tyard-title"><a href="' + _0xea56xe + '">' + mycontent7 + '</a></h3></li>'
                    };
                    mycontent6 += '</ul>';
                    $('.ticker .HTML .widget-content').each(function () {
                        $(this).html(mycontent6);
                        $(this).prev('h2').prepend('<i class="fa fa-bolt"></i>');
                        $(this).find('ul').webTicker()
                    })
                }
            })
        }
    }
});
$('.ty-trigger .HTML .widget-content span.latestcomments').each(function () {
    var mycontent3 = $(this).attr('data-no');
    $.ajax({
        url: '/feeds/comments/default?alt=json-in-script&max-results=' + mycontent3,
        type: 'get',
        dataType: 'jsonp',
        success: function (mycontent) {
            var _0xea56xe = '';
            var mycontent6 = '<div class="tyard-komet">';
            for (var mycontent1 = 0; mycontent1 < mycontent.feed.entry.length; mycontent1++) {
                if (mycontent1 == mycontent.feed.entry.length) {
                    break
                };
                for (var mycontent2 = 0; mycontent2 < mycontent.feed.entry[mycontent1].link.length; mycontent2++) {
                    if (mycontent.feed.entry[mycontent1].link[mycontent2].rel == 'alternate') {
                        _0xea56xe = mycontent.feed.entry[mycontent1].link[mycontent2].href;
                        break
                    }
                };
                if ('content' in mycontent.feed.entry[mycontent1]) {
                    var mycontent9 = mycontent.feed.entry[mycontent1].content.$t
                } else {
                    if ('summary' in b_rc) {
                        var mycontent9 = mycontent.feed.entry[mycontent1].summary.$t
                    } else {
                        var mycontent9 = ''
                    }
                };
                var mycontentc = /<\S[^>]*>/g;
                mycontent9 = mycontent9.replace(mycontentc, '');
                if (mycontent9.length > 70) {
                    mycontent9 = '' + mycontent9.substring(0, 50) + '...'
                };
                var mycontentd = mycontent.feed.entry[mycontent1].author[0].name.$t;
                var mycontente = mycontent.feed.entry[mycontent1].author[0].gd$image.src;
                if (mycontente.match('http://img1.blogblog.com/img/blank.gif')) {
                    var _0xea56x3 = 'http://img1.blogblog.com/img/anon36.png'
                } else {
                    if (mycontente.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var _0xea56x3 = 'http://img1.blogblog.com/img/anon36.png'
                    } else {
                        var _0xea56x3 = mycontente
                    }
                };
                mycontent6 += '<div class="ty-komet"><div class="ty-komet-tar"><img class="yardimg-komet" src="' + _0xea56x3 + '"/></div><a href="' + _0xea56xe + '">' + mycontentd + '</a><span>"' + mycontent9 + '"</span></div>'
            };
            mycontent6 += '</div><div class="clear"/>';
            $('.ty-trigger .HTML .widget-content span.latestcomments').each(function () {
                var _0xea56x6 = $(this).attr('data-no');
                if (_0xea56x6 == mycontent3) {
                    $(this).parent().html(mycontent6)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.latestposts').each(function () {
    var mycontent3 = $(this).attr('data-no');
    $.ajax({
        url: '/feeds/posts/default?alt=json-in-script&max-results=' + mycontent3,
        type: 'get',
        dataType: 'jsonp',
        success: function (mycontent) {
            var _0xea56xe = '';
            var mycontent6 = '<div class="ty-bonus">';
            for (var mycontent1 = 0; mycontent1 < mycontent.feed.entry.length; mycontent1++) {
                for (var mycontent2 = 0; mycontent2 < mycontent.feed.entry[mycontent1].link.length; mycontent2++) {
                    if (mycontent.feed.entry[mycontent1].link[mycontent2].rel == 'alternate') {
                        _0xea56xe = mycontent.feed.entry[mycontent1].link[mycontent2].href;
                        break
                    }
                };
                var mycontent7 = mycontent.feed.entry[mycontent1].title.$t;
                var mycontent8 = mycontent.feed.entry[mycontent1].category[0].term;
                var mycontentd = mycontent.feed.entry[mycontent1].author[0].name.$t;
                var mycontentf = mycontent.feed.entry[mycontent1].published.$t,
                    _0xea56xc = mycontentf.substring(0, 4),
                    _0xea56x20 = mycontentf.substring(5, 7),
                    _0xea56x21 = mycontentf.substring(8, 10),
                    _0xea56x22 = month_format[parseInt(_0xea56x20, 10)] + ' ' + _0xea56x21 + ', ' + _0xea56xc;
                var mycontent9 = mycontent.feed.entry[mycontent1].content.$t;
                var mycontenta = $('<div>').html(mycontent9);
                if (mycontent9.indexOf('//www.youtube.com/embed/') > -1) {
                    var _0xea56x5 = mycontent.feed.entry[mycontent1].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var _0xea56x3 = _0xea56x5
                } else {
                    if (mycontent9.indexOf('<img') > -1) {
                        var mycontentb = mycontenta.find('img:first').attr('src').replace('s72-c', 's1600');
                        var _0xea56x3 = mycontentb
                    } else {
                        var _0xea56x3 = no_image
                    }
                };
                mycontent6 += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + _0xea56xe + '" style="background:url(' + _0xea56x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + _0xea56xe + '">' + mycontent7 + '</a></h3><span class="yard-auth-ty">' + mycontentd + '</span><span class="ty-time">' + _0xea56x22 + '</span></div></div>'
            };
            mycontent6 += '</div>';
            $('.ty-trigger .HTML .widget-content span.latestposts').each(function () {
                var _0xea56x6 = $(this).attr('data-no');
                if (_0xea56x6 == mycontent3) {
                    $(this).parent().html(mycontent6)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.tagpost').each(function () {
    var mycontent4 = $(this).attr('data-label'),
        mycontent3 = $(this).attr('data-no');
    $.ajax({
        url: '/feeds/posts/default/-/' + mycontent4 + '?alt=json-in-script&max-results=' + mycontent3,
        type: 'get',
        dataType: 'jsonp',
        success: function (mycontent) {
            var _0xea56xe = '';
            var mycontent6 = '<div class="ty-bonus">';
            for (var mycontent1 = 0; mycontent1 < mycontent.feed.entry.length; mycontent1++) {
                for (var mycontent2 = 0; mycontent2 < mycontent.feed.entry[mycontent1].link.length; mycontent2++) {
                    if (mycontent.feed.entry[mycontent1].link[mycontent2].rel == 'alternate') {
                        _0xea56xe = mycontent.feed.entry[mycontent1].link[mycontent2].href;
                        break
                    }
                };
                var mycontent7 = mycontent.feed.entry[mycontent1].title.$t;
                var mycontent8 = mycontent.feed.entry[mycontent1].category[0].term;
                var mycontentd = mycontent.feed.entry[mycontent1].author[0].name.$t;
                var mycontentf = mycontent.feed.entry[mycontent1].published.$t,
                    _0xea56xc = mycontentf.substring(0, 4),
                    _0xea56x20 = mycontentf.substring(5, 7),
                    _0xea56x21 = mycontentf.substring(8, 10),
                    _0xea56x22 = month_format[parseInt(_0xea56x20, 10)] + ' ' + _0xea56x21 + ', ' + _0xea56xc;
                var mycontent9 = mycontent.feed.entry[mycontent1].content.$t;
                var mycontenta = $('<div>').html(mycontent9);
                if (mycontent9.indexOf('//www.youtube.com/embed/') > -1) {
                    var _0xea56x5 = mycontent.feed.entry[mycontent1].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var _0xea56x3 = _0xea56x5
                } else {
                    if (mycontent9.indexOf('<img') > -1) {
                        var mycontentb = mycontenta.find('img:first').attr('src').replace('s72-c', 's1600');
                        var _0xea56x3 = mycontentb
                    } else {
                        var _0xea56x3 = no_image
                    }
                };
                mycontent6 += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + _0xea56xe + '" style="background:url(' + _0xea56x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + _0xea56xe + '">' + mycontent7 + '</a></h3><span class="yard-auth-ty">' + mycontentd + '</span><span class="ty-time">' + _0xea56x22 + '</span></div></div>'
            };
            mycontent6 += '</div>';
            $('.ty-trigger .HTML .widget-content span.tagpost').each(function () {
                var _0xea56x6 = $(this).attr('data-label');
                if (_0xea56x6 == mycontent4) {
                    $(this).parent().html(mycontent6)
                }
            })
        }
    })
});
$(document).ready(function (_0xea56x23) {
    var mycontent3 = _0xea56x23('#post-pager .blog-pager-newer-link');
    var mycontent9 = _0xea56x23('#post-pager .blog-pager-older-link');
    _0xea56x23.get(mycontent3.attr('href'), function (mycontent9) {
        mycontent3.html('<b>' + POSTPAGER_NEWER + '</b><span>' + _0xea56x23(mycontent9).find('.post h1.post-title').text() + '</span>')
    }, 'html');
    _0xea56x23.get(mycontent9.attr('href'), function (mycontent3) {
        mycontent9.html('<b>' + POSTPAGER_OLDER + '</b><span>' + _0xea56x23(mycontent3).find('.post h1.post-title').text() + '</span>')
    }, 'html')
});
$('#related-posts').each(function () {
    var mycontent7 = $(this).html();
    var _0xea56x24 = 4;
    var _0xea56x25 = 'http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png';
    var _0xea56x26 = [, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    $.ajax({
        url: '/feeds/posts/default/-/' + mycontent7 + '?alt=json-in-script&max-results=' + _0xea56x24,
        type: 'get',
        dataType: 'jsonp',
        success: function (_0xea56xf) {
            var _0xea56x27 = '';
            var _0xea56x28 = '<div class="related">';
            for (var mycontent1 = 0; mycontent1 < _0xea56xf.feed.entry.length; mycontent1++) {
                for (var mycontent2 = 0; mycontent2 < _0xea56xf.feed.entry[mycontent1].link.length; mycontent2++) {
                    if (_0xea56xf.feed.entry[mycontent1].link[mycontent2].rel == 'alternate') {
                        _0xea56x27 = _0xea56xf.feed.entry[mycontent1].link[mycontent2].href;
                        break
                    }
                };
                var _0xea56x29 = _0xea56xf.feed.entry[mycontent1].title.$t;
                var _0xea56x2a = _0xea56xf.feed.entry[mycontent1].category[0].term;
                var _0xea56x2b = _0xea56xf.feed.entry[mycontent1].published.$t,
                    _0xea56x2c = _0xea56x2b.substring(0, 4),
                    _0xea56x2d = _0xea56x2b.substring(5, 7),
                    _0xea56x2e = _0xea56x2b.substring(8, 10),
                    _0xea56x2f = _0xea56x26[parseInt(_0xea56x2d, 10)] + ' ' + _0xea56x2e + ', ' + _0xea56x2c;
                var _0xea56x30 = _0xea56xf.feed.entry[mycontent1].content.$t;
                var _0xea56x31 = $('<div>').html(_0xea56x30);
                if (_0xea56x30.indexOf('http://www.youtube.com/embed/') > -1 || _0xea56x30.indexOf('https://www.youtube.com/embed/') > -1) {
                    var _0xea56x32 = _0xea56xf.feed.entry[mycontent1].media$thumbnail.url;
                    var _0xea56x33 = '<a class="related-img" href="' + _0xea56x27 + '" style="background:url(' + _0xea56x32 + ') no-repeat center center;background-size: cover"/>'
                } else {
                    if (_0xea56x30.indexOf('<img') > -1) {
                        var _0xea56x34 = _0xea56x31.find('img:first').attr('src');
                        var _0xea56x33 = '<a class="related-img" href="' + _0xea56x27 + '" style="background:url(' + _0xea56x34 + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                    } else {
                        var _0xea56x33 = '<a class="related-img" href="' + _0xea56x27 + '" style="background:url(' + _0xea56x25 + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                    }
                };
                _0xea56x28 += '<li><span class="related-tag">' + _0xea56x2a + '</span><div class="related-thumb">' + _0xea56x33 + '</div><div class="related-content"><h3 class="related-title"><a href="' + _0xea56x27 + '">' + _0xea56x29 + '</a><span class="recent-date">' + _0xea56x2f + '</span></h3></div></li>'
            };
            _0xea56x28 += '</div><div class="clear"/>';
            $('#related-posts').html(_0xea56x28);
            $('.related-img').each(function () {
                $(this).attr('style', function (mycontent1, _0xea56x34) {
                    return _0xea56x34.replace('/default.jpg', '/mqdefault.jpg')
                }).attr('style', function (mycontent1, _0xea56x34) {
                    return _0xea56x34.replace('s72-c', 's1600')
                })
            })
        }
    })
})
//]]>