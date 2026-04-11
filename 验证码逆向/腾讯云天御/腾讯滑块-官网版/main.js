require('./env1');
require('./tdc.js')

function getTdcData() {
    const ft = {
        "ft": "qf_7Pf__H"
    }
    window.TDC.setData(ft)
    return decodeURIComponent(window.TDC.getData(!0))
}
// res = getTdcData()
// console.log(res)
// console.log(res.length)

function get_params() {
    var collect = decodeURIComponent((0, getTdcData)())
    var eks = window.TDC.getInfo()['info'];
    return { collect: collect, eks: eks }
}

console.log(get_params())