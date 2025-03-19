const base = {
    get() {
        return {
            url : "http://localhost:8080/zhihuishenghuoshangcheng/",
            name: "zhihuishenghuoshangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhihuishenghuoshangcheng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智慧生活商城系统"
        } 
    }
}
export default base
