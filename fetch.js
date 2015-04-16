var fetch=require("fetch").fetchUrl;
var pages=[
	"Preface","Introduction","Chapter_I","Chapter_II","Chapter_III","Chapter_IV","Chapter_V","Chapter_VI"
	,"Chapter_VII","Chapter_VIII","Chapter_IX","Chapter_X","Chapter_XI","Chapter_XII","Chapter_XIII"
	,"Chapter_XIV","Chapter_XV","Chapter_XVI","Chapter_XVII","Chapter_XVIII","Appendix",
	"Sanskrit_Index","General_Index"
]

var baseurl="http://en.wikisource.org/wiki/Sanskrit_Grammar/";
var targetpath="raw/";
var fs=require("fs");

pages.map(function(page){
	fetch(baseurl+page,function(error,meta,body){
	    if(error){
	        return console.log("ERROR", error.message || error);
	    }
	    var fn=targetpath+meta.finalUrl.substr(baseurl.length)+".html";
	    console.log("saving",fn);
	    fs.writeFile(fn,body,"utf8");
	});
})
