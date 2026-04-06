window = globalThis;
self = globalThis;
// delete globalThis;
require("./mod1")


document = {

};
document.cookie = '__snaker__id=20Ywr9weF81zRBHx; SESSIONID=gtvShvBjgkzWLz6myPCzEFJonGCRUgyHrL7heCreigQ; _xsrf=n9JgfyGD9yR8MxvSmsdEGbjVAo3WUvak; _zap=2b594016-3fa3-4ac3-a56e-5750653a30be; d_c0=WlTUp1eccxuPTgPEL5WapEyJet9p1x7qKnk=|1764394971; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1772589910,1772713079,1772719232,1772809478; gdxidpyhxdE=b6%2Fa3tHukw1cw%2FebucRR7oHySAAYXOogom9ML95CngKL4gSvsjxPWQOUhBTVlGx%2FpXQtLsE4moceNVJfSvk6sBOerlJs6vw%2BlBL4n3iakHTPtrCNSDCCiaY3%5CsVmXVDykmqmjY9WoxmySE6v3WfrzIWUtKxkmREg7eaL3BvCwd6BaBSa%3A1775210020709; __zse_ck=005_KuZ=27Wv32cHwzRgguUcNte=ydfrzWu7E=ciNSaimD2DRSvkFbbpEMumQGYFxXZIuxxcgifzqsACB4rspBwEmslz8bX=8E6Mz15QfTEkoLvvriiGP2BI=f90pkyLehKI-jXPayeLeOR53OqnpIaPTdR6/CUWEDu2Lnx4NrfwV8cc+XNFIBd97rI8EbrhxCoFgnZf1CiN4rTtbqLwBEOO2GXrOU3ONj168a67PDT/Vff5HN/8mnhdIBkB/wvrmkYDj; BEC=8b4a1b0a664dd5d88434ef53342ae417'

function getProxy(obj, objName){
    return new Proxy(obj, {
            get: function(target, p, receiver){
                let val = Reflect.get(target, p, receiver)
                console.log("get方法", `${objName}`, p, `${val}`)
                return val
            },
            set(target, prop, val){
                console.log("set方法", `${objName}`, `${prop}`, `${val}`)
                return Reflect.set(target, prop, val)
            }
        }
    )
}

window = getProxy(window, "window")
document = getProxy(document, "document")



