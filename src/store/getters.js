const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  user_info: state => state.user.UserInfo,
  permission_routes: state => state.permission.routes
}
export default getters
