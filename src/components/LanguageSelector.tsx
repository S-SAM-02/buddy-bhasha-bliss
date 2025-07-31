import { Button } from "@/components/ui/button";
import { languages, Language } from "@/data/languages";

interface LanguageSelectorProps {
  onLanguageSelect: (language: Language) => void;
  selectedLanguage?: Language;
}

export const LanguageSelector = ({ onLanguageSelect, selectedLanguage }: LanguageSelectorProps) => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-playful text-primary mb-2">
          Choose Your Language! 🌈
        </h2>
        <p className="text-lg font-comic text-muted-foreground">
          Pick a language to start your learning adventure
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {languages.map((language) => (
          <Button
            key={language.code}
            variant={selectedLanguage?.code === language.code ? "default" : "outline"}
            size="lg"
            onClick={() => onLanguageSelect(language)}
            className="flex flex-col items-center gap-2 h-auto py-6 hover:shadow-primary transition-all duration-300"
          >
            <span className="text-4xl">{language.flag}</span>
            <div className="text-center">
              <div className="text-lg font-bold">{language.name}</div>
              <div className="text-2xl font-playful">{language.nativeName}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};