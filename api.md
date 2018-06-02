# 用户注册

#### 请求地址
    api/user/register
#### 请求方式
    POST
#### 请求参数
    {
        account:"18236567906"//[String:必填]
        username:"zhangsan",//[String:必填]
        password:"123456",//[String:必填]
        roles:"0",//[String:必填]0: 普通用户
    }
#### 返回数据
    {
        "return":true,//错误代码:[boolean :必填]true 注册成功| false注册失败
        "errmsg":"",//错误信息:[String:空值登录失败]
        "data":{
                    //数据信息
                    status:
                    //存取状态
                    "ok"//[String:必填] 成功 "no"失败
                    msg:"注册成功" 
        }

    }
# 用户登录

#### 请求地址
    api/user/add
#### 请求方式
    POST
#### 请求参数
    {
        username:"zhangsan",//[String:必填]
        password:"123456",//[String:必填]
        roles:"0",//[String:必填]0: 普通用户 1: 管理员 2:维修人员
    }
#### 返回数据
    {
        "return":true,//错误代码:[boolean :必填]true 登录成功| false登录失败
        "errmsg":"",//错误信息:[String:空值登录失败]
        "data":{
                    //数据信息
                    status:
                    //存取状态
                    "ok"//[String:必填] 成功 "no"失败
                    msg:"登录成功" 
        }

    }
# 用户

## 我要报修

### 添加订单

#### 请求地址
    file://资产管理/repair/add.html
#### 请求方式
    POST
#### 请求参数
    {
    brand:"小米" ,//[String:必填]
    faultType:"小型电器",//[String:必填]
    G_mission:"故障信息",//[String:可为空]
    B_Person:"报修人",//[String:必填]
    Address:"详细地址",//[String:必填]
    M_Phone:"联系方式",//[int:必填]
    Photo:"故障图片",//[Object:可空]
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 报修成功| false报修失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]存储成功|false存储失败
            "save":添加成功
    }
    }
## 我的订单

### 未处理

#### 请求方式
    GET
#### 请求参数
    {
        state:"0",//0未处理|1进行中|2已完成|3已删除    
        B_Person:"张三",//[String:必填]
    }
#### 返回数据
    {
        "return":true,//错误代码:[boolean:必填] true查看成功|false查看失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//查询成功[boolean]查询成功|false查询失败
            mseeage:"空调坏了",//[String:可空]
            B_Person:"张三",//[String:必填]
            address:"北科",//[String:必填]
            B_date:"String",//[String:必填]
            state:"0",//0未处理|1进行中|2已完成
            B_date:"2018-1-1",//[String:必填]
            W_Person:"李四",//[String:必填]
            W_Phone:"000000",//[String:必填]
        }
    }
### 进行中

#### 请求方式
    GET
#### 请求参数
    {
        state:"1",//0未处理|1进行中|2已完成|3已删除    
        B_Person:"张三",//[String:必填]
      
    }
#### 返回数据
    {
        "return":true,//错误代码:[boolean:必填] true查看成功|false查看失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//查询成功[boolean]查询成功|false查询失败
            B_Person:"张三",//[Strinh:必填]
            address:"北科",//[String:必填]
            message:"鼠标失灵",//[String:必填]
            W_Person:"张三",//[String:必填]
            B_date:"2018-1-1",//[String:必填]
            W_Phone:"000000",//[String:必填]
            state:"1",//0未处理|1进行中|2已完成
        }
    }
### 已完成

#### 请求方式
    POST
#### 请求参数
    {
        state:"2",//0未处理|1进行中|2已完成|3已删除    
        B_Person:"张三",//[Strinh:必填]

    }
#### 返回数据
    {
        "return":true,//错误代码:[boolean:必填] true删除|false删除失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//删除成功[boolean]删除成功|false删除失败
            D_number:"123456",//[String:必填]
            B_Person:"张三",//[Strinh:必填]
            address:"北科",//[String:必填]
            G_message:"电脑坏了啥的",//[String:必填]
            W_Person:"张三",//[String:必填]
            B_date:"2018-1-1",//[String:必填]
            W_Phone:"000000",//[String:必填]
            W_date:"1001-1-1",//[String:必填]
            state:"2",//0未处理|1进行中|2已完成
        }
    }
### 历史订单

#### 请求方式
    GET
#### 请求参数
    {
        B_Person:"张三",//[Strinh:必填]
        state:"3",//0未处理|1进行中|2已完成|3已删除    
    }
#### 返回参数
    {
        "return":true,//错误代码:[boolean:必填] true查看成功|false查看失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//查询成功[boolean]查询成功|false查询失败
            D_number:"123456",//[String:必填]
            B_Person:"张三",//[Strinh:必填]
            address:"北科",//[String:必填]
            G_message:"电脑坏了啥的",//[String:必填]
            W_Person:"张三",//[String:必填]
            B_date:"2018-1-1",//[String:必填]
            W_Phone:"000000",//[String:必填]
            W_date:"1001-1-1",//[String:必填]  
            state:"2",//0未处理|1进行中|2已完成|3已删除    
        }
    }
