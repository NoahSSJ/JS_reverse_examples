const CryptoJS = require("crypto-js")

// function c(k, r) {
//     return new CryptoJS.init(r).finalize(k)
// }
function c(message) {
    // return CryptoJS.SHA256(message).toString();          // ← 常用 hex 小写
    return CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);  // 显式 hex，确保小写
}



function get_url() {
    const d = (new Date).getTime()
const h = function(e, t) {
        let n = ""
          , i = t
          , a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        e && (i = Math.round(Math.random() * (r - t)) + t);
        for (let o = 0; o < i; o++) {
            n += a[Math.round(Math.random() * (a.length - 1))]
        }
        return n
    }(!1, 16)
const u = "$d6eb7ff91ee257475%";
const e = 1;
const l = 10;
const p = {
        type1: 1,
        type2: 1,
        type3: 1,
        type4: 1,
        jury: 1
    };
const k = {
    "words": [
        1913731180,
        1213325566,
        -244451721,
        -1346913580,
        -294698687,
        -910711335,
        1274960175,
        225590752
    ],
    "sigBytes": 32
};
    const i = {
    "LAWS_FEED": "//tousu.sina.com.cn/api/laws/feed",
    "INDEX_FEED": "//tousu.sina.com.cn/api/index/feed",
    "index_article": "//tousu.sina.com.cn/api/articles/notice",
    "PRAISE": "//tousu.sina.com.cn/api/votes/add",
    "MY_COMPLAINTS": "//tousu.sina.com.cn/api/user/complaints",
    "RECEIVED_COMPLAINTS": "//tousu.sina.com.cn/api/user/received_complaints",
    "COMPLETE_COMPLAINT": "//tousu.sina.com.cn/api/complaint/completed/",
    "SHARE_AMOUNT_COMPLAINT": "//tousu.sina.com.cn/api/complaint/share_amount/",
    "SHARE_AMOUNT_LAWS": "//tousu.sina.com.cn/api/laws/share_amount/",
    "NEW_SEND_MSG": "//tousu.sina.com.cn/api/sms/send",
    "CHANGE_SEND_MSG": "//tousu.sina.com.cn/api/user/cert_send",
    "CHANGE_SEND_CODE": "//tousu.sina.com.cn/api/user/verify_phone",
    "BINGDING_PHONE": "//tousu.sina.com.cn/api/user/update_phone",
    "MY_COMPLAINT_HISTORY": "//tousu.sina.com.cn/api/company/my_search",
    "MY_COMPLAINT_HOT": "//tousu.sina.com.cn/api/company/hot",
    "MY_COMPLAINT_COMPANY": "//tousu.sina.com.cn/api/company/search",
    "COMPLAINT_STORE": "//tousu.sina.com.cn/api/complaint/store",
    "COMPLAINT_STORE_UPDATE": "//tousu.sina.com.cn/api/complaint/update",
    "COMPLAINT_STORE_REPLY": "//tousu.sina.com.cn/api/complaint/store_reply",
    "COMPLAINT_STAR": "//tousu.sina.com.cn/api/complaint/completed_evaluate",
    "tousu_check": "//tousu.sina.com.cn/api/complaint/check_input",
    "tousu_verify": "//tousu.sina.com.cn/api/complaint/check_alertword",
    "tousu_special_company": "//tousu.sina.com.cn/api/company/special_company?",
    "evaluate_star": "//tousu.sina.com.cn/api/complaint/evaluate_after_auto_cocomplete",
    "UPLOAD_IMAGES": "//tousu.sina.com.cn/api/files/image_uploader?add_water=1",
    "SEARCH_SUGGEST": "//tousu.sina.com.cn/api/index/suggest",
    "SEARCH_RESULT": "//tousu.sina.com.cn/api/index/s",
    "MESSAGE_LIST": "//tousu.sina.com.cn/api/user/message_list",
    "GET_VIDEOID": "//tousu.sina.com.cn/api/video/create_video_and_notify",
    "GET_AUTH_URL": "//tousu.sina.com.cn/api/video/get_authed_s3_url",
    "REPORT_FEED": "//tousu.sina.com.cn/api/articles/feed",
    "SELLER_FEED": "//tousu.sina.com.cn/api/company/received_complaints",
    "service_feed": "//tousu.sina.com.cn/api/company/service_complaints",
    "SELLER_LIST": "//tousu.sina.com.cn/api/company/main_search",
    "JURY_FEED": "//tousu.sina.com.cn/api/jury/feed",
    "JURY_LIST": "//tousu.sina.com.cn/api/jury/list_complaints",
    "JURY_REPLY": "//tousu.sina.com.cn/api/jury/store_reply",
    "JURY_INVITE": "//tousu.sina.com.cn/api/jury/invite",
    "HANDLE_INVITE": "//tousu.sina.com.cn/api/jury/handle_invite",
    "jury_zan": "//tousu.sina.com.cn/api/jury/vote",
    "jury_hot": "//tousu.sina.com.cn/api/jury/hot",
    "jury_hot_comp": "//tousu.sina.com.cn/api/jury/hotcomps",
    "jury_rank": "//tousu.sina.com.cn/api/jury/rank",
    "invite_list": "//tousu.sina.com.cn/api/jury/jury_list",
    "company_search": "//tousu.sina.com.cn/api/user/search_recv_complaints?k=",
    "complaint_types": "//tousu.sina.com.cn/api/company/issues",
    "company_billboard": "//tousu.sina.com.cn/api/top_rank/rank",
    "company_field": "//tousu.sina.com.cn/api/top_rank/rank_fields",
    "file_hide": "//tousu.sina.com.cn/api/complaint/set_atch_hide",
    "company_datas": "//tousu.sina.com.cn/api/company/get_stast",
    "name_hide": "//tousu.sina.com.cn/api/complaint/set_anon",
    "email_vc": "//tousu.sina.com.cn/api/company/email_vc",
    "add_email": "//tousu.sina.com.cn/api/company/add_email",
    "del_email": "//tousu.sina.com.cn/api/company/del_email",
    "email_list": "//tousu.sina.com.cn/api/company/emails",
    "group_list": "//tousu.sina.com.cn/api/grp_comp/feed",
    "group_tslist": "//tousu.sina.com.cn/api/grp_comp/feed_by_co",
    "group_suggest": "//tousu.sina.com.cn/api/grp_comp/suggs",
    "group_progress": "//tousu.sina.com.cn/api/grp_comp/progs",
    "group_comps": "//tousu.sina.com.cn/api/grp_comp/comps",
    "user_glist": "//tousu.sina.com.cn/api/grp_comp/init_grpcomps",
    "company_glist": "//tousu.sina.com.cn/api/grp_comp/recv_grpcomps",
    "group_reply": "//tousu.sina.com.cn/api/grp_comp/store_reply",
    "group_join": "//tousu.sina.com.cn/api/grp_comp/join_info",
    "group_store_sugg": "//tousu.sina.com.cn/api/grp_comp/store_sugg",
    "group_share_img": "//tousu.sina.com.cn/api/grp_comp/shr_img",
    "group_share": "//tousu.sina.com.cn/api/grp_comp/incr_shr_amt/",
    "group_file_hide": "//tousu.sina.com.cn/api/grp_comp/set_atch_hide",
    "group_can_join": "//tousu.sina.com.cn/api/grp_comp/can_join",
    "heimao315": "//tousu.sina.com.cn/api/leadership/get_items",
    "dataCompany": "//tousu.sina.com.cn/api/company/quick_stat_list",
    "dataStat": "//tousu.sina.com.cn/api/company/quick_stat",
    "join_company": "//tousu.sina.com.cn/api/company/apply_settle",
    "message_read": "//tousu.sina.com.cn/api/user/message_read",
    "message_read_all": "//tousu.sina.com.cn/api/user/message_read_all",
    "top_card_time": "//tousu.sina.com.cn/api/top_rank/grprank_span",
    "new_rank_card": "//tousu.sina.com.cn/api/top_rank/grprank_card",
    "filed_rank_card": "//tousu.sina.com.cn/api/top_rank/grprank_field_card",
    "top_card_list": "//tousu.sina.com.cn/api/top_rank/grprank_list",
    "week_rank_list": "//tousu.sina.com.cn/api/top_rank/riserank_list",
    "user_is_law": "//tousu.sina.com.cn/api/complaint/sync_lawfirm?",
    "all_comp_field": "//tousu.sina.com.cn/api/complaint/qxzx_fields?",
    "comp_is_field": "//tousu.sina.com.cn/api/company/field?",
    "comp_is_tip": "//tousu.sina.com.cn/api/company/get_popup",
    "comp_set_tip": "//tousu.sina.com.cn/api/company/set_popup",
    "comp_is_notice": "//tousu.sina.com.cn/api/user/check_agree?",
    "comp_set_notice": "//tousu.sina.com.cn/api/user/sign_agree?",
    "comp_car_data": "//tousu.sina.com.cn/api/company/auto_products?",
    "comp_digi_data": "//tousu.sina.com.cn/api/company/digi_products?",
    "comp_ecom_data": "//tousu.sina.com.cn/api/company/eshop_issues?",
    "comp_autocomplete": "//tousu.sina.com.cn/api/complaint/set_autocomplete?",
    "group_digi": "//tousu.sina.com.cn/api/grp_comp/feed_by_co_type?",
    "ecomp_uids": "//tousu.sina.com.cn/api/company/eshop_companies?",
    "ecomp_services": "//tousu.sina.com.cn/api/company/eshop_services?",
    "company_service": "//tousu.sina.com.cn/api/company/rel_service",
    "company_info": "//tousu.sina.com.cn/api/company/info",
    "comp_sel_info": "//tousu.sina.com.cn/api/company/sel_info?",
    "tousu_exit": "//tousu.sina.com.cn/api/feedback/comp_term?"
}
    const t = c([d, h, u, e, l, p["type" + e]].sort().join(""))
    console.log(t)
    const r = "".concat(i.INDEX_FEED, "?ts=").concat(d, "&rs=").concat(h, "&signature=").concat(t)
    console.log("https:" + r)
    return "https:" + r;
}


get_url()