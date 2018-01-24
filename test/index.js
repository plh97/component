// // import {
// //     pc,
// //     mobile
// // } from "peng-component";
// // } from "../dist/index.js";

// // if(screen.width>768){
// //     var {
// //         modal,
// //         modalInfo,
// //         message,
// //         spin,
// //         container
// //     } = pc;
// // }else{
// //     var {
// //         modal,
// //         modalInfo,
// //         message,
// //         spin,
// //         container
// //     } = mobile;
// // }

// // const {
// //     modal,
// //     modalInfo,
// //     message,
// //     spin,
// //     container
// // } = pc;
const pc = Component.pc


var modal  =pc.modal;
var modalInfo  =pc.modalInfo;
var message  =pc.message;
var spin  =pc.spin;
var table  =pc.table;
var container  =pc.container;
var table  =pc.table;

var button = container.button;
var icon = container.icon;


var times = 0;
document.querySelector('#container-modal').innerHTML = `
    ${button({
        className:"btn-primary",
        text:"Modal"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"ModalInfo"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"ModalConfirm"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"ModalDelete"
    }).outerHTML}
`
document.querySelector('#container-message').innerHTML = `
    ${button({
        className:"confirm btn-primary",
        text:"info"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"success"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"error"
    }).outerHTML}
    ${button({
        className:"confirm btn-primary",
        text:"warning"
    }).outerHTML}
`;
document.querySelector('#container-popupBox').innerHTML = `
    ${button({
        className:"table btn-danger",
        text:"table"
    }).outerHTML}
    ${button({
        className:"treeTable btn-danger",
        text:"treeTable"
    }).outerHTML}
`;
let messageBtns = document.querySelectorAll('#container-message button');
messageBtns = Array.prototype.slice.call(messageBtns)
let modalBtns = document.querySelectorAll('#container-modal button');
modalBtns = Array.prototype.slice.call(modalBtns)
let popupBoxBtns = document.querySelectorAll('#container-popupBox button');
popupBoxBtns = Array.prototype.slice.call(popupBoxBtns)
messageBtns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerText=="info"){
            message('123')
        }else{
            message({
                type: e.target.innerText,
                time: 100000,
                content: `这个是这是这个是${e.target.innerText},第${times++}次`,
                callback: ()=>{
                    console.log('callback',e.target.innerText);
                }
            })
        }
    },false)
})
modalBtns.forEach(btn =>{
    if(btn.innerText == "Modal"){
        btn.addEventListener('click',(e)=>{
            modal({
                title: `${btn.innerText}的标题`,
                content: `这个是${e.target.innerText}的内容,第${times++}次`,
                callback: ()=>console.log('callback',e.target.innerText,"的确认")
            })
        },false)
    }else if(btn.innerText == "ModalInfo"){
        btn.addEventListener('click',(e)=>{
            modalInfo('这个是简化版标题！！')
        },false)
    }else if(btn.innerText == "ModalConfirm"){
        btn.addEventListener('click',(e)=>{
            modalInfo({
                type: `confirm`,
                title: `Do you Want to delete these items?`,
                content: `警告内容`,
                callback: () => console.log('callback',e.target.innerText,"的确认")
            })
        },false)
    }else if(btn.innerText == "ModalDelete"){
        btn.addEventListener('click',(e)=>{
            modalInfo({
                type: `delete`,
                title: `Do you Want to delete these items?`,
                content: `报错内容`,
                callback: () => console.log('callback',e.target.innerText,"的确认")
            })
        },false)
    }
})
document.querySelector('.container').addEventListener('click',(e)=>{
    if(screen.width>768){
        spin({dom: document.querySelector('.container')})
        setTimeout(() => {
            spin({dom: document.querySelector('.container')})
        }, 2000);
    }else {
        spin()
        setTimeout(() => {
            spin()
        }, 2000);
    }
},false)



tableBtns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        table({
            type: e.target.innerText,
            data: [{
                number:"231123fwef",
                name:"法斯特"
            },{
                number:"231123fwef",
                name:"法斯特"
            },{
                number:"231123fwef",
                name:"法斯特"
            },{
                number:"231123fwef",
                name:"法斯特"
            },{
                number:"231123fwef",
                name:"法斯特"
            }],
            callback: () => console.log('callback',e.target.innerText,"的确认")
        })
    },false)
})












