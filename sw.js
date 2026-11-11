// OH_UN! 서비스 워커
// - index.html: 항상 네트워크 우선 → index.html만 다시 올리면 바로 반영 (버전 수정 불필요)
// - 운동 애니메이션·아이콘: 처음 설치 때 저장해 오프라인에서도 표시
// - ANIM_VER는 ek.pack.gz·data 내용이 바뀔 때만 올리면 됨
const ANIM_VER='media-v3';
const SHELL='shell-v2';
const ANIM=['./ek.pack.gz'];
// 파일 하나가 빠져도 설치가 멈추지 않도록 하나씩 저장
const SHELL_FILES=['./','./index.html','./firebase-config.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon-64.png'];
const addEach=(name,list)=>caches.open(name).then(c=>Promise.all(list.map(u=>c.add(u).catch(()=>{}))));
self.addEventListener('install',e=>{e.waitUntil(addEach(SHELL,SHELL_FILES).then(()=>{addEach(ANIM_VER,ANIM);return self.skipWaiting();}));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==ANIM_VER).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
  if(u.pathname.includes('/anim/')||u.pathname.endsWith('ek.pack.gz')||u.pathname.includes('/data/')){e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(ANIM_VER).then(x=>x.put(r,c));}return res;})));return;}
  // 그 외(페이지·매니페스트·아이콘): 네트워크 우선, 오프라인이면 저장본
  e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(SHELL).then(x=>x.put(r.mode==='navigate'?'./index.html':r,c));}return res;})
    .catch(()=>caches.match(r.mode==='navigate'?'./index.html':r).then(m=>m||caches.match('./index.html'))));
});
// 휴식 끝 알림을 누르면 앱으로 돌아가기
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus' in c)return c.focus();}return clients.openWindow('./');}));});
