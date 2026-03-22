/* ══════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════ */
const TRANSLATIONS = {
  RU: {
    /* Navbar */
    nav_home:     'Главная',
    nav_services: 'Услуги',
    nav_about:     'О нас',
    nav_process:  'Процесс',
    nav_reviews:  'Отзывы',
    nav_contact:  'Контакты',
    nav_cta:      'Связаться',

    /* Hero */
    hero_h1_1:   'Создаем цифровые решения',
    hero_h1_2:   'для растущего бизнеса',
    hero_p:      'Помогаем привлекать клиентов, увеличивать продажи и расти с помощью современных IT-решений.',
    hero_cta:    'Бесплатная консультация',

    /* Services */
    services_h2: 'Комплексные IT-услуги',
    services_p:  'Разрабатываем и внедряем технологические решения, которые помогают бизнесу расти, автоматизировать процессы и привлекать больше клиентов.',
    svc1_title: 'Интернет-магазины',
    svc1_desc:  'Современные e-commerce сайты с удобной оплатой, высокой скоростью загрузки и оптимизацией для увеличения продаж.',
    svc2_title: 'Сайты-визитки',
    svc2_desc:  'Минималистичные и быстрые сайты для презентации компании и привлечения новых клиентов из интернета.',
    svc3_title: 'Индивидуальное ПО',
    svc3_desc:  'Разработка кастомных систем и сервисов для автоматизации процессов и повышения эффективности бизнеса.',
    svc4_title: '24/7 поддержка',
    svc4_desc:  'Круглосуточная техническая поддержка и быстрое решение любых проблем без простоев.',
    svc5_title: 'IT-консалтинг',
    svc5_desc:  'Помогаем выбрать правильное решение и стратегию для масштабирования и улучшения вашего проекта.',
    svc6_title: 'Развитие после запуска',
    svc6_desc:  'Улучшения, SEO, новые функции и оптимизация существующего проекта для дальнейшего роста.',

    /* About */
    about_h2:     'О нас',
    about_p:      'Мы - IT команда из Латвии. Наша специализация это создание IT-решений и веб-продуктов, которые помогают бизнесу развиваться. Мы используем современные технологии и обеспечиваем надежность каждого проекта.',
    about_cta:    'Связаться с нами',
    about1_title: 'Современные технологии',
    about1_desc:  'Используем современные сервисы, фреймворки и инструменты для надежных и оптимальных решений.',
    about2_title: 'Оптимизация процессов',
    about2_desc:  'Автоматизируем задачи и создаём удобные интерфейсы, чтобы экономить ваше время и ресурсы.',
    about3_title: 'Поддержка и обучение',
    about3_desc:  'Сопровождаем проекты, обучаем вашу команду и обеспечиваем поддержку после запуска продукта.',
    about4_title: 'Надежность и качество',
    about4_desc:  'Мы гарантируем качество и стабильность наших решений, чтобы ваши проекты всегда работали без сбоев.',

    /* Process */
    process_h2:  'Работа с нами',
    process_p:   'Прозрачный процесс, который позволяет запускать проекты быстро и видеть результат на каждом этапе.',
    step1_title: 'Консультация',
    step1_desc:  'На этом этапе мы изучаем ваш бизнес, продукт и целевую аудиторию. С помощью вопросов и обсуждений выявляем реальные потребности, определяем цели проекта и ожидаемые результаты. Наша задача — понять не только что нужно сделать, но и как добиться ваших целей.',
    step1_desc_m:'На этом этапе мы изучаем ваш бизнес, продукт и целевую аудиторию. Через обусждения выявляем реальные потребности, определяем цели проекта и ожидаемые результаты.',
    step1_t1:'Понимаем ваш бизнес', step1_t2:'Слушаем и задаём вопросы', step1_t3:'Определяем цели',
    step2_title: 'Планирование',
    step2_desc:  'После консультации мы предлагаем понятное видение проекта: намечаем ключевые этапы, продумываем архитектуру и возможные технические решения. Это помогает лучше ориентироваться в процессе, расставить приоритеты и заранее учесть потенциальные риски.',
    step2_desc_m:'После консультации намечаем основные шаги проекта и возможные решения — это помогает видеть общую картину и учитывать риски, сохраняя гибкость в процессе.',
    step2_t1:'План на старте', step2_t2:'Видим путь целиком', step2_t3:'Предусматриваем риски',
    step3_title: 'Разработка',
    step3_desc:  'Команда разрабатывает продукт по этапно: мы создаём функционал, показываем промежуточные результаты и учитываем обратную связь. Такой подход позволяет избежать недопонимания и повысить качество итогового продукта.',
    step3_desc_m:'Команда разрабатывает продукт по этапно: мы создаём функционал, показываем промежуточные результаты и учитываем обратную связь.',
    step3_t1:'Промежуточные результаты', step3_t2:'Обратная связь',
    step4_title: 'Запуск',
    step4_desc:  'Перед запуском мы тщательно проверяем, как всё работает: исправность функций, устойчивость и корректность на разных устройствах. После этого запускаем продукт, чтобы всё прошло плавно и без сбоев.',
    step4_desc_m:'Перед запуском мы тщательно тестируем и выводим продукт в онлайн, чтобы всё работало стабильно и без сбоев.',
    step4_t1:'Тестировка', step4_t2:'Вывод в онлайн', step4_t3:'Сразу готово к работе',
    step5_title: 'Поддержка',
    step5_desc:  'После запуска при необходимости помогаем с развитием продукта: следим за его работой, обучаем вашу команду работе с ним и добавляем новые функции — чтобы он развивался вместе с вашим бизнесом.',
    step5_desc_m:'После запуска при необходимости помогаем с развитием продукта: обучаем вашу команду работе с ним и добавляем новые функции.',
    step5_t1:'Поддержка 24/7', step5_t2:'Новый функционал', step5_t3:'Растём вместе с вами',

    /* Reviews */
    reviews_label: 'Отзывы',
    reviews_h2:    'Наши клиенты',
    reviews_p:     'Отзывы компаний, которым мы предоставляем свои услуги',
    rev1: 'Сайт был разработан оперативно и по разумной цене. После запуска мы отметили рост количества клиентов. Процесс разработки прошёл эффективно и без осложнений.',
    rev1_name: 'Marina Petrova', rev1_role: 'CEO',
    rev2: 'Разработка оказалась доступной по стоимости, при этом качество и функционал полностью соответствовали ожиданиям. Новый сайт сделал взаимодействие с клиентами удобнее.',
    rev2_name: 'Martins Zeidenbergs', rev2_role: 'Founder',
    rev3: 'Отличная коммуникация и очень профессиональный подход к дизайну. Сотрудничество было комфортно, все этапы понятны и прозрачны.',
    rev3_name: 'Kart Vaher', rev3_role: 'CEO',
    rev4: 'Работа с командой прошла без лишних сложностей, всё было организовано эффективно. После запуска сайт стал удобным инструментом для привлечения новых клиентов.',
    rev4_name: 'Maija Dambere', rev4_role: 'Product Manager',

    /* Contact */
    contact_label:    'Контакты',
    contact_h2:       'Начнём работу вместе',
    contact_p:        'Оставьте заявку или напишите напрямую',
    form_h3:          'Оставить заявку',
    form_name_label:  'Имя',
    form_name_ph:     'Иван Иванов',
    form_email_label: 'Email',
    form_email_ph:    'ivan@company.ru',
    form_msg_label:   'Расскажите о проекте',
    form_msg_ph:      'Расскажите про свой проект',
    form_submit:      'Отправить заявку',
    form_consent:     'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.',
    success_h4:       'Заявка отправлена!',
    success_p:        'Ожидайте ответа в течении нескольких часов.',
    phone_label:      'Телефон',
    response_time:    'Ожидайте ответа в течении',
    response_hours:   '1–3 часов',

    /* Footer */
    footer_tagline:   'Создаём современные сайты и веб-приложения для растущего бизнеса. Быстро, качественно, с результатом.',
    footer_nav_label: 'Навигация',
    footer_nav1: 'Главная',
    footer_nav2: 'Как мы работаем',
    footer_nav3: 'Отзывы клиентов',
    footer_nav4: 'Связаться с нами',
    footer_cta_label: 'Начать проект',
    footer_cta_p:     'Есть задача? Обсудим её бесплатно',
    footer_cta:       'Бесплатная консультация',
    footer_copy:      '© 2025 Nikita. Все права защищены.',
    footer_sub:       'Разработано с заботой о деталях',
  },

  EN: {
    nav_home:     'Home',
    nav_services: 'Services',
    nav_about:    'About Us',
    nav_process:  'Process',
    nav_reviews:  'Reviews',
    nav_contact:  'Contact',
    nav_cta:      'Get in touch',

    hero_h1_1:   'Complete IT Solutions for',
    hero_h1_2:   'Growing Businesses',
    hero_p:      'We help attract customers, increase sales and grow your business with modern IT solutions.',
    hero_cta:    'Free consultation',

    /* Services */
    services_h2: 'Comprehensive IT Services',
    services_p: 'We design and implement technology solutions that help businesses grow, automate processes, and attract more clients.',
    svc1_title: 'E-Commerce',
    svc1_desc: 'Modern online stores with smooth checkout, fast loading, and optimization to boost sales.',
    svc2_title: 'Business Websites',
    svc2_desc: 'Minimalistic, fast sites to showcase your company and attract new clients online.',
    svc3_title: 'Custom Software',
    svc3_desc: 'Development of tailored systems and services to automate processes and increase business efficiency.',
    svc4_title: '24/7 Support',
    svc4_desc: 'Round-the-clock technical support and quick issue resolution to avoid downtime.',
    svc5_title: 'IT Consulting',
    svc5_desc: 'We help choose the right solution and strategy to scale and improve your project.',
    svc6_title: 'Post-Launch Growth',
    svc6_desc: 'Enhancements, SEO, new features, and optimization of your existing project for further growth.',

    /* About */
    about_h2: 'About Us',
    about_p: 'We are an IT team from Latvia, specializing in creating IT solutions and web products that help businesses develop. We use modern technologies and ensure the reliability of every project.',
    about_cta: 'Contact Us',
    about1_title: 'Modern Technology',
    about1_desc: 'We use modern tools, frameworks, and services to deliver reliable and efficient solutions.',
    about2_title: 'Process Optimization',
    about2_desc: 'We automate tasks and create user-friendly interfaces to save your time and resources.',
    about3_title: 'Support & Training',
    about3_desc: 'We guide projects, train your team, and provide post-launch support.',
    about4_title: 'Reliability & Quality',
    about4_desc: 'We guarantee the quality and stability of our solutions so your projects always run smoothly.',

    /* Process */
    process_h2: 'Process',
    process_p: 'A transparent process that lets you launch projects quickly and see results at every stage.',
    step1_title: 'Consultation',
    step1_desc: 'We study your business, product, and target audience. Through discussions, we identify real needs, define project goals, and expected outcomes. Our goal is to understand not just what to do, but how to achieve your objectives.',
    step1_desc_m: 'We study your business, product, and audience. Through discussions, we identify real needs and define project goals and expected results.',
    step1_t1: 'Understanding Your Business', step1_t2: 'Listening & Asking Questions', step1_t3: 'Defining Goals',
    step2_title: 'Planning',
    step2_desc: 'After consultation, we outline a clear project vision: plan key stages, design structure, and suggest technical approaches. This helps stay oriented, set priorities, and anticipate potential risks.',
    step2_desc_m: 'We outline main steps and possible solutions — helping to see the big picture and plan ahead while keeping flexibility.',
    step2_t1: 'Initial Plan', step2_t2: 'Seeing the Full Picture', step2_t3: 'Anticipating Risks',
    step3_title: 'Development',
    step3_desc: 'The team develops the product in stages: building features, showing progress, and incorporating feedback. This avoids misunderstandings and improves quality.',
    step3_desc_m: 'We develop in stages: building features, showing progress, and incorporating feedback.',
    step3_t1: 'Progress Updates', step3_t2: 'Feedback',
    step4_title: 'Launch',
    step4_desc: 'Before launch, we thoroughly test everything: functionality, stability, and compatibility. Then we deploy the product smoothly without errors or downtime.',
    step4_desc_m: 'We carefully test and launch the product to ensure stability and smooth operation.',
    step4_t1: 'Testing', step4_t2: 'Going Live', step4_t3: 'Ready to Use',
    step5_title: 'Support',
    step5_desc: 'Post-launch, we can help grow the product: monitor performance, train your team, and add new features — so it develops with your business.',
    step5_desc_m: 'After launch, we can help: train your team and add new features.',
    step5_t1: '24/7 Support', step5_t2: 'New Features', step5_t3: 'Growing Together',

    /* Reviews */
    reviews_label: 'Reviews',
    reviews_h2: 'Our Clients',
    reviews_p: 'Feedback from companies we work with',
    rev1: 'The site was developed quickly and at a reasonable cost. After launch, we noticed an increase in client inquiries. The development process was efficient and smooth.',
    rev1_name: 'Marina Petrova', rev1_role: 'CEO',
    rev2: 'Development was affordable, while quality and functionality met expectations. The new site made client interactions more convenient.',
    rev2_name: 'Martins Zeidenbergs', rev2_role: 'Founder',
    rev3: 'Excellent communication and very professional design approach. Collaboration was comfortable, and every step was clear and transparent.',
    rev3_name: 'Kart Vaher', rev3_role: 'CEO',
    rev4: 'Working with the team was straightforward and efficient. After launch, the site became a convenient tool for attracting new clients.',
    rev4_name: 'Maija Dambere', rev4_role: 'Product Manager',

    /* Contact */
    contact_label: 'Contact',
    contact_h2: 'Let’s Start a Project',
    contact_p: 'Leave a request or write to us directly',
    form_h3: 'Submit a Request',
    form_name_label: 'Name',
    form_name_ph: 'John Doe',
    form_email_label: 'Email',
    form_email_ph: 'john@company.com',
    form_msg_label: 'Tell Us About Your Project',
    form_msg_ph: 'Describe your project',
    form_submit: 'Send Request',
    form_consent: 'By clicking the button, you agree to the processing of personal data.',
    success_h4: 'Request Sent!',
    success_p: 'Expect a reply within a few hours.',
    phone_label: 'Phone',
    response_time: 'Expect a response within',
    response_hours: '1–3 hours',

    /* Footer */
    footer_tagline: 'We create modern websites and web apps for growing businesses. Fast, reliable, and results-driven.',
    footer_nav_label: 'Navigation',
    footer_nav1: 'Home',
    footer_nav2: 'How We Work',
    footer_nav3: 'Client Reviews',
    footer_nav4: 'Contact Us',
    footer_cta_label: 'Start a Project',
    footer_cta_p: 'Have a task? Let’s discuss it for free',
    footer_cta: 'Free Consultation',
    footer_copy: '© 2025 Nikita. All rights reserved.',
    footer_sub: 'Crafted with attention to detail',
  },

  LV: {
    nav_home:     'Sākums',
    nav_services: 'Pakalpojumi',
    nav_about:    'Par mums',
    nav_process:  'Process',
    nav_reviews:  'Atsauksmes',
    nav_contact:  'Kontakti',
    nav_cta:      'Sazināties',

    hero_h1_1:   'Veidojam Digitālus Risinājumus',
    hero_h1_2:   'Augošiem Uzņēmumiem',
    hero_p:      'Palīdzam piesaistīt klientus, palielināt pārdošanas apjomus un augt, izmantojot mūsdienīgus IT risinājumus.',
    hero_cta:    'Bezmaksas konsultācija',

    services_h2: 'Pilna spektra IT pakalpojumi',
    services_p: 'Izstrādājam un ieviešam tehnoloģiskus risinājumus, kas palīdz uzņēmumiem augt, automatizēt procesus un piesaistīt vairāk klientu.',
    svc1_title: 'E-komercija',
    svc1_desc: 'Mūsdienīgi interneta veikali ar ērtu apmaksu, ātru ielādi un optimizāciju pārdošanas veicināšanai.',
    svc2_title: 'Biznesa mājaslapas',
    svc2_desc: 'Minimālistiskas, ātras mājaslapas uzņēmuma prezentācijai un jaunu klientu piesaistei tiešsaistē.',
    svc3_title: 'Pielāgota programmatūra',
    svc3_desc: 'Izstrādājam individuālas sistēmas un pakalpojumus, lai automatizētu procesus un palielinātu biznesa efektivitāti.',
    svc4_title: '24/7 atbalsts',
    svc4_desc: 'Nepārtraukts tehniskais atbalsts un ātra problēmu risināšana bez dīkstāves.',
    svc5_title: 'IT Konsultācijas',
    svc5_desc: 'Palīdzam izvēlēties pareizo risinājumu un stratēģiju projekta uzlabošanai un attīstībai.',
    svc6_title: 'Attīstība pēc palaišanas',
    svc6_desc: 'Uzlabojumi, SEO, jaunas funkcijas un esošā projekta optimizācija turpmākai izaugsmei.',

    /* About */
    about_h2: 'Par Mums',
    about_p: 'Mēs esam IT komanda no Latvijas, kas specializējas IT risinājumu un tīmekļa produktu izveidē, kas palīdz uzņēmumiem attīstīties. Izmantojam modernas tehnoloģijas un nodrošinām katra projekta uzticamību.',
    about_cta: 'Sazināties ar Mums',
    about1_title: 'Modernas tehnoloģijas',
    about1_desc: 'Izmantojam mūsdienīgus rīkus, ietvarus un servisus uzticamiem un efektīviem risinājumiem.',
    about2_title: 'Procesu optimizācija',
    about2_desc: 'Automatizējam uzdevumus un veidojam ērtas saskarnes, lai taupītu jūsu laiku un resursus.',
    about3_title: 'Atbalsts un apmācība',
    about3_desc: 'Pavadām projektus, apmācām jūsu komandu un nodrošinām atbalstu pēc produkta palaišanas.',
    about4_title: 'Uzticamība un kvalitāte',
    about4_desc: 'Garantējam mūsu risinājumu kvalitāti un stabilitāti, lai jūsu projekti vienmēr darbotos bez traucējumiem.',

    /* Process */
    process_h2: 'Kā Mēs Strādājam',
    process_p: 'Caurspīdīgs process, kas ļauj ātri palaist projektus un redzēt rezultātus katrā posmā.',
    step1_title: 'Konsultācija',
    step1_desc: 'Šajā posmā mēs izpētām jūsu biznesu, produktu un mērķauditoriju. Diskusiju laikā nosakām reālās vajadzības, projekta mērķus un sagaidāmos rezultātus. Mūsu uzdevums ir saprast ne tikai to, kas jāizdara, bet arī kā sasniegt jūsu mērķus.',
    step1_desc_m: 'Izpētām jūsu biznesu, produktu un auditoriju. Diskusiju laikā nosakām reālās vajadzības un projekta mērķus.',
    step1_t1: 'Saprotam jūsu biznesu', step1_t2: 'Klausāmies un uzdodam jautājumus', step1_t3: 'Nosakām mērķus',
    step2_title: 'Plānošana',
    step2_desc: 'Pēc konsultācijas piedāvājam skaidru projekta redzējumu: plānojam galvenos posmus, izstrādājam struktūru un iespējamās tehniskās pieejas. Tas palīdz orientēties procesā, noteikt prioritātes un paredzēt riskus.',
    step2_desc_m: 'Nozīmējam galvenos soļus un iespējamus risinājumus — tas palīdz redzēt kopējo ainu un plānot riskus, saglabājot elastību.',
    step2_t1: 'Sākotnējais plāns', step2_t2: 'Redzam pilnu ainu', step2_t3: 'Paredzam riskus',
    step3_title: 'Izstrāde',
    step3_desc: 'Komanda izstrādā produktu pa posmiem: veido funkcionalitāti, parāda starpposmu rezultātus un ņem vērā atsauksmes. Šāda pieeja novērš pārpratumus un uzlabo gala produkta kvalitāti.',
    step3_desc_m: 'Izstrādājam pa posmiem: veido funkcionalitāti, parāda starpposmu rezultātus un ņem vērā atsauksmes.',
    step3_t1: 'Starpposmu rezultāti', step3_t2: 'Atsauksmes',
    step4_title: 'Palaišana',
    step4_desc: 'Pirms palaišanas rūpīgi pārbaudām visu: funkcionalitāti, stabilitāti un saderību. Tad izlaižam produktu bez kļūdām un dīkstāves.',
    step4_desc_m: 'Rūpīgi testējam un palaižam produktu, lai nodrošinātu stabilu un plūstošu darbību.',
    step4_t1: 'Testēšana', step4_t2: 'Tiešsaistē', step4_t3: 'Gatavots lietošanai',
    step5_title: 'Atbalsts',
    step5_desc: 'Pēc palaišanas, ja nepieciešams, palīdzam attīstīt produktu: uzraugām darbību, apmācām jūsu komandu un pievienojam jaunas funkcijas — lai tas augtu kopā ar jūsu biznesu.',
    step5_desc_m: 'Pēc palaišanas, ja nepieciešams, palīdzam: apmācām komandu un pievienojam jaunas funkcijas.',
    step5_t1: '24/7 Atbalsts', step5_t2: 'Jaunas funkcijas', step5_t3: 'Augam kopā ar jums',

    /* Reviews */
    reviews_label: 'Atsauksmes',
    reviews_h2: 'Mūsu Klienti',
    reviews_p: 'Atsauksmes no uzņēmumiem, ar kuriem sadarbojamies',
    rev1: 'Mājaslapa tika izstrādāta ātri un par saprātīgu cenu. Pēc palaišanas pamanījām klientu pieplūdumu. Izstrādes process bija efektīvs un gluds.',
    rev1_name: 'Marina Petrova', rev1_role: 'Izpilddirektore',
    rev2: 'Izstrāde bija pieejama pēc izmaksām, kvalitāte un funkcionalitāte atbilda gaidām. Jaunā mājaslapa padarīja mijiedarbību ar klientiem ērtāku.',
    rev2_name: 'Martins Zeidenbergs', rev2_role: 'Dibinātājs',
    rev3: 'Lieliska komunikācija un profesionāla dizaina pieeja. Sadarbība bija ērta, visi posmi skaidri un pārredzami.',
    rev3_name: 'Kart Vaher', rev3_role: 'Izpilddirektors',
    rev4: 'Darbs ar komandu noritēja vienkārši un efektīvi. Pēc palaišanas mājaslapa kļuva par ērtu rīku jaunu klientu piesaistei.',
    rev4_name: 'Maija Dambere', rev4_role: 'Produktu Vadītāja',

    /* Contact */
    contact_label: 'Kontakti',
    contact_h2: 'Sāksim Projektu Kopā',
    contact_p: 'Atstājiet pieprasījumu vai rakstiet tieši',
    form_h3: 'Atstāt Pieprasījumu',
    form_name_label: 'Vārds',
    form_name_ph: 'Jānis Bērziņš',
    form_email_label: 'E-pasts',
    form_email_ph: 'janis@company.lv',
    form_msg_label: 'Pastāstiet par projektu',
    form_msg_ph: 'Aprakstiet savu projektu',
    form_submit: 'Nosūtīt Pieprasījumu',
    form_consent: 'Noklikšķinot pogu, jūs piekrītat personas datu apstrādei.',
    success_h4: 'Pieprasījums Nosūtīts!',
    success_p: 'Sagaidiet atbildi dažu stundu laikā.',
    phone_label: 'Telefons',
    response_time: 'Sagaidiet atbildi',
    response_hours: '1–3 stundas',

    /* Footer */
    footer_tagline: 'Radām modernas mājaslapas un tīmekļa lietotnes augošiem uzņēmumiem. Ātri, kvalitatīvi un ar rezultātu.',
    footer_nav_label: 'Navigācija',
    footer_nav1: 'Sākums',
    footer_nav2: 'Kā Mēs Strādājam',
    footer_nav3: 'Klientu Atsauksmes',
    footer_nav4: 'Sazināties ar Mums',
    footer_cta_label: 'Sākt Projektu',
    footer_cta_p: 'Ir uzdevums? Apspriedīsim bez maksas',
    footer_cta: 'Bezmaksas Konsultācija',
    footer_copy: '© 2025 Nikita. Visas tiesības aizsargātas.',
    footer_sub: 'Izstrādāts ar rūpēm par detaļām',
  }
};

/* ══════════════════════════════════════════════
   LANG INIT — read ?lang= from URL, default RU
══════════════════════════════════════════════ */
function getLangFromURL() {
  const p = new URLSearchParams(window.location.search).get('lang');
  return (p && TRANSLATIONS[p]) ? p : 'EN';
}

const currentLang = getLangFromURL();
const T = TRANSLATIONS[currentLang];

/* Navigate to same page with new lang param */
function selectLang(code) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', code);
  window.location.href = url.toString();
}

/* Apply all translations after DOM ready */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] !== undefined) {
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) { el.setAttribute(attr, T[key]); }
      else { el.textContent = T[key]; }
    }
  });
  // Set html lang attribute
  document.documentElement.lang = currentLang.toLowerCase();
}

document.addEventListener('DOMContentLoaded', applyTranslations);