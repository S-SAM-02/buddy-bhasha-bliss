import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { FlashCard } from "@/components/FlashCard";
import { Quiz } from "@/components/Quiz";
import { Mascot } from "@/components/Mascot";
import { Language, Word, getRandomWords } from "@/data/languages";
import { BookOpen, Brain, Home, Sparkles } from "lucide-react";

type AppState = 'welcome' | 'language-select' | 'learning' | 'quiz' | 'complete';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [currentWords, setCurrentWords] = useState<Word[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    const words = getRandomWords(language, 15);
    setCurrentWords(words);
    setAppState('learning');
    setCurrentCardIndex(0);
  };

  const handleNextCard = () => {
    if (currentCardIndex + 1 >= currentWords.length) {
      setAppState('quiz');
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setAppState('complete');
  };

  const handleRestart = () => {
    setAppState('language-select');
    setCurrentCardIndex(0);
    setQuizScore(0);
  };

  const startLearning = () => {
    setAppState('language-select');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-sm border-b border-border/50 shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="gradient-primary p-2 rounded-xl">
              <BookOpen size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-playful text-primary">Language Buddy</h1>
              <p className="text-sm font-comic text-muted-foreground">Learn Indian Languages</p>
            </div>
          </div>
          
          {appState !== 'welcome' && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setAppState('welcome')}
            >
              <Home size={16} className="mr-2" />
              Home
            </Button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {appState === 'welcome' && (
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <div className="gradient-rainbow p-12 rounded-3xl shadow-primary">
              <Sparkles size={64} className="text-white mx-auto mb-6" />
              <h1 className="text-5xl font-playful text-white mb-4">
                Welcome to Language Buddy!
              </h1>
              <p className="text-xl font-comic text-white/90 mb-8">
                Learn beautiful Indian languages with fun flashcards and quizzes! 🌈
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={startLearning}
                className="text-xl px-8 py-4"
              >
                Start Learning Adventure!
              </Button>
            </div>

            <Mascot 
              message="Welcome! I'm Buddy, your language learning companion! Ready to explore the wonderful world of Indian languages? Let's make learning fun together! 🎉"
              isWaving={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-border/50">
                <BookOpen size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-playful text-lg text-center mb-2">Interactive Flashcards</h3>
                <p className="font-comic text-sm text-muted-foreground text-center">
                  Learn words with beautiful flip animations and audio pronunciation
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-border/50">
                <Brain size={32} className="text-secondary mb-4 mx-auto" />
                <h3 className="font-playful text-lg text-center mb-2">Fun Quizzes</h3>
                <p className="font-comic text-sm text-muted-foreground text-center">
                  Test your knowledge with engaging multiple choice questions
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-border/50">
                <Sparkles size={32} className="text-success mb-4 mx-auto" />
                <h3 className="font-playful text-lg text-center mb-2">4 Languages</h3>
                <p className="font-comic text-sm text-muted-foreground text-center">
                  Explore Hindi, Kannada, Telugu, and Tamil languages
                </p>
              </div>
            </div>
          </div>
        )}

        {appState === 'language-select' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Mascot 
                message="Choose a language to start your learning journey! Each language has its own beauty and rich culture. Which one calls to you today? 🌟"
              />
            </div>
            <LanguageSelector 
              onLanguageSelect={handleLanguageSelect}
              selectedLanguage={selectedLanguage}
            />
          </div>
        )}

        {appState === 'learning' && selectedLanguage && currentWords.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-playful text-primary mb-2">
                Learning {selectedLanguage.name} {selectedLanguage.flag}
              </h2>
              <Mascot 
                message={`Great choice! Let's learn some ${selectedLanguage.name} words. Take your time with each card and don't forget to practice the pronunciation! 📚`}
              />
            </div>
            <FlashCard
              word={currentWords[currentCardIndex]}
              onNext={handleNextCard}
              isLastCard={currentCardIndex === currentWords.length - 1}
              currentCard={currentCardIndex + 1}
              totalCards={currentWords.length}
            />
          </div>
        )}

        {appState === 'quiz' && selectedLanguage && currentWords.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-playful text-primary mb-2">
                Quiz Time! 🧠
              </h2>
              <Mascot 
                message="Time to test what you've learned! Don't worry about mistakes - they help us learn better. You've got this! 💪"
              />
            </div>
            <Quiz
              words={currentWords}
              onComplete={handleQuizComplete}
              onRestart={handleRestart}
            />
          </div>
        )}

        {appState === 'complete' && selectedLanguage && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="gradient-success p-8 rounded-3xl shadow-success mb-8">
              <h2 className="text-4xl font-playful text-success-foreground mb-4">
                Congratulations! 🎉
              </h2>
              <p className="text-xl font-comic text-success-foreground mb-4">
                You've completed learning {selectedLanguage.name}!
              </p>
              <div className="text-6xl font-bold text-success-foreground mb-4">
                {quizScore}/{Math.min(currentWords.length, 10)}
              </div>
              <p className="text-lg font-comic text-success-foreground">
                Score: {Math.round((quizScore / Math.min(currentWords.length, 10)) * 100)}%
              </p>
            </div>

            <Mascot 
              message="Amazing work! You're becoming a language champion! Ready to learn another language or practice more words? Keep up the fantastic progress! 🌟"
              isWaving={true}
            />

            <div className="flex gap-4 justify-center mt-8">
              <Button variant="outline" onClick={handleRestart}>
                Learn Another Language
              </Button>
              <Button variant="default" onClick={() => {
                const words = getRandomWords(selectedLanguage!, 15);
                setCurrentWords(words);
                setCurrentCardIndex(0);
                setAppState('learning');
              }}>
                Practice More Words
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
