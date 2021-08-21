let baseUrl = "";
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "http://localhost:8088/"  //开发环境url
        break
    case 'production':
        baseUrl = "http://39.96.42.71:8088/"   //生产环境url
        break
}
 
export default baseUrl;