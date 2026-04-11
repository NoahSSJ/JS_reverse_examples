// 删除本地特征
delete __dirname
delete __filenames


window = global;
window.addEventListener = function(ele){
    // console.log('window addEventListener:::',ele)
}
window.TCaptchaReferrer = 'https://cloud.tencent.com/product/captcha'

window.RTCPeerConnection = function(){}
window.webkitRTCPeerConnection = window.RTCPeerConnection
window.innerWidth = 1366;
window.innerHeight = 768;


// 删除本地特征
delete global;
delete Buffer;



location = {
    "ancestorOrigins": {
        "0": "https://cloud.tencent.com"
    },
    "href": "https://turing.captcha.gtimg.com/1/template/drag_ele.html",
    "origin": "https://turing.captcha.gtimg.com",
    "protocol": "https:",
    "host": "turing.captcha.gtimg.com",
    "hostname": "turing.captcha.gtimg.com",
    "port": "",
    "pathname": "/1/template/drag_ele.html",
    "search": "",
    "hash": ""
}

_documentElement = {}


webgldebug = {
    'UNMASKED_VENDOR_WEBGL': 37445
}
_webgl = {
    getSupportedExtensions:function(ele){
        // console.log('_webgl getSupportedExtensions:::',ele)
        return [
            "ANGLE_instanced_arrays",
            "EXT_blend_minmax",
            "EXT_clip_control",
            "EXT_color_buffer_half_float",
            "EXT_depth_clamp",
            "EXT_disjoint_timer_query",
            "EXT_float_blend",
            "EXT_frag_depth",
            "EXT_polygon_offset_clamp",
            "EXT_shader_texture_lod",
            "EXT_texture_compression_bptc",
            "EXT_texture_compression_rgtc",
            "EXT_texture_filter_anisotropic",
            "EXT_texture_mirror_clamp_to_edge",
            "EXT_sRGB",
            "KHR_parallel_shader_compile",
            "OES_element_index_uint",
            "OES_fbo_render_mipmap",
            "OES_standard_derivatives",
            "OES_texture_float",
            "OES_texture_float_linear",
            "OES_texture_half_float",
            "OES_texture_half_float_linear",
            "OES_vertex_array_object",
            "WEBGL_blend_func_extended",
            "WEBGL_color_buffer_float",
            "WEBGL_compressed_texture_s3tc",
            "WEBGL_compressed_texture_s3tc_srgb",
            "WEBGL_debug_renderer_info",
            "WEBGL_debug_shaders",
            "WEBGL_depth_texture",
            "WEBGL_draw_buffers",
            "WEBGL_lose_context",
            "WEBGL_multi_draw",
            "WEBGL_polygon_mode"
        ]
    },
    getExtension:function(ele){
        // console.log('_webgl getExtension:::',ele)
        if (ele == 'WEBGL_debug_renderer_info'){
            return webgldebug
        }
    },
    getParameter:function(ele){
        // console.log('_webgl getParameter:::',ele)
        if (ele == 37445){
            return 'Google Inc. (Intel)'
        }
    },
}
_canvas = {
    getContext:function(ele){
        console.log('_canvas getContext:::',ele)
        if (ele == 'webgl'){
            return _webgl
        }
    }
}

_div = {
    style:{},
    appendChild:function(ele){}
}

_body = {
    appendChild:function(ele){
        // console.log('body appendChild:::',ele)
    },
    removeChild:function(ele){
        // console.log('body removeChild:::',ele)
    }
}

_style = {}
_p = {}
_span = {
    setAttribute: function (ele) {
        // console.log('span setAttribute:::', ele);
    },
    removeAttribute: function (ele) {
        // console.log('span removeAttribute:::', ele);
    },
    removeChild:function(ele){}
};
iframe = {
    style:{}
}
_head = {
    appendChild:function(ele){
        // console.log('_head appendChild',ele)
    }
}

document = {
    createElement:function(ele){
        console.log('document createElement:::',ele)
        if (ele == 'div'){
            return _div
        }
        if (ele == 'canvas'){
            return _canvas
        }
        if (ele == 'style'){
            return _style
        }
        if (ele == 'p'){
            return _p
        }
        if (ele == 'span'){
            return _span
        }
        if (ele == 'iframe'){
            return iframe
        }
    },
    getElementById:function(ele){
        console.log('document getElementById:::',ele)
        return ''
    },
    addEventListener:window.addEventListener,
    location:window.location,
    charset: 'UTF-8',
    characterSet: 'UTF-8',
    URL: 'https://turing.captcha.gtimg.com/1/template/drag_ele.html',
    cookie:'',
    documentElement:_documentElement,
    body:_body,
    head:_head,
}


navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0",
    language: 'zh-CN',
    languages:[
        "zh-CN",
        "en",
        "en-GB",
        "en-US"
    ],
    cookieEnabled:true,
    webdriver: false,
    hardwareConcurrency: 8,
    cookieEnabled: true,
    platform: "MacIntel",
    vendor: "Google Inc.",
}




screen = {
    availHeight: 816,
    availLeft: 0,
    availTop: 0,
    availWidth: 1536,
    colorDepth: 24,
    height: 864,
    isExtended: false,
    onchange: null,
    pixelDepth: 24,
    width: 1536,
}


history = {}


function Storage(){
    this.clear = function (ele){console.log("[native code] localStorage clear:::",ele)};
    this.getItem = function (ele){
        // console.log("[native code] localStorage getItem:::",ele)
        return this[ele]
    };
    this.key = function (ele){console.log("[native code] localStorage key:::",ele)};
    this.removeItem = function (ele){
        // console.log("[native code] localStorage removeItem:::",ele)
        delete this[ele]
    };
    this.setItem = function (key, value){
        // console.log("[native code] localStorage setItem:::",key,value)
        this[key] = value;
    };
    this['TDC_itoken'] = '225651190:1741927202'
}


localStorage = new Storage()
sessionStorage = new Storage()



// function ProxyDocumentObjects(proxyObjs) {
//     for (let i = 0; i < proxyObjs.length; i++) {
//         const documentObj = proxyObjs[i];
//         const keys = Object.keys(documentObj);
//         keys.forEach(key => {
//             const value = documentObj[key];
//             if (value && typeof value === "object") {
//                 documentObj[key] = new Proxy(value, {
//                     get(target, property, receiver) {
//                         const propValue = Reflect.get(target, property, receiver);
//                         console.log("方法:", "get", "对象:", `${key}`, "属性:", property, "属性类型:", `${typeof property}`, "属性值:", propValue, "属性值类型:", `${typeof propValue}`);
//                         return propValue;
//                     },
//                     set(target, property, newValue, receiver) {
//                         console.log("方法:", "set", "对象:", `${key}`, "属性:", property, "属性类型:", `${typeof property}`, "属性值:", newValue, "属性值类型:", `${typeof newValue}`);
//                         return Reflect.set(target, property, newValue, receiver);
//                     }
//                 });
//             }
//         });
//     }
// }
// // 这里需要写对象
// const proxyObjs = [window, document];
// ProxyDocumentObjects(proxyObjs);