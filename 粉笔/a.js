const e = {
    "url": "//tiku.fenbi.com/combine/static/exercise?key=K1k2RpfICy61oTEEsPzQoRxYwP88tXekBxnJu-HaDQ9eCeV17LCr2neUz_cIWNIWn85Rm9E4qjdwPHLuDKmBNX1_VUl5Xq72x7NvM7zMJ84RbvZ7nMvoCLCtIA&routecs=xingce&type=1",
    "body": null,
    "reportProgress": false,
    "withCredentials": false,
    "responseType": "json",
    "method": "GET",
    "headers": {
        "normalizedNames": {},
        "lazyUpdate": null,
        "headers": {}
    },
    "context": {
        "map": {}
    },
    "params": {
        "updates": null,
        "cloneFrom": null,
        "encoder": {},
        "map": {}
    },
    "urlWithParams": "//tiku.fenbi.com/combine/static/exercise?key=K1k2RpfICy61oTEEsPzQoRxYwP88tXekBxnJu-HaDQ9eCeV17LCr2neUz_cIWNIWn85Rm9E4qjdwPHLuDKmBNX1_VUl5Xq72x7NvM7zMJ84RbvZ7nMvoCLCtIA&routecs=xingce&type=1"
};

function generateNewReq(e) {
    const environment = {
    "cndUrl": "//nodestatic.fbstatic.cn/weblts_spa_online/ti/",
    "domain": "fenbi.com",
    "api": {
        "ke": "//ke.fenbi.com",
        "tiku": "//tiku.fenbi.com",
        "tikuapi": "//tikuapi.fenbi.com",
        "login": "//login.fenbi.com",
        "live": "//live.fenbi.com",
        "doc": "//www.fenbi.com/doc",
        "keapi": "//keapi.fenbi.com",
        "hera": "//hera-webapp.fenbi.com",
        "marketApi": "//market-api.fenbi.com",
        "toolkitApi": "//toolkit-api.fenbi.com",
        "fenbicall": "//fenbicall.fenbilantian.com",
        "algo": "//algo.fenbi.com",
        "heraWebapp": "//hera-webapp.fenbi.com",
        "log": "//log.fenbi.com",
        "shenlunRuleOption": "//shenlun-ruleopt.fenbi.com",
        "urlimg": "//urlimg.fenbi.com"
    },
    "extra": {
        "app": "fenbi",
        "tikuPre": "combine",
        "webApp": "web",
        "winPc": "WINPC",
        "withRoutecs": true,
        "hasMeta": true,
        "hasQuizKeypoint": true,
        "iconUrl": "//nodestatic.fbstatic.cn/weblts_spa_online/page/assets/fenbi32.ico",
        "episodesVideoType": 1
    }
}
    let a = e.url;
    [,t,l,...n] = a.split("/");
    {domain: i, extra: d, api: p} = environment;
    h = "";
    switch (l) {
    case "_tiku_":
        h = d.tikuPre;
        break;
    default:
        h = l;
        break
    }
    let k = Object.keys(p).includes(t) ? this.suffixAppend(`${p[t]}/${h}/${n.join("/")}`) : a.includes(i) ? this.suffixAppend(a) : a
        , ha = k.includes(i);
    return e.clone({
        url: k,
        withCredentials: ha
    })
}


generateNewReq(e)