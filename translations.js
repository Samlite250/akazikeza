/* =====================================================
   AKAZI KEZA – Internationalization (i18n) Engine
   Keys match data-i18n attributes in index.html exactly
   ===================================================== */

const translations = {
    rw: {
        /* --- NAV --- */
        "nav.home": "Ahabanza",
        "nav.chat": "Foreign Chat",
        "nav.countries": "Ibihugu (Fees)",
        "nav.countries_btn": "Countries",
        "nav.services": "Serivisi Zose",
        "nav.pricing": "Kwiyandikisha",
        "nav.testimonials": "Abakoresha",
        "nav.contact": "Twandikire",
        "nav.login": "Injira",
        "nav.signup": "Iyandikishe",
        "nav.cta": "Tangira Gukora →",

        /* --- HERO --- */
        "hero.badge": "★ URUBUGA RWA #1 MURI RWANDA LIKES & CHAT ★",
        "hero.bonus_banner": "🎁 <strong>WELCOME BONUS:</strong> Uhabwa <strong>3,900 FRW</strong> nk'impano ukimara gufungura account!",
        "hero.title": "Ganira n'Abanyamahanga<br /><span class=\"gradient-text\">Ukorera Amafaranga</span>",
        "hero.sub": "Akazi Keza niko urubuga rwa mbere ruguha <strong>3,900 FRW Welcome Bonus</strong> ukimara gufungura account, n'amahirwe yo guganira n'abantu bo mu mahanga ukajya uhembwa <strong>2,500 FRW buri saha</strong> kuri MoMo yawe!",
        "hero.stat1": "Igiciro / Isaha Chat",
        "hero.stat2": "Happy Earners",
        "hero.stat3": "Kwiyandikisha Rimwe",
        "hero.cta1": "Tangira Guganira None →",
        "hero.cta2": "Menya Byinshi Kuri Foreign Chat",
        "hero.payment": "Bikuza Kuri MoMo:",

        /* --- PARTNERS --- */
        "partners.label": "Gakorana n'abakoresha mu ngeri zitandukanye na:",

        /* --- CHAT SECTION --- */
        "chat.tag": "SERIVISI Y'IBANZE (PRIMARY VALUE PROPOSITION)",
        "chat.title": "Foreign Chat Companion<br /><span class=\"gradient-text\">Ganira n'Abanyamahanga Uhembwe</span>",
        "chat.sub": "Ganira n'abantu baturuka mu bihugu bitandukanye (USA, Canada, UK, France, UAE) ukoresheje telefone yawe. Uhembwa 2,500 FRW kuri buri saha yo guganira.",
        "chat.card_title": "Ni Mu Zihe Ndimi Usabwa Guganira?",
        "chat.card_sub": "Nta burere bwihariye bisaba – gusa kumenya ururimi rumwe mubukurikira:",
        "chat.perk1_title": "Akazi ko mu rugo (Remote Work)",
        "chat.perk1_desc": "Ukoresha telefone yawe cyangwa laptop uri murugo atari ngombwa kujya mu biro.",
        "chat.perk2_title": "Igiciro cy'isaha: 2,500 FRW",
        "chat.perk2_desc": "Mu masaha 4 gusa uba umase gukorera 10,000 FRW kuri MoMo yawe.",
        "chat.perk3_title": "Umutekano no Kubaha (Verified Profiles)",
        "chat.perk3_desc": "Abanyamahanga bose barigenzurwa (Verified profiles) bakeneye gusa uwo baganira n'ubwimfura.",
        "chat.cta": "Iyandikishe Nka Chat Companion None →",

        /* --- CALCULATOR --- */
        "calc.title": "Calculator: Baraga Inyungu Zayo Kuri Chat",
        "calc.sub": "Hitamo amasaha ushaka gukora buri munsi urene ibyo uzajya ukorera:",
        "calc.hours_label": "Amasaha yo guganira / munsi:",
        "calc.daily_label": "Kukwiriza Munsi",
        "calc.weekly_label": "Mu Cyumweru (7 days)",
        "calc.monthly_label": "Mu Ukwezi (30 days)",

        /* --- CLIENT PREVIEW --- */
        "clients.title": "Abanyamahanga Bategereje Guganira Nawe:",

        /* --- SERVICES GRID --- */
        "services.tag": "Serivisi Zose Z'Inyungu",
        "services.title": "Hitamo Uburyo Bwo <br /><span class=\"gradient-text\">Gukorera Amafaranga</span>",
        "services.sub": "Uretse guganira n'abanyamahanga, kuri Akazi Keza ushobora no kureba video, gukina games no kureba ads ukahembwa!",

        "service.create_cta": "✦ Fungura Account Utangire Gukorera →",
        "service.activate_note": "🔒 Ishyura 6,500 FRW rimwe gusa — utangire gukorera ako kanya.",

        "service.chat_badge": "MAIN FEATURE – 2,500 FRW/h",
        "service.chat_name": "Ganira n'Abanyamahanga Uhembwe",
        "service.chat_desc": "Ganira n'abantu baturuka mu bihugu bitandukanye. Ukoresheje telefone yawe, uhembwa buri saha yo guganira nabo muri MoMo.",
        "service.chat_step1": "Iyandikishe nka Chat Companion",
        "service.chat_step2": "Uzakira ubutumwa bw'abanyamahanga bafite amatsiko",
        "service.chat_step3": "Ganira isaha imwe cyangwa irenga",
        "service.chat_step4": "Akira amafaranga muri MoMo yawe",
        "service.chat_rate": "Igiciro / Isaha",
        "service.chat_hours": "Amasaha yo Gukora",
        "service.chat_hours_val": "Ayo ushaka (1h–8h)",
        "service.chat_total": "Inyungu / Munsi (4h)",
        "service.chat_cta": "Tangira Guganira None →",

        "service.tiktok_badge": "Inziza",
        "service.tiktok_name": "Video za TikTok",
        "service.tiktok_desc": "Uhabwa videos za TikTok 7 buri munsi zo kureba (isogonda 20 buri video). Video imwe = <strong>350 FRW</strong>.",
        "service.tiktok_row1": "Videos / Munsi",
        "service.tiktok_row2": "Igiciro / Video",
        "service.tiktok_row3": "Inyungu / Munsi",
        "service.tiktok_cta": "Tangira Kureba →",

        "service.youtube_name": "Video za YouTube",
        "service.youtube_desc": "Uhabwa videos za YouTube 7 buri munsi zo kureba (isogonda 20 buri video). Video imwe = <strong>350 FRW</strong>.",
        "service.youtube_row1": "Videos / Munsi",
        "service.youtube_row2": "Igiciro / Video",
        "service.youtube_row3": "Inyungu / Munsi",
        "service.youtube_cta": "Tangira Kureba →",

        "service.instagram_name": "Video za Instagram",
        "service.instagram_desc": "Uhabwa videos za Instagram 7 buri munsi zo kureba (isogonda 20 buri video). Video imwe = <strong>350 FRW</strong>.",
        "service.instagram_row1": "Videos / Munsi",
        "service.instagram_row2": "Igiciro / Video",
        "service.instagram_row3": "Inyungu / Munsi",
        "service.instagram_cta": "Tangira Kureba →",

        "service.slots_name": "Icyuma Kikaraga",
        "service.slots_desc": "Kina ku buntu ukoresheje igikoresho cyanyu. Amafaranga yose kiguyeho ahita aba ayawe akabikuzwa ako kanya.",
        "service.slots_row1": "Watsindira",
        "service.slots_cta": "Iyandikishe Ukarage →",

        "service.games_name": "Gukina Games – Isoro & Dame",
        "service.games_desc": "Kina games zitandukanye ukoresheje telefone yawe: Isoro, Dame na game nyinshi.",
        "service.games_row1": "Earn / Munsi",
        "service.games_cta": "Tangira Gukina →",

        /* --- HOW IT WORKS --- */
        "how.tag": "KUBIKUZA NI AUTOMATIC",
        "how.title": "Gahunda yo Kubikuza<br /><span class=\"gradient-text\">Buri Munsi</span>",
        "how.desc": "Gutangira usabwa <strong>6,500 FRW</strong> yishyurwa rimwe gusa (uhita ubona <strong>3,900 FRW Welcome Bonus</strong> instant). Nyuma yaho ubikuza amafaranga yawe yose wakoreye kuri Chat n'abanyamahanga cyangwa kureba videos buri gihe ukunda.",
        "how.step1_title": "Iyandikishe",
        "how.step1_desc": "Fungura account yawe wishyura 6,500 FRW rimwe gusa uhite ubona 3,900 FRW Welcome Bonus",
        "how.step2_title": "Ganira n'Abanyamahanga & Kora Ibikorwa",
        "how.step2_desc": "Ganira n'abanyamahanga (2,500 FRW/h), reba videos, kina games",
        "how.step3_title": "Saba Kubikuza",
        "how.step3_desc": "Amafaranga yose wakoreye wemerewe kuyabikuza igihe cyose ushakiye",
        "how.step4_title": "Akugeraho MoMo",
        "how.step4_desc": "Bifata amasaha 2–4 amafaranga akakugeraho kuri MTN MoMo cyangwa Airtel Money",
        "how.cta": "Kanda Hano Wiyandikishe →",
        "how.showcase_title": "Abakorera Kuri Foreign Chat & Videos",

        /* --- PRICING --- */
        "pricing.tag": "Kwiyandikisha",
        "pricing.title": "Tangira Uyu Munsi<br /><span class=\"gradient-text\">Igiciro Kimwe Gusa</span>",
        "pricing.sub": "Iyandikishe rimwe ugakomeza gukorera online no guganira n'abanyamahanga igihe cyose.",
        "pricing.badge": "VIP Membership Yonyine",
        "pricing.period": "Yishyurwa Rimwe Gusa",
        "pricing.desc": "Kwishyura rimwe kuguha 3,900 FRW Welcome Bonus instant n'uburenganzira bwo gukorera online no guganira n'abanyamahanga igihe cyose.",
        "pricing.feat_bonus": "🎁 3,900 FRW Welcome Bonus (Uhabwa 3,900 FRW nk'impano instant)",
        "pricing.feat1": "Foreigner Chat Companion (2,500 FRW / Isaha)",
        "pricing.feat2": "TikTok Videos – Vdeo 7/Umunsi × 20seg × 350 FRW",
        "pricing.feat3": "YouTube Videos – Vdeo 7/Umunsi × 20seg × 350 FRW",
        "pricing.feat4": "Instagram Videos – Vdeo 7/Umunsi × 20seg × 350 FRW",
        "pricing.feat5": "Icyuma Kikaraga – 250,000+ FRW",
        "pricing.feat6": "Games – Isoro & Dame",
        "pricing.feat7": "Kubikuza Automatic – Amasaha 2–4h",
        "pricing.feat8": "MTN MoMo & Airtel Money",
        "pricing.cta": "Fungura Account Yawe →",
        "pricing.req_title": "Hasabwa ibi bikurikira:",
        "pricing.req1": "Email ikora neza",
        "pricing.req2": "Nimero ya MTN cyangwa Airtel (Rwanda)",
        "pricing.req3": "Username (izina ryawe rimwe)",
        "pricing.req4": "Password yizewe",

        /* --- TESTIMONIALS --- */
        "test.tag": "Abakoresha Akazi Keza",
        "test.title": "Abanyamuryango<br /><span class=\"gradient-text\">Batanga Ubuhamya</span>",
        "test.sub": "Abanyamuryango ba Akazi Keza batanga message n'ububuhamya ku buryo bakorera kuri Foreign Chat n'izindi serivisi.",
        "test.quote1": "\"Nganira n'abanyamahanga baturuka mu Bwongereza no mu Bufaransa kuri Akazi Keza! Mfata amasaha 3 buri mugoroba nkahembwa 7,500 FRW kuri MoMo. Byamfashije cyane!\"",
        "test.quote2": "\"Natangiye nkiri mushya, kwiyandikisha ku 6,500 FRW byari byoroshye. Ubu nkora Foreign Chat nkamaze gukorera irenga 500,000 FRW. Amafaranga agera kuri MoMo mu masaha 2-4h.\"",
        "test.quote3": "\"Mbikuza Ayambere Sinarinziko Yangeraho! Gusa nyuma yiminota cumi na cumi na gatanu mbikuje amafaranga yangezeho rwose. Foreign Chat na Slots birizewe cyane!\"",
        "test.sum1": "Happy Earners",
        "test.sum2": "Igiciro / Isaha Chat",
        "test.sum3": "Kubikuza Byihuse MoMo",

        /* --- CTA BANNER --- */
        "cta.title": "AKAZI KEZA – FOREIGN CHAT!",
        "cta.sub": "Injira mu mubare wabarenga 750 bamaze gutangira gukorera online no guganira n'abanyamahanga uhembwa 2,500 FRW/h. Tangira nawe uyu munsi! NTUCIKANWE.",
        "cta.button": "TANGIRA GUGANIRA NONE →",
        "cta.badge_text": "FRW / Isaha Chat",

        /* --- CONTACT --- */
        "contact.tag": "Twandikire",
        "contact.title": "Duganire <span class=\"gradient-text\">Tworohere</span>",
        "contact.sub": "Ufite ikibazo ku buryo bwo guganira n'abanyamahanga cyangwa kwiyandikisha? Turagufasha vuba.",
        "contact.phone_title": "Nimero y'Umutekano & Support",
        "contact.address_title": "Aderesi",
        "contact.hours_title": "Amasaha yo Gukora",
        "contact.hours_val": "24/7 (Saa sita n'izine, iminsi 7)",
        "contact.name_label": "Izina Ryawe",
        "contact.name_ph": "Andika izina ryawe hano...",
        "contact.email_label": "Email Yawe",
        "contact.email_ph": "email@example.com",
        "contact.phone_label": "Telefone (Bisabwa muri MoMo)",
        "contact.phone_ph": "+250 7XX XXX XXX",
        "contact.msg_label": "Ubutumwa Bwawe",
        "contact.msg_ph": "Andika ikibazo cyawe hano...",
        "contact.submit": "Ohereza Ubutumwa →",

        /* --- COUNTRIES TABLE --- */
        "countries.tag": "🤝 AKAZI KEZA × MULAEARN (KENYA)",
        "countries.title": "Ibiciro cyo Kwiyandikisha<br /><span class=\"gradient-text\">Buri Gihugu</span>",
        "countries.sub": "Akazi Keza ikorana n'urubuga rwo mu Kenya rwitwa MulaEarn kugira ngo abanyamuryango bo mu bihugu bitandukanye babone uburyo bwo gufungura account ku giciro cy'igihugu cyabo.",
        "countries.search_ph": "Shakisha igihugu cyawe (urugero: Rwanda, Kenya, Uganda...)",
        "countries.notice": "🔒 Ubwumvikane bwa Akazi Keza na MulaEarn buzamura amahirwe yo kwiyandikisha no kubikuza kuri Mobile Money mu bihugu 17+.",
        "countries.th_no": "#",
        "countries.th_country": "Igihugu / Country",
        "countries.th_currency": "Currency",
        "countries.th_fee": "Activation Fee",
        "countries.th_action": "Igikorwa",
        "countries.activate_btn": "Iyandikishe →",
        "modal.badge": "🤝 AKAZI KEZA × MULAEARN PARTNERSHIP",
        "modal.title": "Activation Fees Per Country",
        "modal.sub": "Akazi Keza ikorana n'urubuga rwo mu Kenya rwitwa MulaEarn. Hitamo igihugu cyawe urene igiciro cyo gufungura account.",
        "modal.register_now": "Iyandikishe None / Register Now →",

        /* --- FOOTER --- */
        "footer.tagline": "Akazi Keza ni urubuga rwa mbere rugufasha guganira n'abanyamahanga ukorera amafaranga n'izindi serivisi online.",
        "footer.col1_title": "Kuri Abakorera",
        "footer.col2_title": "Serivisi Zacu",
        "footer.col3_title": "Twandikire",
        "footer.rights": "Copyright 2026 © AKAZI KEZA. All Rights Reserved."
    },

    en: {
        /* --- NAV --- */
        "nav.home": "Home",
        "nav.chat": "Foreign Chat",
        "nav.countries": "Countries (Fees)",
        "nav.countries_btn": "Countries",
        "nav.services": "All Services",
        "nav.pricing": "Registration",
        "nav.testimonials": "Reviews",
        "nav.contact": "Contact Us",
        "nav.login": "Login",
        "nav.signup": "Sign Up",
        "nav.cta": "Start Earning →",

        /* --- HERO --- */
        "hero.badge": "★ #1 PLATFORM IN RWANDA LIKES & CHAT ★",
        "hero.bonus_banner": "🎁 <strong>WELCOME BONUS:</strong> Receive <strong>3,900 RWF</strong> instant bonus right after creating your account!",
        "hero.title": "Chat With Foreigners<br /><span class=\"gradient-text\">Earn Real Money</span>",
        "hero.sub": "Akazi Keza is Rwanda's #1 platform offering a <strong>3,900 RWF Welcome Bonus</strong> upon registration, plus the opportunity to chat with international companions earning <strong>2,500 RWF per hour</strong> straight to your MoMo!",
        "hero.stat1": "Rate / Chat Hour",
        "hero.stat2": "Happy Earners",
        "hero.stat3": "One-Time Registration",
        "hero.cta1": "Start Chatting Now →",
        "hero.cta2": "Learn More About Foreign Chat",
        "hero.payment": "Withdraw to MoMo:",

        /* --- PARTNERS --- */
        "partners.label": "Work with international clients and earn through:",

        /* --- CHAT SECTION --- */
        "chat.tag": "CORE PLATFORM FEATURE",
        "chat.title": "Foreign Chat Companion<br /><span class=\"gradient-text\">Chat With Foreigners & Earn</span>",
        "chat.sub": "Chat with people from different countries (USA, Canada, UK, France, UAE) using your phone. Earn 2,500 RWF for every hour of chatting.",
        "chat.card_title": "Which Languages Do You Need?",
        "chat.card_sub": "No special degree required – just basic knowledge of one of these languages:",
        "chat.perk1_title": "Work From Home (Remote)",
        "chat.perk1_desc": "Use your phone or laptop from home – no need to go to an office.",
        "chat.perk2_title": "Rate: 2,500 RWF Per Hour",
        "chat.perk2_desc": "Work just 4 hours and earn 10,000 RWF directly to your MoMo.",
        "chat.perk3_title": "Safe & Verified Profiles",
        "chat.perk3_desc": "All foreign companions are verified and only seek genuine conversation.",
        "chat.cta": "Register as a Chat Companion Now →",

        /* --- CALCULATOR --- */
        "calc.title": "Calculator: Estimate Your Chat Earnings",
        "calc.sub": "Select how many hours you want to work daily to see your earnings:",
        "calc.hours_label": "Chat hours per day:",
        "calc.daily_label": "Daily Earnings",
        "calc.weekly_label": "Weekly (7 days)",
        "calc.monthly_label": "Monthly (30 days)",

        /* --- CLIENT PREVIEW --- */
        "clients.title": "International Clients Waiting to Chat:",

        /* --- SERVICES GRID --- */
        "services.tag": "All Earning Services",
        "services.title": "Choose Your Way To <br /><span class=\"gradient-text\">Earn Online</span>",
        "services.sub": "Beyond Foreign Chat, you can also watch videos, play games, and view ads on Akazi Keza to maximize your income!",

        "service.create_cta": "✦ Create Account & Start Earning →",
        "service.activate_note": "🔒 One-time 6,500 RWF activation fee — start earning immediately after.",

        "service.chat_badge": "MAIN FEATURE – 2,500 RWF/h",
        "service.chat_name": "Chat With Foreigners & Earn",
        "service.chat_desc": "Chat with people from different countries. Using your phone, earn for every hour you spend chatting with them on MoMo.",
        "service.chat_step1": "Register as a Chat Companion",
        "service.chat_step2": "Receive messages from curious international companions",
        "service.chat_step3": "Chat for one hour or more",
        "service.chat_step4": "Receive payment to your MoMo",
        "service.chat_rate": "Rate / Hour",
        "service.chat_hours": "Working Hours",
        "service.chat_hours_val": "Your choice (1h–8h)",
        "service.chat_total": "Earnings / Day (4h)",
        "service.chat_cta": "Start Chatting Now →",

        "service.tiktok_badge": "Popular",
        "service.tiktok_name": "TikTok Videos",
        "service.tiktok_desc": "Watch <strong>7 videos/day</strong> for just 20 seconds each. Earn <strong>350 RWF per video</strong> paid directly to your MoMo.",
        "service.tiktok_row1": "Videos / Day",
        "service.tiktok_row2": "Per Video",
        "service.tiktok_row3": "Earn / Day",
        "service.tiktok_cta": "Start Watching →",

        "service.youtube_name": "YouTube Videos",
        "service.youtube_desc": "Watch <strong>7 videos/day</strong> for 20 seconds each. Earn <strong>350 RWF per video</strong> straight to MoMo.",
        "service.youtube_row1": "Videos / Day",
        "service.youtube_row2": "Per Video",
        "service.youtube_row3": "Earn / Day",
        "service.youtube_cta": "Start Watching →",

        "service.instagram_name": "Instagram Videos",
        "service.instagram_desc": "Watch <strong>7 videos/day</strong> for 20 seconds each. Earn <strong>350 RWF per video</strong> to your MoMo.",
        "service.instagram_row1": "Videos / Day",
        "service.instagram_row2": "Per Video",
        "service.instagram_row3": "Earn / Day",
        "service.instagram_cta": "Start Watching →",

        "service.slots_name": "Spin the Wheel (Slots)",
        "service.slots_desc": "Play for free using your device. All winnings are yours and paid out instantly.",
        "service.slots_row1": "You Could Win",
        "service.slots_cta": "Register & Play →",

        "service.games_name": "Play Games – Isoro & Checkers",
        "service.games_desc": "Play various games on your phone: Isoro, Checkers and many more.",
        "service.games_row1": "Earn / Month",
        "service.games_cta": "Start Playing →",

        /* --- HOW IT WORKS --- */
        "how.tag": "AUTOMATIC WITHDRAWAL",
        "how.title": "Withdrawal Process<br /><span class=\"gradient-text\">Every Single Day</span>",
        "how.desc": "Getting started requires a one-time fee of <strong>6,500 RWF</strong> (you instantly receive a <strong>3,900 RWF Welcome Bonus</strong>). After that, withdraw all your earnings from Chat and video tasks whenever you want.",
        "how.step1_title": "Register",
        "how.step1_desc": "Create your account with a one-time fee of 6,500 RWF and instantly get a 3,900 RWF Welcome Bonus",
        "how.step2_title": "Chat With Foreigners & Complete Tasks",
        "how.step2_desc": "Chat with foreigners (2,500 RWF/h), watch videos, play games",
        "how.step3_title": "Request Withdrawal",
        "how.step3_desc": "Request payout of all your earned balance at any time",
        "how.step4_title": "Receive via MoMo",
        "how.step4_desc": "Takes 2–4 hours for your money to arrive on MTN MoMo or Airtel Money",
        "how.cta": "Click Here to Register →",
        "how.showcase_title": "Top Earners on Foreign Chat & Videos",

        /* --- PRICING --- */
        "pricing.tag": "Registration",
        "pricing.title": "Get Started Today<br /><span class=\"gradient-text\">One Fixed Price</span>",
        "pricing.sub": "Register once and keep lifetime access to online earning and Foreign Chat.",
        "pricing.badge": "VIP Membership Only",
        "pricing.period": "One-Time Payment",
        "pricing.desc": "A single payment unlocks an instant 3,900 RWF Welcome Bonus and lifetime access to Foreign Chat tasks and all digital earning tools.",
        "pricing.feat_bonus": "🎁 3,900 RWF Welcome Bonus (Instant cash bonus credited on sign-up)",
        "pricing.feat1": "Foreigner Chat Companion (2,500 RWF / Hour)",
        "pricing.feat2": "TikTok Videos – 7 videos/day × 20sec × 350 RWF",
        "pricing.feat3": "YouTube Videos – 7 videos/day × 20sec × 350 RWF",
        "pricing.feat4": "Instagram Videos – 7 videos/day × 20sec × 350 RWF",
        "pricing.feat5": "Spinning Slots – 250,000+ RWF",
        "pricing.feat6": "Games – Isoro & Checkers",
        "pricing.feat7": "Automatic Payouts – 2–4 Hours",
        "pricing.feat8": "MTN MoMo & Airtel Money",
        "pricing.cta": "Create Your Account →",
        "pricing.req_title": "Requirements to join:",
        "pricing.req1": "Active Email Address",
        "pricing.req2": "MTN or Airtel Mobile Number (Rwanda)",
        "pricing.req3": "Username",
        "pricing.req4": "Secure Password",

        /* --- TESTIMONIALS --- */
        "test.tag": "Akazi Keza Users",
        "test.title": "Community<br /><span class=\"gradient-text\">Testimonials</span>",
        "test.sub": "Read success stories from Akazi Keza members earning on Foreign Chat and other services.",
        "test.quote1": "\"I chat with companions from UK and France on Akazi Keza! Working 3 hours every evening earns me 7,500 RWF directly to MoMo. Highly recommended!\"",
        "test.quote2": "\"I started as a beginner, registering for 6,500 RWF. Now on Foreign Chat I've earned over 500,000 RWF. Money lands on my MoMo in 2-4 hours.\"",
        "test.quote3": "\"I was nervous about my first withdrawal, but just 15 minutes later the money was on my phone! Foreign Chat and Slots are 100% reliable.\"",
        "test.sum1": "Happy Earners",
        "test.sum2": "Rate / Chat Hour",
        "test.sum3": "Fast MoMo Payout",

        /* --- CTA BANNER --- */
        "cta.title": "AKAZI KEZA – FOREIGN CHAT!",
        "cta.sub": "Join over 750 active earners getting paid 2,500 RWF/hour chatting online. Start today and don't miss out!",
        "cta.button": "START CHATTING NOW →",
        "cta.badge_text": "RWF / Chat Hour",

        /* --- CONTACT --- */
        "contact.tag": "Contact Us",
        "contact.title": "Let's Connect <span class=\"gradient-text\">Easily</span>",
        "contact.sub": "Have questions about Foreign Chat or registration? We are here to help you 24/7.",
        "contact.address_title": "Address",
        "contact.hours_title": "Working Hours",
        "contact.hours_val": "24/7 (Round the clock, 7 days)",
        "contact.name_label": "Your Name",
        "contact.name_ph": "Enter your full name here...",
        "contact.email_label": "Your Email",
        "contact.email_ph": "email@example.com",
        "contact.phone_label": "Phone (MoMo Registered)",
        "contact.phone_ph": "+250 7XX XXX XXX",
        "contact.msg_label": "Your Message",
        "contact.msg_ph": "Write your query here...",
        "contact.submit": "Send Message →",

        /* --- COUNTRIES TABLE --- */
        "countries.tag": "🤝 AKAZI KEZA × MULAEARN (KENYA)",
        "countries.title": "International Activation Fees <br /><span class=\"gradient-text\">Per Country</span>",
        "countries.sub": "Akazi Keza in partnership with Kenyan platform MulaEarn provides seamless registration and payout access across 17+ countries.",
        "countries.search_ph": "Search your country (e.g., Kenya, Rwanda, Uganda...)",
        "countries.notice": "🔒 Official Partnership: Akazi Keza has partnered with Kenyan platform MulaEarn for secure registration & instant payouts.",
        "countries.th_no": "#",
        "countries.th_country": "Country",
        "countries.th_currency": "Currency",
        "countries.th_fee": "Activation Fee",
        "countries.th_action": "Action",
        "countries.activate_btn": "Register →",
        "modal.badge": "🤝 AKAZI KEZA × MULAEARN PARTNERSHIP",
        "modal.title": "Activation Fees Per Country",
        "modal.sub": "Akazi Keza in partnership with Kenyan platform MulaEarn. Select your country to view the activation fee.",
        "modal.register_now": "Register Now →",

        /* --- FOOTER --- */
        "footer.tagline": "Akazi Keza is Rwanda's leading platform connecting users with international companions for paid online chat and digital tasks.",
        "footer.col1_title": "For Earners",
        "footer.col2_title": "Our Services",
        "footer.col3_title": "Contact Us",
        "footer.rights": "Copyright 2026 © AKAZI KEZA. All Rights Reserved."
    },

    fr: {
        /* --- NAV --- */
        "nav.home": "Accueil",
        "nav.chat": "Chat Étranger",
        "nav.countries": "Pays (Frais)",
        "nav.countries_btn": "Countries",
        "nav.services": "Tous les Services",
        "nav.pricing": "Inscription",
        "nav.testimonials": "Avis",
        "nav.contact": "Contactez-nous",
        "nav.login": "Connexion",
        "nav.signup": "S'inscrire",
        "nav.cta": "Commencer →",

        /* --- HERO --- */
        "hero.badge": "★ PLATEFORME #1 AU RWANDA LIKES & CHAT ★",
        "hero.bonus_banner": "🎁 <strong>BONUS DE BIENVENUE :</strong> Recevez <strong>3 900 FRW</strong> de bonus dès la création de votre compte !",
        "hero.title": "Discutez avec des Étrangers<br /><span class=\"gradient-text\">Gagnez de l'Argent</span>",
        "hero.sub": "Akazi Keza est la plateforme #1 au Rwanda offrant un <strong>Bonus de Bienvenue de 3 900 FRW</strong> à l'inscription, et la possibilité de discuter avec des internationaux pour <strong>2 500 FRW/heure</strong> sur votre MoMo !",
        "hero.stat1": "Tarif / Heure Chat",
        "hero.stat2": "Membres Satisfaits",
        "hero.stat3": "Inscription Unique",
        "hero.cta1": "Commencer le Chat Maintenant →",
        "hero.cta2": "En savoir plus sur le Chat Étranger",
        "hero.payment": "Retrait sur MoMo :",

        /* --- PARTNERS --- */
        "partners.label": "Travaillez avec des clients internationaux et gagnez via :",

        /* --- CHAT SECTION --- */
        "chat.tag": "FONCTIONNALITÉ PRINCIPALE",
        "chat.title": "Chat Étranger Compagnon<br /><span class=\"gradient-text\">Discutez & Gagnez de l'Argent</span>",
        "chat.sub": "Discutez avec des personnes de différents pays (USA, Canada, UK, France, EAU) depuis votre téléphone. Gagnez 2 500 FRW pour chaque heure de conversation.",
        "chat.card_title": "Quelles Langues Faut-il ?",
        "chat.card_sub": "Pas de diplôme requis – juste une connaissance de base d'une de ces langues :",
        "chat.perk1_title": "Travail à Distance (Remote)",
        "chat.perk1_desc": "Utilisez votre téléphone ou ordinateur portable depuis chez vous – pas besoin de bureau.",
        "chat.perk2_title": "Tarif : 2 500 FRW par Heure",
        "chat.perk2_desc": "Seulement 4 heures de travail et vous gagnez 10 000 FRW directement sur votre MoMo.",
        "chat.perk3_title": "Sécurité & Profils Vérifiés",
        "chat.perk3_desc": "Tous les correspondants étrangers sont vérifiés et recherchent uniquement une conversation authentique.",
        "chat.cta": "S'inscrire comme Compagnon de Chat →",

        /* --- CALCULATOR --- */
        "calc.title": "Calculateur : Estimez vos Gains Chat",
        "calc.sub": "Sélectionnez combien d'heures vous souhaitez travailler par jour pour voir vos revenus :",
        "calc.hours_label": "Heures de chat par jour :",
        "calc.daily_label": "Gains Quotidiens",
        "calc.weekly_label": "Hebdomadaire (7 jours)",
        "calc.monthly_label": "Mensuel (30 jours)",

        /* --- CLIENT PREVIEW --- */
        "clients.title": "Clients Internationaux en Attente :",

        /* --- SERVICES GRID --- */
        "services.tag": "Tous les Services Rémunérés",
        "services.title": "Choisissez Votre Façon de <br /><span class=\"gradient-text\">Gagner en Ligne</span>",
        "services.sub": "En plus du Chat Étranger, vous pouvez regarder des vidéos, jouer à des jeux et voir des annonces sur Akazi Keza pour maximiser vos revenus !",

        "service.create_cta": "✦ Créer un Compte & Commencer à Gagner →",
        "service.activate_note": "🔒 Frais uniques d'activation de 6 500 FRW — commencez à gagner immédiatement.",

        "service.chat_badge": "FONCTIONNALITÉ PRINCIPALE – 2 500 FRW/h",
        "service.chat_name": "Discutez avec des Étrangers & Gagnez",
        "service.chat_desc": "Discutez avec des personnes de différents pays. Avec votre téléphone, gagnez pour chaque heure de conversation sur MoMo.",
        "service.chat_step1": "Inscrivez-vous comme Compagnon de Chat",
        "service.chat_step2": "Recevez des messages de correspondants internationaux curieux",
        "service.chat_step3": "Discutez pendant une heure ou plus",
        "service.chat_step4": "Recevez votre paiement sur MoMo",
        "service.chat_rate": "Tarif / Heure",
        "service.chat_hours": "Heures de Travail",
        "service.chat_hours_val": "Votre choix (1h–8h)",
        "service.chat_total": "Gains / Jour (4h)",
        "service.chat_cta": "Commencer le Chat Maintenant →",

        "service.tiktok_badge": "Populaire",
        "service.tiktok_name": "Vidéos TikTok",
        "service.tiktok_desc": "Regardez <strong>7 vidéos/jour</strong> de 20 secondes chacune. Gagnez <strong>350 FRW par vidéo</strong> sur votre MoMo.",
        "service.tiktok_row1": "Vidéos / Jour",
        "service.tiktok_row2": "Par Vidéo",
        "service.tiktok_row3": "Gains / Jour",
        "service.tiktok_cta": "Commencer à Regarder →",

        "service.youtube_name": "Vidéos YouTube",
        "service.youtube_desc": "Regardez <strong>7 vidéos/jour</strong> de 20 secondes. Gagnez <strong>350 FRW par vidéo</strong> sur MoMo.",
        "service.youtube_row1": "Vidéos / Jour",
        "service.youtube_row2": "Par Vidéo",
        "service.youtube_row3": "Gains / Jour",
        "service.youtube_cta": "Commencer à Regarder →",

        "service.instagram_name": "Vidéos Instagram",
        "service.instagram_desc": "Regardez <strong>7 vidéos/jour</strong> de 20 secondes. Gagnez <strong>350 FRW par vidéo</strong> sur MoMo.",
        "service.instagram_row1": "Vidéos / Jour",
        "service.instagram_row2": "Par Vidéo",
        "service.instagram_row3": "Gains / Jour",
        "service.instagram_cta": "Commencer à Regarder →",

        "service.slots_name": "Roue de la Fortune (Slots)",
        "service.slots_desc": "Jouez gratuitement avec votre appareil. Tous les gains vous appartiennent et sont versés instantanément.",
        "service.slots_row1": "Vous Pourriez Gagner",
        "service.slots_cta": "S'inscrire & Jouer →",

        "service.games_name": "Jeux – Isoro & Dames",
        "service.games_desc": "Jouez à divers jeux sur votre téléphone : Isoro, Dames et bien d'autres.",
        "service.games_row1": "Gains / Mois",
        "service.games_cta": "Jouer Maintenant →",

        /* --- HOW IT WORKS --- */
        "how.tag": "RETRAIT AUTOMATIQUE",
        "how.title": "Procédure de Retrait<br /><span class=\"gradient-text\">Chaque Jour</span>",
        "how.desc": "Pour commencer, des frais uniques d'activation de <strong>6 500 FRW</strong> sont requis (vous recevez immédiatement <strong>3 900 FRW de Bonus de Bienvenue</strong>). Ensuite, retirez vos gains du chat et des vidéos quand vous le souhaitez.",
        "how.step1_title": "Inscrivez-vous",
        "how.step1_desc": "Créez votre compte pour 6 500 FRW une seule fois et recevez instantanément 3 900 FRW de Bonus",
        "how.step2_title": "Discutez & Effectuez les Tâches",
        "how.step2_desc": "Discutez avec des étrangers (2 500 FRW/h), regardez des vidéos, jouez",
        "how.step3_title": "Demandez un Retrait",
        "how.step3_desc": "Demandez le versement de votre solde à tout moment",
        "how.step4_title": "Recevez sur MoMo",
        "how.step4_desc": "Les fonds arrivent sous 2 à 4h directement sur MTN MoMo ou Airtel Money",
        "how.cta": "Cliquez Ici pour Vous Inscrire →",
        "how.showcase_title": "Meilleurs Membres sur Chat & Vidéos",

        /* --- PRICING --- */
        "pricing.tag": "Inscription",
        "pricing.title": "Commencez Aujourd'hui<br /><span class=\"gradient-text\">Un Seul Tarif Fixe</span>",
        "pricing.sub": "Inscrivez-vous une seule fois et gardez un accès illimité au Chat Étranger et aux gains en ligne.",
        "pricing.badge": "Membre VIP Uniquement",
        "pricing.period": "Payable Une Seule Fois",
        "pricing.desc": "Un paiement unique vous donne un Bonus de Bienvenue de 3 900 FRW instantané et un accès à vie à toutes les tâches rémunérées.",
        "pricing.feat_bonus": "🎁 Bonus de Bienvenue de 3 900 FRW (Crédité immédiatement après inscription)",
        "pricing.feat1": "Compagnon de Chat Étranger (2 500 FRW / Heure)",
        "pricing.feat2": "Vidéos TikTok – 7 vidéos/jour × 20sec × 350 FRW",
        "pricing.feat3": "Vidéos YouTube – 7 vidéos/jour × 20sec × 350 FRW",
        "pricing.feat4": "Vidéos Instagram – 7 vidéos/jour × 20sec × 350 FRW",
        "pricing.feat5": "Slots & Roue – 250 000+ FRW",
        "pricing.feat6": "Jeux – Isoro & Dames",
        "pricing.feat7": "Retrait Automatique – 2 à 4 Heures",
        "pricing.feat8": "MTN MoMo & Airtel Money",
        "pricing.cta": "Ouvrir Votre Compte →",
        "pricing.req_title": "Conditions requises :",
        "pricing.req1": "Adresse Email Valide",
        "pricing.req2": "Numéro MTN ou Airtel (Rwanda)",
        "pricing.req3": "Nom d'utilisateur (Username)",
        "pricing.req4": "Mot de Passe Sécurisé",

        /* --- TESTIMONIALS --- */
        "test.tag": "Avis Utilisateurs",
        "test.title": "Témoignages<br /><span class=\"gradient-text\">de la Communauté</span>",
        "test.sub": "Découvrez les avis et retours des membres d'Akazi Keza sur le Chat Étranger et autres services.",
        "test.quote1": "\"Je discute avec des correspondants du Royaume-Uni et de France sur Akazi Keza ! En travaillant 3 heures le soir, je gagne 7 500 FRW directement sur MoMo.\"",
        "test.quote2": "\"J'ai débuté en m'inscrivant pour 6 500 FRW. Aujourd'hui sur le Chat Étranger j'ai cumulé plus de 500 000 FRW. Les retraits arrivent en 2-4h.\"",
        "test.quote3": "\"Au premier retrait j'avais un doute, mais 15 minutes plus tard l'argent était sur mon téléphone ! Le Chat Étranger et les jeux sont très fiables.\"",
        "test.sum1": "Membres Satisfaits",
        "test.sum2": "Tarif / Heure Chat",
        "test.sum3": "Paiement Rapide MoMo",

        /* --- CTA BANNER --- */
        "cta.title": "AKAZI KEZA – CHAT ÉTRANGER !",
        "cta.sub": "Rejoignez plus de 750 membres actifs payés 2 500 FRW/heure en discutant en ligne. Commencez dès aujourd'hui !",
        "cta.button": "COMMENCER LE CHAT MAINTENANT →",
        "cta.badge_text": "FRW / Heure Chat",

        /* --- CONTACT --- */
        "contact.tag": "Contactez-nous",
        "contact.title": "Discutons <span class=\"gradient-text\">Facilement</span>",
        "contact.sub": "Des questions sur le Chat Étranger ou l'inscription ? Notre équipe vous répond 24/7.",
        "contact.address_title": "Adresse",
        "contact.hours_title": "Horaires d'Ouverture",
        "contact.hours_val": "24/7 (En continu, 7j/7)",
        "contact.name_label": "Votre Nom",
        "contact.name_ph": "Entrez votre nom ici...",
        "contact.email_label": "Votre Email",
        "contact.email_ph": "email@exemple.com",
        "contact.phone_label": "Téléphone (Inscrit MoMo)",
        "contact.phone_ph": "+250 7XX XXX XXX",
        "contact.msg_label": "Votre Message",
        "contact.msg_ph": "Écrivez votre message ici...",
        "contact.submit": "Envoyer le Message →",

        /* --- COUNTRIES TABLE --- */
        "countries.tag": "🤝 PARTENARIAT AKAZI KEZA × MULAEARN (KENYA)",
        "countries.title": "Frais d'Activation International <br /><span class=\"gradient-text\">Par Pays</span>",
        "countries.sub": "Akazi Keza en partenariat avec la plateforme kényane MulaEarn offre un accès facile aux inscriptions et retraits dans plus de 17 pays.",
        "countries.search_ph": "Rechercher votre pays (ex : Rwanda, Kenya, Cameroun...)",
        "countries.notice": "🔒 Partenariat Officiel : Akazi Keza en partenariat avec la plateforme kényane MulaEarn garantit une activation sécurisée.",
        "countries.th_no": "#",
        "countries.th_country": "Pays",
        "countries.th_currency": "Devise",
        "countries.th_fee": "Frais d'Activation",
        "countries.th_action": "Action",
        "countries.activate_btn": "S'inscrire →",
        "modal.badge": "🤝 PARTENARIAT AKAZI KEZA × MULAEARN",
        "modal.title": "Frais d'Activation Par Pays",
        "modal.sub": "Akazi Keza en partenariat avec la plateforme kényane MulaEarn. Sélectionnez votre pays pour consulter les frais.",
        "modal.register_now": "S'inscrire Maintenant →",

        /* --- FOOTER --- */
        "footer.tagline": "Akazi Keza est la première plateforme rwandaise vous permettant de discuter avec des correspondants internationaux et d'effectuer des tâches rémunérées en ligne.",
        "footer.col1_title": "Pour les Membres",
        "footer.col2_title": "Nos Services",
        "footer.col3_title": "Contact",
        "footer.rights": "Copyright 2026 © AKAZI KEZA. Tous Droits Réservés."
    }
};

