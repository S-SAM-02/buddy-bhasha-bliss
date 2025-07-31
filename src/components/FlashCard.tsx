import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Word } from "@/data/languages";
import { Volume2, RotateCcw, ArrowRight } from "lucide-react";

interface FlashCardProps {
  word: Word;
  onNext: () => void;
  isLastCard?: boolean;
  currentCard: number;
  totalCards: number;
}

export const FlashCard = ({ word, onNext, isLastCard, currentCard, totalCards }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Load voices when component mounts
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      console.log('Available voices:', availableVoices.map(v => ({ name: v.name, lang: v.lang })));
    };

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }, []);

  const playPronunciation = () => {
    if ('speechSynthesis' in window) {
      try {
        // Cancel any ongoing speech
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(word.native);
        console.log('Speaking word:', word.native);
        
        // Select best voice for child-like speech
        const childVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('female') ||
          voice.name.toLowerCase().includes('woman') ||
          voice.name.toLowerCase().includes('samantha') ||
          voice.name.toLowerCase().includes('karen') ||
          voice.name.toLowerCase().includes('zira') ||
          voice.name.toLowerCase().includes('susan')
        ) || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
        
        if (childVoice) {
          utterance.voice = childVoice;
          console.log('Using voice:', childVoice.name);
        }
        
        // Child-like voice settings
        utterance.rate = 0.6; // Slower speech
        utterance.pitch = 1.5; // Higher pitch for child-like voice
        utterance.volume = 1.0;
        
        // Error handling
        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
        };
        
        utterance.onend = () => {
          console.log('Speech finished');
        };
        
        // Speak immediately if voices are loaded, otherwise wait
        if (voices.length > 0) {
          speechSynthesis.speak(utterance);
        } else {
          setTimeout(() => {
            speechSynthesis.speak(utterance);
          }, 500);
        }
      } catch (error) {
        console.error('Error playing pronunciation:', error);
      }
    } else {
      console.error('Speech synthesis not supported');
    }
  };

  const handleFlip = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      onNext();
    }, 300);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-md mx-auto">
      {/* Progress indicator */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-comic text-muted-foreground">
            Card {currentCard} of {totalCards}
          </span>
          <span className="text-sm font-comic text-muted-foreground">
            {word.difficulty && (
              <span className={`px-2 py-1 rounded-full text-xs ${
                word.difficulty === 'easy' ? 'bg-success/20 text-success' :
                word.difficulty === 'medium' ? 'bg-primary/20 text-primary' :
                'bg-destructive/20 text-destructive'
              }`}>
                {word.difficulty}
              </span>
            )}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="gradient-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentCard / totalCards) * 100}%` }}
          />
        </div>
      </div>

      {/* Flash Card */}
      <div 
        className={`relative w-full h-80 cursor-pointer transition-all duration-600 ${
          isAnimating ? 'flip-card' : ''
        } ${isFlipped ? 'hover:scale-105' : 'hover:scale-105'}`}
        onClick={handleFlip}
      >
        <div className={`absolute inset-0 w-full h-full rounded-3xl transition-all duration-500 ${
          isFlipped ? 'opacity-0 rotate-y-180' : 'opacity-100'
        }`}>
          {/* Front of card */}
          <div className="gradient-primary p-8 rounded-3xl h-full shadow-primary flex flex-col items-center justify-center text-center">
            <div className="text-6xl font-bold text-primary-foreground mb-4">
              {word.native}
            </div>
            <div className="text-xl font-comic text-primary-foreground/90 mb-6">
              /{word.pronunciation}/
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                playPronunciation();
              }}
              className="mb-4"
            >
              <Volume2 size={16} className="mr-2" />
              Listen
            </Button>
            <p className="text-sm font-comic text-primary-foreground/80">
              Tap to see meaning
            </p>
          </div>
        </div>

        <div className={`absolute inset-0 w-full h-full rounded-3xl transition-all duration-500 ${
          isFlipped ? 'opacity-100' : 'opacity-0 rotate-y-180'
        }`}>
          {/* Back of card */}
          <div className="gradient-secondary p-8 rounded-3xl h-full shadow-secondary flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-bold text-secondary-foreground mb-6">
              {word.meaning}
            </div>
            <div className="bg-secondary-foreground/10 rounded-2xl p-4 mb-6">
              <p className="text-lg font-comic text-secondary-foreground/90">
                "{word.example}"
              </p>
            </div>
            <p className="text-sm font-comic text-secondary-foreground/80">
              Tap to flip back
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 w-full">
        <Button
          variant="outline"
          onClick={handleFlip}
          className="flex-1"
        >
          <RotateCcw size={16} className="mr-2" />
          Flip
        </Button>
        
        <Button
          variant={isLastCard ? "success" : "default"}
          onClick={handleNext}
          className="flex-1"
        >
          {isLastCard ? "Finish" : "Next"}
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};