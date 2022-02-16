import axios from "../utils/http";

/**
 * 获取热门歌单
 * @param {any} params
 * @returns 
 */
export const fetch_playlist_hot = (params: any) => axios.get('/music/playlist/hot', { params });

/**
 * 登录
 */
export const fetch_login = (payload: any) => axios.post('/music/login/cellphone', payload);