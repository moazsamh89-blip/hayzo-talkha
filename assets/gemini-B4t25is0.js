import{an as C,be as B,bw as H,bp as A,g as W,e as G,ae as O,a2 as R,G as q,p as I,Y as N,a7 as E,bx as J}from"./index-90vo0vpu.js";function U(p,e,a,l){if(!p||!e||!a||!l)return 999;const g=6371,y=(a-p)*(Math.PI/180),d=(l-e)*(Math.PI/180),w=Math.sin(y/2)*Math.sin(y/2)+Math.cos(p*(Math.PI/180))*Math.cos(a*(Math.PI/180))*Math.sin(d/2)*Math.sin(d/2),h=2*Math.atan2(Math.sqrt(w),Math.sqrt(1-w));return g*h}function X(){const e=G().map(t=>`• [${t.label} ${t.icon||"📌"}] (معرّف الفلتر: ${t.id})`).join(`
`),l=C().map(t=>`• منطقة: ${t.name} [إحداثيات: ${t.coords[0]}, ${t.coords[1]}]`).join(`
`),g=J(),y=R().map(t=>`• ${t.name} - المدرب: ${t.instructor} - الموعد: ${t.date} - المكان: ${t.location||"طلخا"} - السعر: ${t.price||"مجاني"}`).join(`
`),d=q().filter(t=>t.status==="upcoming").map(t=>`• ${t.title} - الموعد: ${t.date} - المكان: ${t.location_name||"طلخا"}`).join(`
`),w=I().slice(0,8).map(t=>{var b;return`• ${t.title} (نُشر بتاريخ: ${new Date(t.createdAt||Date.now()).toLocaleDateString("ar-EG")}) - ${(b=t.content)==null?void 0:b.slice(0,120)}...`}).join(`
`),h=N().filter(t=>t.status==="missing").map(t=>`• بلاغ مفقود: ${t.name} (العمر: ${t.age||"غير محدد"}) - مكان الاختفاء: ${t.lastSeenLocation||"طلخا"} - هاتف التواصل: ${t.contactPhone}`).join(`
`),$=O(),j=$.length>0?$.map(t=>`• ${t.title} | الغرض: ${t.purpose==="rent"?"إيجار 🔑":"بيع 🏷️"} | النوع: ${t.type} | السعر: ${t.price} | المساحة: ${t.area} م² | الغرف: ${t.rooms||"-"} | العنوان: ${t.address} | المالك: ${t.ownerName||"معلن"} (${t.ownerPhone})`).join(`
`):"لا توجد عقارات مسجلة حالياً",P=E().filter(t=>t.status==="approved").sort((t,b)=>(b.pinned?1:0)-(t.pinned?1:0)),f=P.length>0?P.map(t=>{const b=t.pinned?"🌟 [موصى به بشدة — مثبت من الإدارة — رشّحه أولاً دائماً]":"";return`[ID: ${t.id}] ${b} ${t.name} (التصنيف: ${t.category}) - مقدم الخدمة: ${t.providerName||"غير محدد"} - التكلفة: ${t.priceOrRate||"حسب الاتفاق"} - هاتف/واتساب: ${t.phone||t.whatsapp||"غير محدد"} - الوصف: ${t.description||"لا يوجد وصف"}`}).join(`
`):"لا توجد خدمات مسجلة حالياً";return`
أنت "المساعد الذكي لمنصة وتطبيق Hayzo" (هايزو) - المنصة المجتمعية الشاملة والتفاعلية لمدينة طلخا ومحافظة الدقهلية.
أجب دائماً باللغة العربية بأسلوب راقٍ ومفيد وودود ومنظم.

=== فلاتر وتصنيفات الخريطة المتاحة في التطبيق (يجب الرجوع إليها وتحديدها) ===
${e||"لا توجد تصنيفات"}

=== خريطة مناطق وأحياء مدينة طلخا وإحداثياتها ===
${l}

=== قواعد التوجيه الجغرافي وحساب القرب والبعد (إلزامية ومهمة جداً) ===
1. عندما يذكر أو يختار المستخدم مكاناً أو عنواناً أو منطقة (من خريطة مناطق وأحياء طلخا أعلاه) ويسأل عن خدمة أو محل:
   - **الخطوة 1: تحديد فلتر وتصنيف الخريطة**: حدد الفلتر المناسب (مثال: صيدليات 💊، مطاعم وكافيهات 🍔، أطباء وعيادات 🩺، محلات 🛍️، مواصلات 🚌) واذكر اسم الفلتر في إجابتك.
   - **الخطوة 2: تحديد إحداثيات العنوان المطلوب**: ارجع لإحداثيات المنطقة المطلوبة من قائمة المناطق أعلاه بدقة.
   - **الخطوة 3: ترتيب الأماكن حسب القرب الجغرافي**: احسب المسافة وقارنها بإحداثيات المحلات المسجلة ورتبها تصاعدياً من **الأقرب مسافة إلى الأبعد مسافة**.
   - **الخطوة 4 (قاعدة الأماكن البعيدة والبديلة - إلزامية جداً)**: إذا لم يتوفر هذا النشاط داخل نفس المنطقة مباشرة، يُسمح لك بجلب وترشيح أقرب محل متوفر من مناطق أخرى، ولكن **يجب أن تصرّح بوضوح تام باسم المنطقة التي جلبته منها** ومسافته بالكيلومتر أو المتر، على سبيل المثال:
     "📍 يقع في: [اسم المنطقة/العنوان الفعلي للمحل] (يبعد حوالي [X] كم عن [المنطقة المطلوبة]) — تم ترشيحه كأقرب بديل متاح لطلبك."
   - **الخطوة 5: التوجيه بالخريطة**: أخبره أنه يمكنه الضغط على زر التصفية التفاعلي أسفل الرد لعرض هذه الأماكن المحددة فقط على الخريطة ورسم المسار المباشر.

=== دليل الأماكن والمعالم في طلخا (مع التصنيفات والإحداثيات والتقييمات) ===
${g||"لا توجد أماكن مسجلة حالياً"}

=== سوق وعقارات طلخا (شقق للبيع والإيجار والمحلات) ===
${j}

=== الكورسات والتدريبات المتاحة ===
${y||"لا توجد كورسات حالياً"}

=== فعاليات وأنشطة التطوع القادمة ===
${d||"لا توجد فعاليات حالياً"}

=== آخر الأخبار والإعلانات المحلية ===
${w||"لا توجد أخبار حالياً"}

=== بلاغات المفقودين والطوارئ ===
${h||"لا توجد بلاغات مفقودين حالياً"}

=== الخدمات الإلكترونية والميدانية والحرفية ===
${f}

=== معجم الفهم الذكي للأسئلة واللهجة المصرية الدارجة ===
- "جعان / أكل / غدا / دليفري / قهوة / كافيه" -> ابحث في مطاعم وكافيهات طلخا وأرشده لتصنيف [مطاعم وكافيهات 🍔].
- "تعبان / دوا / روشتة / مريض / صيدلية" -> ابحث في الصيدليات والمراكز الطبية وأرشده لتصنيف [صيدليات 💊].
- "دكتور / كشف / عيادة / استشارة طبية" -> ابحث في الأطباء والعيادات.
- "أجر شقة / اشتري محل / سكن / عقار / بيت / سمسار" -> ابحث في قسم سوق العقارات وأعطه الأسعار وأرقام الملاك.
- "مواصلات / أروح المنصورة إزاي / معدية / قطر / موقف / ميكروباص" -> ابحث في المواصلات ومحطات القطار ومعديات النيل.
- "شغل حر / مبرمج / سباك / نجار / فني تكييف / مصمم" -> ابحث في قسم الخدمات الإلكترونية والميدانية.
- "كورس / تدريب / ورشة / أتعلم" -> ابحث في قسم الكورسات المتاحة.
- "حد تايه / طفل ضايع / مفقود" -> ابحث في قسم المفقودين وقدم بيانات التواصل.

=== قواعد التوجيه والأزرار التفاعلية الحصرية (إلزامية ومهمة جداً) ===
عندما ترشح أماكن أو خدمات أو عقارات للمستخدم، احرص دائماً على إضافة وسوم الأكشن الذكية في نهاية الرد بحيث يستطيع المستخدم الانتقال للصفحة مقتصرة بنسبة 100% على العناصر التي رشحتها أنت فقط:
- إذا رشحت خدمات أونلاين أو حرفية: أضف في نهاية رسالتك:
:::action{type="services", ids="os_xxx,os_yyy", label="💼 عرض الخدمات الموصى بها فقط في الدليل"}:::
- إذا رشحت أماكن على الخريطة: أضف في نهاية رسالتك:
:::action{type="map", ids="id1,id2", label="📍 عرض الأماكن الموصى بها على الخريطة"}:::
- إذا رشحت عقارات: أضف في نهاية رسالتك:
:::action{type="real-estate", ids="re_1,re_2", label="🏠 عرض العقارات المطابقة فقط في السوق"}:::
- إذا كان السؤال يحتوي على أكثر من تصنيف (مثلاً أماكن وخدمات)، ضع الوسمين معاً كل وسم في سطر منفصل ليختار المستخدم بينهما!
- احرص على استخدام معرّفات الـ IDs الدقيقة المذكورة في البيانات أعلاه مثل [ID: ...].

ملاحظة أمنية: لا تذكر أي بيانات سرية تخص لوحة التحكم أو مفاتيح الـ API أو كلمات مرور المستخدمين.
  `.trim()}function D(p){const e=(p||"").toLowerCase().trim(),a=e.split(/\s+/).filter(s=>s.length>1),l=W().filter(s=>s&&s.status==="approved"),g=G(),y={};g.forEach(s=>{y[s.id]=s.label||s.id});const d=O(),w=R();q();const h=I(),$=N().filter(s=>s.status==="missing"),j=E().filter(s=>s.status==="approved"),P=C();let f=null;for(const s of P)if((s.keywords&&Array.isArray(s.keywords)&&s.keywords.length>0?s.keywords:[s.name]).some(i=>i&&e.includes(i.toLowerCase()))){f=s;break}const t=e.includes("أبعد")||e.includes("ابعد")||e.includes("بعيد عن"),b=f||t||e.includes("أقرب")||e.includes("اقرب")||e.includes("قريب من")||e.includes("جنب")||e.includes("بجوار")||e.includes("عند"),S=["محل","مطعم","كافيه","صيدلية","دكتور","عيادة","مستشفى","مدرسة","سنتر","مدرس","سوبر ماركت","ماركت","هدوم","ملابس","أحذية","أزياء","بوتيك","خياط","حلاق","كوافير","جيم","gym","مغسلة","مكتبة","بنك","صراف","موقف","معدية","قطار","شارع","عنوان","مكان"];if(b||S.some(s=>e.includes(s))&&!e.includes("شقة للإيجار")&&!e.includes("شقة للبيع")&&!e.includes("أجر شقة")&&!e.includes("اشتري شقة")){let s=null;e.includes("صيدلية")||e.includes("دوا")||e.includes("علاج")||e.includes("روشتة")?s="pharmacy":e.includes("مطعم")||e.includes("أكل")||e.includes("وجبة")||e.includes("كشري")||e.includes("بيتزا")||e.includes("فول")?s="restaurants":e.includes("كافيه")||e.includes("قهوة")||e.includes("شاي")||e.includes("مشروب")?s="cafes":e.includes("دكتور")||e.includes("عيادة")||e.includes("طبيب")||e.includes("كشف")||e.includes("مستشفى")?s="doctors":e.includes("مواصلات")||e.includes("موقف")||e.includes("معدية")||e.includes("قطار")||e.includes("ميكروباص")?s="transport":(e.includes("هدوم")||e.includes("ملابس")||e.includes("أزياء")||e.includes("بوتيك")||e.includes("محل"))&&(s="shops");let n=l.filter(i=>{if(s&&i.type===s)return!0;const o=`${i.name||""} ${i.description||""} ${i.address||""} ${i.type||""}`.toLowerCase();return f&&o.includes(f.name.toLowerCase())?!0:S.some(u=>e.includes(u)&&o.includes(u))});if(n.length===0&&s&&(n=l.filter(i=>i.type===s)),n.length===0&&(n=l),n.length>0){const i=f?f.coords:[31.054,31.375],o=n.map(c=>{const v=Number(c.lat)||31.054,K=Number(c.lng)||31.375,T=U(i[0],i[1],v,K);return{...c,calculatedDistanceKm:T}});o.sort((c,v)=>t?v.calculatedDistanceKm-c.calculatedDistanceKm:c.calculatedDistanceKm-v.calculatedDistanceKm);const u=o.slice(0,4),r=s?y[s]||s:"دليل الأماكن",m=f?`منطقة **${f.name}**`:"مدينة طلخا",x=t?"الأبعد مسافة":"الأقرب مسافة",k=u.map((c,v)=>{const K=Math.round(c.calculatedDistanceKm*1e3),T=K<1e3?`~${K} متر`:`~${c.calculatedDistanceKm.toFixed(2)} كم`,z=c.phone?`
   📞 هاتف: \`${c.phone}\``:"",F=c.address?`
   📍 العنوان: ${c.address}`:"",Q=y[c.type]||c.type||"مكان";let _="";return f&&(c.calculatedDistanceKm>.6?_=`
   ⚠️ **توضيح المنطقة**: يقع في [${c.address||c.name}] (يبعد ${T} عن ${f.name}) — تم ترشيحه كأقرب بديل متاح لطلبك.`:_=`
   ✅ **الموقع**: متواجد داخل نطاق [${f.name}] مباشرة (${T}).`),`${v+1}. **${c.name}**  
   🏷️ الفلتر في الخريطة: [${Q}]  
   📏 المسافة التقديرية: **${T}** (${x})${_}${F}${z}`}).join(`

`);return`📍 **نتائج البحث والتحليل الجغرافي لـ ${m}:**

📌 **تصنيف الخريطة**: [${r}]

${k}

🧭 **طريقة الوصول**: يمكنك فتح **خريطة طلخا** واختيار تصنيف [${r}] ثم الضغط على زر **(تحديد الاتجاهات والمسار في الموقع 🧭)** لرسم مسار السير أو القيادة المباشر فوراً!

:::action{type="map", ids="${u.map(c=>c.id).join(",")}", label="📍 عرض الأماكن الـ ${u.length} على الخريطة فقط"}:::`}}if((e.includes("عقار")||e.includes("عقارات")||e.includes("شقة")||e.includes("شقق")||e.includes("فيلا")||e.includes("سكن")||e.includes("إيجار")&&!e.includes("سيارة")||e.includes("ايجار")&&!e.includes("سيارة")||e.includes("للبيع")||e.includes("سعر المتر"))&&d.length>0){const s=e.includes("إيجار")||e.includes("ايجار")||e.includes("أجر")||e.includes("تأجير"),n=e.includes("بيع")||e.includes("شراء")||e.includes("اشتري")||e.includes("تمليك"),i=d.filter(u=>{if(s&&u.purpose!=="rent"||n&&u.purpose!=="sale")return!1;const r=`${u.title||""} ${u.address||""} ${u.description||""} ${u.price||""}`.toLowerCase();return a.some(m=>r.includes(m))}),o=i.length>0?i:s?d.filter(u=>u.purpose==="rent"):n?d.filter(u=>u.purpose==="sale"):d;if(o.length>0)return`إليك العقارات المتاحة في طلخا:

${o.slice(0,3).map(r=>`🏡 **${r.title}**
💰 السعر: ${r.price} | 📍 العنوان: ${r.address}
📞 للتواصل: ${r.ownerPhone} (${r.ownerName||"المالك"})`).join(`

`)}

📌 يمكنك تصفح قسم **سوق العقارات** بالتطبيق للتواصل المباشر مع الملاك عبر واتساب!

:::action{type="real-estate", ids="${o.slice(0,3).map(r=>r.id).join(",")}", label="🏠 عرض العقارات المطابقة فقط في السوق"}:::`}if((e.includes("خدمة")||e.includes("فني")||e.includes("صيانة")||e.includes("سباك")||e.includes("كهربائي")||e.includes("برمجة")||e.includes("تصميم")||e.includes("شغل حر"))&&j.length>0){const s=j.filter(o=>{const u=`${o.name} ${o.category} ${o.description} ${o.providerName}`.toLowerCase();return a.some(r=>u.includes(r))}),n=s.length>0?s:j;return`إليك الخدمات المتاحة في منصة Hayzo:

${n.slice(0,3).map(o=>`🛠️ **${o.name}** (${o.category})
مقدم الخدمة: ${o.providerName||"متوفر"} | 📞 تواصل: ${o.phone||o.whatsapp||"عبر التطبيق"}`).join(`

`)}

📌 يمكنك الاطلاع على تفاصيل أكثر من قسم **الخدمات** بالتطبيق.

:::action{type="services", ids="${n.slice(0,3).map(o=>o.id).join(",")}", label="💼 عرض الخدمات الـ ${Math.min(n.length,3)} المناسبة فقط"}:::`}return(e.includes("تايه")||e.includes("ضايع")||e.includes("مفقود")||e.includes("اختفاء"))&&$.length>0?`إليك بلاغات المفقودين الحالية في طلخا:

${$.map(n=>`⚠️ **${n.name}** (العمر: ${n.age||"-"}) - آخر ظهور: ${n.lastSeenLocation||"طلخا"} - 📞 تواصل: ${n.contactPhone}`).join(`

`)}

نرجو التواصل فوراً مع الأرقام الموضحة عند توفر أي معلومات.`:(e.includes("كورس")||e.includes("ورشة")||e.includes("تدريب")||e.includes("تعليم"))&&w.length>0?`إليك الكورسات والتدريبات المتاحة حالياً:

${w.slice(0,3).map(n=>`🎓 **${n.name}**
المدرب: ${n.instructor} | 📅 الموعد: ${n.date} | 📍 ${n.location||"طلخا"}`).join(`

`)}`:(e.includes("خبر")||e.includes("أخبار")||e.includes("جديد")||e.includes("حدث"))&&h.length>0?`إليك أحدث الأخبار في مدينة طلخا:

${h.slice(0,3).map(n=>{var i;return`📰 **${n.title}**
${(i=n.content)==null?void 0:i.slice(0,100)}...`}).join(`

`)}`:`مرحباً بك في منصة وتطبيق Hayzo لمدينة طلخا والدقهلية! 👋

يمكنني مساعدتك في:
1. العثور على الأماكن والمحلات والخدمات على الخريطة التفاعلية 🗺️
2. استعراض شقق وعقارات طلخا للبيع والإيجار 🏡
3. خطوط المواصلات ومواعيد القطارات والمعديات 🚌
4. الكورسات وفرص التطوع وآخر الأخبار المحلية 📰

ما الذي تبحث عنه بالتحديد؟`}async function Z(p){const e=(p||"").trim().replace(/^["']|["']$/g,"");if(!e)return{ok:!1,status:"invalid",error:"المفتاح فارغ"};if(e.startsWith("gsk_"))try{const a=await fetch("https://api.groq.com/openai/v1/models",{headers:{Authorization:`Bearer ${e}`}});return a.ok?{ok:!0,status:"active",provider:"Groq (Llama 3.3 70B ⚡)",error:""}:a.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز معدل الطلبات (Groq 429)"}:{ok:!1,status:"invalid",error:`مفتاح Groq غير صالح (${a.status})`}}catch(a){return{ok:!1,status:"error",error:a.message||"فشل الاتصال بـ Groq"}}if(e.startsWith("sk-or-"))try{const a=await fetch("https://openrouter.ai/api/v1/auth/key",{headers:{Authorization:`Bearer ${e}`}});return a.ok?{ok:!0,status:"active",provider:"OpenRouter (DeepSeek R1 / Llama 3.3)",error:""}:{ok:!1,status:"invalid",error:`مفتاح OpenRouter غير صالح (${a.status})`}}catch(a){return{ok:!1,status:"error",error:a.message||"فشل الاتصال بـ OpenRouter"}}try{const a=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(e)}`);return a.ok?{ok:!0,status:"active",provider:"Google Gemini (2.0 Flash)",modelsCount:((await a.json()).models||[]).length,error:""}:a.status===429?{ok:!1,status:"quota_exceeded",error:"تجاوز الحصة المجانية (Quota Full / 429)"}:a.status===400||a.status===401||a.status===403?{ok:!1,status:"invalid",error:"المفتاح غير صالح أو ملغي (Invalid Key)"}:{ok:!1,status:"error",error:`خطأ اتصال (${a.status})`}}catch(a){return{ok:!1,status:"error",error:a.message||"فشل الاتصال بخوادم Google"}}}async function Y(p,e=[]){var d,w,h,$,j,P,f,t,b,S,L,M;const a=B(),l=H("geminiApiKey"),g=[...a];if(l&&!g.some(s=>s.key===l)&&g.push({id:"single_fallback",key:l,label:"مفتاح الإعدادات"}),g.length===0)return D(p);const y=X();for(let s=0;s<g.length;s++){const n=g[s],i=(d=n.key)==null?void 0:d.trim().replace(/^["']|["']$/g,"");if(!i)continue;if(i.startsWith("gsk_")){const r=["allam-2-7b","qwen/qwen3.6-27b","groq/compound","openai/gpt-oss-120b","llama-3.3-70b-versatile"];for(const m of r)try{const x=[{role:"system",content:y},...e.map(c=>({role:c.role==="model"||c.role==="assistant"?"assistant":"user",content:c.text||""})),{role:"user",content:p}],k=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({model:m,messages:x,temperature:.5,max_tokens:1024})});if(k.ok){let v=($=(h=(w=(await k.json()).choices)==null?void 0:w[0])==null?void 0:h.message)==null?void 0:$.content;if(v&&(v=v.replace(/<think>[\s\S]*?<\/think>/gi,"").trim(),v))return A(n.id,"active"),v}if(k.status===429){A(n.id,"quota_exceeded","تجاوز الحصة (429)");break}if(k.status===401||k.status===403){A(n.id,"invalid","مفتاح Groq غير صالح");break}}catch(x){console.warn(`Groq request error on model [${m}]:`,x)}continue}if(i.startsWith("sk-or-")){try{const r=[{role:"system",content:y},...e.map(x=>({role:x.role==="model"||x.role==="assistant"?"assistant":"user",content:x.text||""})),{role:"user",content:p}],m=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json","HTTP-Referer":window.location.origin,"X-Title":"Hayzo Talkha"},body:JSON.stringify({model:"meta-llama/llama-3.3-70b-instruct:free",messages:r,temperature:.6,max_tokens:1024})});if(m.ok){const k=(f=(P=(j=(await m.json()).choices)==null?void 0:j[0])==null?void 0:P.message)==null?void 0:f.content;if(k)return A(n.id,"active"),k}}catch(r){console.warn("OpenRouter request error:",r)}continue}const o=[{role:"user",parts:[{text:y+`

---
رسالة المستخدم الأولى: مرحباً`}]},{role:"model",parts:[{text:"أهلاً بك في منصة Hayzo! 👋 كيف أقدر أساعدك اليوم؟ يمكنني مساعدتك في العثور على الأماكن والكورسات والفعاليات والخدمات بمدينة طلخا."}]}];for(const r of e)o.push({role:r.role==="user"?"user":"model",parts:[{text:r.text}]});o.push({role:"user",parts:[{text:p}]});const u=["gemini-2.0-flash","gemini-1.5-flash-latest","gemini-1.5-flash","gemini-2.0-flash-lite","gemini-1.5-pro"];for(const r of u)try{const m=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${r}:generateContent?key=${encodeURIComponent(i)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:o,generationConfig:{temperature:.7,maxOutputTokens:1024}})});if(m.ok){const k=(M=(L=(S=(b=(t=(await m.json()).candidates)==null?void 0:t[0])==null?void 0:b.content)==null?void 0:S.parts)==null?void 0:L[0])==null?void 0:M.text;if(k)return A(n.id,"active"),k}if(m.status===429){A(n.id,"quota_exceeded","تجاوز الحصة (429)");break}if(m.status===400||m.status===401||m.status===403){A(n.id,"invalid",`غير صالح (${m.status})`);break}}catch(m){console.warn(`Error on Gemini key [${n.label}] with model [${r}]:`,m)}}return D(p)}async function ee({targets:p=[],area:e="",resultCount:a=5,queries:l={}}){const g={places:"أماكن ومعالم الخريطة",services:"خدمات وحرفيين",real_estate:"سوق العقارات",transport:"المواصلات والتنقل"};let d=['طلب بحث وترشيح دقيق من استمارة "المكتشف الذكي":',`- القطاعات المطلوبة: ${p.map($=>g[$]||$).join(" و ")}`,`- المنطقة أو الحي المحدد: ${e||"كل طلخا"}`,`- عدد النتائج المطلوبة: ${a}`];const w=C(),h=e?w.find($=>$.name===e||e.includes($.name)||$.keywords&&$.keywords.some(j=>e.includes(j))):null;return h&&(d.push(`- إحداثيات المنطقة الجغرافية المحددة: [${h.coords[0]}, ${h.coords[1]}]`),d.push(`- تنبيه جغرافي إلزامي: احسب المسافة للأماكن وقدم الأقرب فالأقرب لإحداثيات [${h.name}]. إذا جلبت مكاناً من منطقة أخرى أو بعيدة، وضّح بوضوح اسم المنطقة التي جلبته منها ومسافته بالكيلومتر/المتر عن [${h.name}].`)),p.includes("places")&&l.places&&d.push(`- متطلبات الأماكن: ${l.places}`),p.includes("services")&&l.services&&d.push(`- متطلبات الخدمات: ${l.services}`),p.includes("real_estate")&&l.real_estate&&d.push(`- متطلبات العقارات: ${l.real_estate}`),p.includes("transport")&&l.transport&&d.push(`- متطلبات المواصلات: ${l.transport}`),d.push(`المطلوب: رشّح أفضل ${a} نتائج مطابقة تماماً (مع إعطاء الأولوية للعناصر المثبتة ⭐ أولاً)، واذكر أسباب الترشيح ومعلومات التواصل بدقة. واحرص على إنهاء ردك بوسوم الإجراءات التفاعلية الحصرية :::action{type="...", ids="...", label="..."}::: لكل قطاع تم ترشيحه.`),Y(d.join(`
`))}export{ee as a,Z as t};
