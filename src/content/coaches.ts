import type { DeeLocale } from './content'

export interface CoachesCopy {
  metaTitle: string
  description: string
  eyebrow: string
  title: string
  lead: string
  primary: string
  primaryHint: string
  secondary: string
  mailSubject: string
  whatTitle: string
  whatBody: string
  howTitle: string
  steps: [string, string, string]
  askTitle: string
  askBody: string
  indie: string
  fine: string
  skip: string
  home: string
  language: string
  legal: string
  privacy: string
  terms: string
  productPanel: string
  iphoneAlt: string
  disclaimer: string
}

export const instagramDMURL = 'https://ig.me/m/deemuaythai'
export const coachesEmail = 'support@dee.training'
export const coachesCampaign = { token: 'site_coaches', source: 'dee_training', medium: 'organic_web', campaign: 'coaches' } as const

/** English at /coaches/, other languages at /<routeSlug>/coaches/ (same slugs as the home pages). */
export function coachesPath(routeSlug: string): string {
  return routeSlug ? `/${routeSlug}/coaches/` : '/coaches/'
}

export const coachesCopy: Record<DeeLocale, CoachesCopy> = {
  en: {
    metaTitle: 'Dee for Muay Thai coaches | A free year of Dee Pro',
    description: 'Free year of Dee Pro for Muay Thai coaches, instructors and fighters who teach, plus your own code for your students and followers. Message @deemuaythai to claim it.',
    eyebrow: 'Dee for Muay Thai coaches',
    title: 'Coach Muay Thai? Dee Pro is free for you.',
    lead: 'A free year of Dee Pro for Muay Thai coaches, instructors and fighters who teach, plus your own code that gives your students and followers their first month of Pro free.',
    primary: 'Message @deemuaythai',
    primaryHint: '(opens Instagram)',
    secondary: 'Email us',
    mailSubject: 'Dee coach programme',
    whatTitle: 'What Dee does',
    whatBody: "Builds a training plan around each person's level, goals and equipment, and calls every round, drill and rest out loud. Good for your students between classes.",
    howTitle: 'How it works',
    steps: [
      'Message us on Instagram (@deemuaythai) with a line about where you teach.',
      'We send your free year, for iPhone or Android.',
      'If you like it, we set up your own code and page for your students.',
    ],
    askTitle: 'What we ask',
    askBody: "Try it. If it works for you, share your code with your students or in a story. If it doesn't, tell us why.",
    indie: 'Dee is made by one independent developer, so every message gets read.',
    fine: 'One free year per coach. On iPhone it renews at the regular yearly price unless you cancel; on Android nothing renews.',
    skip: 'Skip to content',
    home: 'Dee home',
    language: 'Choose language',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    productPanel: 'Dee app interface',
    iphoneAlt: 'Dee on iPhone: guided round timer',
    disclaimer: 'Dee provides general sport and fitness information, not medical advice.',
  },
  es: {
    metaTitle: 'Dee para entrenadores de Muay Thai | Un año gratis de Dee Pro',
    description: 'Un año gratis de Dee Pro para entrenadores, instructores y luchadores que enseñan Muay Thai, y tu propio código para tus alumnos y seguidores. Escribe a @deemuaythai para pedirlo.',
    eyebrow: 'Dee para entrenadores de Muay Thai',
    title: '¿Das clases de Muay Thai? Dee Pro es gratis para ti.',
    lead: 'Un año gratis de Dee Pro para entrenadores, instructores y luchadores que enseñan Muay Thai, y además tu propio código para que tus alumnos y seguidores tengan gratis su primer mes de Pro.',
    primary: 'Escribir a @deemuaythai',
    primaryHint: '(se abre Instagram)',
    secondary: 'Escríbenos por correo',
    mailSubject: 'Programa para entrenadores de Dee',
    whatTitle: 'Qué hace Dee',
    whatBody: 'Crea un plan de entrenamiento según el nivel, los objetivos y el material de cada persona, y dice en voz alta cada asalto, cada ejercicio y cada descanso. Perfecto para tus alumnos entre clases.',
    howTitle: 'Cómo funciona',
    steps: [
      'Escríbenos por Instagram (@deemuaythai) con una línea sobre dónde das clase.',
      'Te enviamos tu año gratis, para iPhone o Android.',
      'Si te gusta, preparamos tu propio código y tu propia página para tus alumnos.',
    ],
    askTitle: 'Qué te pedimos',
    askBody: 'Pruébalo. Si te funciona, comparte tu código con tus alumnos o en una story. Si no, cuéntanos por qué.',
    indie: 'Dee lo hace un solo desarrollador independiente, así que leemos todos los mensajes.',
    fine: 'Un año gratis por entrenador. En iPhone se renueva al precio anual habitual si no lo cancelas; en Android no se renueva nada.',
    skip: 'Saltar al contenido',
    home: 'Inicio de Dee',
    language: 'Elegir idioma',
    legal: 'Avisos legales',
    privacy: 'Privacidad',
    terms: 'Condiciones',
    productPanel: 'Interfaz de la app Dee',
    iphoneAlt: 'Dee en iPhone: temporizador de asaltos guiado',
    disclaimer: 'Dee ofrece información general sobre deporte y forma física, no consejo médico.',
  },
  fr: {
    metaTitle: 'Dee pour les coachs de Muay Thai | Un an de Dee Pro offert',
    description: "Un an de Dee Pro offert aux coachs, instructeurs et combattants qui enseignent le Muay Thai, plus ton propre code pour tes élèves et tes abonnés. Écris à @deemuaythai pour le recevoir.",
    eyebrow: 'Dee pour les coachs de Muay Thai',
    title: 'Tu enseignes le Muay Thai ? Dee Pro est gratuit pour toi.',
    lead: "Un an de Dee Pro offert aux coachs, instructeurs et combattants qui enseignent le Muay Thai, plus ton propre code pour que tes élèves et tes abonnés aient leur premier mois de Pro offert.",
    primary: 'Écrire à @deemuaythai',
    primaryHint: '(ouvre Instagram)',
    secondary: 'Nous écrire par e-mail',
    mailSubject: 'Programme coachs Dee',
    whatTitle: 'Ce que fait Dee',
    whatBody: "Crée un plan d'entraînement selon le niveau, les objectifs et le matériel de chacun, et annonce à voix haute chaque round, chaque exercice et chaque pause. Idéal pour tes élèves entre deux cours.",
    howTitle: 'Comment ça marche',
    steps: [
      "Écris-nous sur Instagram (@deemuaythai) avec une ligne sur l'endroit où tu enseignes.",
      'Nous t’envoyons ton année offerte, pour iPhone ou Android.',
      'Si ça te plaît, nous créons ton propre code et ta propre page pour tes élèves.',
    ],
    askTitle: 'Ce que nous te demandons',
    askBody: 'Essaie. Si ça te convient, partage ton code avec tes élèves ou dans une story. Sinon, dis-nous pourquoi.',
    indie: 'Dee est créée par un seul développeur indépendant : chaque message est lu.',
    fine: "Une année offerte par coach. Sur iPhone, l'abonnement se renouvelle au prix annuel habituel sauf si tu le résilies ; sur Android, rien ne se renouvelle.",
    skip: 'Aller au contenu',
    home: 'Accueil de Dee',
    language: 'Choisir la langue',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    productPanel: "Interface de l'app Dee",
    iphoneAlt: 'Dee sur iPhone : minuteur de round guidé',
    disclaimer: 'Dee fournit des informations générales sur le sport et la condition physique, pas des conseils médicaux.',
  },
  de: {
    metaTitle: 'Dee für Muay-Thai-Trainer | Ein Jahr Dee Pro gratis',
    description: 'Ein Jahr Dee Pro gratis für Muay-Thai-Trainer, Instruktoren und Kämpfer, die unterrichten, plus dein eigener Code für Schüler und Follower. Schreib @deemuaythai, um es zu holen.',
    eyebrow: 'Dee für Muay-Thai-Trainer',
    title: 'Du coachst Muay Thai? Dee Pro ist für dich kostenlos.',
    lead: 'Ein Jahr Dee Pro gratis für Muay-Thai-Trainer, Instruktoren und Kämpfer, die unterrichten, plus dein eigener Code, mit dem deine Schüler und Follower ihren ersten Monat Pro gratis bekommen.',
    primary: '@deemuaythai schreiben',
    primaryHint: '(öffnet Instagram)',
    secondary: 'Per E-Mail schreiben',
    mailSubject: 'Dee Trainerprogramm',
    whatTitle: 'Was Dee macht',
    whatBody: 'Erstellt einen Trainingsplan nach Level, Zielen und Ausrüstung jeder Person und sagt jede Runde, jede Übung und jede Pause laut an. Gut für deine Schüler zwischen den Einheiten.',
    howTitle: "So funktioniert's",
    steps: [
      'Schreib uns auf Instagram (@deemuaythai) und erzähl in einer Zeile, wo du unterrichtest.',
      'Wir schicken dir dein Gratisjahr, für iPhone oder Android.',
      'Wenn es dir gefällt, richten wir deinen eigenen Code und deine eigene Seite für deine Schüler ein.',
    ],
    askTitle: 'Was wir uns wünschen',
    askBody: 'Probier es aus. Wenn es für dich funktioniert, teile deinen Code mit deinen Schülern oder in einer Story. Wenn nicht, sag uns, warum.',
    indie: 'Dee wird von einem einzelnen unabhängigen Entwickler gemacht, deshalb wird jede Nachricht gelesen.',
    fine: 'Ein Gratisjahr pro Trainer. Auf dem iPhone verlängert es sich zum regulären Jahrespreis, wenn du nicht kündigst; auf Android verlängert sich nichts.',
    skip: 'Zum Inhalt springen',
    home: 'Dee Startseite',
    language: 'Sprache wählen',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'Bedingungen',
    productPanel: 'Oberfläche der Dee-App',
    iphoneAlt: 'Dee auf dem iPhone: geführter Rundentimer',
    disclaimer: 'Dee bietet allgemeine Informationen zu Sport und Fitness, keine medizinische Beratung.',
  },
  nl: {
    metaTitle: 'Dee voor Muay Thai-coaches | Een jaar Dee Pro gratis',
    description: 'Een jaar Dee Pro gratis voor Muay Thai-coaches, instructeurs en vechters die lesgeven, plus je eigen code voor je leerlingen en volgers. Stuur @deemuaythai een bericht om het te claimen.',
    eyebrow: 'Dee voor Muay Thai-coaches',
    title: 'Geef je les in Muay Thai? Dee Pro is gratis voor jou.',
    lead: 'Een jaar Dee Pro gratis voor Muay Thai-coaches, instructeurs en vechters die lesgeven, plus je eigen code waarmee je leerlingen en volgers hun eerste maand Pro gratis krijgen.',
    primary: 'Stuur @deemuaythai een bericht',
    primaryHint: '(opent Instagram)',
    secondary: 'Mail ons',
    mailSubject: 'Dee coachprogramma',
    whatTitle: 'Wat Dee doet',
    whatBody: 'Maakt een trainingsplan op basis van het niveau, de doelen en de apparatuur van ieder persoon en roept elke ronde, elke oefening en elke rust hardop om. Fijn voor je leerlingen tussen de lessen door.',
    howTitle: 'Zo werkt het',
    steps: [
      'Stuur ons een bericht op Instagram (@deemuaythai) met één regel over waar je lesgeeft.',
      'Wij sturen je gratis jaar, voor iPhone of Android.',
      'Bevalt het, dan richten we je eigen code en pagina in voor je leerlingen.',
    ],
    askTitle: 'Wat we vragen',
    askBody: 'Probeer het. Werkt het voor je, deel dan je code met je leerlingen of in een story. Zo niet, vertel ons waarom.',
    indie: 'Dee wordt gemaakt door één onafhankelijke ontwikkelaar, dus elk bericht wordt gelezen.',
    fine: 'Eén gratis jaar per coach. Op iPhone wordt het verlengd tegen de gewone jaarprijs tenzij je opzegt; op Android wordt niets verlengd.',
    skip: 'Naar inhoud',
    home: 'Dee startpagina',
    language: 'Taal kiezen',
    legal: 'Juridisch',
    privacy: 'Privacy',
    terms: 'Voorwaarden',
    productPanel: 'Interface van de Dee-app',
    iphoneAlt: 'Dee op iPhone: begeleide rondetimer',
    disclaimer: 'Dee geeft algemene informatie over sport en fitness, geen medisch advies.',
  },
  'pt-BR': {
    metaTitle: 'Dee para treinadores de Muay Thai | Um ano grátis do Dee Pro',
    description: 'Um ano grátis do Dee Pro para treinadores, instrutores e lutadores que ensinam Muay Thai, mais o seu próprio código para alunos e seguidores. Mande mensagem para @deemuaythai para pedir o seu.',
    eyebrow: 'Dee para treinadores de Muay Thai',
    title: 'Você dá aula de Muay Thai? O Dee Pro é grátis para você.',
    lead: 'Um ano grátis do Dee Pro para treinadores, instrutores e lutadores que ensinam Muay Thai, mais o seu próprio código para que seus alunos e seguidores ganhem o primeiro mês de Pro grátis.',
    primary: 'Enviar mensagem para @deemuaythai',
    primaryHint: '(abre o Instagram)',
    secondary: 'Enviar e-mail',
    mailSubject: 'Programa para treinadores do Dee',
    whatTitle: 'O que o Dee faz',
    whatBody: 'Monta um plano de treino de acordo com o nível, os objetivos e o equipamento de cada pessoa e fala em voz alta cada round, cada exercício e cada descanso. Ótimo para seus alunos entre as aulas.',
    howTitle: 'Como funciona',
    steps: [
      'Mande uma mensagem para a gente no Instagram (@deemuaythai) com uma linha sobre onde você dá aula.',
      'Enviamos o seu ano grátis, para iPhone ou Android.',
      'Se você gostar, criamos o seu próprio código e a sua página para os seus alunos.',
    ],
    askTitle: 'O que pedimos',
    askBody: 'Experimente. Se funcionar para você, compartilhe seu código com seus alunos ou em um story. Se não, conte para a gente por quê.',
    indie: 'O Dee é feito por um único desenvolvedor independente, então toda mensagem é lida.',
    fine: 'Um ano grátis por treinador. No iPhone, ele é renovado pelo preço anual normal, a menos que você cancele; no Android, nada é renovado.',
    skip: 'Pular para o conteúdo',
    home: 'Início do Dee',
    language: 'Escolher idioma',
    legal: 'Informações legais',
    privacy: 'Privacidade',
    terms: 'Termos',
    productPanel: 'Interface do app Dee',
    iphoneAlt: 'Dee no iPhone: timer de rounds guiado',
    disclaimer: 'O Dee oferece informações gerais sobre esporte e condicionamento físico, não aconselhamento médico.',
  },
  'he-IL': {
    metaTitle: 'Dee למאמני מואי תאי | שנה חינם של Dee Pro',
    description: 'שנה חינם של Dee Pro למאמנים, למדריכים וללוחמים שמלמדים מואי תאי, ובנוסף קוד משלכם לתלמידים ולעוקבים. שלחו הודעה ל-@deemuaythai כדי לקבל.',
    eyebrow: 'Dee למאמני מואי תאי',
    title: 'מלמדים מואי תאי? Dee Pro חינם בשבילכם.',
    lead: 'שנה חינם של Dee Pro למאמנים, למדריכים וללוחמים שמלמדים מואי תאי, ובנוסף קוד משלכם שנותן לתלמידים ולעוקבים שלכם את החודש הראשון של Pro בחינם.',
    primary: 'שליחת הודעה ל-@deemuaythai',
    primaryHint: '(נפתח באינסטגרם)',
    secondary: 'שליחת אימייל',
    mailSubject: 'תוכנית המאמנים של Dee',
    whatTitle: 'מה Dee עושה',
    whatBody: 'בונה תוכנית אימון לפי הרמה, המטרות והציוד של כל אחד, ומכריז בקול על כל סיבוב, כל תרגיל וכל מנוחה. מצוין לתלמידים שלכם בין האימונים.',
    howTitle: 'איך זה עובד',
    steps: [
      'שלחו לנו הודעה באינסטגרם (@deemuaythai) עם שורה על המקום שבו אתם מלמדים.',
      'נשלח לכם את השנה החינם, ל-iPhone או ל-Android.',
      'אם תאהבו את זה, נכין קוד ועמוד משלכם עבור התלמידים.',
    ],
    askTitle: 'מה אנחנו מבקשים',
    askBody: 'נסו. אם זה עובד בשבילכם, שתפו את הקוד עם התלמידים או בסטורי. אם לא, ספרו לנו למה.',
    indie: 'Dee נוצרת על ידי מפתח עצמאי אחד, ולכן כל הודעה נקראת.',
    fine: 'שנה חינם אחת לכל מאמן. ב-iPhone המנוי מתחדש במחיר השנתי הרגיל אלא אם מבטלים; ב-Android שום דבר לא מתחדש.',
    skip: 'דילוג לתוכן',
    home: 'דף הבית של Dee',
    language: 'בחירת שפה',
    legal: 'משפטי',
    privacy: 'פרטיות',
    terms: 'תנאים',
    productPanel: 'ממשק האפליקציה Dee',
    iphoneAlt: 'Dee ב-iPhone: טיימר סיבובים מודרך',
    disclaimer: 'Dee מספקת מידע כללי על ספורט וכושר, לא ייעוץ רפואי.',
  },
}
