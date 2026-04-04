function get_fp() {
            var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
              , t = e.length
              , n = Date.now().toString(36)
              , r = [];
            r[8] = r[13] = r[18] = r[23] = "_",
            r[14] = "4";
            for (var o = 0, i = void 0; o < 36; o++)
                r[o] || (i = 0 | Math.random() * t,
                r[o] = e[19 == o ? 3 & i | 8 : i]);
            return "verify_" + n + "_" + r.join("")
        }

        console.log("fp值为:", get_fp());