const langDetails = {
    rw: { flag: '🇷🇼', code: 'RW' },
    en: { flag: '🇬🇧', code: 'EN' },
    fr: { flag: '🇫🇷', code: 'FR' }
};

let currentLang = localStorage.getItem('akazikeza_lang') || 'rw';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('akazikeza_lang', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update active flag & code in button
    const flagEl = document.getElementById('activeLangFlag');
    const codeEl = document.getElementById('activeLangCode');
    if (flagEl && langDetails[lang]) flagEl.textContent = langDetails[lang].flag;
    if (codeEl && langDetails[lang]) codeEl.textContent = langDetails[lang].code;

    // Update data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update data-i18n-placeholder elements
    const phElements = document.querySelectorAll('[data-i18n-placeholder]');
    phElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key] !== undefined) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update active class on dropdown options
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(opt => {
        const oLang = opt.getAttribute('data-lang');
        if (oLang === lang) {
            opt.classList.add('active');
            opt.setAttribute('aria-selected', 'true');
        } else {
            opt.classList.remove('active');
            opt.setAttribute('aria-selected', 'false');
        }
    });

    // Trigger earnings calculator update
    if (window.updateCalculatorLanguage) {
        window.updateCalculatorLanguage(lang);
    }
}

// Initialize Dropdown and Event Listeners
function initLanguageDropdown() {
    const langSwitcher = document.getElementById('langSwitcher');
    const langBtn = document.getElementById('langDropdownBtn');
    const langOptions = document.querySelectorAll('.lang-option');

    // Toggle dropdown
    if (langBtn && langSwitcher) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = langSwitcher.classList.toggle('open');
            langBtn.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Handle language selection
    langOptions.forEach(option => {
        const handleSelect = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            if (selectedLang) {
                setLanguage(selectedLang);
                if (langSwitcher) langSwitcher.classList.remove('open');
                if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
            }
        };
        option.addEventListener('click', handleSelect);
        option.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') handleSelect(e);
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (langSwitcher && !langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('open');
            if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Apply saved/default language
    setLanguage(currentLang);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageDropdown);
} else {
    initLanguageDropdown();
}
