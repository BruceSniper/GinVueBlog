package main

import (
	"GinVueBlog/model"
	"GinVueBlog/routes"
)

func main() {
	//使用数据库
	model.InitDb()
	routes.InitRouter()
}
