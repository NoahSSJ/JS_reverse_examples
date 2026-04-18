window = globalThis;
require("./loader.js");
require("./mod1.js");
require("./mod2.js");

const i = window.xxx(146);
const o = window.xxx.n(i);


function get_params() {
    const t = {
        params: {
            "gameType": 6,
            "date": "2026-04-18",
            "hot": false,
            "onlyAnchor": false,
            "token": ""
        }
    };

    var e = (new Date).getTime()
        , p = "KHVheWluZ18zZWNyZXRfYXBB"
        , n = "timestamp=".concat(e, "&secret=").concat(p)
        , r = o()(n);
    t.params = Object.assign({}, t.params, {
        timestamp: e,
        sign: r
    });
    console.log(t.params);
    return t.params;

    
}

get_params();