!function() {
    "use strict";
    var e, a, c, d, f, t, r, o, b, n, i, s, u, l = {}, m = {};
    function p(e) {
        var a = m[e];
        if (void 0 !== a)
            return a.exports;
        var c = m[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        console.log("加载的模块为:", e);
        return l[e].call(c.exports, c, c.exports, p),
        c.loaded = !0,
        c.exports
    }
    window.xxx = p;
    p.m = l,
    p.c = m,
    p.amdD = function() {
        throw Error("define cannot be used indirect")
    }
    ,
    p.amdO = {},
    e = [],
    p.O = function(a, c, d, f) {
        if (c) {
            f = f || 0;
            for (var t = e.length; t > 0 && e[t - 1][2] > f; t--)
                e[t] = e[t - 1];
            e[t] = [c, d, f];
            return
        }
        for (var r = 1 / 0, t = 0; t < e.length; t++) {
            for (var c = e[t][0], d = e[t][1], f = e[t][2], o = !0, b = 0; b < c.length; b++)
                r >= f && Object.keys(p.O).every(function(e) {
                    return p.O[e](c[b])
                }) ? c.splice(b--, 1) : (o = !1,
                f < r && (r = f));
            if (o) {
                e.splice(t--, 1);
                var n = d();
                void 0 !== n && (a = n)
            }
        }
        return a
    }
    ,
    p.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return p.d(a, {
            a: a
        }),
        a
    }
    ,
    c = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    p.t = function(e, d) {
        if (1 & d && (e = this(e)),
        8 & d || "object" == typeof e && e && (4 & d && e.__esModule || 16 & d && "function" == typeof e.then))
            return e;
        var f = Object.create(null);
        p.r(f);
        var t = {};
        a = a || [null, c({}), c([]), c(c)];
        for (var r = 2 & d && e; "object" == typeof r && !~a.indexOf(r); r = c(r))
            Object.getOwnPropertyNames(r).forEach(function(a) {
                t[a] = function() {
                    return e[a]
                }
            });
        return t.default = function() {
            return e
        }
        ,
        p.d(f, t),
        f
    }
    ,
    p.d = function(e, a) {
        for (var c in a)
            p.o(a, c) && !p.o(e, c) && Object.defineProperty(e, c, {
                enumerable: !0,
                get: a[c]
            })
    }
    ,
    p.f = {},
    p.e = function(e) {
        return Promise.all(Object.keys(p.f).reduce(function(a, c) {
            return p.f[c](e, a),
            a
        }, []))
    }
    ,
    p.u = function(e) {
        return "chunks/" + (({
            222: "flv.js",
            358: "navbar-notifications",
            430: "GoodsRecommendGoodsCardList",
            450: "gaokao-pray-kanshan-animation-data",
            615: "EmptyViewNormalNoWorksDark",
            620: "lib-2ec050f6",
            876: "report_modals",
            987: "comment-richtext",
            1044: "EmptyViewCompactNoContentDark",
            1128: "Chart",
            1141: "shared-f3e5818d0efff511fc66c5adbc15845c309eb3d6",
            1243: "zswsdid",
            1306: "main-messages-routes",
            1350: "lib-60286b7b",
            1353: "main-roundtable-routes",
            1416: "EmptyViewCompactNoNetworkDark",
            1482: "shared-100a8fca553734d2d5baf90fe24ce2f9792101d5",
            1520: "player-vendors",
            1632: "main-signin-routes",
            1787: "shared-72770a11282a3bd1d70cde8cf34a0602e77916cb",
            1801: "EmptyViewNormalLoadingError",
            1923: "lib-55571d13",
            1937: "shared-6a9ca00d4b2e3429ab3b6dc73e37e6b205ae1ff0",
            1951: "VideoUploadCoverEditor",
            1996: "shared-aca7fe113a92bc2edfa05ca636ab11cb2fde051e",
            2033: "Labels",
            2090: "lib-1f460a1f",
            2096: "EmptyViewCompactNoBalance",
            2121: "main-notifications-routes",
            2156: "EditableV2",
            2327: "shared-6efb5af3bf72fdef70a9e917024648a615dca6d4",
            2330: "lib-6efc30be",
            2411: "math-editor",
            2464: "shared-b36a20bc8e6917f75dcaafc5b859204070e35ed2",
            2492: "main-special-routes",
            2520: "main-question-routes",
            2607: "lib-5c8e84aa",
            2714: "shared-a7a63334df534431111e0a90bb8e32b9bf2f8150",
            2744: "lib-4ad82c5e",
            2749: "statsc-deflateAsync",
            2876: "federation",
            3026: "FeeConsultCard",
            3084: "gaokao-pray-cheer-animation-data",
            3097: "EmptyViewCompactNoContent",
            3109: "web-highlighter",
            3199: "writePinV2RichInput",
            3232: "EmptyViewNormalNoCollectionDark",
            3421: "MentionSuggestions-2.1",
            3460: "shared-ae82164abfd2798321b579adad4c5d474558fe5e",
            3562: "EmptyViewCompactContentErrorDark",
            3584: "VideoAnswerLabel",
            3634: "main-creator-routes",
            3713: "shared-cd9eff844cf47d0b26b70796fd0a953b712a0691",
            3764: "EmptyViewCompactNoWorks",
            3775: "react-id-swiper",
            3786: "navbar-messages",
            3795: "shared-a3708c7e8c84cce0a3b8da43db0c3cd735be2320",
            4055: "KnowledgeForm",
            4117: "lib-0de40faf",
            4167: "VideoController",
            4173: "EmptyViewNormalDefault",
            4202: "EmptyViewNormalNoBalanceDark",
            4329: "shared-9e7ed6672a7fc054a0c98d1c7690c88341311cf7",
            4349: "EmptyViewNormalNoContentDark",
            4361: "main-topic-routes",
            4405: "shared-3498fd48bcc81644300f707c22c1c5e1c9243588",
            4408: "mqtt",
            4418: "theater-player",
            4663: "shared-925870c73d4f21bec44cec568318706c1f1c4fda",
            4691: "collection-Scroller",
            4708: "EmptyViewCompactNoNetwork",
            4713: "main-knowledge-plan-routes",
            4717: "editPinV2RichInput",
            4769: "EmptyViewNormalNoContent",
            4814: "EmptyViewCompactNoWorksDark",
            4837: "EmptyViewCompactLoadingError",
            5052: "EditorHelpDocMoveableWrapper",
            5100: "EmptyViewNormalContentErrorDark",
            5117: "main-email-register-routes",
            5146: "lib-134f2ad3",
            5221: "EmptyViewCompactNoCollection",
            5286: "AdmissionsLineChart",
            5290: "main-collections-routes",
            5316: "main-host-routes",
            5327: "EmptyViewNormalNoNetwork",
            5373: "EmptyViewNormalNoNetworkDark",
            5389: "react-draggable-tags",
            5423: "lib-223e7b1c",
            5518: "lib-a4c92b5b",
            5546: "lib-4b14521a",
            5560: "richinput",
            5593: "lib-ec74204f",
            5634: "WriteShieldModalComp",
            5640: "globalOrgReport",
            5667: "main-settings-routes",
            5732: "main-podcast-routes",
            5857: "main-org-routes",
            5861: "shared-0d3d4e4b4c245788b31967fbdf7c7f55f634d0d1",
            5886: "shared-0aa26fe30807a3c13282055eac02f87165db0242",
            5898: "main-topstory-routes",
            6018: "lib-ea88be26",
            6034: "EmptyViewNormalNoBalance",
            6112: "shared-ad22cde8470a2c1160b74c416a8aff946fd8d07c",
            6186: "shared-295135e8c88ceb7996dada75fdffe2d75463933b",
            6246: "VideoCoverEditorNew",
            6248: "lib-cf230269",
            6253: "shared-f230c11267bdc7141d014160b1e642ab0925ba96",
            6414: "main-collection-routes",
            6478: "main-campaign-routes",
            6559: "ECharts",
            6649: "lib-74f62c79",
            6668: "main-mcn-routes",
            6670: "lib-9b20c40c",
            6754: "lib-75fc9c18",
            6763: "ScoreLineChart",
            6815: "PcCommentFollowPlugin",
            6869: "main-explore-routes",
            6890: "shared-21e5649dae32e150ea1128ca5bd1dc9f57903f5d",
            6972: "EmptyViewCompactContentError",
            7050: "lib-38cf5c11",
            7190: "InlineVideo",
            7223: "EmptyViewCompactNoCollectionDark",
            7323: "shared-b345cd8dfbfe350e12cdcfba86e785e0e76e8c8d",
            7529: "shared-71a5c0dccca30e08608a742c1b6b5fdcdfc592f1",
            7556: "EmptyViewNormalNoWorks",
            7590: "EmptyViewCompactDefault",
            7629: "EmptyViewNormalContentError",
            7793: "lib-d872e5a4",
            7848: "EcommerceAdCard",
            7856: "comment-manage-footer",
            7926: "EmptyViewCompactDefaultDark",
            7936: "richinputV2",
            7970: "biz-co-creation",
            8084: "EmptyViewNormalNoCollection",
            8089: "shared-2f02f8a08f7b763946110f65e90e828646e7116d",
            8128: "main-ai-routes",
            8214: "main-help-center-routes",
            8246: "main-ring-plaza-routes",
            8324: "comments",
            8368: "shared-1dffcf43329e08de9bcf385e1895bae6667163e6",
            8377: "main-ring-routes",
            8400: "ECommerceAd",
            8438: "EmptyViewCompactLoadingErrorDark",
            8530: "lib-7a7085c7",
            8712: "shared-f08307c2c22da9f9c0dae4fb2da623646df5daed",
            8816: "EmptyViewCompactNoBalanceDark",
            9202: "main-wiki-routes",
            9241: "lib-eb362212",
            9247: "image-editor",
            9252: "EmptyViewNormalDefaultDark",
            9357: "lib-c4d1bd12",
            9361: "Carousel",
            9378: "EmptyViewNormalLoadingErrorDark",
            9548: "shared-6b97e64d298b595cb51a9754e4d11336751104e3",
            9597: "user-hover-card",
            9768: "main-creator-salt-routes",
            9956: "main-signup-routes"
        })[e] || e) + "." + ({
            222: "0d0916f0da0c1432163f",
            358: "23129a50fa82ef597882",
            430: "952d1d9a7ec3cd460caa",
            450: "4cd352d1f17a617786e7",
            615: "c791e3e3806ecc419fc7",
            620: "7277b1b56d49e1edf172",
            876: "07df9e0355efee3fe943",
            987: "7e2c5d998ac02b399291",
            1044: "f01cd337a7f8a6b8ff82",
            1057: "43cd0f1697dfb611a25f",
            1128: "a0a6af99f370a45c39cf",
            1141: "1a1a0a7887229f8d00bf",
            1243: "993bf3e63383befd3ad6",
            1306: "8d35d652dc16c013125f",
            1350: "72583a10dddc05b2fae8",
            1353: "77235c0b8b7ba66c9397",
            1416: "fdf2f9be95a2fa77ae8f",
            1482: "1192701da9afc440936e",
            1520: "086999a447a1113b9ae1",
            1632: "a9e265ed34ed78af48e0",
            1635: "b46b6966c2ade864f70c",
            1690: "5d07eedd5ebd722af756",
            1787: "0152012ebfceb56f4986",
            1801: "1f992dc2aa95c229faef",
            1923: "4b4a176c4ebe1c73d532",
            1937: "25a969a95debbf1842ae",
            1951: "21cf11053afe04ef9e04",
            1965: "1c3f7a20b5efa9a0516f",
            1996: "bb9d443337bcfca6ad2c",
            2033: "58d649d1f74f8391532e",
            2090: "5600eb8eb5a1aa94650f",
            2096: "ebf74c7ecd3823049135",
            2121: "d37e8a343f12567b75b3",
            2156: "c2d97c8ddc45f80de44b",
            2174: "0a87b6fe64ddcb92dd6b",
            2187: "331e226e6b6152703e62",
            2195: "6f4dcc0cbe1e288b61fe",
            2327: "e6faf7ac8f22adc0ebad",
            2330: "af5d0cf1341a6477d45a",
            2357: "2ed10e22609f4cc3e5c3",
            2411: "f38baf2bf9e2a59eebad",
            2464: "e27cddab3212b1994ce9",
            2492: "2ea9aaf9519a15201e6c",
            2520: "b58b818a817d7658c242",
            2607: "78ebbf6d0117d3c92cee",
            2714: "35f932ebabeb0489396f",
            2744: "14b9554ef21039c124ee",
            2749: "0dfd6ce5ec86f7cf33c9",
            2876: "9c76687842d9e7680572",
            2904: "dbc23050bedfc44dbbbf",
            3026: "430149c5ae073839f7c6",
            3084: "3ff3e6fcb85bc9554cd6",
            3097: "eecd6f555699a98e776f",
            3109: "5b6caf1f8eb5215adbb8",
            3175: "009601d4aecc2b10c469",
            3199: "18e23f8ade2d4d14ba3f",
            3232: "968ed7c14263f668b034",
            3363: "46cecc1bd1fa01d87605",
            3421: "f34832baa84c46d1dcb6",
            3460: "0233386faae1db0d0bca",
            3562: "d86621b5b8ca287bedce",
            3584: "b025c0b8bcce8370468a",
            3634: "5953020966f2f3dce986",
            3713: "880aaa37bab8f186ee33",
            3764: "1de55109dcce068943a4",
            3775: "d2d87af4d74541b7c79d",
            3786: "ba871f64f06d5e882a32",
            3795: "dcb839d2cf939939f762",
            3898: "897ec4415bd69ae8b700",
            3927: "33b33213b276ec64876a",
            4055: "84f7f8e51cac5ba4b6d8",
            4117: "a88679dbff6d835b3558",
            4167: "d70a0a88791f28890e28",
            4173: "d6cb311eebf7e7e67135",
            4202: "fc7ac6387867c59854fd",
            4299: "60b25a97c3f0635e50cf",
            4329: "33d63e8c554ae7297dd4",
            4349: "4966942fe2f473d9dc71",
            4361: "a502d70d1aefd22d1f7a",
            4405: "32e972ab6a3e8f146f62",
            4408: "c0acde30223787e83632",
            4418: "03be7a8ed04518aa76e9",
            4555: "19102166982dfed5106c",
            4663: "4ed6ae58df6b6c3ff108",
            4688: "e00e682f58e0f2240511",
            4691: "da81a3f8de5823f07a93",
            4708: "231948475f58d9f10235",
            4713: "b8d881589bdcfa2d0359",
            4717: "c04480302a6da9fda1c9",
            4769: "6b975d1aea5ab8f6f7f6",
            4814: "ba872d5cf2b74567a70b",
            4837: "4358f37c6b41bac7db0b",
            5052: "8241b98e51c992632f2b",
            5100: "5af0ba857ed0771aad22",
            5117: "eb0efd92d1e54fb28464",
            5125: "febf82c12f57798e2b9a",
            5146: "c41223b767418af97de8",
            5221: "65c6d3f79395bc151577",
            5286: "e175ab0283fafb546df5",
            5289: "459c31b18b5849250956",
            5290: "584f115939a00e172499",
            5316: "f0a0b2282b294c3c8ec2",
            5327: "affd0e4ded9606b921f0",
            5373: "5af78f4dea85bd76252a",
            5389: "598ebc816028b43b6420",
            5423: "1fc2a401f4070a935da1",
            5518: "93c0e1cb74a455a1827b",
            5546: "4b77a86075bc990ba85b",
            5560: "ff94ae7d155692d2020b",
            5593: "1fe16a20353151e34c23",
            5634: "0b3b8d5988088c839141",
            5640: "1406c6c93392d72632c7",
            5667: "6a74323c98ba7e58a0bf",
            5732: "32faf7d20661d96c1354",
            5857: "fbeb71560197207d10a6",
            5861: "7cd23368471437d7e2fd",
            5886: "d0b08326e0d6329fb18f",
            5889: "4471945ac985ea28f2d1",
            5898: "7095ea830235dfef20d9",
            5946: "4fc6fb99b9bb0835e7e9",
            6018: "36ba39f9e0bdd739e02c",
            6034: "0a898742b21801248a7d",
            6112: "1d0bf1c65e979bf52dc1",
            6186: "5c896232af8ac83a6539",
            6246: "2b660aeff85f10bfbcfe",
            6248: "efb3ea2b5b80c0e1a4c3",
            6253: "d71bff668c24fd9b8711",
            6270: "7167b100b1ae4863f346",
            6414: "cc700c8baceb76a2f439",
            6478: "7001f4e09116f54a7f79",
            6559: "af70c78a599c7b43a012",
            6642: "76a9c7fdf6c248299319",
            6645: "f5d394e72610fbd5bead",
            6649: "f945c58fd5a13abc809e",
            6668: "04af3125a9b344fcd980",
            6670: "7e4f54830c3773d52063",
            6754: "fa82171dc3014b0aaa1d",
            6763: "6d1ac4ef3e6adabfdbfd",
            6815: "76bc7cb13a7eca32726c",
            6869: "d2164c5526ed996989c5",
            6890: "a568764147d3723f02e7",
            6972: "c724f6b8d57924164336",
            6999: "33a836c1fae8626ca72f",
            7007: "5f15fc5588b64c679c44",
            7050: "bad9bfb890a604cc8cee",
            7190: "d91fdb76eb8a788fdb53",
            7223: "3587a2b36a7cab9389a9",
            7323: "12f9790475dafbfc8385",
            7475: "cb13320e4d99c283216f",
            7529: "e858a3668b0ea9482aaa",
            7556: "f86a6d2a02778dbf93b3",
            7590: "80d1fdeb3c1fbabe15cd",
            7629: "a0e14fa43c4b5541b481",
            7793: "bae81121126d7c7ab2e6",
            7848: "6aedbda592604192a63e",
            7856: "a2132a3ba239464b7405",
            7926: "2694d557d1c000daf706",
            7936: "38f8f1f750bf45952a58",
            7970: "9162c58202729cf6deb3",
            8084: "a0a60bb85ff1bce49b1c",
            8089: "315e14527fa2197bcbe9",
            8091: "39839e9867678bdf1ad3",
            8128: "c4a567e93c3495f4ff53",
            8141: "c6a8db13be171d2fa1e3",
            8214: "d306fdf9c4a1bb9a94d6",
            8233: "4d0faed75292e95ae2c1",
            8246: "6a80cf5970518474880e",
            8324: "cf9b1ee0fdf9d9ef5597",
            8368: "b85746a093cb201edae2",
            8377: "95e3d4c9f4e7319330e8",
            8400: "677261731538368cffe8",
            8438: "53757cbb530c37983cba",
            8530: "bd9b49a88dfb15471f0e",
            8568: "2549f2120cfdc29983a9",
            8712: "344bc617e17a1dfc8121",
            8816: "2fa61951d92b4c46e6a1",
            9022: "c42a92347da525188909",
            9165: "3adae1cfd9931267e816",
            9181: "256e38b56b56d0b4f07b",
            9202: "5a92e955f5d10806d6ee",
            9241: "aa19fb89f8be1485657b",
            9247: "ffb5113e39c00941a8bc",
            9252: "d5860fbe09dc9be44cc4",
            9357: "6bd5cb9837dab9941461",
            9361: "7d3fa4888a1ee4863e93",
            9378: "b45ab70e2c08b1afdad9",
            9536: "26e286a9de8aea13399c",
            9548: "25e85a09cae04e9e55c6",
            9561: "74f297a24f5198088ec4",
            9597: "12b34e64a2756a5ec93d",
            9627: "762b11a306b5bb582e7e",
            9669: "222f30f2065a8fc980e2",
            9768: "86ca7f2ea9a23116d927",
            9939: "15dabebb5d3897ce49bb",
            9956: "0a34c04c4a5969ffd6f6"
        })[e] + ".js"
    }
    ,
    p.miniCssF = function(e) {
        return "" + (({
            358: "navbar-notifications",
            430: "GoodsRecommendGoodsCardList",
            876: "report_modals",
            987: "comment-richtext",
            1128: "Chart",
            1306: "main-messages-routes",
            1353: "main-roundtable-routes",
            1632: "main-signin-routes",
            2121: "main-notifications-routes",
            2156: "EditableV2",
            2492: "main-special-routes",
            2520: "main-question-routes",
            2876: "federation",
            3026: "FeeConsultCard",
            3199: "writePinV2RichInput",
            3421: "MentionSuggestions-2.1",
            3634: "main-creator-routes",
            3786: "navbar-messages",
            4117: "lib-0de40faf",
            4361: "main-topic-routes",
            4713: "main-knowledge-plan-routes",
            4717: "editPinV2RichInput",
            5117: "main-email-register-routes",
            5290: "main-collections-routes",
            5316: "main-host-routes",
            5560: "richinput",
            5640: "globalOrgReport",
            5667: "main-settings-routes",
            5857: "main-org-routes",
            5898: "main-topstory-routes",
            6246: "VideoCoverEditorNew",
            6414: "main-collection-routes",
            6478: "main-campaign-routes",
            6668: "main-mcn-routes",
            6815: "PcCommentFollowPlugin",
            6869: "main-explore-routes",
            7190: "InlineVideo",
            7848: "EcommerceAdCard",
            7856: "comment-manage-footer",
            8214: "main-help-center-routes",
            8377: "main-ring-routes",
            8400: "ECommerceAd",
            9202: "main-wiki-routes",
            9361: "Carousel",
            9597: "user-hover-card",
            9768: "main-creator-salt-routes",
            9956: "main-signup-routes"
        })[e] || e) + ".216a26f4." + ({
            358: "63c9ebe517039fffa2f2",
            430: "d95ce79191cdf8d7ac28",
            876: "48d92fb17a334a3833bb",
            987: "41f3301b8872ede3ab23",
            1128: "45232eddc29936a5da2d",
            1306: "5d9c927cb14c618ffcd1",
            1353: "33c5b2587bc8c58fcbf8",
            1632: "b5c40ac2c6385d5afdce",
            2121: "fff020c51d8dfb39a577",
            2156: "4c053897b72363edc992",
            2195: "721011a36b3d9270b0fc",
            2492: "a815c27cdd0349456ec0",
            2520: "6ef338948f4cb1ebe3b6",
            2876: "165dca7ed0192637857e",
            3026: "b553d561e75f70cc9266",
            3175: "942e8e27de3823a119da",
            3199: "870a660121bcf2e24846",
            3421: "3f57a51c4ba15819ef4a",
            3634: "c5a79246250840499636",
            3786: "5aae9e5d810947001bc7",
            3898: "23ea01f9e2bd57fde2d4",
            4117: "885d0636e8337bfaf530",
            4361: "9b5f9c84220101c2ceb3",
            4713: "84af7aadbb1ec4691c1b",
            4717: "ed475609ea96025c2540",
            5117: "9ac67f1c05a4f55e8f3f",
            5125: "38a17c30c6289724bf70",
            5290: "3619c70566d31e226666",
            5316: "920915dd7dad2ea11ba5",
            5560: "d852b2c97c8347005646",
            5640: "1061879924d5d47c8dd8",
            5667: "f6b18fd6597c2221acd8",
            5857: "20179e0b538293e09259",
            5889: "127ba680356b8b90a691",
            5898: "b3e712c21712d5b50da4",
            6246: "85d088cc4e93e413d6ef",
            6270: "8af2515124ad588f9f66",
            6414: "23b054ff27b2d5250e37",
            6478: "db35924275c0792d58d7",
            6668: "ec81ab30eb2ff125ddb0",
            6815: "dd021feb001cdd846d64",
            6869: "63fc3f0a72753c9b9ebd",
            6999: "e011dda85c19b5523dd7",
            7007: "f4040fa2b1a2daafe7b8",
            7190: "595d52f7cb0dc085df49",
            7848: "06be0a24706fa4e1d8aa",
            7856: "658520d1990b310bd418",
            8214: "0368a65ebb71e48f0dc3",
            8377: "ba53d1f1fd9be9728dfa",
            8400: "68ec8d0095d6139bdfbf",
            8568: "bd42243b92252c315b12",
            9202: "017b5e53200237839d8d",
            9361: "cdf86780c4d03bcbcade",
            9536: "974e4e1ed055dbd9e130",
            9597: "46a9a70b46b185ad1a8a",
            9768: "caed11025d8059d15254",
            9956: "b5c40ac2c6385d5afdce"
        })[e] + ".css"
    }
    ,
    p.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    p.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    d = {},
    f = "heifetz:",
    p.l = function(e, a, c, t) {
        if (d[e]) {
            d[e].push(a);
            return
        }
        if (void 0 !== c)
            for (var r, o, b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var i = b[n];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + c) {
                    r = i;
                    break
                }
            }
        r || (o = !0,
        (r = document.createElement("script")).charset = "utf-8",
        r.timeout = 120,
        p.nc && r.setAttribute("nonce", p.nc),
        r.setAttribute("data-webpack", f + c),
        r.src = e,
        0 === r.src.indexOf(window.location.origin + "/") || (r.crossOrigin = "anonymous")),
        d[e] = [a];
        var s = function(a, c) {
            r.onerror = r.onload = null,
            clearTimeout(u);
            var f = d[e];
            if (delete d[e],
            r.parentNode && r.parentNode.removeChild(r),
            f && f.forEach(function(e) {
                return e(c)
            }),
            a)
                return a(c)
        }
          , u = setTimeout(s.bind(null, void 0, {
            type: "timeout",
            target: r
        }), 12e4);
        r.onerror = s.bind(null, r.onerror),
        r.onload = s.bind(null, r.onload),
        o && document.head.appendChild(r)
    }
    ,
    p.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    p.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    p.S = {},
    t = {},
    r = {},
    p.I = function(e, a) {
        a || (a = []);
        var c = r[e];
        if (c || (c = r[e] = {}),
        !(a.indexOf(c) >= 0)) {
            if (a.push(c),
            t[e])
                return t[e];
            p.o(p.S, e) || (p.S[e] = {}),
            p.S[e];
            var d = [];
            return d.length ? t[e] = Promise.all(d).then(function() {
                return t[e] = 1
            }) : t[e] = 1
        }
    }
    ,
    p.p = "https://static.zhihu.com/heifetz/",
    o = function(e, a, c, d) {
        var f = document.createElement("link");
        return f.rel = "stylesheet",
        f.type = "text/css",
        f.onerror = f.onload = function(t) {
            if (f.onerror = f.onload = null,
            "load" === t.type)
                c();
            else {
                var r = t && ("load" === t.type ? "missing" : t.type)
                  , o = t && t.target && t.target.href || a
                  , b = Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                b.code = "CSS_CHUNK_LOAD_FAILED",
                b.type = r,
                b.request = o,
                f.parentNode.removeChild(f),
                d(b)
            }
        }
        ,
        f.href = a,
        0 !== f.href.indexOf(window.location.origin + "/") && (f.crossOrigin = "anonymous"),
        function(e) {
            var a = document.head.querySelectorAll('link[rel="stylesheet"]')
              , c = a.length && a[a.length - 1];
            if (c) {
                c.insertAdjacentElement("afterend", e);
                return
            }
            document.head.appendChild(e)
        }(f),
        f
    }
    ,
    b = function(e, a) {
        for (var c = document.getElementsByTagName("link"), d = 0; d < c.length; d++) {
            var f = c[d]
              , t = f.getAttribute("data-href") || f.getAttribute("href");
            if ("stylesheet" === f.rel && (t === e || t === a))
                return f
        }
        for (var r = document.getElementsByTagName("style"), d = 0; d < r.length; d++) {
            var f = r[d]
              , t = f.getAttribute("data-href");
            if (t === e || t === a)
                return f
        }
    }
    ,
    n = {
        3666: 0
    },
    p.f.miniCss = function(e, a) {
        n[e] ? a.push(n[e]) : 0 !== n[e] && ({
            358: 1,
            430: 1,
            876: 1,
            987: 1,
            1128: 1,
            1306: 1,
            1353: 1,
            1632: 1,
            2121: 1,
            2156: 1,
            2195: 1,
            2492: 1,
            2520: 1,
            2876: 1,
            3026: 1,
            3175: 1,
            3199: 1,
            3421: 1,
            3634: 1,
            3786: 1,
            3898: 1,
            4117: 1,
            4361: 1,
            4713: 1,
            4717: 1,
            5117: 1,
            5125: 1,
            5290: 1,
            5316: 1,
            5560: 1,
            5640: 1,
            5667: 1,
            5857: 1,
            5889: 1,
            5898: 1,
            6246: 1,
            6270: 1,
            6414: 1,
            6478: 1,
            6668: 1,
            6815: 1,
            6869: 1,
            6999: 1,
            7007: 1,
            7190: 1,
            7848: 1,
            7856: 1,
            8214: 1,
            8377: 1,
            8400: 1,
            8568: 1,
            9202: 1,
            9361: 1,
            9536: 1,
            9597: 1,
            9768: 1,
            9956: 1
        })[e] && a.push(n[e] = new Promise(function(a, c) {
            var d = p.miniCssF(e)
              , f = p.p + d;
            if (b(d, f))
                return a();
            o(e, f, a, c)
        }
        ).then(function() {
            n[e] = 0
        }, function(a) {
            throw delete n[e],
            a
        }))
    }
    ,
    i = {
        3666: 0
    },
    p.f.j = function(e, a) {
        var c = p.o(i, e) ? i[e] : void 0;
        if (0 !== c) {
            if (c)
                a.push(c[2]);
            else if (/^(6(246|270|999)|2156|3666|4117|5889|7190|8568|9361)$/.test(e))
                i[e] = 0;
            else {
                var d = new Promise(function(a, d) {
                    c = i[e] = [a, d]
                }
                );
                a.push(c[2] = d);
                var f = p.p + p.u(e)
                  , t = Error();
                p.l(f, function(a) {
                    if (p.o(i, e) && (0 !== (c = i[e]) && (i[e] = void 0),
                    c)) {
                        var d = a && ("load" === a.type ? "missing" : a.type)
                          , f = a && a.target && a.target.src;
                        t.message = "Loading chunk " + e + " failed.\n(" + d + ": " + f + ")",
                        t.name = "ChunkLoadError",
                        t.type = d,
                        t.request = f,
                        c[1](t)
                    }
                }, "chunk-" + e, e)
            }
        }
    }
    ,
    p.O.j = function(e) {
        return 0 === i[e]
    }
    ,
    s = function(e, a) {
        var c, d, f = a[0], t = a[1], r = a[2], o = 0;
        if (f.some(function(e) {
            return 0 !== i[e]
        })) {
            for (c in t)
                p.o(t, c) && (p.m[c] = t[c]);
            if (r)
                var b = r(p)
        }
        for (e && e(a); o < f.length; o++)
            d = f[o],
            p.o(i, d) && i[d] && i[d][0](),
            i[d] = 0;
        return p.O(b)
    }
    ,
    (u = self.webpackChunkheifetz = self.webpackChunkheifetz || []).forEach(s.bind(null, 0)),
    u.push = s.bind(null, u.push.bind(u))
}();

