/*
  SITE GUIDE
  - To update a page's text, open its HTML file under pages/.
  - To update a card's title, description, category or character, edit WORKS below.
  - Card colors correspond to the three categories: class, highlights, and about.
  - No framework, package manager, or internet connection required.
*/

const WORKS = [
  {
    number: '01',
    title: '自己紹介',
    english: 'About the editor',
    summary: '私の好きなこと、勉強していること、大切にしたいこと。',
    href: 'pages/about.html',
    category: 'personal',
    glyph: '私'
  },
  {
    number: '02',
    title: 'キャリア特集',
    english: 'Career & work',
    summary: '将来の仕事、働き方、そして就職活動について。',
    href: 'pages/career.html',
    category: 'course',
    glyph: '働'
  },
  {
    number: '03',
    title: '私の好きな言葉',
    english: 'Words that matter',
    summary: '「強がらないで」という言葉について。',
    href: 'pages/favorite-words.html',
    category: 'course',
    glyph: '言'
  },
  {
    number: '04',
    title: '食べ物の詩',
    english: 'A food poem',
    summary: '食べ物をテーマに、日本語で詩を書きます。',
    href: 'pages/food-poem.html',
    category: 'course',
    glyph: '詩'
  },
  {
    number: '05',
    title: 'オノマトペ広告',
    english: 'Onomatopoeia ad',
    summary: '日本語の音やリズムを使った広告作品。',
    href: 'pages/onomatopoeia.html',
    category: 'course',
    glyph: '音'
  },
  {
    number: '06',
    title: '体験してみて',
    english: 'Origami experience in Japan',
    summary: '日本で折り紙の作品を見て、感じたこと。',
    href: 'pages/origami-experience.html',
    category: 'course',
    glyph: '折'
  },
  {
    number: '07',
    title: '過去の作品',
    english: 'Past work · optional',
    summary: '以前の授業で作った作品を、もう一度見つめ直す。',
    href: 'pages/past-work.html',
    category: 'course',
    glyph: '作'
  },
  {
    number: '08',
    title: '編集後記',
    english: 'Final reflection',
    summary: 'このポートフォリオを作って感じたこと。',
    href: 'pages/afterword.html',
    category: 'personal',
    glyph: '終'
  },
  {
    number: '09',
    title: 'ふりかえり',
    english: 'A reflection',
    summary: '授業で学んだことをふりかえる。',
    href: 'pages/reflection.html',
    category: 'course',
    glyph: '省'
  },
  {
    number: '10',
    title: '刺繡コーナー',
    english: 'Embroidery corner',
    summary: '刺繡やものづくり。私の好きな手仕事。',
    href: 'pages/free-corner.html',
    category: 'personal',
    glyph: '針'
  },
  {
    number: '11',
    title: 'スピーチコンテスト',
    english: 'Duke speech competition',
    summary: '教室を飛び出して、日本語で話した経験。',
    href: 'pages/speech.html',
    category: 'highlights',
    glyph: '話'
  },
  {
    number: '12',
    title: '日本語学習の表彰',
    english: 'Second-year Japanese award',
    summary: '日本語の勉強を続けてきた節目の出来事。',
    href: 'pages/award.html',
    category: 'highlights',
    glyph: '賞'
  },
  {
    number: '13',
    title: '日本での留学',
    english: 'Study abroad in Japan',
    summary: '日本で過ごした思い出。',
    href: 'pages/japan.html',
    category: 'highlights',
    glyph: '旅'
  }
];

const CATEGORIES = { course: '授業の作品', personal: '私について', highlights: '特別な経験' };
const root = document.body.dataset.root || './';
const page = document.body.dataset.page || 'home';

function injectLayout() {
  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `<header class="site-header"><div class="section-wrap header-inner">
      
      <a href="${root}index.html" class="site-brand" aria-label="器用な世界、ホームへ"><span class="brand-mark" aria-hidden="true">✳</span><span>器用な世界</span><small>KIYOU NA SEKAI</small></a>
      
      <nav class="site-nav" aria-label="メインナビゲーション">
        <a href="${root}index.html#works">目次</a>
        <a href="${root}pages/about.html">自己紹介</a>
      </nav>
      <!-- <a class="header-cta" href="${root}index.html?filter=highlights#works">特別な経験 <span aria-hidden="true">↗</span></a> -->

    </div></header>`;
  }
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `<footer class="site-footer"><div class="section-wrap footer-inner"><div><a href="${root}index.html" class="footer-brand">器用な世界<span>。</span></a><span><p class="footer-brand-english">KIYOU NA SEKAI</p></span></div><div class="footer-right"><p>読んでくれてありがとうございました</p><span>© 2026 Zaaer · Japanese Portfolio</span></div></div></footer>`;
  }
}

