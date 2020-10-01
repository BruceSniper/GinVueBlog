package v1

import (
	"GinVueBlog/middleware"
	"GinVueBlog/model"
	"GinVueBlog/utils/errmsg"
	"github.com/gin-gonic/gin"
	"net/http"
)

func Login(c *gin.Context) {
	var data model.User
	_ = c.ShouldBindJSON(&data)
	var token string
	var code int
	code = model.CheckLogin(data.Username, data.Password)

	if code == errmsg.SUCCESS {
		token, code = middleware.SetToken(data.Username)
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": errmsg.GetErrMsg(code),
		"token":   token,
	})
}
