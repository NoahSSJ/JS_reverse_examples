window = globalThis;
require("./loader.js");
require("./mod1.js");

const s = window.xxx(826)
function get_params(x) {
    const n = {
    "payload": {
        "libraryId": 14,
        "queryParam": {
            "keywords": [
                x
            ],
            "investor_online": [
                "Y"
            ],
            "p_menu": [
                "340"
            ],
            "start": 0,
            "limit": 20,
            "sort": "investor_stats_funding_count",
            "order": -1
        }
    }
}
    var u = JSON.stringify(n), d = JSON.parse(u);
    var f = Object(s.c)(Object(s.d)(JSON.stringify(d.payload)))
        , p = Object(s.e)(f);
    d.payload = f,
    d.sig = p,
    d.v = Number(1);
    console.log(d);
    return d;
}


function decrypt(l) {
     var p = Object(s.a)(l)
    , h = Object(s.b)(p)
    , m = JSON.parse(h);
    return m;
}

// const l = 
// decrypt(l)

// get_params("腾讯")