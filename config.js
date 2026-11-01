window.CFG=(()=>{
const FONT='Sarabun'; 
const GAME='SPELL & SCOOP';
const IMG='img/';
const ROD={file:'stick.PNG',th:14,hx:244,hy:292}; 
const REST=326; 
const HOVER=155;
const BGDARK=0.45;
const CONE_STEP=16; // ระยะที่โคนซ้อนแต่ละอันโผล่ขึ้นมา
const SCOOP_STEP=48; // ระยะห่างแนวตั้งของไอศกรีมแต่ละลูกที่ซ้อนกัน
/* ขนาดของ "ส่วนที่มองเห็นจริง" ของภาพ (trim:1 = ตัดขอบโปร่งใสของไฟล์ให้อัตโนมัติ) ปรับ w,h ที่นี่เพื่อให้โคนกับไอศกรีมสมดุลกัน
   CONE = โคน (x,y = มุมซ้ายบนในฉาก 360x520), SCOOP = ลูกไอศกรีม (x,y เทียบกับจุดปลายไม้ ให้ศูนย์กลางอยู่ที่ 0,0) */
const CONE={x:128,y:353,w:116,h:163,trim:1}; // โคนบนโต๊ะ (ตามภาพที่ต้องการ)
const SCOOP={x:-44,y:-36,w:88,h:72,trim:1}; // ลูกไอศกรีม
const CONE_HELD={x:-26,y:-36,w:52,h:72,trim:1}; // โคนที่คนขายถือบนไม้ (ตอนซ้อนโคน)
const FLAVORS=['วานิลลา','สตรอว์เบอร์รี','รัม เรซิ่น','ช็อกโกแลต']; // ชื่อ 4 รส ตรงกับ Ice_vanila=วานิลลา, Ice_staberry=สตรอว์เบอร์รี, Ice_Raisin=รัม เรซิ่น, Ice_choc=ช็อกโกแลต ตามลำดับ
const VB={x:200,y:170,w:160,h:179,cut:0,trim:1}; // กรอบคนขาย (ทั้ง 2 คนใช้กรอบเดียวกัน) cut:0 = ภาพมีขอบขาวในตัวแล้ว ไม่ต้องใส่ซ้ำ
/* ฉาก 360 กว้าง x 520 สูง (สัดส่วนเดียวกับภาพ 604x873) | file = ชื่อไฟล์ในโฟลเดอร์ img (พิมพ์เล็กใหญ่ให้ตรง) | x,y,w,h = ตำแหน่งและขนาด | cut:0 = ไม่ใส่ขอบขาวดำเพิ่ม */
const SLOTS={
 bg:{file:'bg.PNG',x:0,y:0,w:360,h:520,label:'พื้นหลัง',fit:'xMidYMid slice',fill:'#1a0a10'},
 curtainL:{file:'curtain_left.PNG',x:-4,y:-4,w:130,h:366,label:'ม่านซ้าย',cut:0,trim:1,stretch:1},
 curtainR:{file:'curtain_right.PNG',x:231,y:-4,w:133,h:352,label:'ม่านขวา',cut:0,trim:1,stretch:1},
 curtainT:{file:'curtain_Top.PNG',x:122,y:5,w:111,h:50,label:'ม่านบนกลาง',cut:0,trim:1,stretch:1},
 vendor1:{file:'vendor1.PNG',...VB,label:'คนขายคนที่ 1'},vendor1Laugh:{file:'vendor1_laugh.PNG',...VB,noph:1},
 vendor2:{file:'vendor2.PNG',...VB,label:'คนขายคนที่ 2'},vendor2Laugh:{file:'vendor2_laugh.PNG',...VB,noph:1},
 table:{file:'table.PNG',x:0,y:350,w:360,h:186,label:'โต๊ะ',cut:0,trim:1,stretch:1}, // stretch:1 = ยืดให้เต็มกรอบพอดี (ขอบล่างล้นออกนอกฉากเล็กน้อยเพื่อไม่ให้เห็นพื้นหลังใต้โต๊ะ)
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
const WORDS={none:'ไว้ลองใหม่นะ !',one:'ก็ยังดีนะ !',many:'โชคดีสุด ๆ เลย !'}; // ข้อความบรรทัดที่ 2 บนการ์ดสรุป: ไม่ได้อะไร / ได้ 1 อย่าง / ได้ 2 อย่างขึ้นไป
const CUT={w:4,b:1.2,s:2.5}; // ภาพตัดปะ: ขอบขาวหนา w, ขอบดำบาง b, เงา s (หน่วยเดียวกับฉาก 360 กว้าง)
return {GAME,IMG,ROD,REST,HOVER,BGDARK,CONE_STEP,SCOOP_STEP,FLAVORS,SLOTS,API,FONT,CUT,WORDS};
})();