# 维修人员

## 所有订单

### 未处理

#### 请求方式
    GET
#### 请求参数
    {
      
        state:"0",//0未处理|1进行中|2已完成|3已删除    
    }
#### 返回参数
    {
        "return":true,//错误代码:[boolean:必填] true查看成功|false查看失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//查询成功[boolean]查询成功|false查询失败
            number:"123456",//[String:必填]
            B_Person:"张三",//[Strinh:必填]
            address:"北科",//[String:必填]
            G_message:"电脑坏了啥的",//[String:必填]
            W_Person:"张三",//[String:必填]
            B_date:"2018-1-1",//[String:必填]
            B_Phone:"000000",//[String:必填]
        }
    }
## 我的任务

### 未处理

#### 请求方式
    POST
#### 请求参数
    {
       state:"0",//0未处理|1进行中|2已完成|3已删除    
       W_Person:"张三",//[String:必填]
    }
#### 返回参数
    {
        "return":true,//错误代码:[boolean:必填] true处理成功|false处理失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//修改成功[boolean]修改成功|false修改失败
             number:"123456",//[String:必填]
            B_Person:"张三",//[Strinh:必填]
            address:"北科",//[String:必填]
            G_message:"电脑坏了啥的",//[String:必填]
            B_date:"2018-1-1",//[String:必填]
            B_Phone:"000000",//[String:必填]
            
        } 
    }
### 进行中

#### 请求方式
    POST
#### 请求参数
    {
        state:"1",//0未处理|1进行中|2已完成|3已删除    
        W_Person:"张三",//[String:必填]
    }
#### 返回参数
    {
        "return":true,//错误代码:[boolean:必填] true处理成功|false处理失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//修改成功[boolean]修改成功|false修改失败
            number:"123456",//[String:必填]
            B_Person:"张三",//[Strinh:必填]
            address:"北科",//[String:必填]
            G_message:"电脑坏了啥的",//[String:必填]
            B_date:"2018-1-1",//[String:必填]
            B_Phone:"000000",//[String:必填]
        } 
    }
### 已完成

#### 请求方式
    POST
#### 请求参数
    {
        state:"2",//0未处理|1进行中|2已完成|3已删除    
        W_Person:"张三",//[String:必填]
    }
#### 返回数据
    {
        "return":true,//错误代码:[boolean:必填] true删除|false删除失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//删除成功[boolean]删除成功|false删除失败
            D_number:"123456",//[String:必填]
            B_Person:"张三",//[Strinh:必填]
            address:"北科",//[String:必填]
            G_message:"电脑坏了啥的",//[String:必填]
            W_date:"2018-1-1",//[String:必填]
            B_date:"2011-4-4",//[String:必填]
            B_Phone:"000000",//[String:必填]

        }
    }
### 历史订单

#### 请求方式
    GET
#### 请求参数
    {
        state:"3",//0未处理|1进行中|2已完成|3已删除    
        W_Person:"张三",//[String:必填]
    }
#### 返回数据
    {
        "return":true,//错误代码:[boolean:必填] true删除|false删除失败
        "errsave":400,//错误信息:[参数有误]
        "data":{
            "status":true,//删除成功[boolean]删除成功|false删除失败
            D_number:"123456",//[String:必填]
            B_Person:"张三",//[Strinh:必填]
            address:"北科",//[String:必填]
            G_message:"电脑坏了啥的",//[String:必填]
            W_date:"2018-1-1",//[String:必填]
            B_date:"2011-4-4",//[String:必填]
            B_Phone:"000000",//[String:必填]

        }
    }

# 管理员

## 维修订单

### 未处理

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        state:"0",//0未处理|1进行中|2已完成|3已删除    
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]分配维修人员/挂单成功|false]分配维修人员/挂单失败
            "save":更新成功
            Id:”编号”,//[Long 必填]’
            D_number:”流水号”,//[String 必填]
            Mission:”任务描述”,//[String 可为空]
            B_Person:"报修人",//[String:必填]
            L_Person:”联系人”,//[String 必填]
            Address:”地址”,//[String 必填]
            B_date:”报修时间”,//[date 必填]
            M_phone:”联系电话”,//[String 必填]
            W_phone:”联系电话”,//[String 可为空]
            W_Person:”维修人”,//[String 必填]
            W_date:”完成时间”,//[date 可为空]
    }
