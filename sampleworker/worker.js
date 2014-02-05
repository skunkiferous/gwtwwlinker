(function(){
var $wnd;var $doc;var $workergwtbridge;var $moduleName, $moduleBase;
if(typeof(window) != 'undefined'){ $wnd = window;  $doc = $wnd.document; }
else{ $wnd = {JSON: JSON}; }
var $gwt_version = "2.6.0";function o(){}
function Y(){}
function Tc(){}
function Ac(){}
function hb(){}
function J(a){}
function Nc(a){}
function yc(){db()}
function u(){db()}
function O(){return L}
function vc(){return !!$stats}
function uc(a){return new sc[a]}
function kc(a){return a.l|a.m<<22}
function Q(a,b){return gb(a,b,null)}
function Pc(b,a){return b.indexOf(a)}
function Rb(a){return Sb(a.l,a.m,a.h)}
function pb(a,b){return a.cM&&!!a.cM[b]}
function Sb(a,b,c){return {l:a,m:b,h:c}}
function sb(a,b){return a!=null&&pb(a,b)}
function I(a,b,c){return a.apply(b,c);var d}
function ac(a,b){a.l=b}
function bc(a,b){a.m=b}
function _b(a,b){a.h=b}
function Hc(){u.call(this)}
function Lc(){u.call(this)}
function w(){w=Tc;v=new o}
function V(){V=Tc;U=new Y}
function R(a){$wnd.clearTimeout(a)}
function Sc(a){self.postMessage(a)}
function Ec(a){return typeof a=='number'&&a>0}
function Dc(a){var b=sc[a.b];a=null;return b}
function Z(a,b){!a&&(a=[]);a[a.length]=b;return a}
function bb(a,b){a.length>=b&&a.splice(0,b);return a}
function eb(){try{null.a()}catch(a){return a}}
function A(a){w();u.call(this);this.b=a;cb(this)}
function P(a){$wnd.setTimeout(function(){throw a},0)}
function S(){return Q(function(){F!=0&&(F=0);H=-1},10)}
function N(a){a&&X((V(),U));--F;if(a){if(H!=-1){R(H);H=-1}}}
function mb(){mb=Tc;kb=[];lb=[];nb(new hb,kb,lb)}
function Cc(a,b,c){var d;d=new Ac;Ec(c)&&Fc(c,d);return d}
function Bc(a,b,c){var d;d=new Ac;Ec(c!=0?-c:0)&&Fc(c!=0?-c:0,d);return d}
function jb(a,b,c,d,e){var f;f=ib(e,d);mb();ob(f,kb,lb);f.cZ=a;f.cM=b;return f}
function M(a,b,c){var d;d=K();try{return I(a,b,c)}finally{N(d)}}
function nb(a,b,c){var d=0,e;for(var f in a){if(e=a[f]){b[d]=f;c[d]=e;++d}}}
function ob(a,b,c){mb();for(var d=0,e=b.length;d<e;++d){a[b[d]]=c[d]}}
function qb(a,b){if(a!=null&&!(a.cM&&a.cM[b])){throw new Hc}return a}
function rb(a){if(a!=null&&(a.tM==Tc||pb(a,1))){throw new Hc}return a}
function Ob(a){if(sb(a,3)){return a}return a==null?new A(null):Mb(a)}
function tb(a){return ~~Math.max(Math.min(a,2147483647),-2147483648)}
function L(b){return function(){try{return M(b,this,arguments)}catch(a){throw a}}}
function W(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=$(b,c)}while(a.b);a.b=c}}
function X(a){var b,c;if(a.c){c=null;do{b=a.c;a.c=null;c=$(b,c)}while(a.c);a.c=c}}
function Jc(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function Nb(a){var b;if(sb(a,2)){b=qb(a,2);if(b.b!==(w(),v)){return b.b===v?null:b.b}}return a}
function Zb(a){var b,c;c=Ic(a.h);if(c==32){b=Ic(a.m);return b==32?Ic(a.l)+32:b+20-10}else{return c-12}}
function Qb(a){var b,c,d;b=a&4194303;c=a>>22&4194303;d=a<0?1048575:0;return Sb(b,c,d)}
function gc(a){var b,c,d;b=~a.l+1&4194303;c=~a.m+(b==0?1:0)&4194303;d=~a.h+(b==0&&c==0?1:0)&1048575;return Sb(b,c,d)}
function Yb(a){var b,c,d;b=~a.l+1&4194303;c=~a.m+(b==0?1:0)&4194303;d=~a.h+(b==0&&c==0?1:0)&1048575;ac(a,b);bc(a,c);_b(a,d)}
function qc(){qc=Tc;mc=Sb(4194303,4194303,524287);nc=Sb(0,0,524288);oc=fc(1);fc(2);pc=fc(0)}
function gb(a,b,c){var d=$wnd.setTimeout(function(){a();c!=null&&J(c)},b);return d}
function Vb(a,b,c,d,e){var f;f=ic(a,b);c&&Yb(f);if(e){a=Xb(a,b);d?(Pb=gc(a)):(Pb=Sb(a.l,a.m,a.h))}return f}
function Mb(b){var c=b.__gwt$exception;if(!c){c=new A(b);try{b.__gwt$exception=c}catch(a){}}return c}
function gwtOnLoad(b,c,d,e){$moduleName=c;$moduleBase=d;if(b)try{Wc(Lb)()}catch(a){b(c)}else{Wc(Lb)()}}
function t(a){var b,c,d;c=jb(Kb,Uc,0,a.length,0);for(d=0,b=a.length;d<b;++d){if(!a[d]){throw new Lc}c[d]=a[d]}}
function db(){var a,b,c,d;c=bb(fb(eb()),2);d=jb(Kb,Uc,0,c.length,0);for(a=0,b=d.length;a<b;a++){d[a]=new Nc(c[a])}t(d)}
function cb(a){var b,c,d,e;d=fb(a.b===(w(),v)?null:a.b);e=jb(Kb,Uc,0,d.length,0);for(b=0,c=e.length;b<c;b++){e[b]=new Nc(d[b])}t(e)}
function fb(a){var b,c,d,e;d=a!=null&&a.tM!=Tc&&!pb(a,1)?rb(a):null;e=d&&d.stack?d.stack.split('\n'):[];for(b=0,c=e.length;b<c;b++){e[b]=ab(e[b])}return e}
function jc(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return {l:c&4194303,m:d&4194303,h:e&1048575}}
function cc(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}ac(a,c&4194303);bc(a,d&4194303);_b(a,e&1048575);return true}
function K(){var a;if(F!=0){a=(new Date).getTime();if(a-G>2000){G=a;H=S()}}if(F++==0){W((V(),U));return true}return false}
function fc(a){var b,c;if(a>-129&&a<128){b=a+128;dc==null&&(dc=jb(Jb,Uc,0,256,0));c=dc[b];!c&&(c=dc[b]=Qb(a));return c}return Qb(a)}
function Ub(a,b){if(a.h==524288&&a.m==0&&a.l==0){b&&(Pb=Sb(0,0,0));return Rb((qc(),oc))}b&&(Pb=Sb(a.l,a.m,a.h));return Sb(0,0,0)}
function Qc(c){if(c.length==0||c[0]>Zc&&c[c.length-1]>Zc){return c}var a=c.replace(/^(\s*)/,Xc);var b=a.replace(/\s*$/,Xc);return b}
function Rc(){$workergwtbridge=function(a){Sc('----====----');Sc('Current timestamp '+lc(ec((new Date).getTime())));Sc('Received message "'+a+'"')}}
function Xb(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return Sb(c,d,e)}
function ib(a,b){var c=new Array(b);if(a==3){for(var d=0;d<b;++d){c[d]={l:0,m:0,h:0}}}else if(a>0&&a<3){var e=a==1?0:false;for(var d=0;d<b;++d){c[d]=e}}return c}
function Fc(a,b){var c;b.b=a;if(a==2){c=String.prototype}else{if(a>0){var d=Dc(b);if(d){c=d.prototype}else{d=sc[a]=function(){};d.cZ=b;return}}else{return}}c.cZ=b}
function wc(a){return $stats({moduleName:$moduleName,sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date).getTime(),type:'onModuleLoadStart',className:a})}
function $(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].e()&&(c=Z(c,g)):g[0].e()}catch(a){a=Ob(a);if(sb(a,3)){d=a;P(sb(d,2)?qb(d,2).d():d)}else throw Nb(a)}}return c}
function Lb(){vc()&&wc('com.google.gwt.useragent.client.UserAgentAsserter');vc()&&wc('com.google.gwt.user.client.DocumentModeAsserter');vc()&&wc('prj.gwtwwlinker.sampleworker.client.SampleWorker');Rc()}
function hc(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return {l:c&4194303,m:d&4194303,h:e&1048575}}
function tc(a,b,c){var d=sc[a];if(d&&!d.cZ){_=d.prototype}else{!d&&(d=sc[a]=function(){});_=d.prototype=b<0?{}:uc(b);_.cM=c}for(var e=3;e<arguments.length;++e){arguments[e].prototype=_}if(d.cZ){_.cZ=d.cZ;d.cZ=null}}
function ab(a){var b,c,d;d=Xc;a=Qc(a);b=a.indexOf('(');c=a.indexOf('function')==0?8:0;if(b==-1){b=Pc(a,String.fromCharCode(64));c=a.indexOf('function ')==0?9:0}b!=-1&&(d=Qc(a.substr(c,b-c)));return d.length>0?d:'anonymous'}
function Ic(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-16384;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function $b(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return Jc(c)}if(b==0&&d!=0&&c==0){return Jc(d)+22}if(b!=0&&d==0&&c==0){return Jc(b)+44}return -1}
function ic(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&524288)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?1048575:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?1048575:0;f=d?4194303:0;e=c>>b-44}return {l:e&4194303,m:f&4194303,h:g&1048575}}
function ec(a){var b,c,d,e,f;if(isNaN(a)){return qc(),pc}if(a<-9223372036854775808){return qc(),nc}if(a>=9223372036854775807){return qc(),mc}e=false;if(a<0){e=true;a=-a}d=0;if(a>=17592186044416){d=tb(a/17592186044416);a-=d*17592186044416}c=0;if(a>=4194304){c=tb(a/4194304);a-=c*4194304}b=tb(a);f=Sb(b,c,d);e&&Yb(f);return f}
function lc(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return Yc}if(a.h==524288&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+lc(gc(a))}c=a;d=Xc;while(!(c.l==0&&c.m==0&&c.h==0)){e=fc(1000000000);c=Tb(c,e,true);b=Xc+kc(Pb);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b=Yc+b}}d=b+d}return d}
function Wb(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=Zb(b)-Zb(a);g=hc(b,j);i=Sb(0,0,0);while(j>=0){h=cc(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;_b(g,l>>>1);g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&Yb(i);if(f){if(d){Pb=gc(a);e&&(Pb=jc(Pb,(qc(),oc)))}else{Pb=Sb(a.l,a.m,a.h)}}return i}
function Tb(a,b,c){var d,e,f,g,h,i,j,k;if(b.l==0&&b.m==0&&b.h==0){throw new yc}if(a.l==0&&a.m==0&&a.h==0){c&&(Pb=Sb(0,0,0));return Sb(0,0,0)}if(b.h==524288&&b.m==0&&b.l==0){return Ub(a,c)}i=false;if(b.h>>19!=0){b=gc(b);i=true}g=$b(b);f=false;e=false;d=false;if(a.h==524288&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=Rb((qc(),mc));d=true;i=!i}else{h=ic(a,g);i&&Yb(h);c&&(Pb=Sb(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=gc(a);d=true;i=!i}if(g!=-1){return Vb(a,g,i,f,c)}if(!(j=a.h>>19,k=b.h>>19,j==0?k!=0||a.h>b.h||a.h==b.h&&a.m>b.m||a.h==b.h&&a.m==b.m&&a.l>=b.l:!(k==0||a.h<b.h||a.h==b.h&&a.m<b.m||a.h==b.h&&a.m==b.m&&a.l<b.l))){c&&(f?(Pb=gc(a)):(Pb=Sb(a.l,a.m,a.h)));return Sb(0,0,0)}return Wb(d?a:Sb(a.l,a.m,a.h),b,i,f,e,c)}
var Xc='',Zc=' ',Yc='0',_c='com.google.gwt.core.client.',$c='java.lang.';var _,sc={},Vc={3:1},Uc={};tc(1,-1,Uc,o);_.tM=Tc;tc(8,1,Vc);tc(7,8,Vc);tc(6,7,Vc);tc(5,6,{2:1,3:1},A);_.d=function B(){return this.b===v?null:this.b};var v;tc(12,1,{});var F=0,G=0,H=-1;tc(14,12,{},Y);var U;tc(20,1,{},hb);var kb,lb;var Pb;var dc;var mc,nc,oc,pc;tc(36,6,Vc,yc);tc(37,1,{},Ac);_.b=0;tc(38,6,Vc,Hc);tc(42,6,Vc,Lc);tc(43,1,{},Nc);_=String.prototype;_.cM={1:1};var Wc=O();var Eb=Cc($c,'Object',1),wb=Cc(_c,'Scheduler',12),vb=Cc(_c,'JavaScriptObject$',9),Ib=Cc($c,'Throwable',8),Cb=Cc($c,'Exception',7),Fb=Cc($c,'RuntimeException',6),Gb=Cc($c,'StackTraceElement',43),Kb=Bc('[Ljava.lang.','StackTraceElement;',46),Jb=Bc('[Lcom.google.gwt.lang.','LongLibBase$LongEmul;',47),yb=Cc('com.google.gwt.lang.','SeedUtil',29),Bb=Cc($c,'Class',37),Hb=Cc($c,'String',2),Ab=Cc($c,'ClassCastException',38),ub=Cc(_c,'JavaScriptException',5),Db=Cc($c,'NullPointerException',42),zb=Cc($c,'ArithmeticException',36),xb=Cc('com.google.gwt.core.client.impl.','SchedulerImpl',14);
var $stats = function(){};
var $sessionId = function(){};
var navigator = {};
navigator.userAgent = 'timobile';
$strongName = '5D07855269B366DA66644C52FFADA14D';
$ti4jCompilationDate = 1391574090664;
self.addEventListener('message', function(e) {   $workergwtbridge(e.data); }, false);
gwtOnLoad(null,'sampleworker',null);
})();
