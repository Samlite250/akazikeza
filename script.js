/* =====================================================
   KORERA ONLINE – Interactive JavaScript
   ===================================================== */

'use strict';

/* ---- Navbar scroll effect ---- */
(function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

/* ---- Hamburger mobile menu ---- */
(function () {
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (!burger || !navLinks) return;

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (navbar && !navbar.contains(e.target)) {
            navLinks.classList.remove('open');
            burger.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });
})();

/* ---- Smooth scroll for anchor links ---- */
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navH = document.getElementById('navbar')?.offsetHeight || 80;
                const top = target.getBoundingClientRect().top + window.scrollY - navH;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
})();

/* ---- Simple AOS (Animate On Scroll) ---- */
(function () {
    const THRESHOLD = 0.15;
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    // Apply delay if provided
    elements.forEach(el => {
        const delay = el.getAttribute('data-aos-delay');
        if (delay) el.style.transitionDelay = delay + 'ms';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: THRESHOLD });

    elements.forEach(el => observer.observe(el));
})();

/* ---- Animated counter for hero stats ---- */
(function () {
    function animateCounter(el, target, duration) {
        const start = performance.now();
        const from = 0;
        const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(from + (target - from) * eased).toLocaleString();
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }

    const counters = [
        { id: 'price-display', value: 6500, duration: 1200 }
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const config = counters.find(c => c.id === el.id);
                if (config) animateCounter(el, config.value, config.duration);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => {
        const el = document.getElementById(c.id);
        if (el) observer.observe(el);
    });
})();

/* ---- Contact Form Submission (FormSubmit + client-side validation) ---- */
(function () {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', function (e) {
        // Run validation BEFORE allowing the native POST to FormSubmit
        const nameEl = form.querySelector('#contact-name');
        const emailEl = form.querySelector('#contact-email');
        const messageEl = form.querySelector('#contact-message');
        const submitBtn = form.querySelector('#contact-submit');

        const name = nameEl ? nameEl.value.trim() : '';
        const email = emailEl ? emailEl.value.trim() : '';
        const message = messageEl ? messageEl.value.trim() : '';

        // Validation – stop submission only on error
        if (!name || !email || !message) {
            e.preventDefault();
            feedback.className = 'form-feedback error';
            feedback.textContent = '⚠️ Uzuza imirongo yose isabwa (izina, email, ubutumwa).';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            e.preventDefault();
            feedback.className = 'form-feedback error';
            feedback.textContent = "⚠️ Andika email y'ukuri kandi ikore neza.";
            return;
        }

        // Validation passed – show sending indicator and let FormSubmit POST proceed
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Koherezwa…';
        }
        feedback.className = 'form-feedback';
        feedback.textContent = '';
        // Form submits natively to FormSubmit → yolaearn@gmail.com
    });
})();



/* ---- Floating cards parallax effect on hero ---- */
(function () {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const cards = hero.querySelectorAll('.floating-card');

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const cx = (e.clientX - rect.left) / rect.width - 0.5;
        const cy = (e.clientY - rect.top) / rect.height - 0.5;

        cards.forEach((card, i) => {
            const depth = (i + 1) * 6;
            card.style.transform = `translate(${cx * depth}px, ${cy * depth}px)`;
        });
    });

    hero.addEventListener('mouseleave', () => {
        cards.forEach(card => {
            card.style.transform = '';
        });
    });
})();

/* ---- Active nav link on scroll ---- */
(function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(sec => observer.observe(sec));
})();

