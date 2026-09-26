import{an as D,be as Z,bw as ee,bp as K,g as z,e as B,ae as E,a2 as F,G as Q,p as W,Y as H,a7 as J}from"./index-bHUjM9pz.js";function te(c,o,r,d){if(!c||!o||!r||!d)return 999;const l=6371,g=(r-c)*(Math.PI/180),e=(d-o)*(Math.PI/180),m=Math.sin(g/2)*Math.sin(g/2)+Math.cos(c*(Math.PI/180))*Math.cos(r*(Math.PI/180))*Math.sin(e/2)*Math.sin(e/2),y=2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m));return l*y}function se(c=""){const r=B().map(t=>`• [${t.label} ${t.icon||"📌"}] (معرّف: ${t.id})`).join(`
`),l=D().map(t=>`• منطقة: ${t.name} [إحداثيات: ${t.coords[0]}, ${t.coords[1]}]`).join(`
`),g=z().filter(t=>t&&t.status==="approved"),m=(c||"").toLowerCase().split(/\s+/).filter(t=>t.length>1);let y=g;if(m.length>0){const t=g.filter(u=>{const p=`${u.name||""} ${u.address||""} ${u.description||""} ${u.type||""}`.toLowerCase();return m.some(x=>p.includes(x))});t.length>0&&(y=t)}y.sort((t,u)=>{if(!!u.pinned!=!!t.pinned)return u.pinned?1:-1;const p=(t.rating_sum||0)/Math.max(t.rating_count||1,1);return(u.rating_sum||0)/Math.max(u.rating_count||1,1)-p});const w=y.slice(0,15).map(t=>{const u=t.lat&&t.lng?` [إحداثيات: ${Number(t.lat).toFixed(4)}, ${Number(t.lng).toFixed(4)}]`:"",p=t.pinned?"⭐ [مثبت]":"";return`[ID: ${t.id}] ${p} ${t.name} (التصنيف: ${t.type})${u} - العنوان: ${t.address||"طلخا"}`}).join(`
`),L=F().slice(0,4).map(t=>`• ${t.name} - المدرب: ${t.instructor} - الموعد: ${t.date} - السعر: ${t.price||"مجاني"}`).join(`
`);Q().filter(t=>t.status==="upcoming").slice(0,3).map(t=>`• ${t.title} - الموعد: ${t.date} - المكان: ${t.location_name||"طلخا"}`).join(`
`),W().slice(0,3).map(t=>{var u;return`• ${t.title} - ${(u=t.content)==null?void 0:u.slice(0,80)}...`}).join(`
`),H().filter(t=>t.status==="missing").slice(0,3).map(t=>`• بلاغ مفقود: ${t.name} - هاتف: ${t.contactPhone}`).join(`
`);const M=E().slice(0,4),T=M.length>0?M.map(t=>`[ID: ${t.id}] ${t.title} | ${t.purpose==="rent"?"إيجار":"بيع"} | السعر: ${t.price} | العنوان: ${t.address} | المالك: ${t.ownerPhone}`).join(`
`):"لا توجد عقارات مسجلة حالياً",S=J().filter(t=>t.status==="approved").slice(0,8),C=S.length>0?S.map(t=>{const u=t.description?` | الوصف: ${t.description.slice(0,120)}`:"";return`[ID: ${t.id}] ${t.name} (${t.category}) - مقدم الخدمة: ${t.providerName||""} - هاتف: ${t.phone||t.whatsapp||"-"}${u}`}).join(`
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

=== قواعد الأمانة والمطابقة الصارمة (مهمة للغاية) ===
- ممنوع منعاً باتاً ترشيح أي خدمة أو تخصص أو مكان لا صلة له بطلب المستخدم لمجرد ملء الرد أو إكمال العدد!
- عند البحث عن الخدمات أو المهن:
  1. اعتمد بدقة على وصف الخدمة (الوصف) وتخصصها واسمها لتحديد ما إذا كانت تلبي طلب المستخدم.
  2. رشّح حصراً من يقدم التخصص المطلوب تحديداً.
  3. إذا كان المطلوب أكثر من عنصر ولم تجد في البيانات إلا عنصراً واحداً فقط يطابق، اذكر هذا العنصر فقط ولا تضف أصحاب تخصصات أخرى نهائياً لملء الفراغ!
  4. إذا لم تجد أي متخصص مسجل بالطلب، صرح بوضوح تام: "عذراً، لا يوجد حالياً متخصص مسجل بهذا المجال في منصة Hayzo بطلخا".

=== فلاتر وتصنيفات الخريطة المتاحة في التطبيق ===
${r||"لا توجد تصنيفات"}

=== خريطة مناطق وأحياء مدينة طلخا وإحداثياتها ===
${l}

=== دليل الأماكن والمعالم في طلخا ===
${w||"لا توجد أماكن مسجلة حالياً"}

=== سوق وعقارات طلخا ===
${T}

=== الكورسات والخدمات ===
${L||""}
${C||""}

=== قواعد وسوم الأزرار التفاعلية (إلزامية في نهاية الرد) ===
- لأماكن الخريطة: :::action{type="map", ids="id1,id2", label="📍 عرض الأماكن الـ X على الخريطة مباشرة 🗺️"}:::
- للخدمات: :::action{type="services", ids="os1,os2", label="💼 عرض الخدمات المناسبة في الدليل"}:::
- للعقارات: :::action{type="real-estate", ids="re1,re2", label="🏠 عرض العقارات المطابقة في السوق"}:::
  `.trim()}function R(c){const o=(c||"").trim();let r=[],d="",l=null;if(o.includes("المكتشف الذكي")||o.includes("طلب بحث وترشيح دقيق")||o.includes("متطلبات")){const s=o.match(/-\s*المنطقة أو الحي المحدد:\s*([^\n\r]+)/);s&&s[1]&&!s[1].includes("كل طلخا")&&(d=s[1].trim());const a=o.match(/-\s*متطلبات الخدمات:\s*([^\n\r]+)/),i=o.match(/-\s*متطلبات الأماكن:\s*([^\n\r]+)/),n=o.match(/-\s*متطلبات العقارات:\s*([^\n\r]+)/),f=o.match(/-\s*متطلبات المواصلات:\s*([^\n\r]+)/);a&&a[1]&&(r.push(a[1].trim()),l="services"),i&&i[1]&&(r.push(i[1].trim()),l||(l="places")),n&&n[1]&&(r.push(n[1].trim()),l||(l="real_estate")),f&&f[1]&&(r.push(f[1].trim()),l||(l="transport"))}const g=r.length>0?r.join(" "):o,e=g.toLowerCase().trim(),m=e.split(/\s+/).filter(s=>s.length>1),y=z().filter(s=>s&&s.status==="approved"),w=B(),L={};w.forEach(s=>{L[s.id]=s.label||s.id});const M=E(),T=F();Q();const S=W(),C=H().filter(s=>s.status==="missing"),t=J().filter(s=>s.status==="approved"),u=D();let p=null;if(d&&(p=u.find(s=>s.name===d||d.includes(s.name)||s.keywords&&s.keywords.some(a=>d.includes(a)))),!p){for(const s of u)if((s.keywords&&Array.isArray(s.keywords)&&s.keywords.length>0?s.keywords:[s.name]).some(i=>i&&e.includes(i.toLowerCase()))){p=s;break}}const x=e.includes("أبعد")||e.includes("ابعد")||e.includes("بعيد عن"),j=p||x||e.includes("أقرب")||e.includes("اقرب")||e.includes("قريب من")||e.includes("جنب")||e.includes("بجوار")||e.includes("عند"),b=l==="places"||l==="real_estate"||l==="transport"?null:[{id:"plumber",label:"سباك / أعمال سباكة",keywords:["سباك","سباكة","سباكين","صحي","مواسير","حنفية","خلاط","تسريب"]},{id:"carpenter",label:"نجار / أعمال نجارة",keywords:["نجار","نجارة","نجارين","خشب","أبواب","شبابيك","موبيليا","غرف نوم"]},{id:"electrician",label:"كهربائي / أعمال كهرباء",keywords:["كهربائي","كهرباء","كهربائية","نجف","فيش","توصيلات","لوحات"]},{id:"painter",label:"نقاش / أعمال دهانات",keywords:["نقاش","نقاشة","دهان","دهانات","بويات","تشطيب"]},{id:"ac",label:"فني تكييف وتبريد",keywords:["تكييف","تبريد","تكييفات","فريون","شحن تكييف"]},{id:"appliances",label:"صيانة أجهزة منزلية",keywords:["غسالة","غسالات","ثلاجة","ثلاجات","بوتاجاز","سخان","سخانات","أجهزة منزلية"]},{id:"blacksmith",label:"حداد / أعمال حدادة",keywords:["حداد","حدادة","حديد","كريتال"]},{id:"alumin",label:"فني ألوميتال",keywords:["ألوميتال","الوميتال","مطابخ الوميتال"]},{id:"dev",label:"مبرمج ومطور برمجيات",keywords:["مبرمج","برمجة","مطور","موقع","تطبيق","web","app"]},{id:"design",label:"مصمم جرافيك",keywords:["مصمم","تصميم","جرافيك","لوجو","شعار"]},{id:"food",label:"أكل بيتي وطبخ ومأكولات",keywords:["أكل","اكل","طعام","وجبات","وجبة","أكل بيتي","اكل بيتى","فروزن","حلويات","طباخ","طبخ","مأكولات","محاشي","عزومات","طبيخ","سفرة"]},{id:"tutor",label:"مدرس ودروس خصوصية",keywords:["مدرس","معلم","دروس","تدريس","شرح","مادة","ثانوية"]}].find(s=>s.keywords.some(a=>e.includes(a))),G=l==="services"||e.includes("خدمة")||e.includes("خدمات")||e.includes("صناع")||e.includes("حرفي")||e.includes("فني")||e.includes("شغل حر");if(l==="services"||b||G&&!e.includes("محل")&&!e.includes("مطعم")&&!e.includes("عيادة")&&!e.includes("مستشفى")){let s=[];if(b&&(s=t.filter(a=>{const i=`${a.name||""} ${a.category||""} ${a.description||""} ${a.providerName||""}`.toLowerCase();return b.keywords.some(n=>i.includes(n))})),s.length===0){const a=["عايز","عاوز","محتاج","أبحث","ابحث","فين","ممكن","أحسن","احسن","أفضل","افضل","طلخا","خدمة","خدمات","فني"],i=m.filter(n=>n.length>=3&&!a.includes(n));i.length>0&&(s=t.filter(n=>{const f=`${n.name||""} ${n.category||""} ${n.description||""} ${n.providerName||""}`.toLowerCase();return i.some($=>f.includes($))}))}if(s.length>0){const a=s.slice(0,3),i=a.map((n,f)=>{const $=n.description?`
📝 **الوصف:** ${n.description}`:"";return`🛠️ **${f+1}. ${n.name}** (${n.category})
مقدم الخدمة: **${n.providerName||"معتمد"}** | 📞 هاتف: \`${n.phone||n.whatsapp||"عبر التطبيق"}\`${$}`}).join(`

`);return`مرحباً بك! 👋 إليك المتخصصين المعتمدين في **${b?b.label:g||"الخدمات المطلوبة"}**:

${i}

:::action{type="services", ids="${a.map(n=>n.id).join(",")}", label="💼 عرض هذه الخدمات في الدليل مباشرة"}:::`}else if(b){const a=y.filter(i=>{const n=`${i.name||""} ${i.address||""} ${i.description||""} ${i.type||""}`.toLowerCase();return b.keywords.some(f=>n.includes(f))});if(a.length>0){const i=a.slice(0,3).map((n,f)=>`📍 **${f+1}. ${n.name}**
العنوان: ${n.address||"طلخا"}${n.phone?` | 📞 هاتف: \`${n.phone}\``:""}`).join(`

`);return`عذراً، لا يوجد حالياً فني مستقل مسجل بمهنة **${b.label}** في قسم الخدمات، ولكن وجدنا أماكن ومحلات ذات صلة على الخريطة بمدينة طلخا:

${i}

:::action{type="map", ids="${a.slice(0,3).map(n=>n.id).join(",")}", label="📍 عرض الأماكن ذات الصلة على الخريطة 🗺️"}:::`}return`عذراً، لا يوجد حالياً فني أو مقدم خدمة مسجل بمهنة **${b.label}** في منصة Hayzo بمدينة طلخا.

💡 نرحب دائماً بانضمام الفنيين والحرفيين عبر إضافة خدماتهم في قسم الخدمات بالتطبيق لخدمة أهالي طلخا.`}else if(l==="services")return`عذراً، لم نجد خدمات مطابقة لبحثك عن "**${g}**" حالياً في دليل خدمات طلخا.

💡 يمكنك استعراض كافة الخدمات المتاحة أو إضافة خدمتك عبر قسم الخدمات بالتطبيق.`}if((e.includes("عقار")||e.includes("عقارات")||e.includes("شقة")||e.includes("شقق")||e.includes("فيلا")||e.includes("سكن")||e.includes("إيجار")&&!e.includes("سيارة")||e.includes("ايجار")&&!e.includes("سيارة")||e.includes("للبيع")||e.includes("سعر المتر"))&&M.length>0){const s=e.includes("إيجار")||e.includes("ايجار")||e.includes("أجر")||e.includes("تأجير"),a=e.includes("بيع")||e.includes("شراء")||e.includes("اشتري")||e.includes("تمليك"),i=M.filter(n=>{if(s&&n.purpose!=="rent"||a&&n.purpose!=="sale")return!1;const f=`${n.title||""} ${n.address||""} ${n.description||""} ${n.price||""}`.toLowerCase();return m.some($=>f.includes($))});if(i.length>0){const n=i.slice(0,3);return`إليك العقارات المتاحة في طلخا:

${n.map($=>`🏡 **${$.title}**
💰 السعر: ${$.price} | 📍 العنوان: ${$.address}
📞 للتواصل: ${$.ownerPhone} (${$.ownerName||"المالك"})`).join(`

`)}

📌 يمكنك تصفح قسم **سوق العقارات** بالتطبيق للتواصل المباشر مع الملاك عبر واتساب!

:::action{type="real-estate", ids="${n.map($=>$.id).join(",")}", label="🏠 عرض العقارات المطابقة فقط في السوق"}:::`}else return`عذراً، لم نجد عقارات مطابقة للمواصفات المطلوبة حالياً في سوق عقارات طلخا.

💡 يمكنك مراجعة قسم **سوق العقارات** في التطبيق لمتابعة أحدث الإعلانات اليومية.`}if(j||["محل","مطعم","كافيه","صيدلية","دكتور","عيادة","مستشفى","مدرسة","سنتر","مدرس","سوبر ماركت","ماركت","هدوم","ملابس","أحذية","أزياء","بوتيك","خياط","حلاق","كوافير","جيم","gym","مغسلة","مكتبة","بنك","صراف","موقف","معدية","قطار","شارع","عنوان","مكان"].some(s=>e.includes(s))){let s=null,a="الأماكن";e.includes("صيدلية")||e.includes("دوا")||e.includes("علاج")||e.includes("روشتة")?(s="pharmacy",a="الصيدليات والمراكز الطبية 💊"):e.includes("مطعم")||e.includes("أكل")||e.includes("وجبة")||e.includes("كشري")||e.includes("بيتزا")||e.includes("فول")?(s="restaurant",a="المطاعم والأغذية 🍽️"):e.includes("كافيه")||e.includes("قهوة")||e.includes("شاي")||e.includes("مشروب")?(s="cafe",a="الكافيهات والمقاهي ☕"):e.includes("دكتور")||e.includes("عيادة")||e.includes("طبيب")||e.includes("كشف")||e.includes("مستشفى")?(s="clinic",a="العيادات والمراكز الطبية 🏥"):e.includes("مواصلات")||e.includes("موقف")||e.includes("معدية")||e.includes("قطار")||e.includes("ميكروباص")?(s="transport",a="المواصلات وخطوط السير 🚌"):(e.includes("هدوم")||e.includes("ملابس")||e.includes("أزياء")||e.includes("بوتيك")||e.includes("محل"))&&(s="shop",a="المحلات التجارية 🛍️");let i=y.filter(n=>{if(s&&(n.type===s||n.type.includes(s)))return!0;const f=`${n.name||""} ${n.description||""} ${n.address||""} ${n.type||""}`.toLowerCase();return p&&f.includes(p.name.toLowerCase())?!0:m.some($=>f.includes($))});if(i.length===0&&s&&(i=y.filter(n=>n.type===s||n.type.includes(s))),i.length>0){const n=p?p.coords:[31.054,31.375],f=i.map(h=>{const _=Number(h.lat)||31.054,q=Number(h.lng)||31.375,N=te(n[0],n[1],_,q);return{...h,calculatedDistanceKm:N}});f.sort((h,_)=>x?_.calculatedDistanceKm-h.calculatedDistanceKm:h.calculatedDistanceKm-_.calculatedDistanceKm);const $=f.slice(0,4),U=p?`في **${p.name}**`:"في مدينة طلخا",X=$.map((h,_)=>{const q=Math.round(h.calculatedDistanceKm*1e3),N=q<1e3?`${q} متر`:`${h.calculatedDistanceKm.toFixed(1)} كم`,Y=h.phone?` · 📞 \`${h.phone}\``:"",V=h.address?` · 📍 ${h.address}`:"";let O="";return p&&h.calculatedDistanceKm>.6&&(O=`
   ↳ ⚠️ *أقرب بديل متاح: يقع في [${h.address||h.name}]*`),`**${_+1}. ${h.name}** (يبعد حوالي ${N})${V}${Y}${O}`}).join(`

`);return`مرحباً بك! 👋 إليك أقرب **${a}** ${U} مرتبة حسب الأقرب لموقعك:

${X}

💡 اضغط على الزر الأخضر بالأسفل لمعاينة أماكنهم ورسم مسار الوصول على الخريطة فوراً!

:::action{type="map", ids="${$.map(h=>h.id).join(",")}", label="📍 عرض الأماكن الـ ${$.length} على الخريطة مباشرة 🗺️"}:::`}else return`عذراً، لم نجد أماكن مطابقة لبحثك في دليل طلخا حالياً.

💡 يمكنك استعراض الخريطة التفاعلية لاكتشاف كافة الأماكن والأنشطة المسجلة.`}return(e.includes("تايه")||e.includes("ضايع")||e.includes("مفقود")||e.includes("اختفاء"))&&C.length>0?`إليك بلاغات المفقودين الحالية في طلخا:

${C.map(a=>`⚠️ **${a.name}** (العمر: ${a.age||"-"}) - آخر ظهور: ${a.lastSeenLocation||"طلخا"} - 📞 تواصل: ${a.contactPhone}`).join(`

`)}

نرجو التواصل فوراً مع الأرقام الموضحة عند توفر أي معلومات.`:(e.includes("كورس")||e.includes("ورشة")||e.includes("تدريب")||e.includes("تعليم"))&&T.length>0?`إليك الكورسات والتدريبات المتاحة حالياً:

${T.slice(0,3).map(a=>`🎓 **${a.name}**
المدرب: ${a.instructor} | 📅 الموعد: ${a.date} | 📍 ${a.location||"طلخا"}`).join(`

`)}`:(e.includes("خبر")||e.includes("أخبار")||e.includes("جديد")||e.includes("حدث"))&&S.length>0?`إليك أحدث الأخبار في مدينة طلخا:

${S.slice(0,3).map(a=>{var i;return`📰 **${a.title}**
${(i=a.content)==null?void 0:i.slice(0,100)}...`}).join(`

`)}`:`مرحباً بك في منصة وتطبيق Hayzo لمدينة طلخا والدقهلية! 👋

يمكنني مساعدتك في:
1. العثور على الأماكن والمحلات والخدمات على الخريطة التفاعلية 🗺️
2. استعراض شقق وعقارات طلخا للبيع والإيجار 🏡
3. خطوط المواصلات ومواعيد القطارات والمعديات 🚌
4. الكورسات وفرص التطوع وآخر الأخبار المحلية 📰

ما الذي تبحث عنه بالتحديد؟`}const I=new Map;async function ne(c){if(I.has(c))return I.get(c);try{const o=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${c}`}});if(o.ok){const l=((await o.json()).data||[]).map(m=>m.id),e=["llama-3.3-70b-versatile","llama-3.1-70b-versatile","llama-3.1-8b-instant","llama3-70b-8192","llama3-8b-8192","deepseek-r1-distill-llama-70b","qwen-2.5-32b","mixtral-8x7b-32768","gemma2-9b-it"].filter(m=>l.includes(m));if(e.length>0){const m=e.slice(0,2);return I.set(c,m),m}}}catch{}return["llama-3.1-8b-instant"]}async function re(c){const o=(c||"").trim().replace(/^["']|["']$/g,"");if(!o)return{ok:!1,status:"invalid",error:"المفتاح فارغ"};if(o.startsWith("gsk_"))try{const r=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${o}`}});return r.ok?{ok:!0,status:"active",provider:"Groq (Llama 3.3 70B ⚡)",error:""}:r.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز معدل الطلبات (Groq 429)"}:{ok:!1,status:"invalid",error:`مفتاح Groq غير صالح (${r.status})`}}catch(r){return{ok:!1,status:"error",error:r.message||"فشل الاتصال بـ Groq"}}if(o.startsWith("sk-or-"))try{const r=await fetch("https://openrouter.ai/api/v1/auth/key",{headers:{Authorization:`Bearer ${o}`}});return r.ok?{ok:!0,status:"active",provider:"OpenRouter (DeepSeek R1 / Llama 3.3)",error:""}:{ok:!1,status:"invalid",error:`مفتاح OpenRouter غير صالح (${r.status})`}}catch(r){return{ok:!1,status:"error",error:r.message||"فشل الاتصال بـ OpenRouter"}}try{const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(o)}`);return r.ok?{ok:!0,status:"active",provider:"Google Gemini (2.0 Flash)",modelsCount:((await r.json()).models||[]).length,error:""}:r.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز الحصة المجانية (Quota Full / 429)"}:r.status===400||r.status===401||r.status===403?{ok:!1,status:"invalid",error:"المفتاح غير صالح أو ملغي (Invalid Key)"}:{ok:!1,status:"error",error:`خطأ اتصال (${r.status})`}}catch(r){return{ok:!1,status:"error",error:r.message||"فشل الاتصال بخوادم Google"}}}async function ae(c,o=[]){var e,m,y,w,L,M,T,S,C,t,u,p;const r=Z(),d=ee("geminiApiKey"),l=[...r];if(d&&!l.some(x=>x.key===d)&&l.push({id:"single_fallback",key:d,label:"مفتاح الإعدادات"}),l.length===0)return R(c);const g=se(c);for(let x=0;x<l.length;x++){const j=l[x],P=(e=j.key)==null?void 0:e.trim().replace(/^["']|["']$/g,"");if(!P)continue;if(P.startsWith("gsk_")){const v=await ne(P);for(const k of v)try{const A=o.filter(i=>i&&i.text&&typeof i.text=="string"&&i.text.trim()).map(i=>({role:i.role==="model"||i.role==="assistant"?"assistant":"user",content:i.text.trim()})),s=[{role:"system",content:g},...A,{role:"user",content:(c||"").trim()}],a=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${P}`,"Content-Type":"application/json"},body:JSON.stringify({model:k,messages:s,temperature:.5,max_tokens:800})});if(a.ok){let n=(w=(y=(m=(await a.json()).choices)==null?void 0:m[0])==null?void 0:y.message)==null?void 0:w.content;if(n&&(n=n.replace(/<think>[\s\S]*?<\/think>/gi,"").trim(),n))return K(j.id,"active"),n}if(a.status===429){K(j.id,"quota_exceeded","تجاوز الحصة (429)");break}if(a.status===401||a.status===403){K(j.id,"invalid","مفتاح Groq غير صالح");break}}catch{}continue}if(P.startsWith("sk-or-")){try{const v=[{role:"system",content:g},...o.map(A=>({role:A.role==="model"||A.role==="assistant"?"assistant":"user",content:A.text||""})),{role:"user",content:c}],k=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${P}`,"Content-Type":"application/json","HTTP-Referer":window.location.origin,"X-Title":"Hayzo Talkha"},body:JSON.stringify({model:"meta-llama/llama-3.3-70b-instruct:free",messages:v,temperature:.6,max_tokens:1024})});if(k.ok){const s=(T=(M=(L=(await k.json()).choices)==null?void 0:L[0])==null?void 0:M.message)==null?void 0:T.content;if(s)return K(j.id,"active"),s}}catch(v){console.warn("OpenRouter request error:",v)}continue}if(!P.startsWith("AIzaSy"))continue;const b=[{role:"user",parts:[{text:g+`

