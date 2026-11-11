// OH_UN! 서비스 워커
// - index.html: 항상 네트워크 우선 → index.html만 다시 올리면 바로 반영 (버전 수정 불필요)
// - 운동 애니메이션·아이콘: 처음 설치 때 저장해 오프라인에서도 표시
// - ANIM_VER는 anim 폴더 내용이 바뀔 때만 올리면 됨
const ANIM_VER='anim-v1';
const SHELL='shell-v2';
const ANIM=["./anim/0003.webp", "./anim/0025.webp", "./anim/0026.webp", "./anim/0027.webp", "./anim/0030.webp", "./anim/0031.webp", "./anim/0032.webp", "./anim/0033.webp", "./anim/0042.webp", "./anim/0043.webp", "./anim/0044.webp", "./anim/0047.webp", "./anim/0060.webp", "./anim/0074.webp", "./anim/0080.webp", "./anim/0085.webp", "./anim/0095.webp", "./anim/0117.webp", "./anim/0120.webp", "./anim/0128.webp", "./anim/0129.webp", "./anim/0155.webp", "./anim/0175.webp", "./anim/0178.webp", "./anim/0188.webp", "./anim/0194.webp", "./anim/0200.webp", "./anim/0201.webp", "./anim/0203.webp", "./anim/0214.webp", "./anim/0237.webp", "./anim/0238.webp", "./anim/0251.webp", "./anim/0274.webp", "./anim/0276.webp", "./anim/0279.webp", "./anim/0289.webp", "./anim/0292.webp", "./anim/0294.webp", "./anim/0297.webp", "./anim/0308.webp", "./anim/0310.webp", "./anim/0313.webp", "./anim/0314.webp", "./anim/0318.webp", "./anim/0327.webp", "./anim/0333.webp", "./anim/0334.webp", "./anim/0336.webp", "./anim/0361.webp", "./anim/0369.webp", "./anim/0383.webp", "./anim/0405.webp", "./anim/0406.webp", "./anim/0410.webp", "./anim/0430.webp", "./anim/0431.webp", "./anim/0447.webp", "./anim/0472.webp", "./anim/0489.webp", "./anim/0499.webp", "./anim/0549.webp", "./anim/0577.webp", "./anim/0584.webp", "./anim/0585.webp", "./anim/0586.webp", "./anim/0592.webp", "./anim/0594.webp", "./anim/0596.webp", "./anim/0597.webp", "./anim/0598.webp", "./anim/0602.webp", "./anim/0603.webp", "./anim/0605.webp", "./anim/0606.webp", "./anim/0620.webp", "./anim/0652.webp", "./anim/0662.webp", "./anim/0685.webp", "./anim/0687.webp", "./anim/0696.webp", "./anim/0705.webp", "./anim/0739.webp", "./anim/0743.webp", "./anim/0748.webp", "./anim/0770.webp", "./anim/0811.webp", "./anim/0814.webp", "./anim/0818.webp", "./anim/0857.webp", "./anim/0861.webp", "./anim/0868.webp", "./anim/0979.webp", "./anim/1160.webp", "./anim/1299.webp", "./anim/1326.webp", "./anim/1350.webp", "./anim/1456.webp", "./anim/1459.webp", "./anim/1460.webp", "./anim/1700.webp", "./anim/1760.webp", "./anim/1764.webp", "./anim/2133.webp", "./anim/2135.webp", "./anim/2137.webp", "./anim/2138.webp", "./anim/2330.webp", "./anim/2459.webp", "./anim/2612.webp", "./anim/3013.webp", "./anim/3017.webp", "./anim/3562.webp"];
// 파일 하나가 빠져도 설치가 멈추지 않도록 하나씩 저장
const SHELL_FILES=['./','./index.html','./firebase-config.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon-64.png'];
const addEach=(name,list)=>caches.open(name).then(c=>Promise.all(list.map(u=>c.add(u).catch(()=>{}))));
self.addEventListener('install',e=>{e.waitUntil(addEach(SHELL,SHELL_FILES).then(()=>{addEach(ANIM_VER,ANIM);return self.skipWaiting();}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==ANIM_VER).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
  if(u.pathname.includes('/anim/')){e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{const c=res.clone();caches.open(ANIM_VER).then(x=>x.put(r,c));return res;})));return;}
  // 그 외(페이지·매니페스트·아이콘): 네트워크 우선, 오프라인이면 저장본
  e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(SHELL).then(x=>x.put(r.mode==='navigate'?'./index.html':r,c));}return res;})
    .catch(()=>caches.match(r.mode==='navigate'?'./index.html':r).then(m=>m||caches.match('./index.html'))));
});
