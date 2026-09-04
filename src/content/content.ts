import type { ImageMetadata } from 'astro'

import deSchedule from '@/assets/dee/screenshots/de/04_schedule.png'
import deWelcome from '@/assets/dee/screenshots/de/01_welcome.png'
import deWorkout from '@/assets/dee/screenshots/de/08_workout.jpg'
import enSchedule from '@/assets/dee/screenshots/en/04_schedule.png'
import enWelcome from '@/assets/dee/screenshots/en/01_welcome.png'
import enWorkout from '@/assets/dee/screenshots/en/08_workout.jpg'
import esSchedule from '@/assets/dee/screenshots/es/04_schedule.png'
import esWelcome from '@/assets/dee/screenshots/es/01_welcome.png'
import esWorkout from '@/assets/dee/screenshots/es/08_workout.jpg'
import frSchedule from '@/assets/dee/screenshots/fr/04_schedule.png'
import frWelcome from '@/assets/dee/screenshots/fr/01_welcome.png'
import frWorkout from '@/assets/dee/screenshots/fr/08_workout.jpg'
import nlSchedule from '@/assets/dee/screenshots/nl/04_schedule.png'
import nlWelcome from '@/assets/dee/screenshots/nl/01_welcome.png'
import nlWorkout from '@/assets/dee/screenshots/nl/08_workout.jpg'
import heSchedule from '@/assets/dee/screenshots/he-IL/04_schedule.png'
import heWelcome from '@/assets/dee/screenshots/he-IL/01_welcome.png'
import heWorkout from '@/assets/dee/screenshots/he-IL/08_workout.jpg'
import ptSchedule from '@/assets/dee/screenshots/pt-BR/04_schedule.png'
import ptWelcome from '@/assets/dee/screenshots/pt-BR/01_welcome.png'
import ptWorkout from '@/assets/dee/screenshots/pt-BR/08_workout.jpg'

export type DeeLocale = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'pt-BR' | 'he-IL'
export type DeeRouteSlug = '' | 'es' | 'fr' | 'de' | 'nl' | 'pt-br' | 'he'
export type DeeDirection = 'ltr' | 'rtl'

type ScreenshotKey = 'welcome' | 'schedule' | 'workout'

interface DeeScreenshot {
  src: ImageMetadata
  alt: string
}

interface DeeProof {
  eyebrow: string
  title: string
  body: string
  points: string[]
}

interface DeeFaq {
  question: string
  answer: string
}

export interface DeeContent {
  locale: DeeLocale
  routeSlug: DeeRouteSlug
  htmlLang: string
  direction: DeeDirection
  nativeName: string
  seo: {
    title: string
    description: string
  }
  nav: {
    plan: string
    rounds: string
    privacy: string
    faq: string
  }
  a11y: {
    skip: string
    home: string
    navigation: string
    language: string
    essentials: string
    legal: string
    timeRemaining: string
  }
  status: string
  hero: {
    eyebrow: string
    title: string
    body: string
    explore: string
    previewLabel: string
  }
  trust: string[]
  proofs: {
    plan: DeeProof
    rounds: DeeProof
    privacy: DeeProof
  }
  screenshots: Record<ScreenshotKey, DeeScreenshot>
  timer: {
    label: string
    round: string
    drill: string
    cue: string
    rest: string
  }
  faqTitle: string
  faqs: DeeFaq[]
  closing: {
    eyebrow: string
    title: string
    body: string
    cta: string
  }
  footer: {
    privacy: string
    terms: string
    disclaimer: string
  }
  decorative: {
    scheduleDays: [string, string, string]
    privacyOrbit: [string, string, string]
    privacyBadge: string
    faqEyebrow: string
  }
}

export const deeAvailability = {
  state: 'available' as const,
  appStoreURL: 'https://apps.apple.com/app/id6788483296',
}

export const deeLocales: DeeLocale[] = ['en', 'es', 'fr', 'de', 'nl', 'pt-BR', 'he-IL']

