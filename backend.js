const axios = require('axios');

// 權限管理 - 部門管理
const department = require('./dpartment.js');

const Service = axios.create({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    baseURL: 'http://api-admin-vip001.dev.com',
    transformRequest : [function (data) {
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }]
});

exports.Call = function (route, jwtdata, finish, error, config) {
    let result;
    let m_config = {};
    if (config == undefined || config == null) {
        if (route.includes('Login/nt_verify_code')) {
            m_config = {
                responseType: 'arraybuffer',
            }
        }
    }
    else {
        m_config = config;
    }

    Service.post(route, jwtdata, m_config).then(res => {
        // console.log(jwtdata);
        // let jobj = JSON.parse(res.data);
        if (res.data.data.error_code === '9999') {
            result = department[route];
            console.log('E1:代假資料：' + route);
        } else {
            result = res.data;
        }
        // console.log('real server:', res.data);
    }).catch(err => {
        // console.log(err);
        result = department[route];
        console.log('E2:代假資料:' + route);
        if (!result) {
            console.log('沒有假資料:' + route);
            result = {};
        }
    }).then(function() {
        finish(result);
    });
};


/*

import httpClientModule from './httpClientModule'
import JWT_DEF from './JWTDefine'
import Vue from 'vue'
class JWTApi {
    constructor(){
        this.Service = new httpClientModule();
        this.token = "";
    }
    Call(key,data,finish,error,config){
        key = key.toUpperCase();

        let m_config ={};
        if( config == undefined || config == null){
            if( key === "NT_VERIFY_CODE" ){
                m_config = {
                    responseType: 'arraybuffer',
                }
            }
        }
        else{
            m_config = config;
        }

        if( data.lang === undefined ){
            data.lang = Vue.i18n.locale()
        }

        let jwtStr = JSON.stringify(data)
        let ps = "02ac8f4abaf6b4ea7bfab5c19eb07bd15" + "." + encodeURIComponent(btoa(encodeURIComponent(jwtStr))) //token for test
        let jwtData = {
            data: ps
        }
        this.Service.post(JWT_DEF.apiGroup[key],jwtData,m_config).then(res=>{
            finish(res);
        }).catch(err=>{
            error(err);
        })
    }
    setToken(token){
        this.token = token;
    }
}

let JWTAPI = new JWTApi();

export default JWTAPI

*/