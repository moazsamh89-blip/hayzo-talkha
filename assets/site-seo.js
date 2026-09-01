(() => {
  'use strict';

  const defaults = {
    title: 'Hayzo طلخا | دليلك وخدمات مدينتك',
    description: 'Hayzo طلخا منصة لأهالي وزوار مدينة طلخا ومركز طلخا بالدقهلية: عقارات، أخبار، أماكن، مواصلات وخدمات محلية.',
  };
  const pages = {
    '/real-estate': ['عقارات طلخا للبيع والإيجار | Hayzo', 'ابحث عن شقق ومحلات وأراضٍ وفيلات للبيع أو الإيجار في طلخا ومركز طلخا بالدقهلية، مع صور وتفاصيل ووسائل اتصال مباشرة.'],
    '/map': ['دليل أماكن وخدمات طلخا | Hayzo', 'دليل Hayzo للأماكن والخدمات في مدينة طلخا والدقهلية: مطاعم، صيدليات، عيادات، محلات وأرقام التواصل.'],
    '/transport': ['مواصلات طلخا والمنصورة | Hayzo', 'تعرف على خطوط ومواعيد المواصلات والقطارات والمعديات بين طلخا والمنصورة والدقهلية عبر Hayzo.'],
    '/news': ['أخبار طلخا والدقهلية | Hayzo', 'تابع أخبار مدينة طلخا ومركز طلخا والدقهلية والتنويهات والخدمات المجتمعية أولاً بأول.'],
    '/services': ['خدمات طلخا والدقهلية | Hayzo', 'اكتشف خدمات وفنيي ومتاجر وأعمال مدينة طلخا ومركز طلخا عبر منصة Hayzo المحلية.'],
    '/missing': ['مفقودات وموجودات طلخا | Hayzo', 'منصة مجتمعية لنشر بلاغات المفقودات والموجودات في طلخا والدقهلية والمساعدة في الوصول لأصحابها.'],
    '/courses': ['كورسات وفعاليات طلخا | Hayzo', 'فرص الكورسات والتدريب والفعاليات والأنشطة المتاحة لأهالي طلخا والدقهلية.'],
  };
  const setMeta = (selector, value) => {
    const el = document.head.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };
  const update = () => {
    const [title, description] = pages[location.pathname] || [defaults.title, defaults.description];
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${location.origin}${location.pathname}`;
  };
  const originalPush = history.pushState;
  const originalReplace = history.replaceState;
  history.pushState = function () { const result = originalPush.apply(this, arguments); update(); return result; };
  history.replaceState = function () { const result = originalReplace.apply(this, arguments); update(); return result; };
  window.addEventListener('popstate', update);
  update();
})();
