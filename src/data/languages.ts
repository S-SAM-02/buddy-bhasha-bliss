export interface Word {
  id: number;
  native: string;
  pronunciation: string;
  meaning: string;
  example: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  words: Word[];
}

export const languages: Language[] = [
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिंदी',
    flag: '🇮🇳',
    words: [
      { id: 1, native: 'नमस्ते', pronunciation: 'namaste', meaning: 'Hello/Goodbye', example: 'Say namaste when meeting someone', difficulty: 'easy' },
      { id: 2, native: 'धन्यवाद', pronunciation: 'dhanyavaad', meaning: 'Thank you', example: 'Say dhanyavaad to show gratitude', difficulty: 'easy' },
      { id: 3, native: 'पानी', pronunciation: 'paani', meaning: 'Water', example: 'I need paani to drink', difficulty: 'easy' },
      { id: 4, native: 'खाना', pronunciation: 'khaana', meaning: 'Food', example: 'Khaana is ready for dinner', difficulty: 'easy' },
      { id: 5, native: 'घर', pronunciation: 'ghar', meaning: 'Home', example: 'I am going to my ghar', difficulty: 'easy' },
      { id: 6, native: 'मां', pronunciation: 'maa', meaning: 'Mother', example: 'My maa is very kind', difficulty: 'easy' },
      { id: 7, native: 'पिता', pronunciation: 'pita', meaning: 'Father', example: 'My pita works hard', difficulty: 'easy' },
      { id: 8, native: 'दोस्त', pronunciation: 'dost', meaning: 'Friend', example: 'He is my best dost', difficulty: 'easy' },
      { id: 9, native: 'स्कूल', pronunciation: 'school', meaning: 'School', example: 'Children go to school daily', difficulty: 'easy' },
      { id: 10, native: 'किताब', pronunciation: 'kitaab', meaning: 'Book', example: 'I love reading this kitaab', difficulty: 'easy' },
      { id: 11, native: 'सूर्य', pronunciation: 'surya', meaning: 'Sun', example: 'Surya gives us light', difficulty: 'medium' },
      { id: 12, native: 'चांद', pronunciation: 'chaand', meaning: 'Moon', example: 'Chaand looks beautiful tonight', difficulty: 'medium' },
      { id: 13, native: 'फूल', pronunciation: 'phool', meaning: 'Flower', example: 'This phool smells sweet', difficulty: 'easy' },
      { id: 14, native: 'पेड़', pronunciation: 'ped', meaning: 'Tree', example: 'Birds sit on the ped', difficulty: 'easy' },
      { id: 15, native: 'रंग', pronunciation: 'rang', meaning: 'Color', example: 'What rang do you like?', difficulty: 'medium' },
    ]
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    flag: '🇮🇳',
    words: [
      { id: 1, native: 'ನಮಸ್ಕಾರ', pronunciation: 'namaskara', meaning: 'Hello/Goodbye', example: 'Say namaskara to greet people', difficulty: 'easy' },
      { id: 2, native: 'ಧನ್ಯವಾದ', pronunciation: 'dhanyavaada', meaning: 'Thank you', example: 'Say dhanyavaada to thank someone', difficulty: 'easy' },
      { id: 3, native: 'ನೀರು', pronunciation: 'neeru', meaning: 'Water', example: 'I need neeru to drink', difficulty: 'easy' },
      { id: 4, native: 'ಊಟ', pronunciation: 'oota', meaning: 'Food', example: 'Oota is ready to eat', difficulty: 'easy' },
      { id: 5, native: 'ಮನೆ', pronunciation: 'mane', meaning: 'Home', example: 'I am going to my mane', difficulty: 'easy' },
      { id: 6, native: 'ಅಮ್ಮ', pronunciation: 'amma', meaning: 'Mother', example: 'My amma cooks well', difficulty: 'easy' },
      { id: 7, native: 'ಅಪ್ಪ', pronunciation: 'appa', meaning: 'Father', example: 'My appa is strong', difficulty: 'easy' },
      { id: 8, native: 'ಗೆಳೆಯ', pronunciation: 'geleyya', meaning: 'Friend', example: 'He is my good geleyya', difficulty: 'medium' },
      { id: 9, native: 'ಶಾಲೆ', pronunciation: 'shaale', meaning: 'School', example: 'Kids learn in shaale', difficulty: 'easy' },
      { id: 10, native: 'ಪುಸ್ತಕ', pronunciation: 'pustaka', meaning: 'Book', example: 'This pustaka is interesting', difficulty: 'medium' },
      { id: 11, native: 'ಸೂರ್ಯ', pronunciation: 'soorya', meaning: 'Sun', example: 'Soorya is bright today', difficulty: 'medium' },
      { id: 12, native: 'ಚಂದ್ರ', pronunciation: 'chandra', meaning: 'Moon', example: 'Chandra shines at night', difficulty: 'medium' },
      { id: 13, native: 'ಹೂವು', pronunciation: 'hoovu', meaning: 'Flower', example: 'This hoovu is beautiful', difficulty: 'easy' },
      { id: 14, native: 'ಮರ', pronunciation: 'mara', meaning: 'Tree', example: 'Mara gives us shade', difficulty: 'easy' },
      { id: 15, native: 'ಬಣ್ಣ', pronunciation: 'banna', meaning: 'Color', example: 'I like this banna', difficulty: 'medium' },
    ]
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    words: [
      { id: 1, native: 'నమస్కారం', pronunciation: 'namaskaaram', meaning: 'Hello/Goodbye', example: 'Say namaskaaram to greet', difficulty: 'easy' },
      { id: 2, native: 'ధన్యవాదాలు', pronunciation: 'dhanyavadaalu', meaning: 'Thank you', example: 'Say dhanyavadaalu to thank', difficulty: 'medium' },
      { id: 3, native: 'నీళ్లు', pronunciation: 'neellu', meaning: 'Water', example: 'I want neellu to drink', difficulty: 'easy' },
      { id: 4, native: 'తిండి', pronunciation: 'tindi', meaning: 'Food', example: 'Tindi is very tasty', difficulty: 'easy' },
      { id: 5, native: 'ఇల్లు', pronunciation: 'illu', meaning: 'Home', example: 'I love my illu', difficulty: 'easy' },
      { id: 6, native: 'అమ్మ', pronunciation: 'amma', meaning: 'Mother', example: 'My amma is caring', difficulty: 'easy' },
      { id: 7, native: 'నాన్న', pronunciation: 'naanna', meaning: 'Father', example: 'My naanna is helpful', difficulty: 'easy' },
      { id: 8, native: 'స్నేహితుడు', pronunciation: 'snehitudu', meaning: 'Friend', example: 'He is my best snehitudu', difficulty: 'hard' },
      { id: 9, native: 'పాఠశాల', pronunciation: 'paathashaala', meaning: 'School', example: 'Children study in paathashaala', difficulty: 'medium' },
      { id: 10, native: 'పుస్తకం', pronunciation: 'pustakam', meaning: 'Book', example: 'I read this pustakam daily', difficulty: 'medium' },
      { id: 11, native: 'సూర్యుడు', pronunciation: 'sooryudu', meaning: 'Sun', example: 'Sooryudu gives warmth', difficulty: 'medium' },
      { id: 12, native: 'చంద్రుడు', pronunciation: 'chandrudu', meaning: 'Moon', example: 'Chandrudu is full tonight', difficulty: 'medium' },
      { id: 13, native: 'పువ్వు', pronunciation: 'puvvu', meaning: 'Flower', example: 'This puvvu smells nice', difficulty: 'easy' },
      { id: 14, native: 'చెట్టు', pronunciation: 'chettu', meaning: 'Tree', example: 'Chettu has many leaves', difficulty: 'easy' },
      { id: 15, native: 'రంగు', pronunciation: 'rangu', meaning: 'Color', example: 'What rangu do you prefer?', difficulty: 'medium' },
    ]
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    words: [
      { id: 1, native: 'வணக்கம்', pronunciation: 'vanakkam', meaning: 'Hello/Goodbye', example: 'Say vanakkam to greet people', difficulty: 'easy' },
      { id: 2, native: 'நன்றி', pronunciation: 'nandri', meaning: 'Thank you', example: 'Say nandri to show thanks', difficulty: 'easy' },
      { id: 3, native: 'தண்ணீர்', pronunciation: 'thaneer', meaning: 'Water', example: 'I need thaneer to drink', difficulty: 'easy' },
      { id: 4, native: 'உணவு', pronunciation: 'unavu', meaning: 'Food', example: 'Unavu is ready to eat', difficulty: 'easy' },
      { id: 5, native: 'வீடு', pronunciation: 'veedu', meaning: 'Home', example: 'I am going to veedu', difficulty: 'easy' },
      { id: 6, native: 'அம்மா', pronunciation: 'amma', meaning: 'Mother', example: 'My amma loves me', difficulty: 'easy' },
      { id: 7, native: 'அப்பா', pronunciation: 'appa', meaning: 'Father', example: 'My appa teaches me', difficulty: 'easy' },
      { id: 8, native: 'நண்பன்', pronunciation: 'nanban', meaning: 'Friend', example: 'He is my close nanban', difficulty: 'medium' },
      { id: 9, native: 'பள்ளி', pronunciation: 'palli', meaning: 'School', example: 'Students learn in palli', difficulty: 'easy' },
      { id: 10, native: 'புத்தகம்', pronunciation: 'puthagam', meaning: 'Book', example: 'This puthagam is helpful', difficulty: 'medium' },
      { id: 11, native: 'சூரியன்', pronunciation: 'sooriyan', meaning: 'Sun', example: 'Sooriyan rises in the east', difficulty: 'medium' },
      { id: 12, native: 'சந்திரன்', pronunciation: 'sandiran', meaning: 'Moon', example: 'Sandiran appears at night', difficulty: 'medium' },
      { id: 13, native: 'பூ', pronunciation: 'poo', meaning: 'Flower', example: 'This poo is colorful', difficulty: 'easy' },
      { id: 14, native: 'மரம்', pronunciation: 'maram', meaning: 'Tree', example: 'Maram provides oxygen', difficulty: 'easy' },
      { id: 15, native: 'நிறம்', pronunciation: 'niram', meaning: 'Color', example: 'Choose your favorite niram', difficulty: 'medium' },
    ]
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    flag: '🇮🇳',
    words: [
      { id: 1, native: 'नमस्कार', pronunciation: 'namaskar', meaning: 'Hello/Goodbye', example: 'Say namaskar to greet people', difficulty: 'easy' },
      { id: 2, native: 'धन्यवाद', pronunciation: 'dhanyawad', meaning: 'Thank you', example: 'Say dhanyawad to thank someone', difficulty: 'easy' },
      { id: 3, native: 'पाणी', pronunciation: 'paani', meaning: 'Water', example: 'I need paani to drink', difficulty: 'easy' },
      { id: 4, native: 'जेवण', pronunciation: 'jevan', meaning: 'Food', example: 'Jevan is ready to eat', difficulty: 'easy' },
      { id: 5, native: 'घर', pronunciation: 'ghar', meaning: 'Home', example: 'I am going to ghar', difficulty: 'easy' },
      { id: 6, native: 'आई', pronunciation: 'aai', meaning: 'Mother', example: 'My aai cooks well', difficulty: 'easy' },
      { id: 7, native: 'बाबा', pronunciation: 'baba', meaning: 'Father', example: 'My baba is kind', difficulty: 'easy' },
      { id: 8, native: 'मित्र', pronunciation: 'mitra', meaning: 'Friend', example: 'He is my good mitra', difficulty: 'medium' },
      { id: 9, native: 'शाळा', pronunciation: 'shaala', meaning: 'School', example: 'Children study in shaala', difficulty: 'easy' },
      { id: 10, native: 'पुस्तक', pronunciation: 'pustak', meaning: 'Book', example: 'This pustak is interesting', difficulty: 'medium' },
      { id: 11, native: 'सूर्य', pronunciation: 'surya', meaning: 'Sun', example: 'Surya shines bright', difficulty: 'medium' },
      { id: 12, native: 'चंद्र', pronunciation: 'chandra', meaning: 'Moon', example: 'Chandra is beautiful tonight', difficulty: 'medium' },
      { id: 13, native: 'फूल', pronunciation: 'phool', meaning: 'Flower', example: 'This phool smells sweet', difficulty: 'easy' },
      { id: 14, native: 'झाड', pronunciation: 'jhad', meaning: 'Tree', example: 'Jhad gives us shade', difficulty: 'easy' },
      { id: 15, native: 'रंग', pronunciation: 'rang', meaning: 'Color', example: 'What rang do you like?', difficulty: 'medium' },
    ]
  },
  {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    flag: '🇮🇳',
    words: [
      { id: 1, native: 'ନମସ୍କାର', pronunciation: 'namaskar', meaning: 'Hello/Goodbye', example: 'Say namaskar to greet people', difficulty: 'easy' },
      { id: 2, native: 'ଧନ୍ୟବାଦ', pronunciation: 'dhanyabad', meaning: 'Thank you', example: 'Say dhanyabad to thank someone', difficulty: 'easy' },
      { id: 3, native: 'ପାଣି', pronunciation: 'paani', meaning: 'Water', example: 'I need paani to drink', difficulty: 'easy' },
      { id: 4, native: 'ଖାଦ୍ୟ', pronunciation: 'khadya', meaning: 'Food', example: 'Khadya is ready to eat', difficulty: 'easy' },
      { id: 5, native: 'ଘର', pronunciation: 'ghar', meaning: 'Home', example: 'I am going to ghar', difficulty: 'easy' },
      { id: 6, native: 'ମା', pronunciation: 'maa', meaning: 'Mother', example: 'My maa loves me', difficulty: 'easy' },
      { id: 7, native: 'ବାପା', pronunciation: 'bapa', meaning: 'Father', example: 'My bapa is strong', difficulty: 'easy' },
      { id: 8, native: 'ବନ୍ଧୁ', pronunciation: 'bandhu', meaning: 'Friend', example: 'He is my best bandhu', difficulty: 'medium' },
      { id: 9, native: 'ବିଦ୍ୟାଳୟ', pronunciation: 'bidyalaya', meaning: 'School', example: 'Children learn in bidyalaya', difficulty: 'hard' },
      { id: 10, native: 'ପୁସ୍ତକ', pronunciation: 'pustak', meaning: 'Book', example: 'This pustak is helpful', difficulty: 'medium' },
      { id: 11, native: 'ସୂର୍ଯ୍ୟ', pronunciation: 'surya', meaning: 'Sun', example: 'Surya gives us light', difficulty: 'medium' },
      { id: 12, native: 'ଚନ୍ଦ୍ର', pronunciation: 'chandra', meaning: 'Moon', example: 'Chandra shines at night', difficulty: 'medium' },
      { id: 13, native: 'ଫୁଲ', pronunciation: 'phul', meaning: 'Flower', example: 'This phul is beautiful', difficulty: 'easy' },
      { id: 14, native: 'ଗଛ', pronunciation: 'gachha', meaning: 'Tree', example: 'Gachha provides oxygen', difficulty: 'easy' },
      { id: 15, native: 'ରଙ୍ଗ', pronunciation: 'ranga', meaning: 'Color', example: 'Choose your favorite ranga', difficulty: 'medium' },
    ]
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    flag: '🇮🇳',
    words: [
      { id: 1, native: 'નમસ્તે', pronunciation: 'namaste', meaning: 'Hello/Goodbye', example: 'Say namaste to greet people', difficulty: 'easy' },
      { id: 2, native: 'આભાર', pronunciation: 'aabhar', meaning: 'Thank you', example: 'Say aabhar to thank someone', difficulty: 'easy' },
      { id: 3, native: 'પાણી', pronunciation: 'paani', meaning: 'Water', example: 'I need paani to drink', difficulty: 'easy' },
      { id: 4, native: 'ખાણું', pronunciation: 'khaanu', meaning: 'Food', example: 'Khaanu is ready to eat', difficulty: 'easy' },
      { id: 5, native: 'ઘર', pronunciation: 'ghar', meaning: 'Home', example: 'I am going to ghar', difficulty: 'easy' },
      { id: 6, native: 'મા', pronunciation: 'maa', meaning: 'Mother', example: 'My maa cooks well', difficulty: 'easy' },
      { id: 7, native: 'પિતા', pronunciation: 'pita', meaning: 'Father', example: 'My pita is helpful', difficulty: 'easy' },
      { id: 8, native: 'મિત્ર', pronunciation: 'mitra', meaning: 'Friend', example: 'He is my good mitra', difficulty: 'medium' },
      { id: 9, native: 'શાળા', pronunciation: 'shaala', meaning: 'School', example: 'Children study in shaala', difficulty: 'easy' },
      { id: 10, native: 'પુસ્તક', pronunciation: 'pustak', meaning: 'Book', example: 'This pustak is interesting', difficulty: 'medium' },
      { id: 11, native: 'સૂર્ય', pronunciation: 'surya', meaning: 'Sun', example: 'Surya is bright today', difficulty: 'medium' },
      { id: 12, native: 'ચંદ્ર', pronunciation: 'chandra', meaning: 'Moon', example: 'Chandra is full tonight', difficulty: 'medium' },
      { id: 13, native: 'ફૂલ', pronunciation: 'phool', meaning: 'Flower', example: 'This phool is colorful', difficulty: 'easy' },
      { id: 14, native: 'વૃક્ષ', pronunciation: 'vruksh', meaning: 'Tree', example: 'Vruksh gives us oxygen', difficulty: 'medium' },
      { id: 15, native: 'રંગ', pronunciation: 'rang', meaning: 'Color', example: 'What rang do you prefer?', difficulty: 'medium' },
    ]
  }
];

export const getRandomWords = (language: Language, count: number = 10): Word[] => {
  const shuffled = [...language.words].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const generateQuizOptions = (correctWord: Word, allWords: Word[]): string[] => {
  const incorrectOptions = allWords
    .filter(w => w.id !== correctWord.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(w => w.meaning);
  
  const options = [correctWord.meaning, ...incorrectOptions].sort(() => 0.5 - Math.random());
  return options;
};