/*
  Table of contents:
  - On a normal visit: the cards glide right-to-left in a deliberately mixed order.
  - Hovering, keyboard focus, or the pause button stops the animation.
  - Any filter shows the original numbered grid; "All" means ALL in numbered order.
  - Each card's text is defined only once in WORKS above.
*/
function cardMarkup(work) {
  return `
    <a class="work-card" href="${root}${work.href}" data-category="${work.category}">
      <div class="work-card-art" aria-hidden="true">
        <span>${work.glyph}</span>
        <i></i>
      </div>
      <div class="work-card-text">
        <span class="card-label">${work.number} / ${work.english}</span>
        <h3>${work.title}</h3>
        <!-- <p>${work.summary}</p> -->
        <span class="work-card-link">
          <span>${CATEGORIES[work.category]}</span>
          <span class="work-card-arrow" aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  `;
}

function mixedWorks() {
  // Spread teal, dark-red and bright-red cards throughout the moving row.
  // Shuffle within each category, leaving the canonical WORKS order untouched.
  const pools = {
    course: WORKS.filter(work => work.category === 'course'),
    highlights: WORKS.filter(work => work.category === 'highlights'),
    personal: WORKS.filter(work => work.category === 'personal')
  };

  for (const pool of Object.values(pools)) {
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
  }

  const mix = [
    'highlights', 'course', 'personal', 'course', 'course',
    'highlights', 'course', 'personal', 'course', 'highlights',
    'course', 'personal', 'course'
  ];
  const ordered = [];
  for (const category of mix) {
    if (pools[category].length) ordered.push(pools[category].shift());
  }
  for (const pool of Object.values(pools)) ordered.push(...pool);
  return ordered;
}

