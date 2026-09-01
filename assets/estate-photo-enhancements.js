(() => {
  'use strict';

  const MAX_FILES = 6;
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const stylesheet = document.createElement('style');
  stylesheet.textContent = `
    .hayzo-photo-upload { padding: 12px; border: 1.5px dashed #079A53; border-radius: 12px; background: rgba(7,154,83,.06); }
    .hayzo-photo-upload__hint { display: block; margin: 5px 0 0; color: var(--text-secondary, #536); font-size: .74rem; line-height: 1.5; }
    .hayzo-photo-upload__preview { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 9px; }
    .hayzo-photo-upload__preview img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 8px; border: 1px solid rgba(7,154,83,.25); }
    .hayzo-photo-filter { margin-top: 10px; }
  `;
  document.head.appendChild(stylesheet);

  const setReactValue = (input, value) => {
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    setter.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  };
  const readImage = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('تعذر قراءة الصورة'));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error('صيغة صورة غير مدعومة'));
      image.onload = () => resolve(image);
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
  const cover = (context, image, x, y, width, height) => {
    const ratio = Math.max(width / image.width, height / image.height);
    const sourceWidth = width / ratio;
    const sourceHeight = height / ratio;
    context.drawImage(image, (image.width - sourceWidth) / 2, (image.height - sourceHeight) / 2, sourceWidth, sourceHeight, x, y, width, height);
  };
  const makeAlbum = async files => {
    const images = await Promise.all(files.map(readImage));
    const columns = images.length === 1 ? 1 : images.length === 2 ? 2 : 3;
    const rows = Math.ceil(images.length / columns);
    const cell = 320;
    const gap = 8;
    const canvas = document.createElement('canvas');
    canvas.width = columns * cell + (columns - 1) * gap;
    canvas.height = rows * cell + (rows - 1) * gap;
    const context = canvas.getContext('2d');
    context.fillStyle = '#f2f5f3';
    context.fillRect(0, 0, canvas.width, canvas.height);
    images.forEach((image, index) => {
      const x = (index % columns) * (cell + gap);
      const y = Math.floor(index / columns) * (cell + gap);
      cover(context, image, x, y, cell, cell);
    });
    return canvas.toDataURL('image/jpeg', 0.76);
  };
  const addUploader = input => {
    if (input.dataset.hayzoPhotoUpload) return;
    input.dataset.hayzoPhotoUpload = 'true';
    const group = input.closest('.input-group') || input.parentElement;
    const wrapper = document.createElement('div');
    wrapper.className = 'hayzo-photo-upload';
    wrapper.innerHTML = '<label style="display:block;font-size:.8rem;font-weight:700;margin-bottom:6px">رفع صور العقار (اختياري)</label><input type="file" accept="image/jpeg,image/png,image/webp" multiple><small class="hayzo-photo-upload__hint">اختر حتى 6 صور (JPG أو PNG أو WebP). تُحفظ كألبوم صور واحد داخل الإعلان لعرضها للجمهور.</small><div class="hayzo-photo-upload__preview" aria-live="polite"></div>';
    group.insertBefore(wrapper, input);
    const fileInput = wrapper.querySelector('input');
    const preview = wrapper.querySelector('.hayzo-photo-upload__preview');
    fileInput.addEventListener('change', async () => {
      const files = [...fileInput.files].slice(0, MAX_FILES);
      if (!files.length) return;
      if (files.some(file => file.size > MAX_FILE_SIZE)) {
        alert('يجب ألا يزيد حجم كل صورة عن 10 ميجابايت.');
        fileInput.value = '';
        return;
      }
      preview.textContent = 'جارٍ تجهيز ألبوم الصور…';
      try {
        const album = await makeAlbum(files);
        setReactValue(input, album);
        preview.replaceChildren(...files.map(file => {
          const image = document.createElement('img');
          image.src = URL.createObjectURL(file);
          image.alt = 'معاينة صورة العقار';
          return image;
        }));
      } catch (error) {
        console.warn('Estate photo upload:', error);
        preview.textContent = 'تعذر تجهيز الصور، يرجى تجربة صور أخرى.';
      }
    });
  };
  const applyPhotoFilter = select => {
    const page = [...document.querySelectorAll('h1')].find(h1 => h1.textContent.includes('عقارات طلخا'))?.closest('.page');
    if (!page) return;
    page.querySelectorAll('h3').forEach(title => {
      const card = title.closest('.glass-card');
      if (!card) return;
      const hasPhoto = Boolean(card.querySelector('img[alt]'));
      const visible = select.value === 'all' || (select.value === 'with-photo' && hasPhoto) || (select.value === 'without-photo' && !hasPhoto);
      card.style.display = visible ? '' : 'none';
    });
  };
  const addPhotoFilter = page => {
    if (page.querySelector('.hayzo-photo-filter')) return;
    const keywordInput = [...page.querySelectorAll('input')].find(input => input.placeholder && input.placeholder.includes('بحث إضافي بالكلمات'));
    if (!keywordInput) return;
    const container = document.createElement('div');
    container.className = 'hayzo-photo-filter';
    container.innerHTML = '<label style="display:block;font-size:.75rem;font-weight:800;color:var(--text-secondary);margin-bottom:4px">الصور في الإعلان</label><select style="width:100%;padding:9px 12px;border-radius:12px;background:var(--bg-surface);border:1px solid var(--border-color);color:var(--text-primary);font-size:.82rem;font-weight:700"><option value="all">كل الإعلانات</option><option value="with-photo">إعلانات بها صور</option><option value="without-photo">إعلانات بدون صور</option></select>';
    keywordInput.closest('div[style*="margin-top"]')?.before(container);
    const select = container.querySelector('select');
    select.addEventListener('change', () => applyPhotoFilter(select));
    new MutationObserver(() => applyPhotoFilter(select)).observe(page, { childList: true, subtree: true });
  };
  const enhance = () => {
    document.querySelectorAll('input[placeholder="https://..."]').forEach(addUploader);
    document.querySelectorAll('.page').forEach(addPhotoFilter);
  };
  new MutationObserver(enhance).observe(document.documentElement, { childList: true, subtree: true });
  enhance();
})();