export const deeContent: Record<DeeLocale, DeeContent> = {
  en: {
    locale: 'en',
    routeSlug: '',
    htmlLang: 'en-GB',
    direction: 'ltr',
    nativeName: 'English',
    seo: {
      title: 'Dee: Muay Thai Coach | Your training companion',
      description:
        'Private, on-device AI builds a plan for your real level, then a round timer calls every drill out loud. No account, no ads. Just train.',
    },
    nav: { plan: 'Your plan', rounds: 'Every round', privacy: 'Private', faq: 'FAQ' },
    a11y: { skip: 'Skip to content', home: 'Dee home', navigation: 'On this page', language: 'Choose language', essentials: 'Dee essentials', legal: 'Legal', timeRemaining: '1 minute 18 seconds remaining' },
    status: 'Available now on the App Store',
    hero: {
      eyebrow: 'Your Muay Thai corner, in your pocket',
      title: 'Muay Thai built around you.',
      body: 'Dee designs a custom training plan for your goals and your real level, then runs every round for you with a spoken corner: a voice, a bell, and haptics, so you just train.',
      explore: 'Explore Dee',
      previewLabel: 'Dee onboarding preview',
    },
    trust: ['No account', 'No ads', 'Works offline', 'iPhone and iPad'],
    proofs: {
      plan: {
        eyebrow: 'Built around you',
        title: 'A plan shaped by your real life.',
        body: 'Answer a few questions about what you want to sharpen, your level, your week, and the gear you have. Dee turns those limits into a plan you can actually follow.',
        points: ['From first-timer to experienced', 'Days and session length fit your week', 'No heavy bag? Dee adapts the work'],
      },
      rounds: {
        eyebrow: 'Run every round, hands-free',
        title: 'A voice in your corner.',
        body: 'The built-in round timer calls each drill, the start, the rest, and the final seconds so you can keep your eyes up and your hands moving.',
        points: ['Spoken voice coaching', 'Bell, countdown beeps, and haptics', 'Live Activity on Lock Screen and Dynamic Island'],
      },
      privacy: {
        eyebrow: 'Yours, privately',
        title: 'Your plan stays on your device.',
        body: 'Private, on-device AI builds your plan on iPhone or iPad. Dee works without a signal and keeps a built-in fallback plan ready when generation is unavailable.',
        points: ['No sign-in, ever', 'Train at home or at the gym without a connection', 'Private iCloud sync across your devices'],
      },
    },
    screenshots: {
      welcome: { src: enWelcome, alt: 'Dee welcome screen introducing a Muay Thai plan built around the athlete' },
      schedule: { src: enSchedule, alt: 'Dee schedule screen for selecting weekly Muay Thai training days' },
      workout: { src: enWorkout, alt: 'Dee active workout screen with round timer, voice controls, coaching cues, and playback controls' },
    },
    timer: { label: 'Live round', round: 'Round 02 / 05', drill: 'Jab · Rear kick', cue: 'Voice cue ready', rest: 'Rest next' },
    faqTitle: 'Before the bell',
    faqs: [
      { question: 'Is Dee only for beginners?', answer: 'No. Dee shapes training around your real level, from your first Muay Thai session to experienced practice.' },
      { question: 'Do I need a heavy bag or other equipment?', answer: 'No. Tell Dee what you have. Without a bag, it swaps bag work for shadowboxing and bodyweight drills.' },
      { question: 'Does Dee work offline, and is my plan private?', answer: 'Yes. Plan generation runs on your device, training works offline, and no Dee account is required. Optional private iCloud sync keeps your plan across your devices.' },
      { question: 'Which devices and languages are supported?', answer: 'Dee is built for iPhone and iPad running iOS or iPadOS 26 or later, in English, Spanish, French, German, Dutch, Brazilian Portuguese, and Hebrew.' },
      { question: 'Does Dee replace a coach or clinician?', answer: 'No. Dee is for general sport and fitness. Train within your limits, and consult a qualified coach or clinician about technique, pain, or injuries.' },
    ],
    closing: {
      eyebrow: 'Train with intent',
      title: 'Walk in with a plan.',
      body: 'Dee is now available on the App Store for iPhone and iPad.',
      cta: 'Get Dee on the App Store',
    },
    footer: { privacy: 'Privacy', terms: 'Terms', disclaimer: 'Dee is for general sport and fitness. Train within your limits.' },
    decorative: {
      scheduleDays: ['MON', 'WED', 'SAT'],
      privacyOrbit: ['LOCAL', 'OFFLINE', 'PRIVATE'],
      privacyBadge: 'ON DEVICE',
      faqEyebrow: 'FAQ',
    },
  },
  es: {
    locale: 'es',
    routeSlug: 'es',
    htmlLang: 'es-ES',
    direction: 'ltr',
    nativeName: 'Español',
    seo: {
      title: 'Dee: Muay Thai Coach | Tu compañero de entreno',
      description: 'IA privada en tu iPhone crea tu plan según tu nivel real y un temporizador canta cada ejercicio en voz alta. Sin cuenta, sin anuncios, sin distracciones.',
    },
    nav: { plan: 'Tu plan', rounds: 'Cada asalto', privacy: 'Privacidad', faq: 'Preguntas' },
    a11y: { skip: 'Saltar al contenido', home: 'Inicio de Dee', navigation: 'En esta página', language: 'Elegir idioma', essentials: 'Lo esencial de Dee', legal: 'Avisos legales', timeRemaining: 'Queda 1 minuto y 18 segundos' },
    status: 'Ya disponible en el App Store',
    hero: {
      eyebrow: 'Tu esquina de Muay Thai, en tu bolsillo',
      title: 'Muay Thai a tu medida.',
      body: 'Dee diseña un plan de entrenamiento personalizado para tus objetivos y tu nivel real, y luego dirige cada asalto por ti con una esquina que habla: una voz, una campana y vibraciones, para que solo tengas que entrenar.',
      explore: 'Descubre Dee',
      previewLabel: 'Vista previa de la bienvenida de Dee',
    },
    trust: ['Sin cuenta', 'Sin anuncios', 'Funciona sin conexión', 'iPhone y iPad'],
    proofs: {
      plan: {
        eyebrow: 'Creado a tu medida',
        title: 'Un plan que se adapta a ti.',
        body: 'Responde unas preguntas sobre qué quieres pulir, tu nivel, tus días a la semana y el material que tienes. Dee convierte esos límites en un plan que puedes seguir.',
        points: ['Desde principiante hasta experimentado', 'Días y duración adaptados a tu semana', '¿Sin saco pesado? Dee adapta el trabajo'],
      },
      rounds: {
        eyebrow: 'Dirige cada asalto, sin manos',
        title: 'Una voz en tu esquina.',
        body: 'El temporizador integrado anuncia cada ejercicio, el inicio, el descanso y los segundos finales para que mantengas la mirada arriba y las manos en movimiento.',
        points: ['Entrenamiento por voz', 'Campana, pitidos y vibraciones', 'Live Activity en la pantalla de bloqueo y la Isla Dinámica'],
      },
      privacy: {
        eyebrow: 'Tuyo, en privado',
        title: 'Tu plan se queda en tu dispositivo.',
        body: 'La IA privada crea tu plan en el iPhone o iPad. Dee funciona sin cobertura y tiene un plan alternativo integrado cuando la generación no está disponible.',
        points: ['Sin registro, nunca', 'Entrena en casa o en el gimnasio sin conexión', 'Sincronización privada con iCloud'],
      },
    },
    screenshots: {
      welcome: { src: esWelcome, alt: 'Pantalla de bienvenida de Dee que presenta un plan de Muay Thai a medida' },
      schedule: { src: esSchedule, alt: 'Pantalla de Dee para elegir los días semanales de entrenamiento' },
      workout: { src: esWorkout, alt: 'Pantalla de entrenamiento activo de Dee con temporizador, controles de voz, indicaciones y reproducción' },
    },
    timer: { label: 'Asalto actual', round: 'Asalto 02 / 05', drill: 'Jab · Patada trasera', cue: 'Aviso de voz listo', rest: 'Descanso después' },
    faqTitle: 'Antes de la campana',
    faqs: [
      { question: '¿Dee es solo para principiantes?', answer: 'No. Dee adapta el entrenamiento a tu nivel real, desde tu primera sesión de Muay Thai hasta la práctica experimentada.' },
      { question: '¿Necesito saco pesado u otro material?', answer: 'No. Dile a Dee qué tienes. Sin saco, cambia el trabajo de saco por shadowboxing y ejercicios con peso corporal.' },
      { question: '¿Funciona sin conexión y mi plan es privado?', answer: 'Sí. El plan se genera en tu dispositivo, el entrenamiento funciona sin conexión y no necesitas una cuenta de Dee. La sincronización privada opcional con iCloud mantiene el plan entre tus dispositivos.' },
      { question: '¿Qué dispositivos e idiomas son compatibles?', answer: 'Dee está hecho para iPhone y iPad con iOS o iPadOS 26 o posterior, en inglés, español, francés, alemán, neerlandés, portugués de Brasil y hebreo.' },
      { question: '¿Dee sustituye a un entrenador o profesional sanitario?', answer: 'No. Dee es para deporte y forma física en general. Entrena dentro de tus límites y consulta a un entrenador o profesional sanitario cualificado sobre técnica, dolor o lesiones.' },
    ],
    closing: { eyebrow: 'Entrena con intención', title: 'Entra con un plan.', body: 'Dee ya está disponible en el App Store para iPhone y iPad.', cta: 'Descarga Dee en el App Store' },
    footer: { privacy: 'Privacidad', terms: 'Condiciones', disclaimer: 'Dee es para deporte y forma física en general. Entrena dentro de tus límites.' },
    decorative: {
      scheduleDays: ['LUN', 'MIÉ', 'SÁB'],
      privacyOrbit: ['LOCAL', 'SIN RED', 'PRIVADO'],
      privacyBadge: 'EN EL DISPOSITIVO',
      faqEyebrow: 'FAQ',
    },
  },
  fr: {
    locale: 'fr',
    routeSlug: 'fr',
    htmlLang: 'fr-FR',
    direction: 'ltr',
    nativeName: 'Français',
    seo: {
      title: "Dee: Muay Thai Coach | Ton compagnon d'entraînement",
      description: "Une IA privée sur l'appareil crée un plan pour ton vrai niveau, puis un minuteur de round annonce chaque exercice à voix haute. Sans compte, sans pub, sans distraction.",
    },
    nav: { plan: 'Ton plan', rounds: 'Chaque round', privacy: 'Vie privée', faq: 'Questions' },
    a11y: { skip: 'Aller au contenu', home: 'Accueil de Dee', navigation: 'Sur cette page', language: 'Choisir la langue', essentials: "L'essentiel de Dee", legal: 'Mentions légales', timeRemaining: 'Il reste 1 minute et 18 secondes' },
    status: "Disponible dès maintenant sur l'App Store",
    hero: {
      eyebrow: 'Ton coin de ring Muay Thai, dans ta poche',
      title: 'La Muay Thai pensée pour toi.',
      body: "Dee crée un plan d'entraînement sur mesure selon tes objectifs et ton vrai niveau, puis dirige chaque round avec un coin de ring qui parle : une voix, une cloche et des vibrations. Tu n'as plus qu'à t'entraîner.",
      explore: 'Découvrir Dee',
      previewLabel: "Aperçu de l'accueil de Dee",
    },
    trust: ['Sans compte', 'Sans pub', 'Fonctionne hors ligne', 'iPhone et iPad'],
    proofs: {
      plan: {
        eyebrow: 'Conçue pour toi',
        title: "Un plan adapté à ta vraie vie.",
        body: "Réponds à quelques questions sur ce que tu veux travailler, ton niveau, ta semaine et ton matériel. Dee transforme ces contraintes en un plan que tu peux vraiment suivre.",
        points: ['Du grand débutant au pratiquant confirmé', 'Jours et durée adaptés à ta semaine', "Pas de sac ? Dee adapte l'entraînement"],
      },
      rounds: {
        eyebrow: 'Chaque round, mains libres',
        title: 'Une voix dans ton coin.',
        body: "Le minuteur intégré annonce chaque exercice, le départ, le repos et les dernières secondes pour que tu gardes les yeux levés et les mains en mouvement.",
        points: ['Coaching vocal', 'Cloche, bips de décompte et vibrations', "Activité en direct sur l'écran verrouillé et la Dynamic Island"],
      },
      privacy: {
        eyebrow: 'À toi, en privé',
        title: 'Ton plan reste sur ton appareil.',
        body: "Une IA privée crée ton plan sur l'iPhone ou l'iPad. Dee fonctionne sans réseau et garde un plan de secours intégré lorsque la génération n'est pas disponible.",
        points: ['Aucune connexion, jamais', 'Entraîne-toi sans réseau, chez toi ou à la salle', 'Synchronisation privée iCloud'],
      },
    },
    screenshots: {
      welcome: { src: frWelcome, alt: 'Écran de bienvenue de Dee présentant un plan de Muay Thai sur mesure' },
      schedule: { src: frSchedule, alt: "Écran Dee pour choisir les jours d'entraînement de la semaine" },
      workout: { src: frWorkout, alt: "Écran d'entraînement actif de Dee avec minuteur, commandes vocales, conseils et lecture" },
    },
    timer: { label: 'Round en direct', round: 'Round 02 / 05', drill: 'Jab · Coup de pied arrière', cue: 'Annonce vocale prête', rest: 'Repos ensuite' },
    faqTitle: 'Avant la cloche',
    faqs: [
      { question: 'Dee est-elle réservée aux débutants ?', answer: "Non. Dee adapte l'entraînement à ton vrai niveau, de ta première séance de Muay Thai à une pratique confirmée." },
      { question: "Ai-je besoin d'un sac de frappe ou de matériel ?", answer: "Non. Indique à Dee ce que tu as. Sans sac, elle remplace les exercices au sac par du shadowboxing et du travail au poids du corps." },
      { question: 'Dee fonctionne-t-elle hors ligne et mon plan est-il privé ?', answer: "Oui. Le plan est généré sur ton appareil, l'entraînement fonctionne hors ligne et aucun compte Dee n'est requis. La synchronisation iCloud privée facultative garde ton plan sur tes appareils." },
      { question: 'Quels appareils et langues sont compatibles ?', answer: "Dee est conçue pour iPhone et iPad sous iOS ou iPadOS 26 ou version ultérieure, en anglais, espagnol, français, allemand, néerlandais, portugais brésilien et hébreu." },
      { question: 'Dee remplace-t-elle un coach ou un professionnel de santé ?', answer: "Non. Dee est destinée au sport et à la remise en forme en général. Entraîne-toi dans tes limites et consulte un coach ou professionnel de santé qualifié pour la technique, la douleur ou les blessures." },
    ],
    closing: { eyebrow: "Entraîne-toi avec intention", title: 'Entre avec un plan.', body: "Dee est maintenant disponible sur l'App Store pour iPhone et iPad.", cta: "Télécharger Dee sur l'App Store" },
    footer: { privacy: 'Confidentialité', terms: "Conditions d'utilisation", disclaimer: "Dee est destinée au sport et à la remise en forme en général. Entraîne-toi dans la limite de tes capacités." },
    decorative: {
      scheduleDays: ['LUN', 'MER', 'SAM'],
      privacyOrbit: ['LOCAL', 'HORS LIGNE', 'PRIVÉ'],
      privacyBadge: 'SUR L’APPAREIL',
      faqEyebrow: 'FAQ',
    },
  },
  de: {
    locale: 'de',
    routeSlug: 'de',
    htmlLang: 'de-DE',
    direction: 'ltr',
    nativeName: 'Deutsch',
    seo: {
      title: 'Dee: Muay Thai Coach | Dein Trainingsbegleiter',
      description: 'Private KI erstellt auf dem Gerät deinen Plan für dein echtes Level. Dann sagt der Runden-Timer jede Übung laut an. Kein Konto, keine Werbung, keine Ablenkung.',
    },
    nav: { plan: 'Dein Plan', rounds: 'Jede Runde', privacy: 'Privat', faq: 'Fragen' },
    a11y: { skip: 'Zum Inhalt springen', home: 'Dee Startseite', navigation: 'Auf dieser Seite', language: 'Sprache wählen', essentials: 'Das Wichtigste zu Dee', legal: 'Rechtliches', timeRemaining: '1 Minute und 18 Sekunden verbleiben' },
    status: 'Jetzt im App Store erhältlich',
    hero: {
      eyebrow: 'Deine Muay-Thai-Ecke, in deiner Tasche',
      title: 'Muay Thai, ganz um dich herum gebaut.',
      body: 'Dee erstellt einen Trainingsplan für deine Ziele und dein echtes Level und führt dann jede Runde für dich durch – eine Stimme in deiner Ecke, ein Gong und Haptik. Du trainierst einfach.',
      explore: 'Dee entdecken',
      previewLabel: 'Vorschau der Dee-Begrüßung',
    },
    trust: ['Kein Konto', 'Keine Werbung', 'Komplett offline', 'iPhone und iPad'],
    proofs: {
      plan: {
        eyebrow: 'Auf dich zugeschnitten',
        title: 'Ein Plan für dein echtes Leben.',
        body: 'Beantworte ein paar Fragen zu deinem Fokus, Level, Wochenplan und deiner Ausrüstung. Dee macht aus diesen Grenzen einen Plan, dem du wirklich folgen kannst.',
        points: ['Vom ersten Mal bis fortgeschritten', 'Tage und Einheitslänge passen in deine Woche', 'Kein Sandsack? Dee passt das Training an'],
      },
      rounds: {
        eyebrow: 'Jede Runde, freihändig',
        title: 'Eine Stimme in deiner Ecke.',
        body: 'Der integrierte Runden-Timer kündigt jede Übung, den Start, die Pause und die letzten Sekunden an, damit dein Blick oben und deine Hände in Bewegung bleiben.',
        points: ['Gesprochenes Coaching', 'Gong, Countdown-Pieptöne und Haptik', 'Live Activity auf Sperrbildschirm und Dynamic Island'],
      },
      privacy: {
        eyebrow: 'Deins, privat',
        title: 'Dein Plan bleibt auf deinem Gerät.',
        body: 'Private KI erstellt deinen Plan auf iPhone oder iPad. Dee funktioniert ohne Empfang und hält einen integrierten Ersatzplan bereit, wenn die Generierung nicht verfügbar ist.',
        points: ['Keine Anmeldung, niemals', 'Ohne Verbindung zu Hause oder im Gym trainieren', 'Private iCloud-Synchronisierung'],
      },
    },
    screenshots: {
      welcome: { src: deWelcome, alt: 'Dee-Begrüßungsbildschirm mit einem persönlichen Muay-Thai-Plan' },
      schedule: { src: deSchedule, alt: 'Dee-Bildschirm zur Auswahl der wöchentlichen Trainingstage' },
      workout: { src: deWorkout, alt: 'Aktiver Dee-Trainingsbildschirm mit Rundentimer, Sprachsteuerung, Hinweisen und Wiedergabe' },
    },
    timer: { label: 'Laufende Runde', round: 'Runde 02 / 05', drill: 'Jab · Hinterer Kick', cue: 'Sprachansage bereit', rest: 'Danach Pause' },
    faqTitle: 'Vor dem Gong',
    faqs: [
      { question: 'Ist Dee nur für Anfänger?', answer: 'Nein. Dee passt dein Training an dein echtes Level an – von deiner ersten Muay-Thai-Einheit bis zu fortgeschrittener Praxis.' },
      { question: 'Brauche ich einen Sandsack oder andere Ausrüstung?', answer: 'Nein. Sag Dee, was du hast. Ohne Sandsack tauscht Dee Sackarbeit gegen Schattenboxen und Übungen mit dem eigenen Körpergewicht.' },
      { question: 'Funktioniert Dee offline und bleibt mein Plan privat?', answer: 'Ja. Der Plan wird auf deinem Gerät erstellt, das Training funktioniert offline und ein Dee-Konto ist nicht nötig. Optionale private iCloud-Synchronisierung hält den Plan auf deinen Geräten aktuell.' },
      { question: 'Welche Geräte und Sprachen werden unterstützt?', answer: 'Dee ist für iPhone und iPad mit iOS oder iPadOS 26 oder neuer gebaut – auf Englisch, Spanisch, Französisch, Deutsch, Niederländisch, brasilianischem Portugiesisch und Hebräisch.' },
      { question: 'Ersetzt Dee einen Coach oder medizinisches Fachpersonal?', answer: 'Nein. Dee ist für allgemeinen Sport und Fitness gedacht. Trainiere im Rahmen deiner Grenzen und sprich bei Technik, Schmerzen oder Verletzungen mit qualifiziertem Fachpersonal.' },
    ],
    closing: { eyebrow: 'Trainiere mit Absicht', title: 'Geh mit einem Plan rein.', body: 'Dee ist jetzt für iPhone und iPad im App Store erhältlich.', cta: 'Dee im App Store laden' },
    footer: { privacy: 'Datenschutz', terms: 'Bedingungen', disclaimer: 'Dee ist für allgemeinen Sport und Fitness gedacht. Trainiere im Rahmen deiner Grenzen.' },
    decorative: {
      scheduleDays: ['MO', 'MI', 'SA'],
      privacyOrbit: ['LOKAL', 'OFFLINE', 'PRIVAT'],
      privacyBadge: 'AUF DEM GERÄT',
      faqEyebrow: 'FAQ',
    },
  },
  nl: {
    locale: 'nl',
    routeSlug: 'nl',
    htmlLang: 'nl-NL',
    direction: 'ltr',
    nativeName: 'Nederlands',
    seo: {
      title: 'Dee: Muay Thai Coach | Jouw trainingsmaatje',
      description: 'Privé, on-device AI bouwt een plan voor jouw echte niveau. Daarna roept de rondetimer elke oefening hardop af. Geen account, geen advertenties, geen afleiding.',
    },
    nav: { plan: 'Jouw plan', rounds: 'Elke ronde', privacy: 'Privé', faq: 'Vragen' },
    a11y: { skip: 'Naar inhoud', home: 'Dee startpagina', navigation: 'Op deze pagina', language: 'Taal kiezen', essentials: 'Dee in het kort', legal: 'Juridisch', timeRemaining: 'Nog 1 minuut en 18 seconden' },
    status: 'Nu beschikbaar in de App Store',
    hero: {
      eyebrow: 'Jouw Muay Thai hoek, in je zak',
      title: 'Muay Thai op maat voor jou.',
      body: 'Dee stelt een persoonlijk trainingsplan samen voor jouw doelen en jouw echte niveau, en draait daarna elke ronde voor je met een stem in je hoek: een coach, een bel en trillingen, zodat jij alleen maar hoeft te trainen.',
      explore: 'Ontdek Dee',
      previewLabel: 'Voorbeeld van het welkomstscherm van Dee',
    },
    trust: ['Geen account', 'Geen advertenties', 'Werkt offline', 'iPhone en iPad'],
    proofs: {
      plan: {
        eyebrow: 'Helemaal rond jou gebouwd',
        title: 'Een plan dat bij je echte leven past.',
        body: 'Beantwoord een paar vragen over wat je wilt aanscherpen, je niveau, je week en je spullen. Dee maakt van die grenzen een plan dat je echt kunt volgen.',
        points: ['Van beginner tot gevorderd', 'Dagen en sessieduur passen in je week', 'Geen bokszak? Dee past het werk aan'],
      },
      rounds: {
        eyebrow: 'Elke ronde, handsfree',
        title: 'Je Muay Thai-coach, altijd bij de hand.',
        body: 'De ingebouwde rondetimer kondigt elke oefening, de start, de rust en de laatste seconden aan, zodat jij vooruit blijft kijken en bewegen.',
        points: ['Gesproken coaching', 'Rondebel, aftelpiepjes en trillingen', 'Live-activiteit op toegangsscherm en Dynamic Island'],
      },
      privacy: {
        eyebrow: 'Van jou, privé',
        title: 'Je plan blijft op je toestel.',
        body: 'Privé on-device AI maakt je plan op je iPhone of iPad. Dee werkt zonder verbinding en heeft een ingebouwd reserveplan als genereren niet beschikbaar is.',
        points: ['Nooit inloggen', 'Train zonder verbinding, thuis of in de sportschool', 'Privé iCloud-synchronisatie'],
      },
    },
    screenshots: {
      welcome: { src: nlWelcome, alt: 'Welkomstscherm van Dee met een Muay Thai plan op maat' },
      schedule: { src: nlSchedule, alt: 'Dee-scherm om wekelijkse trainingsdagen te kiezen' },
      workout: { src: nlWorkout, alt: 'Actief trainingsscherm van Dee met rondetimer, stembediening, coaching en afspeelknoppen' },
    },
    timer: { label: 'Live ronde', round: 'Ronde 02 / 05', drill: 'Jab · Achterste trap', cue: 'Stemcoaching klaar', rest: 'Hierna rust' },
    faqTitle: 'Voor de bel',
    faqs: [
      { question: 'Is Dee alleen voor beginners?', answer: 'Nee. Dee vormt de training rond jouw echte niveau, van je eerste Muay Thai sessie tot ervaren training.' },
      { question: 'Heb ik een bokszak of andere spullen nodig?', answer: 'Nee. Vertel Dee wat je hebt. Zonder bokszak wisselt Dee zakoefeningen voor shadowboxing en oefeningen met eigen gewicht.' },
      { question: 'Werkt Dee offline en blijft mijn plan privé?', answer: 'Ja. Je plan wordt op je toestel gemaakt, training werkt offline en je hebt geen Dee-account nodig. Optionele privé iCloud-synchronisatie houdt je plan op je apparaten gelijk.' },
      { question: 'Welke apparaten en talen worden ondersteund?', answer: 'Dee is gebouwd voor iPhone en iPad met iOS of iPadOS 26 of nieuwer, in het Engels, Spaans, Frans, Duits, Nederlands, Braziliaans Portugees en Hebreeuws.' },
      { question: 'Vervangt Dee een coach of zorgverlener?', answer: 'Nee. Dee is voor algemene sport en fitness. Train binnen je grenzen en raadpleeg een gekwalificeerde coach of zorgverlener bij vragen over techniek, pijn of blessures.' },
    ],
    closing: { eyebrow: 'Train met aandacht', title: 'Loop naar binnen met een plan.', body: 'Dee is nu beschikbaar in de App Store voor iPhone en iPad.', cta: 'Download Dee in de App Store' },
    footer: { privacy: 'Privacy', terms: 'Voorwaarden', disclaimer: 'Dee is voor algemene sport en fitness. Train binnen je grenzen.' },
    decorative: {
      scheduleDays: ['MA', 'WO', 'ZA'],
      privacyOrbit: ['LOKAAL', 'OFFLINE', 'PRIVÉ'],
      privacyBadge: 'OP HET TOESTEL',
      faqEyebrow: 'FAQ',
    },
  },
  'pt-BR': {
    locale: 'pt-BR',
    routeSlug: 'pt-br',
    htmlLang: 'pt-BR',
    direction: 'ltr',
    nativeName: 'Português (Brasil)',
    seo: {
      title: 'Dee: Muay Thai Coach | Seu parceiro de treino',
      description: 'IA privada, no seu iPhone, monta um plano para o seu nível real. Aí um timer de round anuncia cada exercício em voz alta. Sem conta, sem anúncios, sem distração.',
    },
    nav: { plan: 'Seu plano', rounds: 'Cada round', privacy: 'Privacidade', faq: 'Perguntas' },
    a11y: { skip: 'Pular para o conteúdo', home: 'Início do Dee', navigation: 'Nesta página', language: 'Escolher idioma', essentials: 'O essencial do Dee', legal: 'Informações legais', timeRemaining: 'Falta 1 minuto e 18 segundos' },
    status: 'Já disponível na App Store',
    hero: {
      eyebrow: 'O seu córner de Muay Thai, no bolso',
      title: 'Muay Thai feito para você.',
      body: 'O Dee monta um plano de treino sob medida para os seus objetivos e o seu nível real, depois conduz cada round com um córner que fala com você: uma voz, o gongo e vibrações, para você só treinar.',
      explore: 'Conheça o Dee',
      previewLabel: 'Prévia da tela de boas-vindas do Dee',
    },
    trust: ['Sem conta', 'Sem anúncios', 'Funciona offline', 'iPhone e iPad'],
    proofs: {
      plan: {
        eyebrow: 'Feito para você',
        title: 'Um plano para a sua vida real.',
        body: 'Responda algumas perguntas sobre o que quer aprimorar, seu nível, sua semana e os equipamentos que tem. O Dee transforma esses limites em um plano que você consegue seguir.',
        points: ['Do primeiro dia ao avançado', 'Dias e duração cabem na sua semana', 'Sem saco de pancada? O Dee adapta o treino'],
      },
      rounds: {
        eyebrow: 'Cada round, sem usar as mãos',
        title: 'Uma voz no seu córner.',
        body: 'O timer embutido anuncia cada exercício, o início, o descanso e os segundos finais para você manter os olhos atentos e as mãos em movimento.',
        points: ['Treinamento por voz', 'Gongo, bipes e vibrações', 'Live Activity na Tela Bloqueada e Dynamic Island'],
      },
      privacy: {
        eyebrow: 'Seu, com privacidade',
        title: 'Seu plano fica no seu aparelho.',
        body: 'IA privada monta seu plano no iPhone ou iPad. O Dee funciona sem sinal e mantém um plano alternativo integrado quando a geração não está disponível.',
        points: ['Sem login, nunca', 'Treine offline em casa ou na academia', 'Sincronização privada pelo iCloud'],
      },
    },
    screenshots: {
      welcome: { src: ptWelcome, alt: 'Tela de boas-vindas do Dee apresentando um plano de Muay Thai sob medida' },
      schedule: { src: ptSchedule, alt: 'Tela do Dee para escolher os dias de treino da semana' },
      workout: { src: ptWorkout, alt: 'Tela de treino ativo do Dee com cronômetro, controles de voz, orientações e reprodução' },
    },
    timer: { label: 'Round ao vivo', round: 'Round 02 / 05', drill: 'Jab · Chute traseiro', cue: 'Aviso de voz pronto', rest: 'Descanso depois' },
    faqTitle: 'Antes do gongo',
    faqs: [
      { question: 'O Dee é só para iniciantes?', answer: 'Não. O Dee adapta o treino ao seu nível real, desde a sua primeira sessão de Muay Thai até a prática avançada.' },
      { question: 'Preciso de saco de pancada ou outro equipamento?', answer: 'Não. Diga ao Dee o que você tem. Sem saco, ele troca o trabalho de saco por shadowboxing e exercícios com o peso do corpo.' },
      { question: 'O Dee funciona offline e meu plano é privado?', answer: 'Sim. O plano é montado no seu aparelho, o treino funciona offline e não exige uma conta Dee. A sincronização privada opcional pelo iCloud mantém o plano nos seus aparelhos.' },
      { question: 'Quais aparelhos e idiomas são compatíveis?', answer: 'O Dee é feito para iPhone e iPad com iOS ou iPadOS 26 ou posterior, em inglês, espanhol, francês, alemão, holandês, português do Brasil e hebraico.' },
      { question: 'O Dee substitui um treinador ou profissional de saúde?', answer: 'Não. O Dee é para esporte e condicionamento em geral. Treine dentro dos seus limites e consulte um treinador ou profissional de saúde qualificado sobre técnica, dor ou lesões.' },
    ],
    closing: { eyebrow: 'Treine com intenção', title: 'Entre com um plano.', body: 'O Dee já está disponível na App Store para iPhone e iPad.', cta: 'Baixe o Dee na App Store' },
    footer: { privacy: 'Privacidade', terms: 'Termos', disclaimer: 'O Dee é para esporte e condicionamento em geral. Treine dentro dos seus limites.' },
    decorative: {
      scheduleDays: ['SEG', 'QUA', 'SÁB'],
      privacyOrbit: ['LOCAL', 'OFFLINE', 'PRIVADO'],
      privacyBadge: 'NO APARELHO',
      faqEyebrow: 'FAQ',
    },
  },
  'he-IL': {
    locale: 'he-IL',
    routeSlug: 'he',
    htmlLang: 'he-IL',
    direction: 'rtl',
    nativeName: 'עברית',
    seo: {
      title: 'דִי: מאמן מואי תאי | שותף האימון שלך',
      description:
        'בינה מלאכותית פרטית במכשיר בונה תוכנית לרמה האמיתית שלך, ואז טיימר סיבובים מקריא כל תרגיל בקול. בלי חשבון, בלי פרסומות. רק אימון.',
    },
    nav: { plan: 'התוכנית שלך', rounds: 'כל סיבוב', privacy: 'פרטיות', faq: 'שאלות' },
    a11y: {
      skip: 'דילוג לתוכן',
      home: 'דף הבית של דִי',
      navigation: 'בעמוד זה',
      language: 'בחירת שפה',
      essentials: 'עיקרי דִי',
      legal: 'משפטי',
      timeRemaining: 'נותרו דקה ו-18 שניות',
    },
    status: 'זמינה עכשיו ב-App Store',
    hero: {
      eyebrow: 'פינת המואי תאי שלך, בכיס',
      title: 'מואי תאי שנבנה סביבך.',
      body: 'דִי מעצבת תוכנית אימון מותאמת אישית למטרות שלך ולרמה האמיתית שלך, ואז מנהלת כל סיבוב בשבילך עם פינה מדברת: קול, פעמון ומשוב הפטי, כדי שתוכל/י פשוט להתאמן.',
      explore: 'גלו את דִי',
      previewLabel: 'תצוגה מקדימה של מסך הפתיחה של דִי',
    },
    trust: ['ללא חשבון', 'ללא פרסומות', 'עובדת ללא חיבור', 'iPhone ו-iPad'],
    proofs: {
      plan: {
        eyebrow: 'נבנה סביבך',
        title: 'תוכנית שמתאימה לחיים האמיתיים שלך.',
        body: 'עונים על כמה שאלות על מה שרוצים לחדד, הרמה, הימים בשבוע והציוד שיש. דִי הופכת את המגבלות האלה לתוכנית שאפשר באמת לעמוד בה.',
        points: ['ממתחיל/ה ועד מנוסה', 'ימים ומשך אימון שמתאימים לשבוע שלך', 'אין שק כבד? דִי מתאימה את העבודה'],
      },
      rounds: {
        eyebrow: 'כל סיבוב, בלי ידיים',
        title: 'מאמן בפינה שלך.',
        body: 'טיימר הסיבובים המובנה מכריז על כל תרגיל, על ההתחלה, על המנוחה ועל השניות האחרונות, כדי שתוכל/י להרים את המבט ולהמשיך לזוז.',
        points: ['הדרכה קולית', 'פעמון, צפצופי ספירה לאחור ומשוב הפטי', 'Live Activity במסך הנעילה וב-Dynamic Island'],
      },
      privacy: {
        eyebrow: 'שלך, בפרטיות',
        title: 'התוכנית נשארת במכשיר שלך.',
        body: 'בינה מלאכותית פרטית במכשיר בונה את התוכנית ב-iPhone או ב-iPad. דִי עובדת גם בלי קליטה ושומרת תוכנית גיבוי מובנית כשהיצירה אינה זמינה.',
        points: ['בלי התחברות, לעולם', 'אימון בבית או בחדר כושר בלי חיבור', 'סנכרון iCloud פרטי בין המכשירים שלך'],
      },
    },
    screenshots: {
      welcome: { src: heWelcome, alt: 'מסך הפתיחה של דִי שמציג תוכנית מואי תאי שנבנתה סביב המתאמן/ת' },
      schedule: { src: heSchedule, alt: 'מסך לוח הזמנים של דִי לבחירת ימי האימון השבועיים' },
      workout: { src: heWorkout, alt: 'מסך אימון פעיל של דִי עם טיימר סיבובים, שליטה קולית, הנחיות ופקדי ניגון' },
    },
    timer: { label: 'סיבוב חי', round: 'סיבוב 02 / 05', drill: 'ג׳אב · בעיטה אחורית', cue: 'הנחיה קולית מוכנה', rest: 'מנוחה בהמשך' },
    faqTitle: 'לפני הפעמון',
    faqs: [
      { question: 'האם דִי מיועדת רק למתחילים?', answer: 'לא. דִי מעצבת את האימון סביב הרמה האמיתית שלך, מהאימון הראשון במואי תאי ועד לתרגול מנוסה.' },
      { question: 'האם צריך שק כבד או ציוד אחר?', answer: 'לא. מספרים לדִי מה יש לך. בלי שק, היא מחליפה עבודת שק באגרוף צללים ובתרגילי משקל גוף.' },
      { question: 'האם דִי עובדת ללא חיבור והאם התוכנית שלי פרטית?', answer: 'כן. התוכנית נוצרת במכשיר שלך, האימון עובד ללא חיבור ולא נדרש חשבון דִי. סנכרון iCloud פרטי אופציונלי שומר על התוכנית בין המכשירים שלך.' },
      { question: 'אילו מכשירים ושפות נתמכים?', answer: 'דִי נבנתה ל-iPhone ול-iPad עם iOS או iPadOS 26 ומעלה, באנגלית, ספרדית, צרפתית, גרמנית, הולנדית, פורטוגזית ברזילאית ועברית.' },
      { question: 'האם דִי מחליפה מאמן או איש מקצוע רפואי?', answer: 'לא. דִי מיועדת לספורט ולכושר באופן כללי. יש להתאמן במסגרת היכולת ולהתייעץ עם מאמן מוסמך או איש מקצוע רפואי לגבי טכניקה, כאב או פציעות.' },
    ],
    closing: {
      eyebrow: 'להתאמן בכוונה',
      title: 'להיכנס עם תוכנית.',
      body: 'דִי זמינה עכשיו ב-App Store ל-iPhone ול-iPad.',
      cta: 'להוריד את דִי מ-App Store',
    },
    footer: {
      privacy: 'פרטיות',
      terms: 'תנאים',
      disclaimer: 'תוכניות האימונים מיועדות למטרות כלליות של ספורט וכושר. יש להתאמן בהתאם ליכולת האישית.',
    },
    decorative: {
      scheduleDays: ['ב׳', 'ד׳', 'ש׳'],
      privacyOrbit: ['מקומי', 'ללא חיבור', 'פרטי'],
      privacyBadge: 'במכשיר',
      faqEyebrow: 'שאלות נפוצות',
    },
  },
}

export function deePath(locale: DeeLocale): string {
  const slug = deeContent[locale].routeSlug
  return slug ? `/${slug}/` : '/'
}

export function deeLocaleFromSlug(slug: string): DeeLocale | undefined {
  return deeLocales.find((locale) => deeContent[locale].routeSlug === slug)
}
