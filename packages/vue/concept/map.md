# Map

```js
let obj = {
  name: "张三",
};
const map = new Map();

map.set(obj, "value");
obj = null;
```

# WeekMap

1. key 必须是对象
2. key 是弱引用的
   强引用不会垃圾回收，弱引用不被引用的时候会被回收

```js
let obj = {
  name: "张三",
};
const map = new WeakMap();

map.set(obj, "value");
obj = null;
```