### 进行中

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        state:"1",//0未处理|1进行中|2已完成|3已删除    
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]挂单成功|false]挂单失败
            "save":更新成功
            D_number:”流水号”,//[String 必填]
            Mission:”任务描述”,//[String 可为空]
            B_Person:"报修人",//[String:必填]
            L_Person:”联系人”,//[String 必填]
            Address:”地址”,//[String 必填]
            B_date:”报修时间”,//[date 必填]
            State:”处理状态”,//[integer 必填]
            M_phone:”联系电话”,//[String 必填]
            S_phone:”联系电话”,//[String 可为空]
            Serviceman:”维修人”,//[String 必填]
    }
### 已完成

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        state:"2",//0未处理|1进行中|2已完成|3已删除    
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]删除成功|false]删除失败
            "save":更新成功
            D_number:”流水号”,//[String 必填]
            Mission:”任务描述”,//[String 可为空]
            B_Person:"报修人",//[String:必填]
            L_Person:”联系人”,//[String 必填]
            Address:”地址”,//[String 必填]
            B_date:”报修时间”,//[date 必填]
            State:”处理状态”,//[integer 必填]
            M_phone:”联系电话”,//[String 必填]
            S_phone:”固定电话”,//[String 可为空]
            Serviceman:”维修人”,//[String 必填]
            W_date:”完成时间”,//[date 必填]
    }
### 历史订单

#### 请求地址


#### 请求方式
    GET

#### 请求参数
    {
       state:"3",//0未处理|1进行中|2已完成|3已删除    
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "save":更新成功
            D_number:”流水号”,//[String 必填]
            Mission:”任务描述”,//[String 可为空]
            B_Person:"报修人",//[String:必填]
            L_Person:”联系人”,//[String 必填]
            Address:”地址”,//[String 必填]
            B_date:”报修时间”,//[date 必填]
            State:”处理状态”,//[integer 必填]
            M_phone:”联系电话”,//[String 必填]
            S_phone:”联系电话”,//[String 可为空]
            Serviceman:”维修人”,//[String 必填]
            W_date:”完成时间”,//[date 必填]
    }

## 人员管理

### 添加用户

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        Id:”编号”,//[Long 必填]
        P_name:”用户名”,//[String 必填]
        Z_date:”注册时间”,//[date 必填]
        username:”账号/手机号”,//[String 必填]
        password:”密码”,//[String 必填
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]更改/删除成功|false]更改/删除失败
            "save":更新成功
    }
### 用户获取

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]更改/删除成功|false]更改/删除失败
            "save":成功
            Id:”编号”,//[Long 必填]
            P_name:”用户名”,//[String 必填]
            Z_date:”注册时间”,//[date 必填]
            username:”账号/手机号”,//[String 必填]
            password:”密码”,//[String 必填
    }
### 添加维修人员

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        Id:”编号”,//[Long 必填]
        P_name:”用户名”,//[String 必填]
        Z_date:”注册时间”,//[date 必填]
        username:”账号/手机号”,//[String 必填]
        password:”密码”,//[String 必填]
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]更改/删除成功|false]更改/删除失败
            "save":更新成功
    }
### 维修人员信息获取

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
       
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]更改/删除成功|false]更改/删除失败
            "save":成功
            Id:”编号”,//[Long 必填]
            P_name:”用户名”,//[String 必填]
            Z_date:”注册时间”,//[date 必填]
            username:”账号/手机号”,//[String 必填]
            password:”密码”,//[String 必填]
    }    
## 产品管理

### 添加品牌

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        Brand:”品牌”,//[String 必填]
        Faulttype:”类型”,//[String 必填]
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]增加/更改/删除成功|false]增加/更改/删除失败
            "save":更新成功
    }
### 品牌类型

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]增加/更改/删除成功|false]增加/更改/删除失败
            "save":更新成功
            Brand:”品牌”,//[String 必填]
            Faulttype:”类型”,//[String 必填]
    }
### 故障类型

#### 请求地址


#### 请求方式
    POST

#### 请求参数
    {
        faultname:”故障名称”,//[String 必填]
        faulttype:”故障类型”,//[String 必填]
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]增加/更改/删除成功|false]增加/更改/删除失败
            "save":更新成功
    }
## 备件管理

### 添加备件

#### 请求地址
   

#### 请求方式
    POST

#### 请求参数
    {
    readyBrand:”品牌”,//[String 必填]
    }
#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]增加/更改/删除成功|false]增加/更改/删除失败
            "save":更新成功
    }
## 备件管理

### 备件获取

#### 请求地址
   

#### 请求方式
    POST

#### 请求参数

#### 返回数据
    {
    "return":true,//错误代码:[boolean :必填]true 查询成功| false查询失败 
    "errsave":400,//错误信息:[参数有误]
    "data":{
            //数据信息
            "status":true,//存储状态[boolean:必填]增加/更改/删除成功|false]增加/更改/删除失败
            "save":更新成功
            readyBrand:”品牌”,//[String 必填]
    }