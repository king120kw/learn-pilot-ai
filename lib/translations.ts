// Comprehensive translation system for LearnPilot
"use client"

import { useState, useEffect } from 'react'

export interface Translation {
  // Navigation & Common
  learnPilot: string
  features: string
  testimonials: string
  pricing: string
  login: string
  signUp: string
  getStarted: string
  learnMore: string
  
  // Hero Section
  learnSmarterWith: string
  aiAssistance: string
  heroDescription: string
  
  // Dashboard
  goodMorning: string
  goodAfternoon: string
  goodEvening: string
  welcomeBack: string
  overviewDescription: string
  quickAccess: string
  mockInterview: string
  practiceInterview: string
  studyBuddy: string
  personalizedHelp: string
  videoMeeting: string
  liveSessionsHost: string
  
  // Stats
  overallProgress: string
  thisWeek: string
  currentStreak: string
  days: string
  keepItUp: string
  achievements: string
  earned: string
  inProgress: string
  
  // Recent Activities
  recentActivities: string
  viewAll: string
  completedMockInterview: string
  studiedFlashcards: string
  joinedVideoSession: string
  ago: string
  minutes: string
  hours: string
  
  // Recommended Topics
  recommendedTopics: string
  basedOnProgress: string
  dataStructures: string
  algorithms: string
  systemDesign: string
  behavioralQuestions: string
  
  // Upcoming Sessions
  upcomingSessions: string
  noUpcomingSessions: string
  scheduleSession: string
  
  // Settings
  settings: string
  language: string
  theme: string
  notifications: string
  
  // Common Actions
  save: string
  cancel: string
  edit: string
  delete: string
  view: string
  start: string
  continue: string
  complete: string
}

