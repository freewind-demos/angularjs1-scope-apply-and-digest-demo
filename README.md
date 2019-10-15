AngularJS1 Scope Apply and Digest Demo
======================================

当`$scope`上的某个值被外界修改后，需要使用`$digest`或`$apply`通知angular重新计算。

两者的区别是：`$digest`专用于通知，而`$apply`可以让我们把一段代码包成一个函数执行，它自己内部调用`$digest`

```
npm install
open index.html
```