function eA(ei, eo, ec, eu) {
            var ed = ec.zse93
              , ef = ec.dc0
              , ep = ec.xZst81
              , eg = (0,
            em.mR)(ei)
              , ey = (0,
            em.Wn)(eo)
              , eA = [ed, eg, ef, (0,
            em.kA)(ey) && ey, ep].filter(Boolean).join("+");
            return {
                source: eA,
                signature: (0,
                (0,
                eh.nT)(eu).encrypt)(eb()(eA))
            }
        }

const em = window.xxx(18543)
const eh = window.xxx(93823)
const ey = window.xxx(10261)
const eb = window.xxx.n(ey)

function get_xzse96(eo) {
    
    const eL = (0, em.rA)()
    
    const eN_body = undefined
    const ek = undefined
    const eB = null
    const eF = eA(eo, eN_body, {
        zse93: "101_3_3.0",
        dc0: eL,
        xZst81: eB
    }, ek)
    const ej = eF.signature;
    // console.log(ej);
    const xzse96 = ("x-zse-96", "".concat("2.0", "_").concat(ej))
    console.log(xzse96);
    return xzse96
}

const eo = "https://www.zhihu.com/api/v4/comment_v5/comment/11454767967/child_comment?order_by=ts&limit=20&offset="
get_xzse96(eo)