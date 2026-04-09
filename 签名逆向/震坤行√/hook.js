// 全局存储模块
window.allModules = window.allModules || {};

// 替换 webpack 加载器
p = function p(e) {
    if (c[e]) {
        window.allModules[e] = c[e];
    }

    console.log("📦 加载模块 ID =", e, "｜存在 =", !!c[e]);

    var t;
    return (r[e] || (t = r[e] = {
        i: e,
        l: !1,
        exports: {}
    },
    c[e].call(t.exports, t, t.exports, p),
    t.l = !0,
    t)).exports;
};

// ✅ 导出【无引号、可直接使用】的 mod 代码
window.exportMod = function () {
    let res = "const mod = {\n";
    for (let id in window.allModules) {
        const code = window.allModules[id].toString();
        res += `  ${id}: ${code},\n`;
    }
    res += "}";
    return res;
};

// copy(exportMod())