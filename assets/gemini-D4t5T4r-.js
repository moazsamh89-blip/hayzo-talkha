import{an as z,be as ee,bw as te,bp as _,g as Q,e as H,ae as J,a2 as U,G as X,p as Y,Y as V,a7 as Z}from"./index-HfKRhA9C.js";function F(d,l,o,p){if(!d||!l||!o||!p)return 999;const u=6371,w=(o-d)*(Math.PI/180),e=(p-l)*(Math.PI/180),f=Math.sin(w/2)*Math.sin(w/2)+Math.cos(d*(Math.PI/180))*Math.cos(o*(Math.PI/180))*Math.sin(e/2)*Math.sin(e/2),g=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f));return u*g}function se(d=""){const o=H().map(t=>`• [${t.label} ${t.icon||"📌"}] (معرّف: ${t.id})`).join(`
`),u=z().map(t=>`• منطقة: ${t.name} [إحداثيات: ${t.coords[0]}, ${t.coords[1]}]`).join(`
`),w=Q().filter(t=>t&&t.status==="approved"),f=(d||"").toLowerCase().split(/\s+/).filter(t=>t.length>1);let g=w;if(f.length>0){const t=w.filter($=>{const h=`${$.name||""} ${$.address||""} ${$.description||""} ${$.type||""}`.toLowerCase();return f.some(S=>h.includes(S))});t.length>0&&(g=t)}g.sort((t,$)=>{if(!!$.pinned!=!!t.pinned)return $.pinned?1:-1;const h=(t.rating_sum||0)/Math.max(t.rating_count||1,1);return($.rating_sum||0)/Math.max($.rating_count||1,1)-h});const P=g.slice(0,15).map(t=>{const $=t.lat&&t.lng?` [إحداثيات: ${Number(t.lat).toFixed(4)}, ${Number(t.lng).toFixed(4)}]`:"",h=t.pinned?"⭐ [مثبت]":"";return`[ID: ${t.id}] ${h} ${t.name} (التصنيف: ${t.type})${$} - العنوان: ${t.address||"طلخا"}`}).join(`
`),b=U().slice(0,4).map(t=>`• ${t.name} - المدرب: ${t.instructor} - الموعد: ${t.date} - السعر: ${t.price||"مجاني"}`).join(`
`);X().filter(t=>t.status==="upcoming").slice(0,3).map(t=>`• ${t.title} - الموعد: ${t.date} - المكان: ${t.location_name||"طلخا"}`).join(`
`),Y().slice(0,3).map(t=>{var $;return`• ${t.title} - ${($=t.content)==null?void 0:$.slice(0,80)}...`}).join(`
`),V().filter(t=>t.status==="missing").slice(0,3).map(t=>`• بلاغ مفقود: ${t.name} - هاتف: ${t.contactPhone}`).join(`
`);const L=J().slice(0,4),C=L.length>0?L.map(t=>`[ID: ${t.id}] ${t.title} | ${t.purpose==="rent"?"إيجار":"بيع"} | السعر: ${t.price} | العنوان: ${t.address} | المالك: ${t.ownerPhone}`).join(`
`):"لا توجد عقارات مسجلة حالياً",T=Z().filter(t=>t.status==="approved").slice(0,8),K=T.length>0?T.map(t=>{const $=t.description?` | الوصف: ${t.description.slice(0,120)}`:"";return`[ID: ${t.id}] ${t.name} (${t.category}) - مقدم الخدمة: ${t.providerName||""} - هاتف: ${t.phone||t.whatsapp||"-"}${$}`}).join(`
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
${o||"لا توجد تصنيفات"}

=== خريطة مناطق وأحياء مدينة طلخا وإحداثياتها ===
${u}

=== دليل الأماكن والمعالم في طلخا ===
${P||"لا توجد أماكن مسجلة حالياً"}

=== سوق وعقارات طلخا ===
${C}

=== الكورسات والخدمات ===
${b||""}
${K||""}

=== قواعد وسوم الأزرار التفاعلية (إلزامية في نهاية الرد) ===
- لأماكن الخريطة: :::action{type="map", ids="id1,id2", label="📍 عرض الأماكن الـ X على الخريطة مباشرة 🗺️"}:::
- للخدمات: :::action{type="services", ids="os1,os2", label="💼 عرض الخدمات المناسبة في الدليل"}:::
- للعقارات: :::action{type="real-estate", ids="re1,re2", label="🏠 عرض العقارات المطابقة في السوق"}:::
  `.trim()}function W(d){const l=(d||"").trim();let o=[],p="",u=null;if(l.includes("المكتشف الذكي")||l.includes("طلب بحث وترشيح دقيق")||l.includes("متطلبات")){const n=l.match(/-\s*المنطقة أو الحي المحدد:\s*([^\n\r]+)/);n&&n[1]&&!n[1].includes("كل طلخا")&&(p=n[1].trim());const i=l.match(/-\s*متطلبات الخدمات:\s*([^\n\r]+)/),a=l.match(/-\s*متطلبات الأماكن:\s*([^\n\r]+)/),s=l.match(/-\s*متطلبات العقارات:\s*([^\n\r]+)/),r=l.match(/-\s*متطلبات المواصلات:\s*([^\n\r]+)/);i&&i[1]&&(o.push(i[1].trim()),u="services"),a&&a[1]&&(o.push(a[1].trim()),u||(u="places")),s&&s[1]&&(o.push(s[1].trim()),u||(u="real_estate")),r&&r[1]&&(o.push(r[1].trim()),u||(u="transport"))}const w=o.length>0?o.join(" "):l,e=w.toLowerCase().trim(),f=e.split(/\s+/).filter(n=>n.length>1),g=Q().filter(n=>n&&n.status==="approved"),P=H(),b={};P.forEach(n=>{b[n.id]=n.label||n.id});const L=J(),C=U();X();const T=Y(),K=V().filter(n=>n.status==="missing"),t=Z().filter(n=>n.status==="approved"),$=z();let h=null;if(p&&(h=$.find(n=>n.name===p||p.includes(n.name)||n.keywords&&n.keywords.some(i=>p.includes(i)))),!h){for(const n of $)if((n.keywords&&Array.isArray(n.keywords)&&n.keywords.length>0?n.keywords:[n.name]).some(a=>a&&e.includes(a.toLowerCase()))){h=n;break}}const S=e.includes("أبعد")||e.includes("ابعد")||e.includes("بعيد عن"),A=h||S||e.includes("أقرب")||e.includes("اقرب")||e.includes("قريب من")||e.includes("جنب")||e.includes("بجوار")||e.includes("عند"),y=u==="places"||u==="real_estate"||u==="transport"?null:[{id:"plumber",label:"سباك / أعمال سباكة",keywords:["سباك","سباكة","سباكين","صحي","مواسير","حنفية","خلاط","تسريب"]},{id:"carpenter",label:"نجار / أعمال نجارة",keywords:["نجار","نجارة","نجارين","خشب","أبواب","شبابيك","موبيليا","غرف نوم"]},{id:"electrician",label:"كهربائي / أعمال كهرباء",keywords:["كهربائي","كهرباء","كهربائية","نجف","فيش","توصيلات","لوحات"]},{id:"painter",label:"نقاش / أعمال دهانات",keywords:["نقاش","نقاشة","دهان","دهانات","بويات","تشطيب"]},{id:"ac",label:"فني تكييف وتبريد",keywords:["تكييف","تبريد","تكييفات","فريون","شحن تكييف"]},{id:"appliances",label:"صيانة أجهزة منزلية",keywords:["غسالة","غسالات","ثلاجة","ثلاجات","بوتاجاز","سخان","سخانات","أجهزة منزلية"]},{id:"blacksmith",label:"حداد / أعمال حدادة",keywords:["حداد","حدادة","حديد","كريتال"]},{id:"alumin",label:"فني ألوميتال",keywords:["ألوميتال","الوميتال","مطابخ الوميتال"]},{id:"dev",label:"مبرمج ومطور برمجيات",keywords:["مبرمج","برمجة","مطور","موقع","تطبيق","web","app"]},{id:"design",label:"مصمم جرافيك",keywords:["مصمم","تصميم","جرافيك","لوجو","شعار"]},{id:"food",label:"أكل بيتي وطبخ ومأكولات",keywords:["أكل","اكل","طعام","وجبات","وجبة","أكل بيتي","اكل بيتى","فروزن","حلويات","طباخ","طبخ","مأكولات","محاشي","عزومات","طبيخ","سفرة"]},{id:"tutor",label:"مدرس ودروس خصوصية",keywords:["مدرس","معلم","دروس","تدريس","شرح","مادة","ثانوية"]}].find(n=>n.keywords.some(i=>e.includes(i))),D=u==="services"||e.includes("خدمة")||e.includes("خدمات")||e.includes("صناع")||e.includes("حرفي")||e.includes("فني")||e.includes("شغل حر");if(u==="services"||y||D&&!e.includes("محل")&&!e.includes("مطعم")&&!e.includes("عيادة")&&!e.includes("مستشفى")){let n=[];if(y&&(n=t.filter(i=>{const a=`${i.name||""} ${i.category||""} ${i.description||""} ${i.providerName||""}`.toLowerCase();return y.keywords.some(s=>a.includes(s))})),n.length===0){const i=["عايز","عاوز","محتاج","أبحث","ابحث","فين","ممكن","أحسن","احسن","أفضل","افضل","طلخا","خدمة","خدمات","فني"],a=f.filter(s=>s.length>=3&&!i.includes(s));a.length>0&&(n=t.filter(s=>{const r=`${s.name||""} ${s.category||""} ${s.description||""} ${s.providerName||""}`.toLowerCase();return a.some(m=>r.includes(m))}))}if(n.length>0){const i=n.slice(0,3),a=i.map((s,r)=>{const m=s.description?`
📝 **الوصف:** ${s.description}`:"";return`🛠️ **${r+1}. ${s.name}** (${s.category})
مقدم الخدمة: **${s.providerName||"معتمد"}** | 📞 هاتف: \`${s.phone||s.whatsapp||"عبر التطبيق"}\`${m}`}).join(`

`);return`مرحباً بك! 👋 إليك المتخصصين المعتمدين في **${y?y.label:w||"الخدمات المطلوبة"}**:

${a}

:::action{type="services", ids="${i.map(s=>s.id).join(",")}", label="💼 عرض هذه الخدمات في الدليل مباشرة"}:::`}else if(y){const i=g.filter(a=>{const s=`${a.name||""} ${a.address||""} ${a.description||""} ${a.type||""}`.toLowerCase();return y.keywords.some(r=>s.includes(r))});if(i.length>0){const a=i.slice(0,3).map((s,r)=>`📍 **${r+1}. ${s.name}**
العنوان: ${s.address||"طلخا"}${s.phone?` | 📞 هاتف: \`${s.phone}\``:""}`).join(`

`);return`عذراً، لا يوجد حالياً فني مستقل مسجل بمهنة **${y.label}** في قسم الخدمات، ولكن وجدنا أماكن ومحلات ذات صلة على الخريطة بمدينة طلخا:

${a}

:::action{type="map", ids="${i.slice(0,3).map(s=>s.id).join(",")}", label="📍 عرض الأماكن ذات الصلة على الخريطة 🗺️"}:::`}return`عذراً، لا يوجد حالياً فني أو مقدم خدمة مسجل بمهنة **${y.label}** في منصة Hayzo بمدينة طلخا.

💡 نرحب دائماً بانضمام الفنيين والحرفيين عبر إضافة خدماتهم في قسم الخدمات بالتطبيق لخدمة أهالي طلخا.`}else if(u==="services")return`عذراً، لم نجد خدمات مطابقة لبحثك عن "**${w}**" حالياً في دليل خدمات طلخا.

💡 يمكنك استعراض كافة الخدمات المتاحة أو إضافة خدمتك عبر قسم الخدمات بالتطبيق.`}if((e.includes("عقار")||e.includes("عقارات")||e.includes("شقة")||e.includes("شقق")||e.includes("فيلا")||e.includes("سكن")||e.includes("إيجار")&&!e.includes("سيارة")||e.includes("ايجار")&&!e.includes("سيارة")||e.includes("للبيع")||e.includes("سعر المتر"))&&L.length>0){const n=e.includes("إيجار")||e.includes("ايجار")||e.includes("أجر")||e.includes("تأجير"),i=e.includes("بيع")||e.includes("شراء")||e.includes("اشتري")||e.includes("تمليك"),a=L.filter(s=>{if(n&&s.purpose!=="rent"||i&&s.purpose!=="sale")return!1;const r=`${s.title||""} ${s.address||""} ${s.description||""} ${s.price||""}`.toLowerCase();return f.some(m=>r.includes(m))});if(a.length>0){const s=a.slice(0,3);return`إليك العقارات المتاحة في طلخا:

${s.map(m=>`🏡 **${m.title}**
💰 السعر: ${m.price} | 📍 العنوان: ${m.address}
📞 للتواصل: ${m.ownerPhone} (${m.ownerName||"المالك"})`).join(`

`)}

📌 يمكنك تصفح قسم **سوق العقارات** بالتطبيق للتواصل المباشر مع الملاك عبر واتساب!

:::action{type="real-estate", ids="${s.map(m=>m.id).join(",")}", label="🏠 عرض العقارات المطابقة فقط في السوق"}:::`}else return`عذراً، لم نجد عقارات مطابقة للمواصفات المطلوبة حالياً في سوق عقارات طلخا.

💡 يمكنك مراجعة قسم **سوق العقارات** في التطبيق لمتابعة أحدث الإعلانات اليومية.`}if(A||["محل","مطعم","كافيه","صيدلية","دكتور","عيادة","مستشفى","مدرسة","سنتر","مدرس","سوبر ماركت","ماركت","هدوم","ملابس","أحذية","أزياء","بوتيك","خياط","حلاق","كوافير","جيم","gym","مغسلة","مكتبة","بنك","صراف","موقف","معدية","قطار","شارع","عنوان","مكان"].some(n=>e.includes(n))){let n=null,i="الأماكن";e.includes("صيدلية")||e.includes("دوا")||e.includes("علاج")||e.includes("روشتة")?(n="pharmacy",i="الصيدليات والمراكز الطبية 💊"):e.includes("مطعم")||e.includes("أكل")||e.includes("وجبة")||e.includes("كشري")||e.includes("بيتزا")||e.includes("فول")?(n="restaurant",i="المطاعم والأغذية 🍽️"):e.includes("كافيه")||e.includes("قهوة")||e.includes("شاي")||e.includes("مشروب")?(n="cafe",i="الكافيهات والمقاهي ☕"):e.includes("دكتور")||e.includes("عيادة")||e.includes("طبيب")||e.includes("كشف")||e.includes("مستشفى")?(n="clinic",i="العيادات والمراكز الطبية 🏥"):e.includes("مواصلات")||e.includes("موقف")||e.includes("معدية")||e.includes("قطار")||e.includes("ميكروباص")?(n="transport",i="المواصلات وخطوط السير 🚌"):(e.includes("هدوم")||e.includes("ملابس")||e.includes("أزياء")||e.includes("بوتيك")||e.includes("محل"))&&(n="shop",i="المحلات التجارية 🛍️");let a=g.filter(s=>{if(n&&(s.type===n||s.type.includes(n)))return!0;const r=`${s.name||""} ${s.description||""} ${s.address||""} ${s.type||""}`.toLowerCase();return h&&r.includes(h.name.toLowerCase())?!0:f.some(m=>r.includes(m))});if(a.length===0&&n&&(a=g.filter(s=>s.type===n||s.type.includes(n))),a.length>0){const s=h?h.coords:[31.054,31.375],r=a.map(c=>{const j=Number(c.lat)||31.054,N=Number(c.lng)||31.375,q=F(s[0],s[1],j,N);return{...c,calculatedDistanceKm:q}});r.sort((c,j)=>S?j.calculatedDistanceKm-c.calculatedDistanceKm:c.calculatedDistanceKm-j.calculatedDistanceKm);const m=r.slice(0,4),k=h?`في **${h.name}**`:"في مدينة طلخا",G=m.map((c,j)=>{const N=Math.round(c.calculatedDistanceKm*1e3),q=N<1e3?`${N} متر`:`${c.calculatedDistanceKm.toFixed(1)} كم`,O=c.phone?` · 📞 \`${c.phone}\``:"",I=c.address?` · 📍 ${c.address}`:"";let E="";return h&&c.calculatedDistanceKm>.6&&(E=`
   ↳ ⚠️ *أقرب بديل متاح: يقع في [${c.address||c.name}]*`),`**${j+1}. ${c.name}** (يبعد حوالي ${q})${I}${O}${E}`}).join(`

`);return`مرحباً بك! 👋 إليك أقرب **${i}** ${k} مرتبة حسب الأقرب لموقعك:

${G}

💡 اضغط على الزر الأخضر بالأسفل لمعاينة أماكنهم ورسم مسار الوصول على الخريطة فوراً!

:::action{type="map", ids="${m.map(c=>c.id).join(",")}", label="📍 عرض الأماكن الـ ${m.length} على الخريطة مباشرة 🗺️"}:::`}else return`عذراً، لم نجد أماكن مطابقة لبحثك في دليل طلخا حالياً.

💡 يمكنك استعراض الخريطة التفاعلية لاكتشاف كافة الأماكن والأنشطة المسجلة.`}if((e.includes("تايه")||e.includes("ضايع")||e.includes("مفقود")||e.includes("اختفاء"))&&K.length>0)return`إليك بلاغات المفقودين الحالية في طلخا:

${K.map(i=>`⚠️ **${i.name}** (العمر: ${i.age||"-"}) - آخر ظهور: ${i.lastSeenLocation||"طلخا"} - 📞 تواصل: ${i.contactPhone}`).join(`

`)}

نرجو التواصل فوراً مع الأرقام الموضحة عند توفر أي معلومات.`;if((e.includes("كورس")||e.includes("ورشة")||e.includes("تدريب")||e.includes("تعليم"))&&C.length>0)return`إليك الكورسات والتدريبات المتاحة حالياً:

${C.slice(0,3).map(i=>`🎓 **${i.name}**
المدرب: ${i.instructor} | 📅 الموعد: ${i.date} | 📍 ${i.location||"طلخا"}`).join(`

`)}`;if((e.includes("خبر")||e.includes("أخبار")||e.includes("جديد")||e.includes("حدث"))&&T.length>0)return`إليك أحدث الأخبار في مدينة طلخا:

${T.slice(0,3).map(i=>{var a;return`📰 **${i.title}**
${(a=i.content)==null?void 0:a.slice(0,100)}...`}).join(`

`)}`;{const n=new Set(["عايز","عاوز","محتاج","أبحث","ابحث","فين","ممكن","أحسن","احسن","أفضل","افضل","طلخا","خدمة","خدمات","فني","هل","في","من","الي","اللي","على","عن","اين","أين","اريد","أريد","يوجد","بيع","شراء","مكان","وين","ابي"]),i=f.filter(a=>a.length>=3&&!n.has(a));if(i.length>0){const a=g.filter(r=>{const m=`${r.name||""} ${r.description||""} ${r.address||""} ${r.type||""}`.toLowerCase();return i.some(k=>m.includes(k))});if(a.length>0){const r=h?h.coords:[31.054,31.375],k=a.map(c=>{const j=F(r[0],r[1],Number(c.lat)||31.054,Number(c.lng)||31.375);return{...c,calculatedDistanceKm:j}}).sort((c,j)=>c.calculatedDistanceKm-j.calculatedDistanceKm).slice(0,4);return`إليك أقرب النتائج لبحثك في مدينة طلخا:

${k.map((c,j)=>{const N=Math.round(c.calculatedDistanceKm*1e3),q=N<1e3?`${N} متر`:`${c.calculatedDistanceKm.toFixed(1)} كم`,O=c.phone?` · 📞 \`${c.phone}\``:"",I=c.address?` · 📍 ${c.address}`:"";return`**${j+1}. ${c.name}** (يبعد حوالي ${q})${I}${O}`}).join(`

`)}

💡 اضغط على الزر الأخضر لعرضها على الخريطة.

:::action{type="map", ids="${k.map(c=>c.id).join(",")}", label="📍 عرض النتائج على الخريطة 🗺️"}:::`}const s=t.filter(r=>{const m=`${r.name||""} ${r.category||""} ${r.description||""} ${r.providerName||""}`.toLowerCase();return i.some(k=>m.includes(k))});if(s.length>0)return`إليك الخدمات المتاحة في منصة Hayzo:

${s.slice(0,3).map((k,G)=>{const c=k.description?`
📝 **الوصف:** ${k.description}`:"";return`🛠️ **${G+1}. ${k.name}** (${k.category})
مقدم الخدمة: **${k.providerName||"معتمد"}** | 📞 هاتف: \`${k.phone||k.whatsapp||"عبر التطبيق"}\`${c}`}).join(`

`)}

📌 يمكنك الاطلاع على تفاصيل أكثر من قسم **الخدمات** بالتطبيق.`}}return`مرحباً بك في منصة وتطبيق Hayzo لمدينة طلخا والدقهلية! 👋

يمكنني مساعدتك في:
1. العثور على الأماكن والمحلات والخدمات على الخريطة التفاعلية 🗺️
2. استعراض شقق وعقارات طلخا للبيع والإيجار 🏡
3. خطوط المواصلات ومواعيد القطارات والمعديات 🚌
4. الكورسات وفرص التطوع وآخر الأخبار المحلية 📰

ما الذي تبحث عنه بالتحديد؟`}const R=new Map;async function ne(d){if(R.has(d))return R.get(d);try{const l=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${d}`}});if(l.ok){const u=((await l.json()).data||[]).map(f=>f.id),e=["openai/gpt-oss-120b","openai/gpt-oss-20b","qwen/qwen3.8-27b"].filter(f=>u.includes(f));if(e.length>0){const f=e.slice(0,2);return R.set(d,f),f}}}catch{}return["openai/gpt-oss-20b"]}async function oe(d){const l=(d||"").trim().replace(/^["']|["']$/g,"");if(!l)return{ok:!1,status:"invalid",error:"المفتاح فارغ"};if(l.startsWith("gsk_"))try{const o=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${l}`}});return o.ok?{ok:!0,status:"active",provider:"Groq (Llama 3.3 70B ⚡)",error:""}:o.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز معدل الطلبات (Groq 429)"}:{ok:!1,status:"invalid",error:`مفتاح Groq غير صالح (${o.status})`}}catch(o){return{ok:!1,status:"error",error:o.message||"فشل الاتصال بـ Groq"}}if(l.startsWith("sk-or-"))try{const o=await fetch("https://openrouter.ai/api/v1/auth/key",{headers:{Authorization:`Bearer ${l}`}});return o.ok?{ok:!0,status:"active",provider:"OpenRouter (DeepSeek R1 / Llama 3.3)",error:""}:{ok:!1,status:"invalid",error:`مفتاح OpenRouter غير صالح (${o.status})`}}catch(o){return{ok:!1,status:"error",error:o.message||"فشل الاتصال بـ OpenRouter"}}try{const o=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(l)}`);return o.ok?{ok:!0,status:"active",provider:"Google Gemini (2.0 Flash)",modelsCount:((await o.json()).models||[]).length,error:""}:o.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز الحصة المجانية (Quota Full / 429)"}:o.status===400||o.status===401||o.status===403?{ok:!1,status:"invalid",error:"المفتاح غير صالح أو ملغي (Invalid Key)"}:{ok:!1,status:"error",error:`خطأ اتصال (${o.status})`}}catch(o){return{ok:!1,status:"error",error:o.message||"فشل الاتصال بخوادم Google"}}}async function ie(d,l=[],o=""){var f,g,P,b,L,C,T,K,t,$,h,S;const p=ee(),u=te("geminiApiKey"),w=[...p];if(u&&!w.some(A=>A.key===u)&&w.push({id:"single_fallback",key:u,label:"مفتاح الإعدادات"}),w.length===0)return W(o||d);const e=se(d);for(let A=0;A<w.length;A++){const M=w[A],y=(f=M.key)==null?void 0:f.trim().replace(/^["']|["']$/g,"");if(!y)continue;if(y.startsWith("gsk_")){const x=await ne(y);for(const v of x)try{const n=l.filter(s=>s&&s.text&&typeof s.text=="string"&&s.text.trim()).map(s=>({role:s.role==="model"||s.role==="assistant"?"assistant":"user",content:s.text.trim()})),i=[{role:"system",content:e},...n,{role:"user",content:(d||"").trim()}],a=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${y}`,"Content-Type":"application/json"},body:JSON.stringify({model:v,messages:i,temperature:.5,max_tokens:800})});if(a.ok){let r=(b=(P=(g=(await a.json()).choices)==null?void 0:g[0])==null?void 0:P.message)==null?void 0:b.content;if(r&&(r=r.replace(/<think>[\s\S]*?<\/think>/gi,"").trim(),r))return _(M.id,"active"),r}if(a.status===429){_(M.id,"quota_exceeded","تجاوز الحصة (429)");break}if(a.status===401||a.status===403){_(M.id,"invalid","مفتاح Groq غير صالح");break}}catch{}continue}if(y.startsWith("sk-or-")){try{const x=[{role:"system",content:e},...l.map(n=>({role:n.role==="model"||n.role==="assistant"?"assistant":"user",content:n.text||""})),{role:"user",content:d}],v=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${y}`,"Content-Type":"application/json","HTTP-Referer":window.location.origin,"X-Title":"Hayzo Talkha"},body:JSON.stringify({model:"meta-llama/llama-3.3-70b-instruct:free",messages:x,temperature:.6,max_tokens:1024})});if(v.ok){const i=(T=(C=(L=(await v.json()).choices)==null?void 0:L[0])==null?void 0:C.message)==null?void 0:T.content;if(i)return _(M.id,"active"),i}}catch(x){console.warn("OpenRouter request error:",x)}continue}if(!y.startsWith("AIzaSy"))continue;const D=[{role:"user",parts:[{text:e+`

---
رسالة المستخدم الأولى: مرحباً`}]},{role:"model",parts:[{text:"أهلاً بك في منصة Hayzo! 👋 كيف أقدر أساعدك اليوم؟ يمكنني مساعدتك في العثور على الأماكن والكورسات والفعاليات والخدمات بمدينة طلخا."}]}];for(const x of l)D.push({role:x.role==="user"?"user":"model",parts:[{text:x.text}]});D.push({role:"user",parts:[{text:d}]});const B=["gemini-2.0-flash","gemini-1.5-flash-latest","gemini-1.5-flash","gemini-2.0-flash-lite","gemini-1.5-pro"];for(const x of B)try{const v=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${x}:generateContent?key=${encodeURIComponent(y)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:D,generationConfig:{temperature:.7,maxOutputTokens:1024}})});if(v.ok){const i=(S=(h=($=(t=(K=(await v.json()).candidates)==null?void 0:K[0])==null?void 0:t.content)==null?void 0:$.parts)==null?void 0:h[0])==null?void 0:S.text;if(i)return _(M.id,"active"),i}if(v.status===429){_(M.id,"quota_exceeded","تجاوز الحصة (429)");break}if(v.status===400||v.status===401||v.status===403){_(M.id,"invalid",`غير صالح (${v.status})`);break}}catch(v){console.warn(`Error on Gemini key [${M.label}] with model [${x}]:`,v)}}return W(o||d)}async function re({targets:d=[],area:l="",resultCount:o=5,queries:p={}}){const u={places:"أماكن ومعالم الخريطة",services:"خدمات وحرفيين",real_estate:"سوق العقارات",transport:"المواصلات والتنقل"};let e=['طلب بحث وترشيح دقيق من استمارة "المكتشف الذكي":',`- القطاعات المطلوبة: ${d.map(b=>u[b]||b).join(" و ")}`,`- المنطقة أو الحي المحدد: ${l||"كل طلخا"}`,`- عدد النتائج المطلوبة: ${o}`];const f=z(),g=l?f.find(b=>b.name===l||l.includes(b.name)||b.keywords&&b.keywords.some(L=>l.includes(L))):null;g&&(e.push(`- إحداثيات المنطقة الجغرافية المحددة: [${g.coords[0]}, ${g.coords[1]}]`),e.push(`- تنبيه جغرافي إلزامي: احسب المسافة للأماكن وقدم الأقرب فالأقرب لإحداثيات [${g.name}]. إذا جلبت مكاناً من منطقة أخرى أو بعيدة، وضّح بوضوح اسم المنطقة التي جلبته منها ومسافته بالكيلومتر/المتر عن [${g.name}].`)),d.includes("places")&&p.places&&e.push(`- متطلبات الأماكن: ${p.places}`),d.includes("services")&&p.services&&e.push(`- متطلبات الخدمات: ${p.services}`),d.includes("real_estate")&&p.real_estate&&e.push(`- متطلبات العقارات: ${p.real_estate}`),d.includes("transport")&&p.transport&&e.push(`- متطلبات المواصلات: ${p.transport}`),e.push("- قاعدة صارمة للمطابقة والأمانة: التزم بالتخصص والمجال المطلوب تحديداً دون أي انحراف، واعتمد على وصف الخدمة ومحتواها. إذا كان المطلوب عدداً معيناً ولم تجد إلا عنصراً واحداً يطابق، اذكر هذا العنصر فقط ولا تكمل العدد بعناصر غير مطابقة نهائياً. وإذا لم يتوفر أي تخصص مطابق للطلب، صرّح بوضوح تام بعدم وجوده حالياً في المنصة."),e.push(`المطلوب: رشّح أفضل ${o} نتائج مطابقة تماماً (مع إعطاء الأولوية للعناصر المثبتة ⭐ أولاً)، واذكر أسباب الترشيح ومعلومات التواصل بدقة. واحرص على إنهاء ردك بوسوم الإجراءات التفاعلية الحصرية :::action{type="...", ids="...", label="..."}::: لكل قطاع تم ترشيحه.`);const P=Object.values(p).filter(Boolean).join(" ");return ie(e.join(`
`),[],P)}export{re as a,oe as t};