popupBoxBtns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        table({
            type: e.target.innerText,
            content: `这个是这是这个是${e.target.innerText},第${times++}次`,
            data: {
                title:[
                    {id: "1", name: "供应商"},
                    {id: "2", name: "客户"},
                    {id: "3", name: "供应商|客户"},
                    {id: "6", name: "快递公司"},
                    {id: "4", name: "经销商"},
                    {id: "5", name: "门店"}
                ],
                content:[
                    {"id":"01d167cc9e864b038a3b9b26737d7e2d","parent_ids":"0","name":"111","sort":30,"code":"001001014013","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"11521","edu_user_name":"111"},
                    {"id":"32f08cdc623f41f99c614fe1b88c1c60","parent_ids":"0","name":"法塞特银川商贸有限公司","sort":30,"area_id":"76401","code":"001001014012","type":"5","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","update_by":"30900","update_date":1514874616000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"11406","edu_user_name":"银川品牌店"},
                    {"id":"42bfc2195d944b0ab79905991475d373","parent_ids":"0","name":"法塞特（浙江）供应链管理有限公司","sort":30,"code":"001001014005","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"10445","edu_user_name":"法塞特（浙江）供应链管理有限公司"},
                    {"id":"90a1b87797e94758bfdc91ec88fdf30c","parent_ids":"0","name":"法塞特（福建）供应链管理有限公司","sort":30,"code":"001001014005001","type":"4","grade":"1","USEABLE":"1","del_flag":"0","corp_code":"001001014005","corp_name":"法塞特（浙江）供应链管理有限公司","dept_id":"e0e9b3f94f264c8bb979618f44b2e3cf","dept_code":"001001014005","dept_name":"法塞特（浙江）供应链管理有限公司","edu_user_id":"10446","edu_user_name":"法塞特（福建）供应链管理有限公司"},
                    {"id":"ff808081600fcb5f016010b0a87e00d2","parent_ids":"0","name":"宁夏圣路易.丁酒庄销售有限公司","sort":30,"area_id":"76401","code":"001001014011","type":"1","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1512108501000,"update_by":"30155","update_date":1514869647000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"圣路易&middot;丁酒庄销售有限公司"},
                    {"id":"ff8080816010d06e0160151416870111","parent_ids":"0","name":"宁夏一带一路供应链股份有限公司","sort":30,"area_id":"76401","code":"001001014012","type":"1","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1512182126000,"update_by":"30158","update_date":1512182126000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"宁夏一带一路供应链股份有限公司"},
                    {"id":"ff8080816082dae40160960dd02e0451","parent_ids":"0","name":"宁夏圣路易.丁葡萄酒庄（有限公司）","sort":30,"area_id":"76401","code":"","type":"2","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30158","create_date":1514345975000,"update_by":"30158","update_date":1514345975000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"宁夏圣路易.丁葡萄酒庄（有限公司）"},
                    {"id":"ff808081609b096a01609b3e493c0033","parent_ids":"0","name":"顺丰快递","sort":30,"area_id":"11101","code":"","type":"6","grade":"1","address":"","zip_code":"","master":"","phone":"","fax":"","email":"","USEABLE":"1","PRIMARY_PERSON":"","DEPUTY_PERSON":"","create_by":"30150","create_date":1514433038000,"update_by":"30150","update_date":1514433038000,"remarks":"","del_flag":"0","corp_code":"001001014","corp_name":"法塞特酒业（上海）","dept_id":"c7f76ff996244d08907911cba86597fc","dept_code":"001001014","dept_name":"法塞特酒业（上海）","edu_user_id":"","edu_user_name":"顺丰快递"}
                ]
            },
            callback: ()=>{
                console.log('callback',e.target.innerText);
            }
        })
    },false)
})













// add.test.js
// var match = require('../src/utils/functional.js');
// var expect = require('chai').expect;

// describe('加法函数的测试', () => {
//     it('1 加 1 应该等于 2', () => {
//         expect(match(/\s+/g,"hello world")).to.be.equal([" "]);
//     });
// });