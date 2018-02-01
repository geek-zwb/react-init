/**
 * @file  一些通用的，公有的 function
 * @author Created by geekzwb on 2017/9/20.
 */

/**
 * 面包屑
 */
export const getBreadInfo = (url) => {
  const breadConfig = {
    '/dashboard': ['总览'],
    '/notification': ['通知'],
    '/user_center': ['个人中心'],
    '/setting-center': ['设置中心'],
  };
  let breadInfo = breadConfig[Object.keys(breadConfig).find((item, index) => item === url)];
  if (url === '/') {
    breadInfo = breadConfig['/dashboard'];
  }
  return breadInfo ? breadInfo : ['Order', '404'];
};