// 8 Core Languages Configuration
export const languages = {
  'en': { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  'es': { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  'fr': { name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  'de': { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  'zh': { name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  'ja': { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  'ar': { name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  'tl': { name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭' },
}

// RTL languages
export const rtlLanguages = ['ar', 'he', 'fa', 'ur']

export const isRTL = (language: string): boolean => {
  return rtlLanguages.includes(language)
}

// English translations
const englishTranslations: Translation = {
  // Navigation & Common
  learnPilot: 'LearnPilot',
  features: 'Features',
  testimonials: 'Testimonials',
  pricing: 'Pricing',
  login: 'Log in',
  signUp: 'Sign up',
  getStarted: 'Get Started',
  learnMore: 'Learn More',

  // Hero Section
  learnSmarterWith: 'Learn smarter with',
  aiAssistance: 'AI assistance',
  heroDescription: 'LearnPilot uses advanced AI to personalize your learning experience, help you practice, and master any subject faster than ever before.',

  // Dashboard
  goodMorning: 'Good morning',
  goodAfternoon: 'Good afternoon',
  goodEvening: 'Good evening',
  welcomeBack: 'Welcome back',
  overviewDescription: "Here's an overview of your learning progress and upcoming activities.",
  quickAccess: 'Quick Access',
  mockInterview: 'Mock Interview',
  practiceInterview: 'Practice for your next interview',
  studyBuddy: 'Study Buddy',
  personalizedHelp: 'Get personalized learning help',
  videoMeeting: 'Video Meeting',
  liveSessionsHost: 'Host or join live sessions',

  // Stats
  overallProgress: 'Overall Progress',
  thisWeek: 'this week',
  currentStreak: 'Current Streak',
  days: 'days',
  keepItUp: 'Keep it up!',
  achievements: 'Achievements',
  earned: 'earned',
  inProgress: 'in progress',

  // Recent Activities
  recentActivities: 'Recent Activities',
  viewAll: 'View all',
  completedMockInterview: 'Completed mock interview',
  studiedFlashcards: 'Studied flashcards',
  joinedVideoSession: 'Joined video session',
  ago: 'ago',
  minutes: 'minutes',
  hours: 'hours',

  // Recommended Topics
  recommendedTopics: 'Recommended Topics',
  basedOnProgress: 'Based on your progress',
  dataStructures: 'Data Structures',
  algorithms: 'Algorithms',
  systemDesign: 'System Design',
  behavioralQuestions: 'Behavioral Questions',

  // Upcoming Sessions
  upcomingSessions: 'Upcoming Sessions',
  noUpcomingSessions: 'No upcoming sessions',
  scheduleSession: 'Schedule a session',

  // Settings
  settings: 'Settings',
  language: 'Language',
  theme: 'Theme',
  notifications: 'Notifications',

  // Common Actions
  save: 'Save',
  cancel: 'Cancel',
  edit: 'Edit',
  delete: 'Delete',
  view: 'View',
  start: 'Start',
  continue: 'Continue',
  complete: 'Complete',
}

// Filipino/Tagalog translations
const filipinoTranslations: Translation = {
  // Navigation & Common
  learnPilot: 'LearnPilot',
  features: 'Mga Tampok',
  testimonials: 'Mga Testimonial',
  pricing: 'Presyo',
  login: 'Mag-login',
  signUp: 'Mag-sign up',
  getStarted: 'Magsimula',
  learnMore: 'Matuto Pa',

  // Hero Section
  learnSmarterWith: 'Mag-aral nang mas matalino gamit ang',
  aiAssistance: 'tulong ng AI',
  heroDescription: 'Ginagamit ng LearnPilot ang advanced AI para i-personalize ang inyong learning experience, tumulong sa practice, at ma-master ang anumang subject nang mas mabilis.',

  // Dashboard
  goodMorning: 'Magandang umaga',
  goodAfternoon: 'Magandang hapon',
  goodEvening: 'Magandang gabi',
  welcomeBack: 'Maligayang pagbabalik',
  overviewDescription: 'Narito ang overview ng inyong learning progress at mga upcoming activities.',
  quickAccess: 'Mabilis na Access',
  mockInterview: 'Mock Interview',
  practiceInterview: 'Mag-practice para sa susunod na interview',
  studyBuddy: 'Study Buddy',
  personalizedHelp: 'Makakuha ng personalized learning help',
  videoMeeting: 'Video Meeting',
  liveSessionsHost: 'Mag-host o sumali sa live sessions',

  // Stats
  overallProgress: 'Kabuuang Progress',
  thisWeek: 'ngayong linggo',
  currentStreak: 'Kasalukuyang Streak',
  days: 'mga araw',
  keepItUp: 'Ipagpatuloy mo!',
  achievements: 'Mga Tagumpay',
  earned: 'nakamit',
  inProgress: 'ginagawa',

  // Recent Activities
  recentActivities: 'Mga Kamakailang Aktibidad',
  viewAll: 'Tingnan lahat',
  completedMockInterview: 'Natapos ang mock interview',
  studiedFlashcards: 'Nag-aral ng flashcards',
  joinedVideoSession: 'Sumali sa video session',
  ago: 'nakaraan',
  minutes: 'mga minuto',
  hours: 'mga oras',

  // Recommended Topics
  recommendedTopics: 'Mga Inirerekomendang Topic',
  basedOnProgress: 'Batay sa inyong progress',
  dataStructures: 'Data Structures',
  algorithms: 'Algorithms',
  systemDesign: 'System Design',
  behavioralQuestions: 'Behavioral Questions',

  // Upcoming Sessions
  upcomingSessions: 'Mga Paparating na Session',
  noUpcomingSessions: 'Walang paparating na sessions',
  scheduleSession: 'Mag-schedule ng session',

  // Settings
  settings: 'Mga Setting',
  language: 'Wika',
  theme: 'Theme',
  notifications: 'Mga Notification',

  // Common Actions
  save: 'I-save',
  cancel: 'Kanselahin',
  edit: 'I-edit',
  delete: 'Tanggalin',
  view: 'Tingnan',
  start: 'Simulan',
  continue: 'Ipagpatuloy',
  complete: 'Tapusin',
}

// Spanish translations
const spanishTranslations: Translation = {
  // Navigation & Common
  learnPilot: 'LearnPilot',
  features: 'Características',
  testimonials: 'Testimonios',
  pricing: 'Precios',
  login: 'Iniciar sesión',
  signUp: 'Registrarse',
  getStarted: 'Comenzar',
  learnMore: 'Saber más',

  // Hero Section
  learnSmarterWith: 'Aprende más inteligentemente con',
  aiAssistance: 'asistencia de IA',
  heroDescription: 'LearnPilot utiliza IA avanzada para personalizar tu experiencia de aprendizaje, ayudarte a practicar y dominar cualquier materia más rápido que nunca.',

  // Dashboard
  goodMorning: 'Buenos días',
  goodAfternoon: 'Buenas tardes',
  goodEvening: 'Buenas noches',
  welcomeBack: 'Bienvenido de vuelta',
  overviewDescription: 'Aquí tienes una visión general de tu progreso de aprendizaje y actividades próximas.',
  quickAccess: 'Acceso Rápido',
  mockInterview: 'Entrevista Simulada',
  practiceInterview: 'Practica para tu próxima entrevista',
  studyBuddy: 'Compañero de Estudio',
  personalizedHelp: 'Obtén ayuda personalizada de aprendizaje',
  videoMeeting: 'Videollamada',
  liveSessionsHost: 'Organiza o únete a sesiones en vivo',

  // Stats
  overallProgress: 'Progreso General',
  thisWeek: 'esta semana',
  currentStreak: 'Racha Actual',
  days: 'días',
  keepItUp: '¡Sigue así!',
  achievements: 'Logros',
  earned: 'obtenidos',
  inProgress: 'en progreso',

  // Recent Activities
  recentActivities: 'Actividades Recientes',
  viewAll: 'Ver todo',
  completedMockInterview: 'Entrevista simulada completada',
  studiedFlashcards: 'Estudió tarjetas de memoria',
  joinedVideoSession: 'Se unió a sesión de video',
  ago: 'hace',
  minutes: 'minutos',
  hours: 'horas',

  // Recommended Topics
  recommendedTopics: 'Temas Recomendados',
  basedOnProgress: 'Basado en tu progreso',
  dataStructures: 'Estructuras de Datos',
  algorithms: 'Algoritmos',
  systemDesign: 'Diseño de Sistemas',
  behavioralQuestions: 'Preguntas de Comportamiento',

  // Upcoming Sessions
  upcomingSessions: 'Próximas Sesiones',
  noUpcomingSessions: 'No hay próximas sesiones',
  scheduleSession: 'Programar una sesión',

  // Settings
  settings: 'Configuración',
  language: 'Idioma',
  theme: 'Tema',
  notifications: 'Notificaciones',

  // Common Actions
  save: 'Guardar',
  cancel: 'Cancelar',
  edit: 'Editar',
  delete: 'Eliminar',
  view: 'Ver',
  start: 'Comenzar',
  continue: 'Continuar',
  complete: 'Completar',
}

// Complete translations for all 8 languages
export const translations: Record<string, Translation> = {
  'en': englishTranslations,
  'es': spanishTranslations,
  'tl': filipinoTranslations,

  // French
  'fr': {
    learnPilot: 'LearnPilot',
    features: 'Fonctionnalités',
    testimonials: 'Témoignages',
    pricing: 'Tarifs',
    login: 'Se connecter',
    signUp: 'S\'inscrire',
    getStarted: 'Commencer',
    learnMore: 'En savoir plus',
    learnSmarterWith: 'Apprenez plus intelligemment avec',
    aiAssistance: 'assistance IA',
    heroDescription: 'LearnPilot utilise une IA avancée pour personnaliser votre expérience d\'apprentissage, vous aider à pratiquer et maîtriser n\'importe quel sujet plus rapidement que jamais.',
    goodMorning: 'Bonjour',
    goodAfternoon: 'Bon après-midi',
    goodEvening: 'Bonsoir',
    welcomeBack: 'Bon retour',
    overviewDescription: 'Voici un aperçu de vos progrès d\'apprentissage et activités à venir.',
    quickAccess: 'Accès Rapide',
    mockInterview: 'Entretien Simulé',
    practiceInterview: 'Pratiquez pour votre prochain entretien',
    studyBuddy: 'Compagnon d\'Étude',
    personalizedHelp: 'Obtenez une aide d\'apprentissage personnalisée',
    videoMeeting: 'Réunion Vidéo',
    liveSessionsHost: 'Organisez ou rejoignez des sessions en direct',
    overallProgress: 'Progrès Global',
    thisWeek: 'cette semaine',
    currentStreak: 'Série Actuelle',
    days: 'jours',
    keepItUp: 'Continuez comme ça!',
    achievements: 'Réalisations',
    earned: 'obtenus',
    inProgress: 'en cours',
    recentActivities: 'Activités Récentes',
    viewAll: 'Voir tout',
    completedMockInterview: 'Entretien simulé terminé',
    studiedFlashcards: 'Cartes mémoire étudiées',
    joinedVideoSession: 'Session vidéo rejointe',
    ago: 'il y a',
    minutes: 'minutes',
    hours: 'heures',
    recommendedTopics: 'Sujets Recommandés',
    basedOnProgress: 'Basé sur vos progrès',
    dataStructures: 'Structures de Données',
    algorithms: 'Algorithmes',
    systemDesign: 'Conception de Système',
    behavioralQuestions: 'Questions Comportementales',
    upcomingSessions: 'Sessions À Venir',
    noUpcomingSessions: 'Aucune session à venir',
    scheduleSession: 'Programmer une session',
    settings: 'Paramètres',
    language: 'Langue',
    theme: 'Thème',
    notifications: 'Notifications',
    save: 'Enregistrer',
    cancel: 'Annuler',
    edit: 'Modifier',
    delete: 'Supprimer',
    view: 'Voir',
    start: 'Commencer',
    continue: 'Continuer',
    complete: 'Terminer',
  },

  // German
  'de': {
    learnPilot: 'LearnPilot',
    features: 'Funktionen',
    testimonials: 'Testimonials',
    pricing: 'Preise',
    login: 'Anmelden',
    signUp: 'Registrieren',
    getStarted: 'Loslegen',
    learnMore: 'Mehr erfahren',
    learnSmarterWith: 'Lernen Sie intelligenter mit',
    aiAssistance: 'KI-Unterstützung',
    heroDescription: 'LearnPilot nutzt fortschrittliche KI, um Ihr Lernerlebnis zu personalisieren, beim Üben zu helfen und jedes Thema schneller als je zuvor zu meistern.',
    goodMorning: 'Guten Morgen',
    goodAfternoon: 'Guten Tag',
    goodEvening: 'Guten Abend',
    welcomeBack: 'Willkommen zurück',
    overviewDescription: 'Hier ist eine Übersicht über Ihren Lernfortschritt und anstehende Aktivitäten.',
    quickAccess: 'Schnellzugriff',
    mockInterview: 'Probeinterview',
    practiceInterview: 'Üben Sie für Ihr nächstes Interview',
    studyBuddy: 'Lernpartner',
    personalizedHelp: 'Erhalten Sie personalisierte Lernhilfe',
    videoMeeting: 'Videokonferenz',
    liveSessionsHost: 'Live-Sessions hosten oder beitreten',
    overallProgress: 'Gesamtfortschritt',
    thisWeek: 'diese Woche',
    currentStreak: 'Aktuelle Serie',
    days: 'Tage',
    keepItUp: 'Weiter so!',
    achievements: 'Erfolge',
    earned: 'erreicht',
    inProgress: 'in Bearbeitung',
    recentActivities: 'Letzte Aktivitäten',
    viewAll: 'Alle anzeigen',
    completedMockInterview: 'Probeinterview abgeschlossen',
    studiedFlashcards: 'Karteikarten studiert',
    joinedVideoSession: 'Video-Session beigetreten',
    ago: 'vor',
    minutes: 'Minuten',
    hours: 'Stunden',
    recommendedTopics: 'Empfohlene Themen',
    basedOnProgress: 'Basierend auf Ihrem Fortschritt',
    dataStructures: 'Datenstrukturen',
    algorithms: 'Algorithmen',
    systemDesign: 'Systemdesign',
    behavioralQuestions: 'Verhaltensfragen',
    upcomingSessions: 'Anstehende Sessions',
    noUpcomingSessions: 'Keine anstehenden Sessions',
    scheduleSession: 'Session planen',
    settings: 'Einstellungen',
    language: 'Sprache',
    theme: 'Design',
    notifications: 'Benachrichtigungen',
    save: 'Speichern',
    cancel: 'Abbrechen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    view: 'Anzeigen',
    start: 'Starten',
    continue: 'Fortsetzen',
    complete: 'Abschließen',
  },

  // Chinese (Simplified)
  'zh': {
    learnPilot: 'LearnPilot',
    features: '功能',
    testimonials: '推荐',
    pricing: '价格',
    login: '登录',
    signUp: '注册',
    getStarted: '开始',
    learnMore: '了解更多',
    learnSmarterWith: '通过以下方式更智能地学习',
    aiAssistance: 'AI 辅助',
    heroDescription: 'LearnPilot 使用先进的 AI 来个性化您的学习体验，帮助您练习，并比以往更快地掌握任何科目。',
    goodMorning: '早上好',
    goodAfternoon: '下午好',
    goodEvening: '晚上好',
    welcomeBack: '欢迎回来',
    overviewDescription: '这里是您的学习进度和即将到来的活动概览。',
    quickAccess: '快速访问',
    mockInterview: '模拟面试',
    practiceInterview: '为下次面试练习',
    studyBuddy: '学习伙伴',
    personalizedHelp: '获得个性化学习帮助',
    videoMeeting: '视频会议',
    liveSessionsHost: '主持或加入直播会话',
    overallProgress: '总体进度',
    thisWeek: '本周',
    currentStreak: '当前连续',
    days: '天',
    keepItUp: '继续保持！',
    achievements: '成就',
    earned: '已获得',
    inProgress: '进行中',
    recentActivities: '最近活动',
    viewAll: '查看全部',
    completedMockInterview: '完成模拟面试',
    studiedFlashcards: '学习了闪卡',
    joinedVideoSession: '加入视频会话',
    ago: '前',
    minutes: '分钟',
    hours: '小时',
    recommendedTopics: '推荐主题',
    basedOnProgress: '基于您的进度',
    dataStructures: '数据结构',
    algorithms: '算法',
    systemDesign: '系统设计',
    behavioralQuestions: '行为问题',
    upcomingSessions: '即将到来的会话',
    noUpcomingSessions: '没有即将到来的会话',
    scheduleSession: '安排会话',
    settings: '设置',
    language: '语言',
    theme: '主题',
    notifications: '通知',
    save: '保存',
    cancel: '取消',
    edit: '编辑',
    delete: '删除',
    view: '查看',
    start: '开始',
    continue: '继续',
    complete: '完成',
  },

  // Japanese
  'ja': {
    learnPilot: 'LearnPilot',
    features: '機能',
    testimonials: '体験談',
    pricing: '料金',
    login: 'ログイン',
    signUp: 'サインアップ',
    getStarted: '始める',
    learnMore: 'もっと詳しく',
    learnSmarterWith: 'より賢く学習する',
    aiAssistance: 'AIアシスタンス',
    heroDescription: 'LearnPilotは高度なAIを使用して学習体験をパーソナライズし、練習を支援し、どんな科目でもこれまで以上に速くマスターできます。',
    goodMorning: 'おはようございます',
    goodAfternoon: 'こんにちは',
    goodEvening: 'こんばんは',
    welcomeBack: 'おかえりなさい',
    overviewDescription: 'こちらは学習進捗と今後の活動の概要です。',
    quickAccess: 'クイックアクセス',
    mockInterview: '模擬面接',
    practiceInterview: '次の面接の練習',
    studyBuddy: '学習パートナー',
    personalizedHelp: 'パーソナライズされた学習支援を受ける',
    videoMeeting: 'ビデオ会議',
    liveSessionsHost: 'ライブセッションをホストまたは参加',
    overallProgress: '全体的な進捗',
    thisWeek: '今週',
    currentStreak: '現在の連続記録',
    days: '日',
    keepItUp: '続けてください！',
    achievements: '実績',
    earned: '獲得済み',
    inProgress: '進行中',
    recentActivities: '最近の活動',
    viewAll: 'すべて表示',
    completedMockInterview: '模擬面接完了',
    studiedFlashcards: 'フラッシュカード学習',
    joinedVideoSession: 'ビデオセッション参加',
    ago: '前',
    minutes: '分',
    hours: '時間',
    recommendedTopics: '推奨トピック',
    basedOnProgress: '進捗に基づく',
    dataStructures: 'データ構造',
    algorithms: 'アルゴリズム',
    systemDesign: 'システム設計',
    behavioralQuestions: '行動面接質問',
    upcomingSessions: '今後のセッション',
    noUpcomingSessions: '今後のセッションはありません',
    scheduleSession: 'セッションをスケジュール',
    settings: '設定',
    language: '言語',
    theme: 'テーマ',
    notifications: '通知',
    save: '保存',
    cancel: 'キャンセル',
    edit: '編集',
    delete: '削除',
    view: '表示',
    start: '開始',
    continue: '続行',
    complete: '完了',
  },

  // Arabic
  'ar': {
    learnPilot: 'LearnPilot',
    features: 'الميزات',
    testimonials: 'الشهادات',
    pricing: 'الأسعار',
    login: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',
    getStarted: 'ابدأ الآن',
    learnMore: 'اعرف المزيد',
    learnSmarterWith: 'تعلم بذكاء أكثر مع',
    aiAssistance: 'مساعدة الذكاء الاصطناعي',
    heroDescription: 'يستخدم LearnPilot الذكاء الاصطناعي المتقدم لتخصيص تجربة التعلم الخاصة بك، ومساعدتك في الممارسة، وإتقان أي موضوع بشكل أسرع من أي وقت مضى.',
    goodMorning: 'صباح الخير',
    goodAfternoon: 'مساء الخير',
    goodEvening: 'مساء الخير',
    welcomeBack: 'مرحباً بعودتك',
    overviewDescription: 'إليك نظرة عامة على تقدم التعلم والأنشطة القادمة.',
    quickAccess: 'الوصول السريع',
    mockInterview: 'مقابلة تجريبية',
    practiceInterview: 'تدرب للمقابلة القادمة',
    studyBuddy: 'رفيق الدراسة',
    personalizedHelp: 'احصل على مساعدة تعليمية مخصصة',
    videoMeeting: 'اجتماع فيديو',
    liveSessionsHost: 'استضف أو انضم للجلسات المباشرة',
    overallProgress: 'التقدم العام',
    thisWeek: 'هذا الأسبوع',
    currentStreak: 'السلسلة الحالية',
    days: 'أيام',
    keepItUp: 'استمر!',
    achievements: 'الإنجازات',
    earned: 'محققة',
    inProgress: 'قيد التقدم',
    recentActivities: 'الأنشطة الأخيرة',
    viewAll: 'عرض الكل',
    completedMockInterview: 'مقابلة تجريبية مكتملة',
    studiedFlashcards: 'دراسة البطاقات التعليمية',
    joinedVideoSession: 'انضم لجلسة فيديو',
    ago: 'منذ',
    minutes: 'دقائق',
    hours: 'ساعات',
    recommendedTopics: 'المواضيع المقترحة',
    basedOnProgress: 'بناءً على تقدمك',
    dataStructures: 'هياكل البيانات',
    algorithms: 'الخوارزميات',
    systemDesign: 'تصميم النظام',
    behavioralQuestions: 'الأسئلة السلوكية',
    upcomingSessions: 'الجلسات القادمة',
    noUpcomingSessions: 'لا توجد جلسات قادمة',
    scheduleSession: 'جدولة جلسة',
    settings: 'الإعدادات',
    language: 'اللغة',
    theme: 'المظهر',
    notifications: 'الإشعارات',
    save: 'حفظ',
    cancel: 'إلغاء',
    edit: 'تعديل',
    delete: 'حذف',
    view: 'عرض',
    start: 'بدء',
    continue: 'متابعة',
    complete: 'إكمال',
  },
}

// Note: useTranslation hook is now provided by the LanguageProvider component
// This is kept for backward compatibility but should use the context version

// Utility function to get greeting based on time
export function getGreeting(t: (key: keyof Translation) => string): string {
  const hour = new Date().getHours()
  if (hour < 12) return t('goodMorning')
  if (hour < 18) return t('goodAfternoon')
  return t('goodEvening')
}
