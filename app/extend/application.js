module.exports = {
  foo(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    return `自定义扩展中的方法被调用了${param}`;
  },
};
