function printMyName(i,name){
	console.log(i+" "+name);
}

var names=new Array();

names=["agalya","durai","abijith","sheethal","madhan"];
for (var i = 1 ; i <= 10; i++) {
	//console.log(i);
	printMyName(i,names[(i-1)%names.length]);
};

function add(a,b){
	return a+b;
}
console.log("add:"+add(1,2));




function toLower(input,callback){
	callback(input.toLowerCase());
}
toLower("AGALYA",function(output){
	console.log(output);
});





var obj={"name": "agalya","age": 16,"dob": new Date()};
console.log(obj);

var objArr=new Array();
objArr.push(obj);
objArr.push(obj);
console.log(objArr);
