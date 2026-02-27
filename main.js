// 사례 카드 렌더링
async function loadCases() {
  const grid = document.getElementById('cases-grid');
  if (!grid) return;

  try {
    const response = await fetch('data/cases.json');
    if (!response.ok) throw new Error('Failed to load cases.json');
    const cases = await response.json();

    grid.innerHTML = '';

    cases.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'case-card';
      card.setAttribute('role', 'article');
      card.setAttribute('data-animate', '');

      const tagColor = item.tagColor || '#4A9B7F';

      card.innerHTML = `
        <div class="case-card__header">
          <div class="case-card__tag" style="background-color:${tagColor};">
            ${item.icon ? `<span class="case-card__icon">${item.icon}</span>` : ''}
            <span>${item.tag}</span>
          </div>
          <div class="case-card__meta">
            ${item.participationType ?? ''}
          </div>
        </div>
        <blockquote class="case-card__quote">
          “${item.summary}”
        </blockquote>
        <div class="case-card__turning">
          <span class="turning-label">전환점</span>
          <p>${item.turning_point}</p>
        </div>
        ${item.quote ? `<p class="case-card__quote-sub">${item.quote}</p>` : ''}
        <div class="case-card__keywords">
          ${(item.keywords || [])
            .map((kw) => `<span class="keyword-chip">${kw}</span>`)
            .join('')}
        </div>
      `;

      card.style.transitionDelay = `${index * 0.1}s`;

      grid.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    grid.innerHTML = '<p>사례 데이터를 불러오는 데 어려움이 있습니다.</p>';
  }
}

// 통계 숫자 카운트 애니메이션
function setupStatsCounter() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const numbers = statsSection.querySelectorAll('.stat-number');
  if (!numbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          numbers.forEach((el) => animateNumber(el));
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(statsSection);
}

function animateNumber(el) {
  const target = Number(el.getAttribute('data-target') || '0');
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      el.textContent = `${target}${suffix}`;
    }
  }

  requestAnimationFrame(frame);
}

// 헤더 네비게이션 및 스크롤 관련
function setupHeader() {
  const header = document.getElementById('site-header');
  const nav = document.getElementById('header-nav');
  const hamburger = document.getElementById('hamburger');
  const body = document.body;

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });

    nav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          body.style.overflow = '';
      }
      });
    });
  }

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  setupActiveNav();
}

function setupActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.header-nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const linkMap = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute('href')?.slice(1);
    if (id) {
      linkMap.set(id, link);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((l) => {
          l.classList.remove('active');
          l.removeAttribute('aria-current');
        });
        const active = linkMap.get(id);
        if (active) {
          active.classList.add('active');
          active.setAttribute('aria-current', 'page');
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// 스크롤 진입 애니메이션
function setupScrollAnimations() {
  const animated = document.querySelectorAll('[data-animate]');
  if (!animated.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animated.forEach((el, index) => {
    const currentDelay = window.getComputedStyle(el).transitionDelay;
    if (!currentDelay || currentDelay === '0s') {
      el.style.transitionDelay = `${index * 0.05}s`;
    }
    observer.observe(el);
  });
}

// 공유 버튼 설정
function setupShareButtons() {
  const kakaoBtn = document.getElementById('share-kakao');
  const facebookBtn = document.getElementById('share-facebook');
  const linkBtn = document.getElementById('share-link');
  const linkTextSpan = document.querySelector('.share-link-text');

  const url = window.location.href;
  const title = '고립·은둔 청년 사례집 — 다시, 봄';

  if (kakaoBtn) {
    kakaoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('카카오톡 공유는 아직 별도 연동이 필요합니다.\n아래 링크 복사 버튼을 눌러 주소를 카카오톡으로 보내 주세요.');
    });
  }

  if (facebookBtn) {
    facebookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (linkBtn) {
    linkBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(url);
        if (linkTextSpan) {
          const original = linkTextSpan.textContent;
          linkTextSpan.textContent = '링크 복사됨!';
          setTimeout(() => {
            linkTextSpan.textContent = original || '링크 복사';
          }, 1500);
        }
      } catch {
        alert('링크 복사에 실패했습니다. 주소창의 URL을 직접 복사해 주세요.');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCases();
  setupStatsCounter();
  setupHeader();
  setupShareButtons();
  setupScrollAnimations();
});

