# js 语法相关

## `!!` 的用法

`!` 操作符将变量转成 `boolean` 类型

```js
!null=true

!undefined=true

!''=true

!100=false

!'abc'=false
```

`!!` 常常用来做类型判断

```js
if (!!a) {
  //a有内容才执行的代码...
}
```
