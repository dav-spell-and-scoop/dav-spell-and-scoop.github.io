window.CFG=(()=>{
const FONT='Sarabun';
const GAME='ชื่อร้าน';
const IMG='img/';
const ROD={file:'stick.PNG',th:14,hx:244,hy:292};
const REST=326;
const HOVER=155;
const BGDARK=0.45;
const CONE_STEP=16;
const SCOOP_STEP=48;
const CONE={x:128,y:353,w:116,h:163,trim:1};
const SCOOP={x:-44,y:-36,w:88,h:72,trim:1};
const CONE_HELD={x:-26,y:-36,w:52,h:72,trim:1};
const FLAVORS=['วานิลลา','สตรอว์เบอร์รี','รัม เรซิ่น','ช็อกโกแลต'];
const VB={x:200,y:170,w:160,h:179,cut:0,trim:1};
const SLOTS={
 bg:{file:'bg.PNG',x:0,y:0,w:360,h:520,label:'พื้นหลัง',fit:'xMidYMid slice',fill:'#1a0a10'},
 curtainL:{file:'curtain_left.PNG',x:-4,y:-4,w:130,h:366,label:'ม่านซ้าย',cut:0,trim:1,stretch:1},
 curtainR:{file:'curtain_right.PNG',x:234,y:-4,w:130,h:366,label:'ม่านขวา',cut:0,trim:1,stretch:1},
 curtainT:{file:'curtain_Top.PNG',x:119.4,y:5,w:121.2,h:45.6,label:'ม่านบนกลาง',cut:0,trim:0,stretch:0},
 vendor1:{file:'vendor1.PNG',...VB,label:'คนขายคนที่ 1'},vendor1Laugh:{file:'vendor1_laugh.PNG',...VB,noph:1},
 vendor2:{file:'vendor2.PNG',...VB,label:'คนขายคนที่ 2'},vendor2Laugh:{file:'vendor2_laugh.PNG',...VB,noph:1},
 table:{file:'table.PNG',x:0,y:350,w:360,h:186,label:'โต๊ะ',cut:0,trim:1,stretch:1},
 cone1:{file:'Ice_Cream Cone.PNG',...CONE,label:'โคนแบบที่ 1 (โคนเริ่มต้น)'},
 cone2:{file:'Ice_Cream Cone_choc.PNG',...CONE,label:'โคนแบบที่ 2 (โคนที่ซ้อนสลับ)'},
 blob1:{file:'Ice_vanila.PNG',...SCOOP,label:'ไอศกรีม '+FLAVORS[0]},
 blob2:{file:'Ice_staberry.PNG',...SCOOP,label:'ไอศกรีม '+FLAVORS[1]},
 blob3:{file:'Ice_Raisin.PNG',...SCOOP,label:'ไอศกรีม '+FLAVORS[2]},
 blob4:{file:'Ice_choc.PNG',...SCOOP,label:'ไอศกรีม '+FLAVORS[3]},
 coneStick1:{file:'Ice_Cream Cone.PNG',...CONE_HELD,label:'โคน 1 บนไม้'},
 coneStick2:{file:'Ice_Cream Cone_choc.PNG',...CONE_HELD,label:'โคน 2 บนไม้'}
};
const API='';
const WORDS={none:'ไว้ลองใหม่นะ !',one:'ก็ยังดีนะ !',many:'โชคดีสุด ๆ เลย !'};
const CUT={w:4,b:1.2,s:2.5};
return {GAME,IMG,ROD,REST,HOVER,BGDARK,CONE_STEP,SCOOP_STEP,FLAVORS,SLOTS,API,FONT,CUT,WORDS};
})();
