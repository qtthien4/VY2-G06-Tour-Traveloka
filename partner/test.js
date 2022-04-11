var starttime = '2022-04-05T22:20';
var b = starttime.slice(2).split("T");
var a = b[0].split("-")
var temp = a[0];
a[0] = a[2]
a[2] = temp
var handletimestart = a.join('-') +" "+  b[1]
