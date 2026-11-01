window.CFG=(()=>{
const FONT='Sarabun'; // ฟอนต์จาก Google Fonts (ต้องรองรับภาษาไทย) เช่น Noto Sans Thai, IBM Plex Sans Thai, Prompt, Noto Serif Thai, Trirong
const GAME='ชื่อร้าน';
const IMG='img/';
const ROD={file:'stick.png',th:14,hx:290,hy:300};
const REST=395;
const FLAVORS=['รสที่ 1','รสที่ 2','รสที่ 3'];
const VB={x:270,y:170,w:100,h:370};
const SLOTS={
 bg:{file:'bg.png',x:0,y:0,w:360,h:640,label:'พื้นหลัง',fit:'xMidYMid slice',fill:'#1a0a10'},
 vendor1:{file:'vendor1.png',...VB,label:'คนขายคนที่ 1'},vendor1Laugh:{file:'vendor1_laugh.png',...VB,noph:1},
 vendor2:{file:'vendor2.png',...VB,label:'คนขายคนที่ 2'},vendor2Laugh:{file:'vendor2_laugh.png',...VB,noph:1},
 table:{file:'table.png',x:0,y:540,w:360,h:100,label:'โต๊ะ'},
 cone:{file:'cone.png',x:135,y:420,w:90,h:130,label:'โคนเปล่า'},
 blob1:{file:'ice_stick_1.png',x:-40,y:-40,w:80,h:125,label:'ไอติมบนไม้ '+FLAVORS[0]},
 blob2:{file:'ice_stick_2.png',x:-40,y:-40,w:80,h:125,label:'ไอติมบนไม้ '+FLAVORS[1]},
 blob3:{file:'ice_stick_3.png',x:-40,y:-40,w:80,h:125,label:'ไอติมบนไม้ '+FLAVORS[2]},
 curtainL:{file:'curtain_left.png',x:-10,y:-10,w:130,h:210,label:'ม่านซ้ายประดับกุหลาบ',cut:0},
 curtainR:{file:'curtain_right.png',x:240,y:-10,w:130,h:210,label:'ม่านขวาประดับกุหลาบ',cut:0},
 coneStick:{file:'cone_stick.png',x:-30,y:-36,w:60,h:100,label:'โคนบนไม้'}
};
const API='';
const CUT={w:4,b:1.2,s:2.5}; // ภาพตัดปะ: ขอบขาวหนา w, ขอบดำบาง b, เงา s (หน่วยเดียวกับฉาก 360 กว้าง) ปรับให้หนาขึ้น/บางลงได้
return {GAME,IMG,ROD,REST,FLAVORS,SLOTS,API,FONT,CUT};
})();
