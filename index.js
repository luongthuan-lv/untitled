var http=require('http');
var express=require('express');

var parder=require('body-parser');
var app=express();
app.use(parder.urlencoded({extended:true}));
app.listen(9090,function (req,res) {

});
app.post('/user', function (request, response) {
var userId=request.body.userId;
var title=request.body.title;
var body=request.body.body;
response.send("userId: "+userId+" ; title: "+title+" ; body: "+body);

});

app.post('/student', function (request, response) {

    var name=request.body.name;
    var score=request.body.score;
    response.send("name: "+name+" ; score: "+score);

});

app.post('/rectangle', function (request, response) {

    var rong=request.body.rong;
    var dai=request.body.dai;
    var chuvi=(parseFloat(rong)+parseFloat(dai))*2;
    var dientich=(parseFloat(rong)*parseFloat(dai));
    response.send("Chuvi: "+chuvi+" ; Dientich: "+dientich);

});

app.post('/cube', function (request, response) {

    var canh=request.body.canh;

    var thetich=(parseFloat(canh)*parseFloat(canh)*parseFloat(canh));
    response.send("Thetich: "+thetich);

});

app.post('/phuongtrinh', function (request, response) {

    var a=request.body.a;
    var b=request.body.b;
    var c=request.body.c;


    var delta=(parseFloat(b)*parseFloat(b))-(4*parseFloat(a)*parseFloat(c));
    if (parseFloat(a)==0){
        if (parseFloat(b) == 0) {
            if (parseFloat(c) == 0) {
                ketqua = "Vô số nghiệm";
            } else {
                ketqua = "Vô nghiệm";
            }

        } else {
            var x1 = -(parseFloat(c)) / parseFloat(b);
            ketqua = "PT có 1 nghiệm duy nhất: " + x1;
        }
    }else {
        if (delta < 0) {
            ketqua = "PT vô nghiệm";
        } else {
            if (delta == 0) {
                x = -(parseFloat(b)) / (2 * parseFloat(a));
                ketqua = "PT có một nghiệm kép: " + x;
            } else {
                 x1 = (-parseFloat(b) + Math.sqrt(delta)) / (2 * parseFloat(a));
                 x2 = (-parseFloat(b) - Math.sqrt(delta)) / (2 * parseFloat(a));
                ketqua = "PT có 2 nghiệm phân biệt x1: " + x1 + " ; x2: " + x2;
            }
        }
    }
    response.send("Ketqua: "+ketqua);

});