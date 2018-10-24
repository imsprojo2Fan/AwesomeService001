package main

import (
	_ "AwesomeService001/routers"
	"github.com/astaxie/beego"
	_"AwesomeService001/sysinit"
	"github.com/astaxie/beego/context"
	"fmt"
)

func init()  {

	//判断用户是否登录
	var FilterUser = func(ctx *context.Context) {
		uid, ok := ctx.Input.Session("uid").(int)
		fmt.Println("-------uid:",uid)
		if !ok && ctx.Request.RequestURI != "/login" {
			ctx.Redirect(302, "/login")
		}
	}
	beego.InsertFilter("/user/*",beego.BeforeRouter,FilterUser)
}

func main() {
	beego.Run()
}


