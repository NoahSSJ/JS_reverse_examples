K = {
    'type': "audio_mp3",
    'rescUrl': "137857443",
    'expireTime': "1774846800213",
    'token': "09d2074892d37ee0a05781a6998af0d4",
    'pkg': undefined,
    'saveAs': undefined,
    'vcode': undefined,
}

U = K['type']
A = K['rescUrl']
M = K['expireTime']
O = K['token']
F = K['pkg']
Q = K['saveAs']
G = K['vcode'];
function getStrPos(K, C) {
    K = K + '';
    var x = K['substring'](C - 0x1, C);
    return x;
}

function isNull(K) {
    return K == null || K['value'] == '';
}

function intValue(K) {
    var C = 0x7fffffff
      , x = -0x80000000;
    if (K > C || K < x)
        return K &= 0xffffffff;
    return K;
}
function li1li1li(K) {
    var C = 0x0;
    if (!isNull(K))
        for (var x = 0x0; x < K['length']; x++) {
            C = C * 0x1f + K['charCodeAt'](x),
            C = intValue(C);
        }
    return C;
}

function il1il1il(K) {
    return Math['abs'](K);
}

function li1iiil1(K) {
    var C = '';
    K = K + '';
    for (var x = 0x1; x <= K['length']; x++) {
        C += getStrPos(K, K['length'] - x + 0x1);
    }
    return C;
}

function fInction(K, C) {
    var x = K + ':' + C;
    return x = lli1li1l(x, 'function'),
    x = li1li1li(x),
    x = x + '',
    x = il1il1il(x),
    x = x + '',
    x = l1lilili(x + ''),
    x = li1li1li(x + ''),
    x = il1il1il(x),
    x = li1iiil1(x),
    x;
}



function l1lilili(K) {
    return GeiJS['MMF'](K);
}

var dfu = function(K, C, x, w, s, I, N) {
    var Y = fInction(K, C);
    Y += '-' + x + '-' + w;
    var T = {};
    return T['ud'] = getUUID(),
    T['v'] = Y,
    T['type'] = K,
    T['rescUrl'] = C,
    T['pkg'] = I || ![],
    T['saveAs'] = N,
    T['vis'] = "",
    s && (T['vc'] = s),
    T;
}
var D = dfu(U, A, M, O, G, F, Q)
console.log(D);



// var y = cqbj(D)





