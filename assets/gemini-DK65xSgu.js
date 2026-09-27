import{an as B,be as ee,bw as te,bp as D,g as Q,e as H,ae as J,a2 as U,G as X,p as Y,Y as V,a7 as Z}from"./index-BBnUrUOR.js";function F(u,l,r,p){if(!u||!l||!r||!p)return 999;const d=6371,k=(r-u)*(Math.PI/180),e=(p-l)*(Math.PI/180),$=Math.sin(k/2)*Math.sin(k/2)+Math.cos(u*(Math.PI/180))*Math.cos(r*(Math.PI/180))*Math.sin(e/2)*Math.sin(e/2),y=2*Math.atan2(Math.sqrt($),Math.sqrt(1-$));return d*y}function se(u=""){const r=H().map(t=>`• [${t.label} ${t.icon||"📌"}] (معرّف: ${t.id})`).join(`
`),d=B().map(t=>`• منطقة: ${t.name} [إحداثيات: ${t.coords[0]}, ${t.coords[1]}]`).join(`
`),k=Q().filter(t=>t&&t.status==="approved"),$=(u||"").toLowerCase().split(/\s+/).filter(t=>t.length>1);let y=k;if($.length>0){const t=k.filter(f=>{const h=`${f.name||""} ${f.address||""} ${f.description||""} ${f.type||""}`.toLowerCase();return $.some(L=>h.includes(L))});t.length>0&&(y=t)}y.sort((t,f)=>{if(!!f.pinned!=!!t.pinned)return f.pinned?1:-1;const h=(t.rating_sum||0)/Math.max(t.rating_count||1,1);return(f.rating_sum||0)/Math.max(f.rating_count||1,1)-h});const b=y.slice(0,15).map(t=>{const f=t.lat&&t.lng?` [إحداثيات: ${Number(t.lat).toFixed(4)}, ${Number(t.lng).toFixed(4)}]`:"",h=t.pinned?"⭐ [مثبت]":"";return`[ID: ${t.id}] ${h} ${t.name} (التصنيف: ${t.type})${f} - العنوان: ${t.address||"طلخا"}`}).join(`
`),S=U().slice(0,4).map(t=>`• ${t.name} - المدرب: ${t.instructor} - الموعد: ${t.date} - السعر: ${t.price||"مجاني"}`).join(`
`);X().filter(t=>t.status==="upcoming").slice(0,3).map(t=>`• ${t.title} - الموعد: ${t.date} - المكان: ${t.location_name||"طلخا"}`).join(`
`),Y().slice(0,3).map(t=>{var f;return`• ${t.title} - ${(f=t.content)==null?void 0:f.slice(0,80)}...`}).join(`
`),V().filter(t=>t.status==="missing").slice(0,3).map(t=>`• بلاغ مفقود: ${t.name} - هاتف: ${t.contactPhone}`).join(`
`);const T=J().slice(0,4),A=T.length>0?T.map(t=>`[ID: ${t.id}] ${t.title} | ${t.purpose==="rent"?"إيجار":"بيع"} | السعر: ${t.price} | العنوان: ${t.address} | المالك: ${t.ownerPhone}`).join(`
`):"لا توجد عقارات مسجلة حالياً",C=Z().filter(t=>t.status==="approved").slice(0,8),N=C.length>0?C.map(t=>{const f=t.description?` | الوصف: ${t.description.slice(0,120)}`:"";return`[ID: ${t.id}] ${t.name} (${t.category}) - مقدم الخدمة: ${t.providerName||""} - هاتف: ${t.phone||t.whatsapp||"-"}${f}`}).join(`
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
${d}

=== دليل الأماكن والمعالم في طلخا ===
${b||"لا توجد أماكن مسجلة حالياً"}

=== سوق وعقارات طلخا ===
${A}

=== الكورسات والخدمات ===
${S||""}
${N||""}

=== قواعد وسوم الأزرار التفاعلية (إلزامية في نهاية الرد) ===
- لأماكن الخريطة: :::action{type="map", ids="id1,id2", label="📍 عرض الأماكن الـ X على الخريطة مباشرة 🗺️"}:::
- للخدمات: :::action{type="services", ids="os1,os2", label="💼 عرض الخدمات المناسبة في الدليل"}:::
- للعقارات: :::action{type="real-estate", ids="re1,re2", label="🏠 عرض العقارات المطابقة في السوق"}:::
  `.trim()}function W(u){const l=(u||"").trim();let r=[],p="",d=null;if(l.includes("المكتشف الذكي")||l.includes("طلب بحث وترشيح دقيق")||l.includes("متطلبات")){const s=l.match(/-\s*المنطقة أو الحي المحدد:\s*([^\n\r]+)/);s&&s[1]&&!s[1].includes("كل طلخا")&&(p=s[1].trim());const a=l.match(/-\s*متطلبات الخدمات:\s*([^\n\r]+)/),i=l.match(/-\s*متطلبات الأماكن:\s*([^\n\r]+)/),n=l.match(/-\s*متطلبات العقارات:\s*([^\n\r]+)/),c=l.match(/-\s*متطلبات المواصلات:\s*([^\n\r]+)/);a&&a[1]&&(r.push(a[1].trim()),d="services"),i&&i[1]&&(r.push(i[1].trim()),d||(d="places")),n&&n[1]&&(r.push(n[1].trim()),d||(d="real_estate")),c&&c[1]&&(r.push(c[1].trim()),d||(d="transport"))}const k=r.length>0?r.join(" "):l,e=k.toLowerCase().trim(),$=e.split(/\s+/).filter(s=>s.length>1),y=Q().filter(s=>s&&s.status==="approved"),b=H(),S={};b.forEach(s=>{S[s.id]=s.label||s.id});const T=J(),A=U();X();const C=Y(),N=V().filter(s=>s.status==="missing"),t=Z().filter(s=>s.status==="approved"),f=B();let h=null;if(p&&(h=f.find(s=>s.name===p||p.includes(s.name)||s.keywords&&s.keywords.some(a=>p.includes(a)))),!h){for(const s of f)if((s.keywords&&Array.isArray(s.keywords)&&s.keywords.length>0?s.keywords:[s.name]).some(i=>i&&e.includes(i.toLowerCase()))){h=s;break}}const L=e.includes("أبعد")||e.includes("ابعد")||e.includes("بعيد عن"),M=h||L||e.includes("أقرب")||e.includes("اقرب")||e.includes("قريب من")||e.includes("جنب")||e.includes("بجوار")||e.includes("عند"),v=d==="places"||d==="real_estate"||d==="transport"?null:[{id:"plumber",label:"سباك / أعمال سباكة",keywords:["سباك","سباكة","سباكين","صحي","مواسير","حنفية","خلاط","تسريب"]},{id:"carpenter",label:"نجار / أعمال نجارة",keywords:["نجار","نجارة","نجارين","خشب","أبواب","شبابيك","موبيليا","غرف نوم"]},{id:"electrician",label:"كهربائي / أعمال كهرباء",keywords:["كهربائي","كهرباء","كهربائية","نجف","فيش","توصيلات","لوحات"]},{id:"painter",label:"نقاش / أعمال دهانات",keywords:["نقاش","نقاشة","دهان","دهانات","بويات","تشطيب"]},{id:"ac",label:"فني تكييف وتبريد",keywords:["تكييف","تبريد","تكييفات","فريون","شحن تكييف"]},{id:"appliances",label:"صيانة أجهزة منزلية",keywords:["غسالة","غسالات","ثلاجة","ثلاجات","بوتاجاز","سخان","سخانات","أجهزة منزلية"]},{id:"blacksmith",label:"حداد / أعمال حدادة",keywords:["حداد","حدادة","حديد","كريتال"]},{id:"alumin",label:"فني ألوميتال",keywords:["ألوميتال","الوميتال","مطابخ الوميتال"]},{id:"dev",label:"مبرمج ومطور برمجيات",keywords:["مبرمج","برمجة","مطور","موقع","تطبيق","web","app"]},{id:"design",label:"مصمم جرافيك",keywords:["مصمم","تصميم","جرافيك","لوجو","شعار"]},{id:"food",label:"أكل بيتي وطبخ ومأكولات",keywords:["أكل","اكل","طعام","وجبات","وجبة","أكل بيتي","اكل بيتى","فروزن","حلويات","طباخ","طبخ","مأكولات","محاشي","عزومات","طبيخ","سفرة"]},{id:"tutor",label:"مدرس ودروس خصوصية",keywords:["مدرس","معلم","دروس","تدريس","شرح","مادة","ثانوية"]}].find(s=>s.keywords.some(a=>e.includes(a))),I=d==="services"||e.includes("خدمة")||e.includes("خدمات")||e.includes("صناع")||e.includes("حرفي")||e.includes("فني")||e.includes("شغل حر");if(d==="services"||v||I&&!e.includes("محل")&&!e.includes("مطعم")&&!e.includes("عيادة")&&!e.includes("مستشفى")){let s=[];if(v&&(s=t.filter(a=>{const i=`${a.name||""} ${a.category||""} ${a.description||""} ${a.providerName||""}`.toLowerCase();return v.keywords.some(n=>i.includes(n))})),s.length===0){const a=["عايز","عاوز","محتاج","أبحث","ابحث","فين","ممكن","أحسن","احسن","أفضل","افضل","طلخا","خدمة","خدمات","فني"],i=$.filter(n=>n.length>=3&&!a.includes(n));i.length>0&&(s=t.filter(n=>{const c=`${n.name||""} ${n.category||""} ${n.description||""} ${n.providerName||""}`.toLowerCase();return i.some(m=>c.includes(m))}))}if(s.length>0){const a=s.slice(0,3),i=a.map((n,c)=>{const m=n.description?`
📝 **الوصف:** ${n.description}`:"";return`🛠️ **${c+1}. ${n.name}** (${n.category})
مقدم الخدمة: **${n.providerName||"معتمد"}** | 📞 هاتف: \`${n.phone||n.whatsapp||"عبر التطبيق"}\`${m}`}).join(`

`);return`مرحباً بك! 👋 إليك المتخصصين المعتمدين في **${v?v.label:k||"الخدمات المطلوبة"}**:

${i}

:::action{type="services", ids="${a.map(n=>n.id).join(",")}", label="💼 عرض هذه الخدمات في الدليل مباشرة"}:::`}else if(v){const a=y.filter(i=>{const n=`${i.name||""} ${i.address||""} ${i.description||""} ${i.type||""}`.toLowerCase();return v.keywords.some(c=>n.includes(c))});if(a.length>0){const i=a.slice(0,3).map((n,c)=>`📍 **${c+1}. ${n.name}**
العنوان: ${n.address||"طلخا"}${n.phone?` | 📞 هاتف: \`${n.phone}\``:""}`).join(`

`);return`عذراً، لا يوجد حالياً فني مستقل مسجل بمهنة **${v.label}** في قسم الخدمات، ولكن وجدنا أماكن ومحلات ذات صلة على الخريطة بمدينة طلخا:

${i}

:::action{type="map", ids="${a.slice(0,3).map(n=>n.id).join(",")}", label="📍 عرض الأماكن ذات الصلة على الخريطة 🗺️"}:::`}return`عذراً، لا يوجد حالياً فني أو مقدم خدمة مسجل بمهنة **${v.label}** في منصة Hayzo بمدينة طلخا.

💡 نرحب دائماً بانضمام الفنيين والحرفيين عبر إضافة خدماتهم في قسم الخدمات بالتطبيق لخدمة أهالي طلخا.`}else if(d==="services")return`عذراً، لم نجد خدمات مطابقة لبحثك عن "**${k}**" حالياً في دليل خدمات طلخا.

💡 يمكنك استعراض كافة الخدمات المتاحة أو إضافة خدمتك عبر قسم الخدمات بالتطبيق.`}if((e.includes("عقار")||e.includes("عقارات")||e.includes("شقة")||e.includes("شقق")||e.includes("فيلا")||e.includes("سكن")||e.includes("إيجار")&&!e.includes("سيارة")||e.includes("ايجار")&&!e.includes("سيارة")||e.includes("للبيع")||e.includes("سعر المتر"))&&T.length>0){const s=e.includes("إيجار")||e.includes("ايجار")||e.includes("أجر")||e.includes("تأجير"),a=e.includes("بيع")||e.includes("شراء")||e.includes("اشتري")||e.includes("تمليك"),i=T.filter(n=>{if(s&&n.purpose!=="rent"||a&&n.purpose!=="sale")return!1;const c=`${n.title||""} ${n.address||""} ${n.description||""} ${n.price||""}`.toLowerCase();return $.some(m=>c.includes(m))});if(i.length>0){const n=i.slice(0,3);return`إليك العقارات المتاحة في طلخا:

${n.map(m=>`🏡 **${m.title}**
💰 السعر: ${m.price} | 📍 العنوان: ${m.address}
📞 للتواصل: ${m.ownerPhone} (${m.ownerName||"المالك"})`).join(`

`)}

📌 يمكنك تصفح قسم **سوق العقارات** بالتطبيق للتواصل المباشر مع الملاك عبر واتساب!

:::action{type="real-estate", ids="${n.map(m=>m.id).join(",")}", label="🏠 عرض العقارات المطابقة فقط في السوق"}:::`}else return`عذراً، لم نجد عقارات مطابقة للمواصفات المطلوبة حالياً في سوق عقارات طلخا.

💡 يمكنك مراجعة قسم **سوق العقارات** في التطبيق لمتابعة أحدث الإعلانات اليومية.`}if(M||["محل","مطعم","كافيه","صيدلية","دكتور","عيادة","مستشفى","مدرسة","سنتر","مدرس","سوبر ماركت","ماركت","هدوم","ملابس","أحذية","أزياء","بوتيك","خياط","حلاق","كوافير","جيم","gym","مغسلة","مكتبة","بنك","صراف","موقف","معدية","قطار","شارع","عنوان","مكان"].some(s=>e.includes(s))){let s=null,a="الأماكن";e.includes("صيدلية")||e.includes("دوا")||e.includes("علاج")||e.includes("روشتة")?(s="pharmacy",a="الصيدليات والمراكز الطبية 💊"):e.includes("مطعم")||e.includes("أكل")||e.includes("وجبة")||e.includes("كشري")||e.includes("بيتزا")||e.includes("فول")?(s="restaurant",a="المطاعم والأغذية 🍽️"):e.includes("كافيه")||e.includes("قهوة")||e.includes("شاي")||e.includes("مشروب")?(s="cafe",a="الكافيهات والمقاهي ☕"):e.includes("دكتور")||e.includes("عيادة")||e.includes("طبيب")||e.includes("كشف")||e.includes("مستشفى")?(s="clinic",a="العيادات والمراكز الطبية 🏥"):e.includes("مواصلات")||e.includes("موقف")||e.includes("معدية")||e.includes("قطار")||e.includes("ميكروباص")?(s="transport",a="المواصلات وخطوط السير 🚌"):(e.includes("هدوم")||e.includes("ملابس")||e.includes("أزياء")||e.includes("بوتيك")||e.includes("محل"))&&(s="shop",a="المحلات التجارية 🛍️");let i=y.filter(n=>{if(s&&(n.type===s||n.type.includes(s)))return!0;const c=`${n.name||""} ${n.description||""} ${n.address||""} ${n.type||""}`.toLowerCase();return h&&c.includes(h.name.toLowerCase())?!0:$.some(m=>c.includes(m))});if(i.length===0&&s&&(i=y.filter(n=>n.type===s||n.type.includes(s))),i.length>0){const n=h?h.coords:[31.054,31.375],c=i.map(o=>{const j=Number(o.lat)||31.054,_=Number(o.lng)||31.375,q=F(n[0],n[1],j,_);return{...o,calculatedDistanceKm:q}});c.sort((o,j)=>L?j.calculatedDistanceKm-o.calculatedDistanceKm:o.calculatedDistanceKm-j.calculatedDistanceKm);const m=c.slice(0,4),g=h?`في **${h.name}**`:"في مدينة طلخا",G=m.map((o,j)=>{const _=Math.round(o.calculatedDistanceKm*1e3),q=_<1e3?`${_} متر`:`${o.calculatedDistanceKm.toFixed(1)} كم`,O=o.phone?` · 📞 \`${o.phone}\``:"",R=o.address?` · 📍 ${o.address}`:"";let E="";return h&&o.calculatedDistanceKm>.6&&(E=`
   ↳ ⚠️ *أقرب بديل متاح: يقع في [${o.address||o.name}]*`),`**${j+1}. ${o.name}** (يبعد حوالي ${q})${R}${O}${E}`}).join(`

`);return`مرحباً بك! 👋 إليك أقرب **${a}** ${g} مرتبة حسب الأقرب لموقعك:

${G}

💡 اضغط على الزر الأخضر بالأسفل لمعاينة أماكنهم ورسم مسار الوصول على الخريطة فوراً!

:::action{type="map", ids="${m.map(o=>o.id).join(",")}", label="📍 عرض الأماكن الـ ${m.length} على الخريطة مباشرة 🗺️"}:::`}else return`عذراً، لم نجد أماكن مطابقة لبحثك في دليل طلخا حالياً.

💡 يمكنك استعراض الخريطة التفاعلية لاكتشاف كافة الأماكن والأنشطة المسجلة.`}if((e.includes("تايه")||e.includes("ضايع")||e.includes("مفقود")||e.includes("اختفاء"))&&N.length>0)return`إليك بلاغات المفقودين الحالية في طلخا:

${N.map(a=>`⚠️ **${a.name}** (العمر: ${a.age||"-"}) - آخر ظهور: ${a.lastSeenLocation||"طلخا"} - 📞 تواصل: ${a.contactPhone}`).join(`

`)}

نرجو التواصل فوراً مع الأرقام الموضحة عند توفر أي معلومات.`;if((e.includes("كورس")||e.includes("ورشة")||e.includes("تدريب")||e.includes("تعليم"))&&A.length>0)return`إليك الكورسات والتدريبات المتاحة حالياً:

${A.slice(0,3).map(a=>`🎓 **${a.name}**
المدرب: ${a.instructor} | 📅 الموعد: ${a.date} | 📍 ${a.location||"طلخا"}`).join(`

`)}`;if((e.includes("خبر")||e.includes("أخبار")||e.includes("جديد")||e.includes("حدث"))&&C.length>0)return`إليك أحدث الأخبار في مدينة طلخا:

${C.slice(0,3).map(a=>{var i;return`📰 **${a.title}**
${(i=a.content)==null?void 0:i.slice(0,100)}...`}).join(`

`)}`;{const s=new Set(["عايز","عاوز","محتاج","أبحث","ابحث","فين","ممكن","أحسن","احسن","أفضل","افضل","طلخا","خدمة","خدمات","فني","هل","في","من","الي","اللي","على","عن","اين","أين","اريد","أريد","يوجد","بيع","شراء","مكان","وين","ابي"]),a=$.filter(i=>i.length>=3&&!s.has(i));if(a.length>0){const i=y.filter(c=>{const m=`${c.name||""} ${c.description||""} ${c.address||""} ${c.type||""}`.toLowerCase();return a.some(g=>m.includes(g))});if(i.length>0){const c=h?h.coords:[31.054,31.375],g=i.map(o=>{const j=F(c[0],c[1],Number(o.lat)||31.054,Number(o.lng)||31.375);return{...o,calculatedDistanceKm:j}}).sort((o,j)=>o.calculatedDistanceKm-j.calculatedDistanceKm).slice(0,4);return`إليك أقرب النتائج لبحثك في مدينة طلخا:

${g.map((o,j)=>{const _=Math.round(o.calculatedDistanceKm*1e3),q=_<1e3?`${_} متر`:`${o.calculatedDistanceKm.toFixed(1)} كم`,O=o.phone?` · 📞 \`${o.phone}\``:"",R=o.address?` · 📍 ${o.address}`:"";return`**${j+1}. ${o.name}** (يبعد حوالي ${q})${R}${O}`}).join(`

`)}

💡 اضغط على الزر الأخضر لعرضها على الخريطة.

:::action{type="map", ids="${g.map(o=>o.id).join(",")}", label="📍 عرض النتائج على الخريطة 🗺️"}:::`}const n=t.filter(c=>{const m=`${c.name||""} ${c.category||""} ${c.description||""} ${c.providerName||""}`.toLowerCase();return a.some(g=>m.includes(g))});if(n.length>0)return`إليك الخدمات المتاحة في منصة Hayzo:

${n.slice(0,3).map((g,G)=>{const o=g.description?`
📝 **الوصف:** ${g.description}`:"";return`🛠️ **${G+1}. ${g.name}** (${g.category})
مقدم الخدمة: **${g.providerName||"معتمد"}** | 📞 هاتف: \`${g.phone||g.whatsapp||"عبر التطبيق"}\`${o}`}).join(`

`)}

📌 يمكنك الاطلاع على تفاصيل أكثر من قسم **الخدمات** بالتطبيق.`}}return`مرحباً بك في منصة وتطبيق Hayzo لمدينة طلخا والدقهلية! 👋

يمكنني مساعدتك في:
1. العثور على الأماكن والمحلات والخدمات على الخريطة التفاعلية 🗺️
2. استعراض شقق وعقارات طلخا للبيع والإيجار 🏡
3. خطوط المواصلات ومواعيد القطارات والمعديات 🚌
4. الكورسات وفرص التطوع وآخر الأخبار المحلية 📰

ما الذي تبحث عنه بالتحديد؟`}const z=new Map;async function ne(u){if(z.has(u))return z.get(u);try{const l=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${u}`}});if(l.ok){const d=((await l.json()).data||[]).map($=>$.id),e=["llama-3.3-70b-versatile","llama-3.1-70b-versatile","llama-3.1-8b-instant","llama3-70b-8192","llama3-8b-8192","deepseek-r1-distill-llama-70b","qwen-2.5-32b","mixtral-8x7b-32768","gemma2-9b-it"].filter($=>d.includes($));if(e.length>0){const $=e.slice(0,2);return z.set(u,$),$}}}catch{}return["llama-3.1-8b-instant"]}async function re(u){const l=(u||"").trim().replace(/^["']|["']$/g,"");if(!l)return{ok:!1,status:"invalid",error:"المفتاح فارغ"};if(l.startsWith("gsk_"))try{const r=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${l}`}});return r.ok?{ok:!0,status:"active",provider:"Groq (Llama 3.3 70B ⚡)",error:""}:r.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز معدل الطلبات (Groq 429)"}:{ok:!1,status:"invalid",error:`مفتاح Groq غير صالح (${r.status})`}}catch(r){return{ok:!1,status:"error",error:r.message||"فشل الاتصال بـ Groq"}}if(l.startsWith("sk-or-"))try{const r=await fetch("https://openrouter.ai/api/v1/auth/key",{headers:{Authorization:`Bearer ${l}`}});return r.ok?{ok:!0,status:"active",provider:"OpenRouter (DeepSeek R1 / Llama 3.3)",error:""}:{ok:!1,status:"invalid",error:`مفتاح OpenRouter غير صالح (${r.status})`}}catch(r){return{ok:!1,status:"error",error:r.message||"فشل الاتصال بـ OpenRouter"}}try{const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(l)}`);return r.ok?{ok:!0,status:"active",provider:"Google Gemini (2.0 Flash)",modelsCount:((await r.json()).models||[]).length,error:""}:r.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز الحصة المجانية (Quota Full / 429)"}:r.status===400||r.status===401||r.status===403?{ok:!1,status:"invalid",error:"المفتاح غير صالح أو ملغي (Invalid Key)"}:{ok:!1,status:"error",error:`خطأ اتصال (${r.status})`}}catch(r){return{ok:!1,status:"error",error:r.message||"فشل الاتصال بخوادم Google"}}}async function ae(u,l=[]){var e,$,y,b,S,T,A,C,N,t,f,h;const r=ee(),p=te("geminiApiKey"),d=[...r];if(p&&!d.some(L=>L.key===p)&&d.push({id:"single_fallback",key:p,label:"مفتاح الإعدادات"}),d.length===0)return W(u);const k=se(u);for(let L=0;L<d.length;L++){const M=d[L],P=(e=M.key)==null?void 0:e.trim().replace(/^["']|["']$/g,"");if(!P)continue;if(P.startsWith("gsk_")){const x=await ne(P);for(const w of x)try{const K=l.filter(i=>i&&i.text&&typeof i.text=="string"&&i.text.trim()).map(i=>({role:i.role==="model"||i.role==="assistant"?"assistant":"user",content:i.text.trim()})),s=[{role:"system",content:k},...K,{role:"user",content:(u||"").trim()}],a=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${P}`,"Content-Type":"application/json"},body:JSON.stringify({model:w,messages:s,temperature:.5,max_tokens:800})});if(a.ok){let n=(b=(y=($=(await a.json()).choices)==null?void 0:$[0])==null?void 0:y.message)==null?void 0:b.content;if(n&&(n=n.replace(/<think>[\s\S]*?<\/think>/gi,"").trim(),n))return D(M.id,"active"),n}if(a.status===429){D(M.id,"quota_exceeded","تجاوز الحصة (429)");break}if(a.status===401||a.status===403){D(M.id,"invalid","مفتاح Groq غير صالح");break}}catch{}continue}if(P.startsWith("sk-or-")){try{const x=[{role:"system",content:k},...l.map(K=>({role:K.role==="model"||K.role==="assistant"?"assistant":"user",content:K.text||""})),{role:"user",content:u}],w=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${P}`,"Content-Type":"application/json","HTTP-Referer":window.location.origin,"X-Title":"Hayzo Talkha"},body:JSON.stringify({model:"meta-llama/llama-3.3-70b-instruct:free",messages:x,temperature:.6,max_tokens:1024})});if(w.ok){const s=(A=(T=(S=(await w.json()).choices)==null?void 0:S[0])==null?void 0:T.message)==null?void 0:A.content;if(s)return D(M.id,"active"),s}}catch(x){console.warn("OpenRouter request error:",x)}continue}if(!P.startsWith("AIzaSy"))continue;const v=[{role:"user",parts:[{text:k+`

---
رسالة المستخدم الأولى: مرحباً`}]},{role:"model",parts:[{text:"أهلاً بك في منصة Hayzo! 👋 كيف أقدر أساعدك اليوم؟ يمكنني مساعدتك في العثور على الأماكن والكورسات والفعاليات والخدمات بمدينة طلخا."}]}];for(const x of l)v.push({role:x.role==="user"?"user":"model",parts:[{text:x.text}]});v.push({role:"user",parts:[{text:u}]});const I=["gemini-2.0-flash","gemini-1.5-flash-latest","gemini-1.5-flash","gemini-2.0-flash-lite","gemini-1.5-pro"];for(const x of I)try{const w=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${x}:generateContent?key=${encodeURIComponent(P)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:v,generationConfig:{temperature:.7,maxOutputTokens:1024}})});if(w.ok){const s=(h=(f=(t=(N=(C=(await w.json()).candidates)==null?void 0:C[0])==null?void 0:N.content)==null?void 0:t.parts)==null?void 0:f[0])==null?void 0:h.text;if(s)return D(M.id,"active"),s}if(w.status===429){D(M.id,"quota_exceeded","تجاوز الحصة (429)");break}if(w.status===400||w.status===401||w.status===403){D(M.id,"invalid",`غير صالح (${w.status})`);break}}catch(w){console.warn(`Error on Gemini key [${M.label}] with model [${x}]:`,w)}}return W(u)}async function oe({targets:u=[],area:l="",resultCount:r=5,queries:p={}}){const d={places:"أماكن ومعالم الخريطة",services:"خدمات وحرفيين",real_estate:"سوق العقارات",transport:"المواصلات والتنقل"};let e=['طلب بحث وترشيح دقيق من استمارة "المكتشف الذكي":',`- القطاعات المطلوبة: ${u.map(b=>d[b]||b).join(" و ")}`,`- المنطقة أو الحي المحدد: ${l||"كل طلخا"}`,`- عدد النتائج المطلوبة: ${r}`];const $=B(),y=l?$.find(b=>b.name===l||l.includes(b.name)||b.keywords&&b.keywords.some(S=>l.includes(S))):null;return y&&(e.push(`- إحداثيات المنطقة الجغرافية المحددة: [${y.coords[0]}, ${y.coords[1]}]`),e.push(`- تنبيه جغرافي إلزامي: احسب المسافة للأماكن وقدم الأقرب فالأقرب لإحداثيات [${y.name}]. إذا جلبت مكاناً من منطقة أخرى أو بعيدة، وضّح بوضوح اسم المنطقة التي جلبته منها ومسافته بالكيلومتر/المتر عن [${y.name}].`)),u.includes("places")&&p.places&&e.push(`- متطلبات الأماكن: ${p.places}`),u.includes("services")&&p.services&&e.push(`- متطلبات الخدمات: ${p.services}`),u.includes("real_estate")&&p.real_estate&&e.push(`- متطلبات العقارات: ${p.real_estate}`),u.includes("transport")&&p.transport&&e.push(`- متطلبات المواصلات: ${p.transport}`),e.push("- قاعدة صارمة للمطابقة والأمانة: التزم بالتخصص والمجال المطلوب تحديداً دون أي انحراف، واعتمد على وصف الخدمة ومحتواها. إذا كان المطلوب عدداً معيناً ولم تجد إلا عنصراً واحداً يطابق، اذكر هذا العنصر فقط ولا تكمل العدد بعناصر غير مطابقة نهائياً. وإذا لم يتوفر أي تخصص مطابق للطلب، صرّح بوضوح تام بعدم وجوده حالياً في المنصة."),e.push(`المطلوب: رشّح أفضل ${r} نتائج مطابقة تماماً (مع إعطاء الأولوية للعناصر المثبتة ⭐ أولاً)، واذكر أسباب الترشيح ومعلومات التواصل بدقة. واحرص على إنهاء ردك بوسوم الإجراءات التفاعلية الحصرية :::action{type="...", ids="...", label="..."}::: لكل قطاع تم ترشيحه.`),ae(e.join(`
`))}export{oe as a,re as t};