/* ---- Service card tilt effect ---- */
(function () {
    const cards = document.querySelectorAll('.service-card, .testimonial-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
            card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();




/* ---- Foreign Chat Interactive Calculator ---- */
(function () {
    const slider = document.getElementById('hours-slider');
    const hoursVal = document.getElementById('hours-val');
    const dailyEarn = document.getElementById('daily-earn');
    const weeklyEarn = document.getElementById('weekly-earn');
    const monthlyEarn = document.getElementById('monthly-earn');

    if (!slider || !hoursVal || !dailyEarn || !weeklyEarn || !monthlyEarn) return;

    const HOURLY_RATE = 2500;

    function updateEarnings() {
        const hours = parseInt(slider.value, 10);
        const lang = localStorage.getItem('akazikeza_lang') || 'rw';

        if (lang === 'en') {
            hoursVal.textContent = hours === 1 ? '1 Hour' : `${hours} Hours`;
        } else if (lang === 'fr') {
            hoursVal.textContent = hours === 1 ? '1 Heure' : `${hours} Heures`;
        } else {
            hoursVal.textContent = hours === 1 ? 'Isaha 1' : `${hours} Amasaha`;
        }

        const daily = hours * HOURLY_RATE;
        const weekly = daily * 7;
        const monthly = daily * 30;

        dailyEarn.textContent = `${daily.toLocaleString()} FRW`;
        weeklyEarn.textContent = `${weekly.toLocaleString()} FRW`;
        monthlyEarn.textContent = `${monthly.toLocaleString()} FRW`;
    }

    window.updateCalculatorLanguage = function () {
        updateEarnings();
    };

    slider.addEventListener('input', updateEarnings);
    updateEarnings();
})();


/* ---- MulaEarn Agencies Activation Fees Table & Modal ---- */
(function () {
    const countriesData = [
        { num: 1, name: 'Kenya', flag: '🇰🇪', currency: 'KSH', fee: '500 KSH' },
        { num: 2, name: 'Tanzania', flag: '🇹🇿', currency: 'TZS', fee: '11,500 TZS' },
        { num: 3, name: 'Uganda', flag: '🇺🇬', currency: 'UGX', fee: '19,000 UGX' },
        { num: 5, name: 'Rwanda', flag: '🇷🇼', currency: 'RWF', fee: '6,500 RWF' },
        { num: 6, name: 'Nigeria', flag: '🇳🇬', currency: 'NGN', fee: '8,500 NGN' },
        { num: 7, name: 'Burundi', flag: '🇧🇮', currency: 'BIF', fee: '25,000 BIF' },
        { num: 8, name: 'Zambia', flag: '🇿🇲', currency: 'ZK', fee: '130 ZK' },
        { num: 9, name: 'Malawi', flag: '🇲🇼', currency: 'MK', fee: '26,000 MK' },
        { num: 10, name: 'Ivory Coast', flag: '🇨🇮', currency: 'XOF', fee: '4,000 XOF' },
        { num: 11, name: 'Senegal', flag: '🇸🇳', currency: 'XOF', fee: '4,000 XOF' },
        { num: 12, name: 'Botswana', flag: '🇧🇼', currency: 'BWP', fee: '190 BWP' },
        { num: 13, name: 'South Africa', flag: '🇿🇦', currency: 'ZAR', fee: '70 ZAR' },
        { num: 14, name: 'Ghana', flag: '🇬🇭', currency: 'GHC', fee: '90 GHC' },
        { num: 15, name: 'Cameroon', flag: '🇨🇲', currency: 'XAF', fee: '4,000 XAF' },
        { num: 16, name: 'West Africa', flag: '🌍', currency: 'XOF', fee: '4,000 XOF' },
        { num: 17, name: 'South Sudan', flag: '🇸🇸', currency: 'SSP', fee: '20,000 SSP' },
        { num: 18, name: 'Others', flag: '🌐', currency: 'USD', fee: '$8 USD' }
    ];

    const tableBody = document.getElementById('countriesTableBody');
    const modalTableBody = document.getElementById('modalCountriesTableBody');
    const searchInput = document.getElementById('countrySearchInput');
    const modalSearchInput = document.getElementById('modalCountrySearch');

    const modal = document.getElementById('countriesModal');
    const openBtn = document.getElementById('openCountriesModalBtn');
    const mobileOpenBtn = document.getElementById('mobile-btn-countries');
    const closeBtn = document.getElementById('closeCountriesModalBtn');

    function renderTables(filter = '') {
        const query = filter.toLowerCase().trim();
        const filtered = countriesData.filter(c =>
            c.name.toLowerCase().includes(query) ||
            c.currency.toLowerCase().includes(query) ||
            c.fee.toLowerCase().includes(query)
        );

        const currentLang = localStorage.getItem('akazikeza_lang') || 'rw';
        const actionText = currentLang === 'en' ? 'Register →' : (currentLang === 'fr' ? 'S\'inscrire →' : 'Iyandikishe →');

        if (tableBody) {
            if (filtered.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 24px; color: var(--clr-muted);">Nta gihugu cyabonetse / No country found</td></tr>`;
            } else {
                tableBody.innerHTML = filtered.map(c => `
                    <tr>
                        <td class="col-num">${c.num}</td>
                        <td class="col-country">
                            <span class="country-flag">${c.flag}</span>
                            <span class="country-name">${c.name}</span>
                        </td>
                        <td class="col-currency"><span class="currency-badge">${c.currency}</span></td>
                        <td class="col-fee"><strong class="fee-badge">${c.fee}</strong></td>
                        <td class="col-action">
                            <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener" class="btn btn-primary btn-sm tbl-btn">
                                ${actionText}
                            </a>
                        </td>
                    </tr>
                `).join('');
            }
        }

        if (modalTableBody) {
            if (filtered.length === 0) {
                modalTableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px; color: var(--clr-muted);">Nta gihugu cyabonetse</td></tr>`;
            } else {
                modalTableBody.innerHTML = filtered.map(c => `
                    <tr>
                        <td class="col-num">${c.num}</td>
                        <td class="col-country">
                            <span class="country-flag">${c.flag}</span>
                            <span class="country-name">${c.name}</span>
                        </td>
                        <td class="col-fee"><strong class="fee-badge">${c.fee}</strong></td>
                        <td class="col-action">
                            <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener" class="btn btn-primary btn-sm tbl-btn">
                                ${actionText}
                            </a>
                        </td>
                    </tr>
                `).join('');
            }
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderTables(e.target.value));
    }
    if (modalSearchInput) {
        modalSearchInput.addEventListener('input', (e) => renderTables(e.target.value));
    }

    // Modal Toggle logic
    function openModal() {
        if (!modal) return;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        renderTables(modalSearchInput ? modalSearchInput.value : '');
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (mobileOpenBtn) mobileOpenBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
            closeModal();
        }
    });

    renderTables();
})();


