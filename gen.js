var pages=[
	"Chapter_I","Chapter_II","Chapter_III","Chapter_IV","Chapter_V","Chapter_VI"
	,"Chapter_VII","Chapter_VIII","Chapter_IX","Chapter_X","Chapter_XI","Chapter_XII","Chapter_XIII"
	,"Chapter_XIV","Chapter_XV","Chapter_XVI","Chapter_XVII","Chapter_XVIII"
]
var rawpath="raw/";
var targetpath="chunk/";
var rulestarts=[
	1,19,98,261,321,475,
	490,527,599,780,824,931,951,
	996,1069,1096,1136,1246,
	1317//pseudo last page
];

var fs=require("fs");
var processFile=function(fn,idx) {
	var content=fs.readFileSync(rawpath+fn+".html","utf8");
	var lastidx=0;
	var lastkey="_";
	var start=rulestarts[idx];
	var end=rulestarts[idx+1];

	content.replace(/<p>(\d+)\. /g,function(m,m1,idx){
		chunk=content.substring(lastidx,idx);
		console.log("output",lastkey);
		fs.writeFileSync(targetpath+lastkey+".html",chunk,"utf8");
		lastidx=idx;
		lastkey=m1;
	});
	console.log("output",lastkey);
	fs.writeFileSync(targetpath+lastkey+".html",chunk,"utf8");
}

pages.map(processFile);
