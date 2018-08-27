import HttpServletRequest from "../service/HttpServletRequest";

//此模块后期再进行二次修改独立出来单独api

//登陆
export function Login(body) {
    return HttpServletRequest({
        url: "http://localhost:3000/login",
        method: "POST",
        data: body
    })
}

//注册
export function Register(body) {
    return HttpServletRequest({
        url: "http://localhost:3000/register",
        method: "POST",
        data: body
    })
} 