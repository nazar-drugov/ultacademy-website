(() => {
  const language = window.location.pathname.includes('/ua/') ? 'ua/' : 'en/';
  const link = new URL('../../../../' + language, window.location.href).href;
  const banner = document.createElement('aside');
  banner.setAttribute('role', 'status');
  banner.innerHTML = '<a href="' + link + '">← Return to current ULTA</a><span>You are viewing the ULTA 2023–2024 archive.</span>';
  Object.assign(banner.style, { alignItems: 'center', background: '#071b30', color: '#fff', display: 'flex', flexWrap: 'wrap', fontFamily: 'Arial, sans-serif', fontSize: '14px', gap: '12px', justifyContent: 'center', padding: '10px 16px', position: 'relative', textAlign: 'center', zIndex: '99999' });
  banner.querySelector('a').style.cssText = 'background:#f1bf4e;color:#112238;font-weight:700;padding:7px 10px;text-decoration:none;border-radius:3px';
  document.body.prepend(banner);
})();
