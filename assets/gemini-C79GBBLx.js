import{an as M,be as F,bw as Q,bp as K,g as G,e as D,ae as N,a2 as O,G as R,p as q,Y as I,a7 as z}from"./index-zZweHymG.js";function W(l,e,a,d){if(!l||!e||!a||!d)return 999;const g=6371,w=(a-l)*(Math.PI/180),u=(d-e)*(Math.PI/180),k=Math.sin(w/2)*Math.sin(w/2)+Math.cos(l*(Math.PI/180))*Math.cos(a*(Math.PI/180))*Math.sin(u/2)*Math.sin(u/2),$=2*Math.atan2(Math.sqrt(k),Math.sqrt(1-k));return g*$}function H(l=""){const a=D().map(t=>`• [${t.label} ${t.icon||"📌"}] (معرّف: ${t.id})`).join(`
`),g=M().map(t=>`• منطقة: ${t.name} [إحداثيات: ${t.coords[0]}, ${t.coords[1]}]`).join(`
`),w=G().filter(t=>t&&t.status==="approved"),k=(l||"").toLowerCase().split(/\s+/).filter(t=>t.length>1);let $=w;if(k.length>0){const t=w.filter(f=>{const P=`${f.name||""} ${f.address||""} ${f.description||""} ${f.type||""}`.toLowerCase();return k.some(s=>P.includes(s))});t.length>0&&($=t)}$.sort((t,f)=>{if(!!f.pinned!=!!t.pinned)return f.pinned?1:-1;const P=(t.rating_sum||0)/Math.max(t.rating_count||1,1);return(f.rating_sum||0)/Math.max(f.rating_count||1,1)-P});const h=$.slice(0,35).map(t=>{const f=t.lat&&t.lng?` [إحداثيات: ${Number(t.lat).toFixed(4)}, ${Number(t.lng).toFixed(4)}]`:"",P=t.pinned?"⭐ [مثبت]":"";return`[ID: ${t.id}] ${P} ${t.name} (التصنيف: ${t.type})${f} - العنوان: ${t.address||"طلخا"}`}).join(`
`),x=O().slice(0,5).map(t=>`• ${t.name} - المدرب: ${t.instructor} - الموعد: ${t.date} - السعر: ${t.price||"مجاني"}`).join(`
`);R().filter(t=>t.status==="upcoming").slice(0,4).map(t=>`• ${t.title} - الموعد: ${t.date} - المكان: ${t.location_name||"طلخا"}`).join(`
`),q().slice(0,4).map(t=>{var f;return`• ${t.title} - ${(f=t.content)==null?void 0:f.slice(0,80)}...`}).join(`
`),I().filter(t=>t.status==="missing").slice(0,4).map(t=>`• بلاغ مفقود: ${t.name} - هاتف: ${t.contactPhone}`).join(`
`);const S=N().slice(0,6),y=S.length>0?S.map(t=>`[ID: ${t.id}] ${t.title} | ${t.purpose==="rent"?"إيجار":"بيع"} | السعر: ${t.price} | العنوان: ${t.address} | المالك: ${t.ownerPhone}`).join(`
`):"لا توجد عقارات مسجلة حالياً",L=z().filter(t=>t.status==="approved").slice(0,8),T=L.length>0?L.map(t=>`[ID: ${t.id}] ${t.name} (${t.category}) - هاتف: ${t.phone||t.whatsapp||"-"}`).join(`
`):"لا توجد خدمات مسجلة حالياً";return`
أنت "المساعد الذكي لمنصة Hayzo" - دليل مدينة طلخا ومحافظة الدقهلية.
أجب دائماً باللغة العربية بأسلوب راقٍ وبسيط وودود ومباشر دون مقدمات طويلة أو معقدة.

=== أسلوب الرد المطلوب (مهم جداً: كن مبسطاً ومباشراً وبدون حشو) ===
- تجنب تماماً الصياغات الآلية الجافة والتكرار الممل ومصطلحات الأكواد والإنجليزية مثل [restaurants] أو تكرار "الفلتر في الخريطة" لكل مكان.
- اكتب بأسلوب ودود وسهل وبسيط في سطور قصيرة مريحة للعين:
  مثال ممتاز:
  مرحباً بك! 👋 إليك أقرب المطاعم لطلبك في طلخا:
  1. **مطعم أبو عمر للمشويات** (يبعد حوالي 135م) · 📍 شارع جامع مسعود
  2. **مطعم هوت كاتشب** (يبعد حوالي 290م) · 📍 أمام السجل المدني
- إذا كان المكان تم جلبه من منطقة أخرى لعدم توفره بنفس المنطقة، وضّح في سطر قصير: (📍 يقع في منطقة كذا ويبعد كذا — كأقرب بديل متاح).
- في نهاية ردك، اذكر وسوم الإجراءات التفاعلية :::action{type="map", ids="..."}::: ليظهر للمستخدم زر الانتقال للخريطة مباشرة.

=== فلاتر وتصنيفات الخريطة المتاحة في التطبيق ===
${a||"لا توجد تصنيفات"}

=== خريطة مناطق وأحياء مدينة طلخا وإحداثياتها ===
${g}

=== دليل الأماكن والمعالم في طلخا ===
${h||"لا توجد أماكن مسجلة حالياً"}

=== سوق وعقارات طلخا ===
${y}

=== الكورسات والخدمات ===
${x||""}
${T||""}

=== قواعد وسوم الأزرار التفاعلية (إلزامية في نهاية الرد) ===
- لأماكن الخريطة: :::action{type="map", ids="id1,id2", label="📍 عرض الأماكن الـ X على الخريطة مباشرة 🗺️"}:::
- للخدمات: :::action{type="services", ids="os1,os2", label="💼 عرض الخدمات المناسبة في الدليل"}:::
- للعقارات: :::action{type="real-estate", ids="re1,re2", label="🏠 عرض العقارات المطابقة في السوق"}:::
  `.trim()}function _(l){const e=(l||"").toLowerCase().trim(),a=e.split(/\s+/).filter(s=>s.length>1),d=G().filter(s=>s&&s.status==="approved"),g=D(),w={};g.forEach(s=>{w[s.id]=s.label||s.id});const u=N(),k=O();R();const $=q(),h=I().filter(s=>s.status==="missing"),x=z().filter(s=>s.status==="approved"),S=M();let y=null;for(const s of S)if((s.keywords&&Array.isArray(s.keywords)&&s.keywords.length>0?s.keywords:[s.name]).some(c=>c&&e.includes(c.toLowerCase()))){y=s;break}const L=e.includes("أبعد")||e.includes("ابعد")||e.includes("بعيد عن"),T=y||L||e.includes("أقرب")||e.includes("اقرب")||e.includes("قريب من")||e.includes("جنب")||e.includes("بجوار")||e.includes("عند"),t=["محل","مطعم","كافيه","صيدلية","دكتور","عيادة","مستشفى","مدرسة","سنتر","مدرس","سوبر ماركت","ماركت","هدوم","ملابس","أحذية","أزياء","بوتيك","خياط","حلاق","كوافير","جيم","gym","مغسلة","مكتبة","بنك","صراف","موقف","معدية","قطار","شارع","عنوان","مكان"];if(T||t.some(s=>e.includes(s))&&!e.includes("شقة للإيجار")&&!e.includes("شقة للبيع")&&!e.includes("أجر شقة")&&!e.includes("اشتري شقة")){let s=null,n="الأماكن";e.includes("صيدلية")||e.includes("دوا")||e.includes("علاج")||e.includes("روشتة")?(s="pharmacy",n="الصيدليات والمراكز الطبية 💊"):e.includes("مطعم")||e.includes("أكل")||e.includes("وجبة")||e.includes("كشري")||e.includes("بيتزا")||e.includes("فول")?(s="restaurant",n="المطاعم والأغذية 🍽️"):e.includes("كافيه")||e.includes("قهوة")||e.includes("شاي")||e.includes("مشروب")?(s="cafe",n="الكافيهات والمقاهي ☕"):e.includes("دكتور")||e.includes("عيادة")||e.includes("طبيب")||e.includes("كشف")||e.includes("مستشفى")?(s="clinic",n="العيادات والمراكز الطبية 🏥"):e.includes("مواصلات")||e.includes("موقف")||e.includes("معدية")||e.includes("قطار")||e.includes("ميكروباص")?(s="transport",n="المواصلات وخطوط السير 🚌"):(e.includes("هدوم")||e.includes("ملابس")||e.includes("أزياء")||e.includes("بوتيك")||e.includes("محل"))&&(s="shop",n="المحلات التجارية 🛍️");let c=d.filter(i=>{if(s&&(i.type===s||i.type.includes(s)))return!0;const m=`${i.name||""} ${i.description||""} ${i.address||""} ${i.type||""}`.toLowerCase();return y&&m.includes(y.name.toLowerCase())?!0:t.some(r=>e.includes(r)&&m.includes(r))});if(c.length===0&&s&&(c=d.filter(i=>i.type===s||i.type.includes(s))),c.length===0&&(c=d),c.length>0){const i=y?y.coords:[31.054,31.375],m=c.map(o=>{const b=Number(o.lat)||31.054,j=Number(o.lng)||31.375,A=W(i[0],i[1],b,j);return{...o,calculatedDistanceKm:A}});m.sort((o,b)=>L?b.calculatedDistanceKm-o.calculatedDistanceKm:o.calculatedDistanceKm-b.calculatedDistanceKm);const r=m.slice(0,4),p=y?`في **${y.name}**`:"في مدينة طلخا",v=r.map((o,b)=>{const j=Math.round(o.calculatedDistanceKm*1e3),A=j<1e3?`${j} متر`:`${o.calculatedDistanceKm.toFixed(1)} كم`,E=o.phone?` · 📞 \`${o.phone}\``:"",B=o.address?` · 📍 ${o.address}`:"";let C="";return y&&o.calculatedDistanceKm>.6&&(C=`
   ↳ ⚠️ *أقرب بديل متاح: يقع في [${o.address||o.name}]*`),`**${b+1}. ${o.name}** (يبعد حوالي ${A})${B}${E}${C}`}).join(`

`);return`مرحباً بك! 👋 إليك أقرب **${n}** ${p} مرتبة حسب الأقرب لموقعك:

${v}

💡 اضغط على الزر الأخضر بالأسفل لمعاينة أماكنهم ورسم مسار الوصول على الخريطة فوراً!

:::action{type="map", ids="${r.map(o=>o.id).join(",")}", label="📍 عرض الأماكن الـ ${r.length} على الخريطة مباشرة 🗺️"}:::`}}if((e.includes("عقار")||e.includes("عقارات")||e.includes("شقة")||e.includes("شقق")||e.includes("فيلا")||e.includes("سكن")||e.includes("إيجار")&&!e.includes("سيارة")||e.includes("ايجار")&&!e.includes("سيارة")||e.includes("للبيع")||e.includes("سعر المتر"))&&u.length>0){const s=e.includes("إيجار")||e.includes("ايجار")||e.includes("أجر")||e.includes("تأجير"),n=e.includes("بيع")||e.includes("شراء")||e.includes("اشتري")||e.includes("تمليك"),c=u.filter(m=>{if(s&&m.purpose!=="rent"||n&&m.purpose!=="sale")return!1;const r=`${m.title||""} ${m.address||""} ${m.description||""} ${m.price||""}`.toLowerCase();return a.some(p=>r.includes(p))}),i=c.length>0?c:s?u.filter(m=>m.purpose==="rent"):n?u.filter(m=>m.purpose==="sale"):u;if(i.length>0)return`إليك العقارات المتاحة في طلخا:

${i.slice(0,3).map(r=>`🏡 **${r.title}**
💰 السعر: ${r.price} | 📍 العنوان: ${r.address}
📞 للتواصل: ${r.ownerPhone} (${r.ownerName||"المالك"})`).join(`

`)}

📌 يمكنك تصفح قسم **سوق العقارات** بالتطبيق للتواصل المباشر مع الملاك عبر واتساب!

:::action{type="real-estate", ids="${i.slice(0,3).map(r=>r.id).join(",")}", label="🏠 عرض العقارات المطابقة فقط في السوق"}:::`}if((e.includes("خدمة")||e.includes("فني")||e.includes("صيانة")||e.includes("سباك")||e.includes("كهربائي")||e.includes("برمجة")||e.includes("تصميم")||e.includes("شغل حر"))&&x.length>0){const s=x.filter(i=>{const m=`${i.name} ${i.category} ${i.description} ${i.providerName}`.toLowerCase();return a.some(r=>m.includes(r))}),n=s.length>0?s:x;return`إليك الخدمات المتاحة في منصة Hayzo:

${n.slice(0,3).map(i=>`🛠️ **${i.name}** (${i.category})
مقدم الخدمة: ${i.providerName||"متوفر"} | 📞 تواصل: ${i.phone||i.whatsapp||"عبر التطبيق"}`).join(`

`)}

📌 يمكنك الاطلاع على تفاصيل أكثر من قسم **الخدمات** بالتطبيق.

:::action{type="services", ids="${n.slice(0,3).map(i=>i.id).join(",")}", label="💼 عرض الخدمات الـ ${Math.min(n.length,3)} المناسبة فقط"}:::`}return(e.includes("تايه")||e.includes("ضايع")||e.includes("مفقود")||e.includes("اختفاء"))&&h.length>0?`إليك بلاغات المفقودين الحالية في طلخا:

${h.map(n=>`⚠️ **${n.name}** (العمر: ${n.age||"-"}) - آخر ظهور: ${n.lastSeenLocation||"طلخا"} - 📞 تواصل: ${n.contactPhone}`).join(`

`)}

نرجو التواصل فوراً مع الأرقام الموضحة عند توفر أي معلومات.`:(e.includes("كورس")||e.includes("ورشة")||e.includes("تدريب")||e.includes("تعليم"))&&k.length>0?`إليك الكورسات والتدريبات المتاحة حالياً:

${k.slice(0,3).map(n=>`🎓 **${n.name}**
المدرب: ${n.instructor} | 📅 الموعد: ${n.date} | 📍 ${n.location||"طلخا"}`).join(`

`)}`:(e.includes("خبر")||e.includes("أخبار")||e.includes("جديد")||e.includes("حدث"))&&$.length>0?`إليك أحدث الأخبار في مدينة طلخا:

${$.slice(0,3).map(n=>{var c;return`📰 **${n.title}**
${(c=n.content)==null?void 0:c.slice(0,100)}...`}).join(`

`)}`:`مرحباً بك في منصة وتطبيق Hayzo لمدينة طلخا والدقهلية! 👋

يمكنني مساعدتك في:
1. العثور على الأماكن والمحلات والخدمات على الخريطة التفاعلية 🗺️
2. استعراض شقق وعقارات طلخا للبيع والإيجار 🏡
3. خطوط المواصلات ومواعيد القطارات والمعديات 🚌
4. الكورسات وفرص التطوع وآخر الأخبار المحلية 📰

ما الذي تبحث عنه بالتحديد؟`}async function X(l){const e=(l||"").trim().replace(/^["']|["']$/g,"");if(!e)return{ok:!1,status:"invalid",error:"المفتاح فارغ"};if(e.startsWith("gsk_"))try{const a=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${e}`}});return a.ok?{ok:!0,status:"active",provider:"Groq (Llama 3.3 70B ⚡)",error:""}:a.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز معدل الطلبات (Groq 429)"}:{ok:!1,status:"invalid",error:`مفتاح Groq غير صالح (${a.status})`}}catch(a){return{ok:!1,status:"error",error:a.message||"فشل الاتصال بـ Groq"}}if(e.startsWith("sk-or-"))try{const a=await fetch("https://openrouter.ai/api/v1/auth/key",{headers:{Authorization:`Bearer ${e}`}});return a.ok?{ok:!0,status:"active",provider:"OpenRouter (DeepSeek R1 / Llama 3.3)",error:""}:{ok:!1,status:"invalid",error:`مفتاح OpenRouter غير صالح (${a.status})`}}catch(a){return{ok:!1,status:"error",error:a.message||"فشل الاتصال بـ OpenRouter"}}try{const a=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(e)}`);return a.ok?{ok:!0,status:"active",provider:"Google Gemini (2.0 Flash)",modelsCount:((await a.json()).models||[]).length,error:""}:a.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز الحصة المجانية (Quota Full / 429)"}:a.status===400||a.status===401||a.status===403?{ok:!1,status:"invalid",error:"المفتاح غير صالح أو ملغي (Invalid Key)"}:{ok:!1,status:"error",error:`خطأ اتصال (${a.status})`}}catch(a){return{ok:!1,status:"error",error:a.message||"فشل الاتصال بخوادم Google"}}}async function J(l,e=[]){var u,k,$,h,x,S,y,L,T,t,f,P;const a=F(),d=Q("geminiApiKey"),g=[...a];if(d&&!g.some(s=>s.key===d)&&g.push({id:"single_fallback",key:d,label:"مفتاح الإعدادات"}),g.length===0)return _(l);const w=H(l);for(let s=0;s<g.length;s++){const n=g[s],c=(u=n.key)==null?void 0:u.trim().replace(/^["']|["']$/g,"");if(!c)continue;if(c.startsWith("gsk_")){const r=["llama-3.3-70b-versatile","llama-3.1-8b-instant","mixtral-8x7b-32768"];for(const p of r)try{const v=[{role:"system",content:w},...e.map(b=>({role:b.role==="model"||b.role==="assistant"?"assistant":"user",content:b.text||""})),{role:"user",content:l}],o=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${c}`,"Content-Type":"application/json"},body:JSON.stringify({model:p,messages:v,temperature:.5,max_tokens:1024})});if(o.ok){let j=(h=($=(k=(await o.json()).choices)==null?void 0:k[0])==null?void 0:$.message)==null?void 0:h.content;if(j&&(j=j.replace(/<think>[\s\S]*?<\/think>/gi,"").trim(),j))return K(n.id,"active"),j}if(o.status===429){K(n.id,"quota_exceeded","تجاوز الحصة (429)");break}if(o.status===401||o.status===403){K(n.id,"invalid","مفتاح Groq غير صالح");break}}catch(v){console.warn(`Groq request error on model [${p}]:`,v)}continue}if(c.startsWith("sk-or-")){try{const r=[{role:"system",content:w},...e.map(v=>({role:v.role==="model"||v.role==="assistant"?"assistant":"user",content:v.text||""})),{role:"user",content:l}],p=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${c}`,"Content-Type":"application/json","HTTP-Referer":window.location.origin,"X-Title":"Hayzo Talkha"},body:JSON.stringify({model:"meta-llama/llama-3.3-70b-instruct:free",messages:r,temperature:.6,max_tokens:1024})});if(p.ok){const o=(y=(S=(x=(await p.json()).choices)==null?void 0:x[0])==null?void 0:S.message)==null?void 0:y.content;if(o)return K(n.id,"active"),o}}catch(r){console.warn("OpenRouter request error:",r)}continue}if(!c.startsWith("AIzaSy"))continue;const i=[{role:"user",parts:[{text:w+`

---
رسالة المستخدم الأولى: مرحباً`}]},{role:"model",parts:[{text:"أهلاً بك في منصة Hayzo! 👋 كيف أقدر أساعدك اليوم؟ يمكنني مساعدتك في العثور على الأماكن والكورسات والفعاليات والخدمات بمدينة طلخا."}]}];for(const r of e)i.push({role:r.role==="user"?"user":"model",parts:[{text:r.text}]});i.push({role:"user",parts:[{text:l}]});const m=["gemini-2.0-flash","gemini-1.5-flash-latest","gemini-1.5-flash","gemini-2.0-flash-lite","gemini-1.5-pro"];for(const r of m)try{const p=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${r}:generateContent?key=${encodeURIComponent(c)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:i,generationConfig:{temperature:.7,maxOutputTokens:1024}})});if(p.ok){const o=(P=(f=(t=(T=(L=(await p.json()).candidates)==null?void 0:L[0])==null?void 0:T.content)==null?void 0:t.parts)==null?void 0:f[0])==null?void 0:P.text;if(o)return K(n.id,"active"),o}if(p.status===429){K(n.id,"quota_exceeded","تجاوز الحصة (429)");break}if(p.status===400||p.status===401||p.status===403){K(n.id,"invalid",`غير صالح (${p.status})`);break}}catch(p){console.warn(`Error on Gemini key [${n.label}] with model [${r}]:`,p)}}return _(l)}async function Y({targets:l=[],area:e="",resultCount:a=5,queries:d={}}){const g={places:"أماكن ومعالم الخريطة",services:"خدمات وحرفيين",real_estate:"سوق العقارات",transport:"المواصلات والتنقل"};let u=['طلب بحث وترشيح دقيق من استمارة "المكتشف الذكي":',`- القطاعات المطلوبة: ${l.map(h=>g[h]||h).join(" و ")}`,`- المنطقة أو الحي المحدد: ${e||"كل طلخا"}`,`- عدد النتائج المطلوبة: ${a}`];const k=M(),$=e?k.find(h=>h.name===e||e.includes(h.name)||h.keywords&&h.keywords.some(x=>e.includes(x))):null;return $&&(u.push(`- إحداثيات المنطقة الجغرافية المحددة: [${$.coords[0]}, ${$.coords[1]}]`),u.push(`- تنبيه جغرافي إلزامي: احسب المسافة للأماكن وقدم الأقرب فالأقرب لإحداثيات [${$.name}]. إذا جلبت مكاناً من منطقة أخرى أو بعيدة، وضّح بوضوح اسم المنطقة التي جلبته منها ومسافته بالكيلومتر/المتر عن [${$.name}].`)),l.includes("places")&&d.places&&u.push(`- متطلبات الأماكن: ${d.places}`),l.includes("services")&&d.services&&u.push(`- متطلبات الخدمات: ${d.services}`),l.includes("real_estate")&&d.real_estate&&u.push(`- متطلبات العقارات: ${d.real_estate}`),l.includes("transport")&&d.transport&&u.push(`- متطلبات المواصلات: ${d.transport}`),u.push(`المطلوب: رشّح أفضل ${a} نتائج مطابقة تماماً (مع إعطاء الأولوية للعناصر المثبتة ⭐ أولاً)، واذكر أسباب الترشيح ومعلومات التواصل بدقة. واحرص على إنهاء ردك بوسوم الإجراءات التفاعلية الحصرية :::action{type="...", ids="...", label="..."}::: لكل قطاع تم ترشيحه.`),J(u.join(`
`))}export{Y as a,X as t};
