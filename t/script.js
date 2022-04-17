if(location.protocol=="http:"){
    if(location.hostname!=="192.168.0.40"){
        location.href="https"+location.href.substr(4);
    }
}
function toBase64Url(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

	// URLパラメータを"&"で分離する
	var url_search = location.search.substr(1).split('&');
 
	// パラメータ連想配列エリア初期化
	var para = [];
 
	// キーエリア初期化
	var key = null;
 
	for(var i = 0 ; i < url_search.length ; i++)
	{
		// "&"で分離したパラメータを"="で再分離
		key = url_search[i].split("=");
 
		// パラメータを連想配列でセット
		para[key[0]] = key[1];
	}
var base64Url="";
if(para.s!==undefined){
    toBase64Url("../file/"+decodeURIComponent(para.s), function(tembase64Url){
        base64Url=tembase64Url
        

        image = new Image();
        
            document.getElementById("svg").innerHTML=`
            <image xlink:href="${tembase64Url}" id="svg_img"x="0" y="0"/>
            <text id="maintext" x="10" y="50" font-family="Verdana" font-size="1cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
            <text id="subtext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
            <text id="urltext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">e331.f5.si/t</text>
            `
            //document.getElementById("svg_img").setAttribute( "xlink:href" ,reader.result);
            image.src = tembase64Url;
                        document.getElementById("maintext").innerHTML=document.getElementById("maintextinput").value;
            document.getElementById("subtext").innerHTML=document.getElementById("subtextinput").value;

            document.getElementById("maintext").style.fill=document.getElementById("textcolorinput").value;
            document.getElementById("subtext").style.fill=document.getElementById("textcolorinput").value;
            document.getElementById("urltext").style.fill=document.getElementById("textcolorinput").value;

            document.getElementById("maintext").style.stroke=document.getElementById("edgecolorinput").value;
            document.getElementById("subtext").style.stroke=document.getElementById("edgecolorinput").value;
            document.getElementById("urltext").style.stroke=document.getElementById("edgecolorinput").value;
        
            document.getElementById("maintext").style.fillOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("subtext").style.fillOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("urltext").style.fillOpacity=document.getElementById("textopacityinput").value;
        
            document.getElementById("maintext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("subtext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("urltext").style.strokeOpacity=document.getElementById("textopacityinput").value;
        
        image.onload = function() {
            //キャンバスを画像サイズに合わせて調整
            document.getElementById("svg_img").setAttribute( "width" ,document.body.clientWidth);
        document.getElementById("svg_img").setAttribute( "height" ,image.naturalHeight/(image.naturalWidth/document.body.clientWidth));
        document.getElementById("svg").setAttribute( "width" ,document.body.clientWidth);
        document.getElementById("svg").setAttribute( "height" ,image.naturalHeight/(image.naturalWidth/document.body.clientWidth));

        document.getElementById("maintext").setAttribute( "font-size" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/8+"px");
        document.getElementById("subtext").setAttribute( "font-size" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/16+"px");
        document.getElementById("urltext").setAttribute( "font-size" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/16+"px");

        document.getElementById("maintext").setAttribute( "y" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/10+"px");
        document.getElementById("subtext").setAttribute( "y" ,((image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/8)+(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/10+"px");
        document.getElementById("urltext").setAttribute( "y" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))-((image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/16)+"px");
        
        document.getElementById("maintext").style.strokeWidth=(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/200+"px"
        document.getElementById("subtext").style.strokeWidth=(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/400+"px"
        document.getElementById("urltext").style.strokeWidth=(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/400+"px"
            nextstep()
        }
    
    });
}


var cookiearreay = new Array();

var allcookies = document.cookie;
if( allcookies != '' )
{
    var cookies = allcookies.split( '; ' );

    for( var i = 0; i < cookies.length; i++ )
    {
        var cookie = cookies[ i ].split( '=' );

        // クッキーの名前をキーとして 配列に追加する
        cookiearreay[ cookie[ 0 ] ] = decodeURIComponent( cookie[ 1 ] );
    }
}

console.log(document.cookie)
if(cookiearreay.maintextinput!==undefined){
    document.getElementById("maintextinput").value=cookiearreay.maintextinput
}
console.log("maintextinput:"+cookiearreay.maintextinput)

if(cookiearreay.subtextinput!==undefined){
    document.getElementById("subtextinput").value=cookiearreay.subtextinput
}
console.log("subtextinput:"+cookiearreay.subtextinput)

if(cookiearreay.textcolorinput!==undefined){
    document.getElementById("textcolorinput").value=cookiearreay.textcolorinput
}
console.log("textcolorinput:"+cookiearreay.textcolorinput)

if(cookiearreay.edgecolorinput!==undefined){
    document.getElementById("edgecolorinput").value=cookiearreay.edgecolorinput
}
console.log("edgecolorinput:"+cookiearreay.edgecolorinput)

if(cookiearreay.textopacityinput!==undefined){
    document.getElementById("textopacityinput").value=cookiearreay.textopacityinput
}
console.log("textopacityinput:"+cookiearreay.textopacityinput)


//}

document.getElementById("maintextinput").addEventListener('change', function(){
    document.getElementById("maintext").innerHTML=document.getElementById("maintextinput").value;
    document.cookie=`maintextinput=${document.getElementById("maintextinput").value};path=/t/;max-age=${60*60*60*30*12}`
});
document.getElementById("subtextinput").addEventListener('change', function(){
    document.getElementById("subtext").innerHTML=document.getElementById("subtextinput").value;
    document.cookie=`subtextinput=${document.getElementById("subtextinput").value};path=/t/;max-age=${60*60*60*30*12}`
});
document.getElementById("textcolorinput").addEventListener('change', function(){
    document.getElementById("maintext").style.fill=document.getElementById("textcolorinput").value;
    document.getElementById("subtext").style.fill=document.getElementById("textcolorinput").value;
    document.getElementById("urltext").style.fill=document.getElementById("textcolorinput").value;
    document.cookie=`textcolorinput=${document.getElementById("textcolorinput").value};path=/t/;max-age=${60*60*60*30*12}`
});
document.getElementById("edgecolorinput").addEventListener('change', function(){
    document.getElementById("maintext").style.stroke=document.getElementById("edgecolorinput").value;
    document.getElementById("subtext").style.stroke=document.getElementById("edgecolorinput").value;
    document.getElementById("urltext").style.stroke=document.getElementById("edgecolorinput").value;
    document.cookie=`edgecolorinput=${document.getElementById("edgecolorinput").value};path=/t/;max-age=${60*60*60*30*12}`
});
document.getElementById("textopacityinput").addEventListener('change', function(){
    document.getElementById("maintext").style.fillOpacity=document.getElementById("textopacityinput").value;
    document.getElementById("subtext").style.fillOpacity=document.getElementById("textopacityinput").value;
    document.getElementById("urltext").style.fillOpacity=document.getElementById("textopacityinput").value;

    document.getElementById("maintext").style.strokeOpacity=document.getElementById("textopacityinput").value;
    document.getElementById("subtext").style.strokeOpacity=document.getElementById("textopacityinput").value;
    document.getElementById("urltext").style.strokeOpacity=document.getElementById("textopacityinput").value;
    document.cookie=`textopacityinput=${document.getElementById("textopacityinput").value};path=/t/;max-age=${60*60*60*30*12}`
});
//-opacity
//fill:#000000;

// ファイルを選択するためのinput要素と、選択したファイルのURLを差し込むためのimg要素をそれぞれ取得
var input = document.getElementById('input_file')
let reader = new FileReader();
let xhr = new XMLHttpRequest();


input.addEventListener('change', () => {
    if(input.files==undefined){
        document.getElementById("next").style.display="none"
    }else{
        document.getElementById("next").style.display="block"
    }
    image = new Image();
    reader.readAsDataURL(input.files[0]);
    //ファイルの読み込み完了後に内容をsvgに出力する
    reader.onload = ()=> {
        document.getElementById("svg").innerHTML=`
        <image xlink:href="${reader.result}" id="svg_img"x="0" y="0"/>
        <text id="maintext" x="10" y="50" font-family="Verdana" font-size="1cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
        <text id="subtext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
        <text id="urltext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">e331.f5.si/t</text>
        `
        //document.getElementById("svg_img").setAttribute( "xlink:href" ,reader.result);
        image.src = URL.createObjectURL(input.files[0]);
            document.getElementById("maintext").innerHTML=document.getElementById("maintextinput").value;
            document.getElementById("subtext").innerHTML=document.getElementById("subtextinput").value;

            document.getElementById("maintext").style.fill=document.getElementById("textcolorinput").value;
            document.getElementById("subtext").style.fill=document.getElementById("textcolorinput").value;
            document.getElementById("urltext").style.fill=document.getElementById("textcolorinput").value;

            document.getElementById("maintext").style.stroke=document.getElementById("edgecolorinput").value;
            document.getElementById("subtext").style.stroke=document.getElementById("edgecolorinput").value;
            document.getElementById("urltext").style.stroke=document.getElementById("edgecolorinput").value;
        
            document.getElementById("maintext").style.fillOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("subtext").style.fillOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("urltext").style.fillOpacity=document.getElementById("textopacityinput").value;
        
            document.getElementById("maintext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("subtext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("urltext").style.strokeOpacity=document.getElementById("textopacityinput").value;
        
        
    };
    image.onload = function() {
        //キャンバスを画像サイズに合わせて調整
        document.getElementById("svg_img").setAttribute( "width" ,document.body.clientWidth);
        document.getElementById("svg_img").setAttribute( "height" ,image.naturalHeight/(image.naturalWidth/document.body.clientWidth));
        document.getElementById("svg").setAttribute( "width" ,document.body.clientWidth);
        document.getElementById("svg").setAttribute( "height" ,image.naturalHeight/(image.naturalWidth/document.body.clientWidth));

        document.getElementById("maintext").setAttribute( "font-size" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/8+"px");
        document.getElementById("subtext").setAttribute( "font-size" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/16+"px");
        document.getElementById("urltext").setAttribute( "font-size" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/16+"px");

        document.getElementById("maintext").setAttribute( "y" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/10+"px");
        document.getElementById("subtext").setAttribute( "y" ,((image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/8)+(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/10+"px");
        document.getElementById("urltext").setAttribute( "y" ,(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))-((image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/16)+"px");
        
        document.getElementById("maintext").style.strokeWidth=(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/200+"px"
        document.getElementById("subtext").style.strokeWidth=(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/400+"px"
        document.getElementById("urltext").style.strokeWidth=(image.naturalHeight/(image.naturalWidth/document.body.clientWidth))/400+"px"
    }
    /*for(file of input.files){
        image = new Image();
        reader.readAsDataURL(file);
        //ファイルの読み込み完了後に内容をsvgに出力する
        reader.onload = ()=> {
            document.getElementById("svg").innerHTML=`
            <image xlink:href="${reader.result}" id="svg_img"x="0" y="0"/>
            <text id="maintext" x="10" y="40" font-family="Verdana" font-size="1cm" style="stroke-width: 1; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">e331#4378</text>
            <text id="subtext" x="10" y="70" font-family="Verdana" font-size="0.5cm" style="stroke-width: 0.5; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">この画像の無断転載を禁じる</text>
            `
            //document.getElementById("svg_img").setAttribute( "xlink:href" ,reader.result);
            image.src = URL.createObjectURL(file);
            
        };
        image.onload = function() {
            //キャンバスを画像サイズに合わせて調整
            document.getElementById("svg_img").setAttribute( "width" ,document.body.clientWidth);
            document.getElementById("svg_img").setAttribute( "height" ,image.naturalHeight/(image.naturalWidth/document.body.clientWidth));
            document.getElementById("svg").setAttribute( "width" ,document.body.clientWidth);
            document.getElementById("svg").setAttribute( "height" ,image.naturalHeight/(image.naturalWidth/document.body.clientWidth));
            //Fileオブジェクトのファイル内容を読み込む
        }
    }*/
});


function download(){
    if(base64Url!==""){
        document.getElementById("download_status").innerHTML="画像を処理中…"
        image = new Image();

            document.getElementById("svg_download").innerHTML=`
            <image xlink:href="${base64Url}" id="svg_download_img"x="0" y="0"/>
            <text id="svg_download_maintext" x="10" y="50" font-family="Verdana" font-size="1cm" style="stroke-width: 1; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
            <text id="svg_download_subtext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="stroke-width: 0.5; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
            <text id="svg_download_urltext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">e331.f5.si/t</text>
            `
            document.getElementById("svg_download_maintext").innerHTML=document.getElementById("maintextinput").value;
            
            document.getElementById("svg_download_subtext").innerHTML=document.getElementById("subtextinput").value;

            document.getElementById("svg_download_urltext").style.fill=document.getElementById("textcolorinput").value;
            document.getElementById("svg_download_urltext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("svg_download_urltext").style.stroke=document.getElementById("edgecolorinput").value;
            document.getElementById("svg_download_urltext").style.fillOpacity=document.getElementById("textopacityinput").value;
            
            document.getElementById("svg_download_maintext").style.fill=document.getElementById("textcolorinput").value;
            document.getElementById("svg_download_subtext").style.fill=document.getElementById("textcolorinput").value;
            
            
            document.getElementById("svg_download_maintext").style.stroke=document.getElementById("edgecolorinput").value;
            document.getElementById("svg_download_subtext").style.stroke=document.getElementById("edgecolorinput").value;
            
            
            document.getElementById("svg_download_maintext").style.fillOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("svg_download_subtext").style.fillOpacity=document.getElementById("textopacityinput").value;
            
            document.getElementById("svg_download_maintext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("svg_download_subtext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            
            //document.getElementById("svg_img").setAttribute( "xlink:href" ,reader.result);
            image.src = base64Url
        
        image.onload = function() {
            //キャンバスを画像サイズに合わせて調整
            document.getElementById("svg_download_img").setAttribute( "width" ,image.naturalWidth);
            document.getElementById("svg_download_img").setAttribute( "height" ,image.naturalHeight);
            document.getElementById("svg_download").setAttribute( "width" ,image.naturalWidth);
            document.getElementById("svg_download").setAttribute( "height" ,image.naturalHeight);
            document.getElementById("svg_download_maintext").setAttribute( "font-size" ,image.naturalHeight/8+"px");
            document.getElementById("svg_download_subtext").setAttribute( "font-size" ,image.naturalHeight/16+"px");

            document.getElementById("svg_download_maintext").setAttribute( "y" ,image.naturalHeight/10+"px");
            document.getElementById("svg_download_subtext").setAttribute( "y" ,(image.naturalHeight/8)+(image.naturalHeight/10)+"px");

            document.getElementById("svg_download_maintext").style.strokeWidth=image.naturalHeight/200+"px"
            document.getElementById("svg_download_subtext").style.strokeWidth=image.naturalHeight/400+"px"

            document.getElementById("svg_download_urltext").setAttribute( "y" ,(image.naturalHeight)-(image.naturalHeight/16)+"px");
                document.getElementById("svg_download_urltext").setAttribute( "font-size" ,image.naturalHeight/16+"px");
                document.getElementById("svg_download_urltext").style.strokeWidth=image.naturalHeight/400+"px"
            //Fileオブジェクトのファイル内容を読み込む
            var svg = document.querySelector("#svg_download");
            var svgData = new XMLSerializer().serializeToString(svg);
            var canvas = document.createElement("canvas");
            canvas.width = svg.width.baseVal.value;
            canvas.height = svg.height.baseVal.value;

            var ctx = canvas.getContext("2d");
            var download_image = new Image;
            download_image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));

            download_image.onload = function(){
                ctx.drawImage( download_image, 0, 0 );
                var a = document.createElement("a");
                a.href = canvas.toDataURL("image/png");
                a.setAttribute("download", para.n);
                a.dispatchEvent(new MouseEvent("click"));

                document.getElementById("download_status").innerHTML="ダウンロードを開始しました<br><a href='#' onClick='history.back()'>素材置き場に戻る</a>"
            }
        }

    }else{
        for(file of input.files){
            document.getElementById("download_status").innerHTML="画像を処理中…"
            image = new Image();
            reader.readAsDataURL(file);
            //ファイルの読み込み完了後に内容をsvgに出力する
            reader.onload = ()=> {
                document.getElementById("svg_download").innerHTML=`
                <image xlink:href="${reader.result}" id="svg_download_img"x="0" y="0"/>
                <text id="svg_download_maintext" x="10" y="50" font-family="Verdana" font-size="1cm" style="stroke-width: 1; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
                <text id="svg_download_subtext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="stroke-width: 0.5; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
                <text id="svg_download_urltext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">e331.f5.si/t</text>
                `
                document.getElementById("svg_download_maintext").innerHTML=document.getElementById("maintextinput").value;
                
                document.getElementById("svg_download_subtext").innerHTML=document.getElementById("subtextinput").value;
                
                document.getElementById("svg_download_maintext").style.fill=document.getElementById("textcolorinput").value;
                document.getElementById("svg_download_subtext").style.fill=document.getElementById("textcolorinput").value;
                
                document.getElementById("svg_download_urltext").style.fill=document.getElementById("textcolorinput").value;
                document.getElementById("svg_download_urltext").style.strokeOpacity=document.getElementById("textopacityinput").value;
                document.getElementById("svg_download_urltext").style.stroke=document.getElementById("edgecolorinput").value;
                document.getElementById("svg_download_urltext").style.fillOpacity=document.getElementById("textopacityinput").value;
                
                
                document.getElementById("svg_download_maintext").style.stroke=document.getElementById("edgecolorinput").value;
                document.getElementById("svg_download_subtext").style.stroke=document.getElementById("edgecolorinput").value;
                
                
                document.getElementById("svg_download_maintext").style.fillOpacity=document.getElementById("textopacityinput").value;
                document.getElementById("svg_download_subtext").style.fillOpacity=document.getElementById("textopacityinput").value;
                
                document.getElementById("svg_download_maintext").style.strokeOpacity=document.getElementById("textopacityinput").value;
                document.getElementById("svg_download_subtext").style.strokeOpacity=document.getElementById("textopacityinput").value;
                
                //document.getElementById("svg_img").setAttribute( "xlink:href" ,reader.result);
                image.src = URL.createObjectURL(input.files[0]);
            
            };
            image.onload = function() {
                //キャンバスを画像サイズに合わせて調整
                document.getElementById("svg_download_img").setAttribute( "width" ,image.naturalWidth);
                document.getElementById("svg_download_img").setAttribute( "height" ,image.naturalHeight);
                document.getElementById("svg_download").setAttribute( "width" ,image.naturalWidth);
                document.getElementById("svg_download").setAttribute( "height" ,image.naturalHeight);
                document.getElementById("svg_download_maintext").setAttribute( "font-size" ,image.naturalHeight/8+"px");
                document.getElementById("svg_download_subtext").setAttribute( "font-size" ,image.naturalHeight/16+"px");
                
                document.getElementById("svg_download_maintext").setAttribute( "y" ,image.naturalHeight/10+"px");
                document.getElementById("svg_download_subtext").setAttribute( "y" ,(image.naturalHeight/8)+(image.naturalHeight/10)+"px");
                
                document.getElementById("svg_download_maintext").style.strokeWidth=image.naturalHeight/200+"px"
                document.getElementById("svg_download_subtext").style.strokeWidth=image.naturalHeight/400+"px"
                
                document.getElementById("svg_download_urltext").setAttribute( "y" ,(image.naturalHeight)-(image.naturalHeight/16)+"px");
                document.getElementById("svg_download_urltext").setAttribute( "font-size" ,image.naturalHeight/16+"px");
                document.getElementById("svg_download_urltext").style.strokeWidth=image.naturalHeight/400+"px"
                /*
                            document.getElementById("svg_download_img").setAttribute( "width" ,image.naturalWidth);
            document.getElementById("svg_download_img").setAttribute( "height" ,image.naturalHeight);

            document.getElementById("svg_download").setAttribute( "width" ,image.naturalWidth);
            document.getElementById("svg_download").setAttribute( "height" ,image.naturalHeight);

            document.getElementById("svg_download_maintext").setAttribute( "font-size" ,image.naturalHeight/8+"px");
            document.getElementById("svg_download_subtext").setAttribute( "font-size" ,image.naturalHeight/16+"px");

            document.getElementById("svg_download_maintext").setAttribute( "y" ,image.naturalHeight/10+"px");
            document.getElementById("svg_download_subtext").setAttribute( "y" ,(image.naturalHeight/8)+(image.naturalHeight/10)+"px");
            
            document.getElementById("svg_download_maintext").style.strokeWidth=image.naturalHeight/200+"px"
            document.getElementById("svg_download_subtext").style.strokeWidth=image.naturalHeight/400+"px"



            */
                //Fileオブジェクトのファイル内容を読み込む
                var svg = document.querySelector("#svg_download");
                var svgData = new XMLSerializer().serializeToString(svg);
                var canvas = document.createElement("canvas");
                canvas.width = svg.width.baseVal.value;
                canvas.height = svg.height.baseVal.value;

                var ctx = canvas.getContext("2d");
                var download_image = new Image;
                download_image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));

                download_image.onload = function(){
                    ctx.drawImage( download_image, 0, 0 );
                    var a = document.createElement("a");
                    a.href = canvas.toDataURL("image/png");
                    a.setAttribute("download",input.files[0].name);
                    a.dispatchEvent(new MouseEvent("click"));
                    document.getElementById("download_status").innerHTML="ダウンロードを開始しました"
                }
            }
            
        }
    }
}

/*
function download(){
    if(base64Url!==""){
        document.getElementById("download_status").innerHTML="画像を処理中…"
        image = new Image();

            document.getElementById("svg_download").innerHTML=`
            <image xlink:href="${base64Url}" id="svg_download_img"x="0" y="0"/>
            <text id="svg_download_maintext" x="10" y="50" font-family="Verdana" font-size="1cm" style="stroke-width: 1; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">${document.getElementById("maintextinput").value}</text>
            <text id="svg_download_subtext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="stroke-width: 0.5; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">${document.getElementById("subtextinput").value}</text>
            <text id="svg_download_urltext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">e331.f5.si/t</text>
            `

            
            document.getElementById("svg_download_maintext").style.fill=document.getElementById("textcolorinput").value;
            document.getElementById("svg_download_subtext").style.fill=document.getElementById("textcolorinput").value;
            document.getElementById("svg_download_urltext").style.fill=document.getElementById("textcolorinput").value;
            
            
            document.getElementById("svg_download_maintext").style.stroke=document.getElementById("edgecolorinput").value;
            document.getElementById("svg_download_subtext").style.stroke=document.getElementById("edgecolorinput").value;
            document.getElementById("svg_download_urltext").style.stroke=document.getElementById("edgecolorinput").value;
            
            
            document.getElementById("svg_download_maintext").style.fillOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("svg_download_subtext").style.fillOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("svg_download_urltext").style.fillOpacity=document.getElementById("textopacityinput").value;
            
            document.getElementById("svg_download_maintext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("svg_download_subtext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            document.getElementById("svg_download_urltext").style.strokeOpacity=document.getElementById("textopacityinput").value;
            
            //document.getElementById("svg_img").setAttribute( "xlink:href" ,reader.result);
            image.src = base64Url
        
        image.onload = function() {
            //キャンバスを画像サイズに合わせて調整
            document.getElementById("svg_download_img").setAttribute( "width" ,image.naturalWidth);
            document.getElementById("svg_download_img").setAttribute( "height" ,image.naturalHeight);

            document.getElementById("svg_download").setAttribute( "width" ,image.naturalWidth);
            document.getElementById("svg_download").setAttribute( "height" ,image.naturalHeight);

            document.getElementById("svg_download_maintext").setAttribute( "font-size" ,image.naturalHeight/8+"px");
            document.getElementById("svg_download_subtext").setAttribute( "font-size" ,image.naturalHeight/16+"px");
            document.getElementById("svg_download_urltext").setAttribute( "font-size" ,image.naturalHeight/16+"px");

            document.getElementById("svg_download_maintext").setAttribute( "y" ,image.naturalHeight/10+"px");
            document.getElementById("svg_download_subtext").setAttribute( "y" ,(image.naturalHeight/8)+(image.naturalHeight/10)+"px");
            document.getElementById("svg_download_urltext").setAttribute( "y" ,(image.naturalHeight)-(image.naturalHeight/16)+"px");
            
            document.getElementById("svg_download_maintext").style.strokeWidth=image.naturalHeight/200+"px"
            document.getElementById("svg_download_subtext").style.strokeWidth=image.naturalHeight/400+"px"
            document.getElementById("svg_download_urltext").style.strokeWidth=image.naturalHeight/400+"px"
            //Fileオブジェクトのファイル内容を読み込む
            var svg = document.querySelector("#svg_download");
            var svgData = new XMLSerializer().serializeToString(svg);
            var canvas = document.createElement("canvas");
            canvas.width = svg.width.baseVal.value;
            canvas.height = svg.height.baseVal.value;

            var ctx = canvas.getContext("2d");
            var download_image = new Image;
            download_image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));

            download_image.onload = function(){
                ctx.drawImage( download_image, 0, 0 );
                var a = document.createElement("a");
                a.href = canvas.toDataURL("image/png");
                a.setAttribute("download", para.n);
                a.dispatchEvent(new MouseEvent("click"));

                document.getElementById("download_status").innerHTML="ダウンロードを開始しました<br><a href='#' onClick='history.back()'>素材置き場に戻る</a>"
            }
        }

    }else{
        for(file of input.files){
            document.getElementById("download_status").innerHTML="画像を処理中…"
            image = new Image();
            reader.readAsDataURL(file);
            //ファイルの読み込み完了後に内容をsvgに出力する
            reader.onload = ()=> {
                document.getElementById("svg_download").innerHTML=`
                <image xlink:href="${reader.result}" id="svg_download_img"x="0" y="0"/>
                <text id="svg_download_maintext" x="10" y="50" font-family="Verdana" font-size="1cm" style="stroke-width: 1; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
                <text id="svg_download_subtext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="stroke-width: 0.5; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;"></text>
                <text id="svg_download_urltext" x="10" y="100" font-family="Verdana" font-size="0.5cm" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);fill-opacity: 0.6; stroke-opacity: 0.6;">e331.f5.si/t</text>
                `
                document.getElementById("svg_download_img").setAttribute( "width" ,image.naturalWidth);
                document.getElementById("svg_download_img").setAttribute( "height" ,image.naturalHeight);

                document.getElementById("svg_download").setAttribute( "width" ,image.naturalWidth);
                document.getElementById("svg_download").setAttribute( "height" ,image.naturalHeight);

                document.getElementById("svg_download_maintext").setAttribute( "font-size" ,image.naturalHeight/8+"px");
                document.getElementById("svg_download_subtext").setAttribute( "font-size" ,image.naturalHeight/16+"px");
                document.getElementById("svg_download_urltext").setAttribute( "font-size" ,image.naturalHeight/16+"px");

                document.getElementById("svg_download_maintext").setAttribute( "y" ,image.naturalHeight/10+"px");
                document.getElementById("svg_download_subtext").setAttribute( "y" ,(image.naturalHeight/8)+(image.naturalHeight/10)+"px");
                document.getElementById("svg_download_urltext").setAttribute( "y" ,(image.naturalHeight)-(image.naturalHeight/16)+"px");

                document.getElementById("svg_download_maintext").style.strokeWidth=image.naturalHeight/200+"px"
                document.getElementById("svg_download_subtext").style.strokeWidth=image.naturalHeight/400+"px"
                document.getElementById("svg_download_urltext").style.strokeWidth=image.naturalHeight/400+"px"                //document.getElementById("svg_img").setAttribute( "xlink:href" ,reader.result);
                image.src = URL.createObjectURL(input.files[0]);
            
            };
            image.onload = function() {
                //キャンバスを画像サイズに合わせて調整
                document.getElementById("svg_download_img").setAttribute( "width" ,image.naturalWidth);
                document.getElementById("svg_download_img").setAttribute( "height" ,image.naturalHeight);

                document.getElementById("svg_download").setAttribute( "width" ,image.naturalWidth);
                document.getElementById("svg_download").setAttribute( "height" ,image.naturalHeight);

                document.getElementById("svg_download_maintext").setAttribute( "font-size" ,image.naturalHeight/8+"px");
                document.getElementById("svg_download_subtext").setAttribute( "font-size" ,image.naturalHeight/16+"px");
                document.getElementById("svg_download_urltext").setAttribute( "font-size" ,image.naturalHeight/16+"px");

                document.getElementById("svg_download_maintext").setAttribute( "y" ,image.naturalHeight/10+"px");
                document.getElementById("svg_download_subtext").setAttribute( "y" ,(image.naturalHeight/8)+(image.naturalHeight/10)+"px");
                document.getElementById("svg_download_urltext").setAttribute( "y" ,(image.naturalHeight)-(image.naturalHeight/16)+"px");

                document.getElementById("svg_download_maintext").style.strokeWidth=image.naturalHeight/200+"px"
                document.getElementById("svg_download_subtext").style.strokeWidth=image.naturalHeight/400+"px"
                document.getElementById("svg_download_urltext").style.strokeWidth=image.naturalHeight/400+"px"
                //Fileオブジェクトのファイル内容を読み込む
                var svg = document.querySelector("#svg_download");
                var svgData = new XMLSerializer().serializeToString(svg);
                var canvas = document.createElement("canvas");
                canvas.width = svg.width.baseVal.value;
                canvas.height = svg.height.baseVal.value;

                var ctx = canvas.getContext("2d");
                var download_image = new Image;
                download_image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));

                download_image.onload = function(){
                    ctx.drawImage( download_image, 0, 0 );
                    var a = document.createElement("a");
                    a.href = canvas.toDataURL("image/png");
                    a.setAttribute("download",input.files[0].name);
                    a.dispatchEvent(new MouseEvent("click"));
                    document.getElementById("download_status").innerHTML="ダウンロードを開始しました"
                }
            }
            
        }
    }
}*/

var step_counter=0;
function nextstep(){
    step_counter++;
    document.getElementsByTagName("section")[step_counter].style.display="block";
    document.getElementsByTagName("section")[step_counter-1].style.display="none";
    if(step_counter==2){
        document.getElementById("next").style.display="none"
    }else{
        document.getElementById("next").style.display="block"
    }
    if(step_counter==0){
        document.getElementById("back").style.display="none"
    }else{
        document.getElementById("back").style.display="block"
    };
}
function backstep(){
    step_counter--;
    document.getElementsByTagName("section")[step_counter].style.display="block";
    document.getElementsByTagName("section")[step_counter+1].style.display="none"
    document.getElementById("download_status").innerHTML=""
    if(step_counter==2){
        document.getElementById("next").style.display="none"
    }else{
        document.getElementById("next").style.display="block"
    }
    if(step_counter==0){
        document.getElementById("back").style.display="none"
    }else{
        document.getElementById("back").style.display="block"
    };
}


//バナーの代わりに表示するボタンを登録する
registerInstallAppEvent(document.getElementById("InstallBtn"));

//バナー表示をキャンセルし、代わりに表示するDOM要素を登録する関数
//引数１：イベントを登録するHTMLElement
function registerInstallAppEvent(elem){
  //インストールバナー表示条件満足時のイベントを乗っ取る
  window.addEventListener('beforeinstallprompt', function(event){
    console.log("beforeinstallprompt: ", event);
    event.preventDefault(); //バナー表示をキャンセル
    elem.promptEvent = event; //eventを保持しておく
    elem.style.display = "block"; //要素を表示する
    return false;
  });
  //インストールダイアログの表示処理
  function installApp() {
    if(elem.promptEvent){
      elem.promptEvent.prompt(); //ダイアログ表示
      elem.promptEvent.userChoice.then(function(choice){
        elem.style.display = "none";
        elem.promptEvent = null; //一度しか使えないため後始末
      });//end then
    }
  }//end installApp
  //ダイアログ表示を行うイベントを追加
  elem.addEventListener("click", installApp);
}//end registerInstallAppEvent
