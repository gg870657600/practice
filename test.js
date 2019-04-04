// 对象的遍历
var obj = {name:'chenxi',age:26,sex:'man'};

for (var i in obj){
	console.log(i);
	console.log(obj[i]);
}

console.log(obj.name)

// 数组的各种方法
var arr = new Array();
arr = [2,3,4,5,7,54,23]
console.log("arr的数据类型：",typeof arr);
console.log("arr是否是数组：",Array.isArray(arr));
console.log("push向数组的末尾添加一个或多个元素,并返回新的长度：",arr.push(1,2));
console.log("pop删除数组最后一个元素,并返回删除的元素：",arr.pop());
console.log("shift删除数组第一个元素,并返回删除的元素：",arr.shift());
console.log("sort排序：",arr.sort());
console.log(arr);

// slice从某个已有数组返回选定的元素,不修改原数组
var arr2 = [5,12,15,6,20,11,25]
var arr_slice = arr2.slice(function(item){
	item % 5 == 0;
})
console.log('arr_slice',arr_slice);

//splice直接增删改原数组
arr2.splice(0,1)
console.log('arr_splice删除索引0开始后1个元素',arr2);
arr2.splice(0,0,'a')
console.log('arr_splice在索引0位置添加1个元素a',arr2);


console.log(arr2.length);