---
رسالة المستخدم الأولى: مرحباً`}]},{role:"model",parts:[{text:"أهلاً بك في منصة Hayzo! 👋 كيف أقدر أساعدك اليوم؟ يمكنني مساعدتك في العثور على الأماكن والكورسات والفعاليات والخدمات بمدينة طلخا."}]}];for(const v of o)b.push({role:v.role==="user"?"user":"model",parts:[{text:v.text}]});b.push({role:"user",parts:[{text:c}]});const G=["gemini-2.0-flash","gemini-1.5-flash-latest","gemini-1.5-flash","gemini-2.0-flash-lite","gemini-1.5-pro"];for(const v of G)try{const k=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${v}:generateContent?key=${encodeURIComponent(P)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:b,generationConfig:{temperature:.7,maxOutputTokens:1024}})});if(k.ok){const s=(p=(u=(t=(C=(S=(await k.json()).candidates)==null?void 0:S[0])==null?void 0:C.content)==null?void 0:t.parts)==null?void 0:u[0])==null?void 0:p.text;if(s)return K(j.id,"active"),s}if(k.status===429){K(j.id,"quota_exceeded","تجاوز الحصة (429)");break}if(k.status===400||k.status===401||k.status===403){K(j.id,"invalid",`غير صالح (${k.status})`);break}}catch(k){console.warn(`Error on Gemini key [${j.label}] with model [${v}]:`,k)}}return R(c)}async function oe({targets:c=[],area:o="",resultCount:r=5,queries:d={}}){const l={places:"أماكن ومعالم الخريطة",services:"خدمات وحرفيين",real_estate:"سوق العقارات",transport:"المواصلات والتنقل"};let e=['طلب بحث وترشيح دقيق من استمارة "المكتشف الذكي":',`- القطاعات المطلوبة: ${c.map(w=>l[w]||w).join(" و ")}`,`- المنطقة أو الحي المحدد: ${o||"كل طلخا"}`,`- عدد النتائج المطلوبة: ${r}`];const m=D(),y=o?m.find(w=>w.name===o||o.includes(w.name)||w.keywords&&w.keywords.some(L=>o.includes(L))):null;return y&&(e.push(`- إحداثيات المنطقة الجغرافية المحددة: [${y.coords[0]}, ${y.coords[1]}]`),e.push(`- تنبيه جغرافي إلزامي: احسب المسافة للأماكن وقدم الأقرب فالأقرب لإحداثيات [${y.name}]. إذا جلبت مكاناً من منطقة أخرى أو بعيدة، وضّح بوضوح اسم المنطقة التي جلبته منها ومسافته بالكيلومتر/المتر عن [${y.name}].`)),c.includes("places")&&d.places&&e.push(`- متطلبات الأماكن: ${d.places}`),c.includes("services")&&d.services&&e.push(`- متطلبات الخدمات: ${d.services}`),c.includes("real_estate")&&d.real_estate&&e.push(`- متطلبات العقارات: ${d.real_estate}`),c.includes("transport")&&d.transport&&e.push(`- متطلبات المواصلات: ${d.transport}`),e.push("- قاعدة صارمة للمطابقة والأمانة: التزم بالتخصص والمجال المطلوب تحديداً دون أي انحراف، واعتمد على وصف الخدمة ومحتواها. إذا كان المطلوب عدداً معيناً ولم تجد إلا عنصراً واحداً يطابق، اذكر هذا العنصر فقط ولا تكمل العدد بعناصر غير مطابقة نهائياً. وإذا لم يتوفر أي تخصص مطابق للطلب، صرّح بوضوح تام بعدم وجوده حالياً في المنصة."),e.push(`المطلوب: رشّح أفضل ${r} نتائج مطابقة تماماً (مع إعطاء الأولوية للعناصر المثبتة ⭐ أولاً)، واذكر أسباب الترشيح ومعلومات التواصل بدقة. واحرص على إنهاء ردك بوسوم الإجراءات التفاعلية الحصرية :::action{type="...", ids="...", label="..."}::: لكل قطاع تم ترشيحه.`),ae(e.join(`
`))}export{oe as a,re as t};
