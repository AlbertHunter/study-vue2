<template>
    <div>Object defineProperty</div>
</template>
<script>
const arrPush = {};

// 如下是 数组的常用方法
const arrayMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];
// 对数组的方法进行重写
arrayMethods.forEach((method) => {

  const original = Array.prototype[method]; 
  arrPush[method] = function() {
    console.log(this);
    return original.apply(this, arguments);
  }
});

const testPush = [];
// 对 testPush 的原型 指向 arrPush，因此testPush也有重写后的方法
testPush.__proto__ = arrPush;
console.log(arrPush);
testPush.push(1); // 打印 [], this指向了 testPush

testPush.push(2); // 打印 [1], this指向了 testPush
</script>
