import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Word, generateQuizOptions } from "@/data/languages";
import { CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react";
import { Mascot } from "./Mascot";

interface QuizProps {
  words: Word[];
  onComplete: (score: number) => void;
  onRestart: () => void;
}

interface QuizQuestion {
  word: Word;
  options: string[];
  correctAnswer: string;
}

export const Quiz = ({ words, onComplete, onRestart }: QuizProps) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [confetti, setConfetti] = useState<number[]>([]);

  useEffect(() => {
    // Generate quiz questions
    const quizQuestions = words.slice(0, 10).map(word => ({
      word,
      options: generateQuizOptions(word, words),
      correctAnswer: word.meaning
    }));
    setQuestions(quizQuestions);
  }, [words]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      triggerConfetti();
    }

    setTimeout(() => {
      if (currentQuestion + 1 >= questions.length) {
        setShowResult(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
        setIsAnswered(false);
      }
    }, 2000);
  };

  const triggerConfetti = () => {
    const particles = Array.from({ length: 20 }, (_, i) => i);
    setConfetti(particles);
    setTimeout(() => setConfetti([]), 3000);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Outstanding! You're a language champion! 🏆";
    if (percentage >= 70) return "Great job! You're learning fast! 🌟";
    if (percentage >= 50) return "Good work! Keep practicing! 👍";
    return "Nice try! Practice makes perfect! 💪";
  };

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse text-lg font-comic">Loading quiz...</div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="flex flex-col items-center gap-6 p-6 text-center">
        <div className="gradient-success p-8 rounded-3xl shadow-success">
          <Trophy size={64} className="text-success-foreground mx-auto mb-4" />
          <h2 className="text-3xl font-playful text-success-foreground mb-2">Quiz Complete!</h2>
          <div className="text-6xl font-bold text-success-foreground mb-4">
            {score}/{questions.length}
          </div>
          <p className="text-xl font-comic text-success-foreground">
            {Math.round((score / questions.length) * 100)}% Correct!
          </p>
        </div>

        <Mascot 
          message={getScoreMessage()}
          isWaving={true}
        />

        <div className="flex gap-4">
          <Button variant="outline" onClick={onRestart}>
            <RotateCcw size={16} className="mr-2" />
            Try Again
          </Button>
          <Button variant="success" onClick={() => onComplete(score)}>
            Continue Learning
          </Button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-2xl mx-auto">
      {/* Confetti */}
      {confetti.map((particle) => (
        <div
          key={particle}
          className="confetti-particle fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-50"
          style={{
            left: `${Math.random() * 100}vw`,
            backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`
          }}
        />
      ))}

      {/* Progress */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-comic text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-comic text-muted-foreground">
            Score: {score}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="gradient-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="gradient-soft-rainbow p-8 rounded-3xl shadow-soft text-center w-full">
        <h3 className="text-2xl font-playful text-foreground mb-4">
          What does this word mean?
        </h3>
        <div className="text-5xl font-bold text-primary mb-2">
          {currentQ.word.native}
        </div>
        <div className="text-xl font-comic text-muted-foreground">
          /{currentQ.word.pronunciation}/
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {currentQ.options.map((option, index) => {
          let variant: "quiz" | "success" | "destructive" = "quiz";
          
          if (isAnswered) {
            if (option === currentQ.correctAnswer) {
              variant = "success";
            } else if (option === selectedAnswer && option !== currentQ.correctAnswer) {
              variant = "destructive";
            }
          }

          return (
            <Button
              key={index}
              variant={variant}
              size="lg"
              onClick={() => handleAnswerSelect(option)}
              disabled={isAnswered}
              className={`p-6 h-auto text-wrap text-left justify-start ${
                isAnswered && option === currentQ.correctAnswer ? 'pulse-success' : ''
              }`}
            >
              <div className="flex items-center gap-3 w-full">
                {isAnswered && option === currentQ.correctAnswer && (
                  <CheckCircle size={20} className="text-success-foreground" />
                )}
                {isAnswered && option === selectedAnswer && option !== currentQ.correctAnswer && (
                  <XCircle size={20} className="text-destructive-foreground" />
                )}
                <span className="text-lg">{option}</span>
              </div>
            </Button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="text-center">
          <p className="text-lg font-comic text-muted-foreground">
            {selectedAnswer === currentQ.correctAnswer ? "Correct! 🎉" : "Incorrect! 😊"}
          </p>
          <p className="text-sm font-comic text-muted-foreground mt-2">
            Example: "{currentQ.word.example}"
          </p>
        </div>
      )}
    </div>
  );
};