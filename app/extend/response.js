module.exports = {
  myTest(param) {
    // this 就是 response 对象，在其中可以调用 response 上的其他方法，或访问属性
    return `自定义扩展中的方法被调用了${param}`;
  },
};
