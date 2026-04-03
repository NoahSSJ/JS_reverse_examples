
function p(t) {
                t = R[V5](t)[T](/%([0-9A-F]{2})/g, function(n, t) {
                    return o(Y5 + t)
                });
                try {
                    return R[Q5](t)
                } catch (n) {
                    return R[W5][K5](t)[U5](Z5)
                }
            }

function h(n, t) {
                t = t || u();
                for (var e = (n = n[$5](N))[z], r = t[z], a = q5, i = H; i < e; i++)
                    n[i] = o(n[i][a](H) ^ t[(i + 10) % r][a](H));
                return n[I5](N)
            }

const a = "@#/account/userinfo@#111846698775@#3"
const d = 'xyz517cda96efgh'
const e = (0, p)((0, h)(a, d))
console.log(e);