function createCards() {
  const grid = document.getElementById('works-grid');
  const marquee = document.getElementById('works-marquee');
  const track = document.getElementById('works-marquee-track');
  if (!grid || !marquee || !track) return;

  // The normal grid stays in the PDF's numbered order.
  grid.innerHTML = WORKS.map(cardMarkup).join('');

  // Two identical groups allow a seamless, infinite CSS-only movement.
  // The second is decorative, so it is hidden from screen readers and tab order.
  const mixed = mixedWorks().map(cardMarkup).join('');
  track.innerHTML = `
    <div class="marquee-group">${mixed}</div>
    <div class="marquee-group" aria-hidden="true">${mixed}</div>
  `;
  track.querySelectorAll('.marquee-group[aria-hidden="true"] a').forEach(link => {
    link.tabIndex = -1;
  });

  const buttons = [...document.querySelectorAll('[data-filter]')];
  const pauseButton = document.getElementById('marquee-pause');
  const controls = document.getElementById('marquee-controls');
  const returnButton = document.getElementById('marquee-return');

  function selectFilter(filter) {
    // null is the default moving view; all is the stationary original-order view.
    const moving = filter === null;
    marquee.hidden = !moving;
    grid.hidden = moving;
    if (controls) controls.hidden = !moving;
    if (returnButton) returnButton.hidden = moving;

    buttons.forEach(button => {
      const selected = !moving && button.dataset.filter === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    grid.querySelectorAll('.work-card').forEach(card => {
      card.hidden = !moving && filter !== 'all' && card.dataset.category !== filter;
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => selectFilter(button.dataset.filter));
  });

  // Pausing only on actual pointer movement prevents a common false pause:
  // scrolling the page while the mouse sits motionless over the card area.


  // Respect a visitor's OS reduced-motion preference, but always show a Play
  // control: clicking Play explicitly opts in to the moving cards. Crucially,
  // the row is never converted into a horizontally scrollable white scrollbar.
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pausedByButton = motionPreference.matches;

  function updatePauseButton() {
    marquee.classList.toggle('is-paused', pausedByButton);
    marquee.classList.toggle('is-motion-override', !pausedByButton && motionPreference.matches);
    if (!pauseButton) return;
    pauseButton.setAttribute('aria-pressed', String(pausedByButton));
    pauseButton.setAttribute('aria-label', pausedByButton ? 'カードの動きを再開' : 'カードの動きを一時停止');
    pauseButton.title = pausedByButton && motionPreference.matches
      ? '端末の動きを減らす設定で停止しています。クリックすると再生します。'
      : '';
    pauseButton.innerHTML = pausedByButton
      ? '▶ <span>再生</span>'
      : 'Ⅱ <span>一時停止</span>';
  }

  if (pauseButton) {
    pauseButton.addEventListener('click', () => {
      pausedByButton = !pausedByButton;
      updatePauseButton();
    });
  }

  if (returnButton) {
    returnButton.addEventListener('click', () => {
      // Choosing the moving display explicitly resumes motion.
      pausedByButton = false;
      updatePauseButton();
      selectFilter(null);
    });
  }

  if (motionPreference.addEventListener) {
    motionPreference.addEventListener('change', () => {
      pausedByButton = motionPreference.matches;
      updatePauseButton();
    });
  }
  updatePauseButton();

  // A header link can select Highlights directly, but the plain homepage
  // starts with no button selected and the moving cards visible.
  const requested = new URLSearchParams(window.location.search).get('filter');
  const filters = ['all', 'course', 'highlights', 'personal'];
  selectFilter(filters.includes(requested) ? requested : null);
}

function addArticleNavigation() {
  if (page === 'home') return;
  const current = WORKS.find(work => work.href === `pages/${page}.html`);
  const nav = document.querySelector('#article-pager');
  if (!nav || !current) return;
  const idx = WORKS.indexOf(current);
  const prev = WORKS[(idx - 1 + WORKS.length) % WORKS.length];
  const next = WORKS[(idx + 1) % WORKS.length];
  nav.innerHTML = `<a href="${root}${prev.href}"><span>← 前のページ</span><strong>${prev.title}</strong></a><a href="${root}${next.href}"><span>次のページ →</span><strong>${next.title}</strong></a>`;
}




/* Photo carousel: proportional slide widths and seamless wraparound. */

document.querySelectorAll('.photo-carousel').forEach(carousel => {
    const viewport = carousel.querySelector('.carousel-window');
    const track = carousel.querySelector('.carousel-track');
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    const counter = carousel.querySelector('.carousel-count');

    if (!viewport || !track || !prev || !next) return;

    const originals = Array.from(track.querySelectorAll(':scope > .carousel-slide'));
    const total = originals.length;
    if (!total) return;

    // Copy the edge slides so the previous/next picture is always available.
    const copies = total > 1 ? Math.min(2, total) : 0;
    function cloneSlide(slide) {
        const clone = slide.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
        clone.querySelectorAll('a, button, input, select, textarea').forEach(node => {
            node.setAttribute('tabindex', '-1');
        });
        return clone;
    }

    if (copies) {
        track.prepend(...originals.slice(-copies).map(cloneSlide));
        track.append(...originals.slice(0, copies).map(cloneSlide));
    }

    const slides = Array.from(track.children);
    let index = copies;
    let moving = false;
    let layoutPending = false;

    function sizeSlides() {
        // Reserve room for the tallest caption, including ruby readings.
        const captionSpace = Math.max(
            48,
            ...slides.map(slide => slide.querySelector('figcaption')?.scrollHeight || 0)
        );
        const imageHeight = Math.max(130, viewport.clientHeight - captionSpace - 42);
        const maxWidth = viewport.clientWidth * (window.innerWidth <= 700 ? 0.78 : 0.66);
        const minWidth = Math.min(180, viewport.clientWidth * 0.34);

        slides.forEach(slide => {
            const img = slide.querySelector('img');
            const ratio = img?.naturalWidth && img?.naturalHeight
                ? img.naturalWidth / img.naturalHeight
                : 1;
            slide.style.width = `${Math.min(maxWidth, Math.max(minWidth, imageHeight * ratio))}px`;
        });
    }

    function render(animate = true) {
        if (!animate) {
            track.style.transition = 'none';
            track.classList.add('is-repositioning');
        }

        sizeSlides();
        const active = slides[index];
        // offsetLeft/offsetWidth exclude the decorative CSS scale transform.
        // This works even when consecutive images have different widths.
        const offset = viewport.clientWidth / 2
            - (active.offsetLeft + active.offsetWidth / 2);
        track.style.transform = `translate3d(${offset}px, 0, 0)`;

        slides.forEach((slide, i) => {
            const selected = i === index;
            const original = i >= copies && i < copies + total;
            slide.classList.toggle('is-active', selected);
            slide.setAttribute('aria-hidden', selected && original ? 'false' : 'true');
        });

        if (counter) {
            const current = ((index - copies + total) % total) + 1;
            counter.textContent = `${current} / ${total}`;
        }

        if (!animate) {
            track.getBoundingClientRect(); // Commit the seamless jump.
            track.style.transition = '';
            track.classList.remove('is-repositioning');
        }
    }

    function move(direction) {
        if (moving || total < 2) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            index = ((index - copies + direction + total) % total) + copies;
            render(false);
            return;
        }

        moving = true;
        index += direction;
        render(true);
    }

    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));

    track.addEventListener('transitionend', event => {
        if (event.target !== track || event.propertyName !== 'transform') return;
        // Move from a visually identical edge copy back to the real slide.
        if (index < copies) index += total;
        else if (index >= copies + total) index -= total;
        render(false);
        moving = false;
        if (layoutPending) {
            layoutPending = false;
            render(false);
        }
    });

    carousel.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        if (event.target.closest('a')) return;
        event.preventDefault();
        move(event.key === 'ArrowLeft' ? -1 : 1);
    });

    function refreshLayout() {
        if (moving) layoutPending = true;
        else render(false);
    }
    window.addEventListener('resize', refreshLayout);
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img && !img.complete) img.addEventListener('load', refreshLayout, { once: true });
    });

    if (total === 1) {
        prev.hidden = true;
        next.hidden = true;
    }
    render(false);
});


injectLayout();
createCards();
addArticleNavigation();



