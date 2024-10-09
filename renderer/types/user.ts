import webapi from "./gocliRequest"
import * as components from "./userComponents"
export * from "./userComponents"

/**
 * @description "用户登录"
 * @param req
 */
export function login(req: components.LoginReq) {
	return webapi.post<components.LoginResp>(`/v1/user/login`, req)
}

/**
 * @description "用户注册"
 * @param req
 */
export function register(req: components.RegisterReq) {
	return webapi.post<components.RegisterResp>(`/v1/user/register`, req)
}

/**
 * @description "退出登录"
 */
export function logout() {
	return webapi.post<components.LogoutResp>(`/v1/user/logout`)
}

/**
 * @description "获取用户信息"
 */
export function detail() {
	return webapi.get<components.UserInfoResp>(`/v1/user/user`)
}
