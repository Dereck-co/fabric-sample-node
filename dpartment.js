/*
const path = 'api/admin/v1/department/'
export default {
    //部門管理
    "DEPARTMENT_SHOW": `${path}show`,
    "DEPARTMENT_SHOW_ALL": `${path}show_all`,
    "DEPARTMENT_SHOW_ALL_COUNT": `${path}show_all_count`,
    "DEPARTMENT_PAGENATION": `${path}pagenation`,
    "DEPARTMENT_CREATE": `${path}create`,
    "DEPARTMENT_MODIFY": `${path}modify`,
    "DEPARTMENT_DELETE": `${path}delete`,
    "DEPARTMENT_SEARCH"
}
*/

let DEPARTMENT_SHOW = {
    "result": "1",
    "data": {
        "id": "3",
        "name": "部門名稱",
        "desc": "部門描述",
        "member_count": "10",
        "create_time": "2019-02-12 07:47:55",
        "update_time": "2019-02-12 07:47:55"
    },
    "pagination": {
        "page": "1",
        "pageLimit": "10",
        "totalNumber": "0",
        "totalPage": "1"
    }
};

let DEPARTMENT_SHOW_ALL = {
    "result": "1",
    "data": [
        {
            "id": "1",
            "name": "部門1",
            "desc": "部門2描述",
            "member_count": "10",
            "create_time": "2019-02-12 07:58:25",
            "update_time": "2019-02-15 08:29:59"
        },
        {
            "id": "2",
            "name": "部門2",
            "desc": "部門2描述",
            "member_count": "3",
            "create_time": "2019-02-12 07:47:55",
            "update_time": "2019-02-12 07:47:55"
        }
    ],
    "pagination": {
        "page": "1",
        "pageLimit": "10",
        "totalNumber": "0",
        "totalPage": "1"
    }
};

let DEPARTMENT_SHOW_ALL_COUNT = {
    "result": "1",
    "data": {
        "count_num": 12
    },
    "pagination":{
      "page":"1",
      "pageLimit":"10",
      "totalNumber":"0",
      "totalPage":"1"
    }
};

let DEPARTMENT_SEARCH = {
    "result": "1",
    "data": [
        {
            "id": "50",
            "name": "部門1",
            "desc": "部門1描述",
            "member_count": "1",
            "create_time": "2019-02-15 08:29:09",
            "update_time": "2019-02-15 08:29:09"
        }
    ],
    "pagination": {
        "page": "1",
        "page_limit": "10",
        "total_number": "10",
        "total_page": "1"
    }

};

let DEPARTMENT_CREATE = {
    "result": "1",
    "data": {
        "msg": "新增成功",
        "insert_id": 51
    },
    "pagination":{
      "page":"1",
      "pageLimit":"10",
      "totalNumber":"0",
      "totalPage":"1"
    }
};

let DEPARTMENT_MODIFY = {
    "result": "1",
    "data": {
        "msg": "修改成功",
    },
    "pagination":{
      "page":"1",
      "pageLimit":"10",
      "totalNumber":"0",
      "totalPage":"1"
    }
};

let DEPARTMENT_DELETE = {
    "result": "1",
    "data": {
        "msg": "刪除成功",
    },
    "pagination":{
      "page":"1",
      "pageLimit":"10",
      "totalNumber":"0",
      "totalPage":"1"
    }
};

module.exports = {
    "/api/admin/v1/department/show": DEPARTMENT_SHOW,
    "/api/admin/v1/department/get_all_department_info": DEPARTMENT_SHOW_ALL,
    "/api/admin/v1/department/show_all_count": DEPARTMENT_SHOW_ALL_COUNT,
    '/api/admin/v1/department/search_department_info': DEPARTMENT_SEARCH,
    "DEPARTMENT_PAGENATION": {},
    "/api/admin/v1/department/create": DEPARTMENT_CREATE,
    "/api/admin/v1/department/modify": DEPARTMENT_MODIFY,
    "/api/admin/v1/department/delete": DEPARTMENT_DELETE
}
