import { Button } from "@/components/ui/button";
import buddyMascot from "@/assets/buddy-mascot.png";
import { MessageCircle } from "lucide-react";

interface MascotProps {
  message?: string;
  onClick?: () => void;
  isWaving?: boolean;
}

export const Mascot = ({ message = "Hi! I'm Buddy! Let's learn together! 🌟", onClick, isWaving = false }: MascotProps) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="relative">
        <img 
          src={buddyMascot} 
          alt="Buddy the Elephant" 
          className={`w-24 h-24 rounded-full shadow-primary transition-all duration-500 ${
            isWaving ? 'mascot-wave' : 'hover:scale-110'
          }`}
        />
        {onClick && (
          <Button
            variant="mascot"
            size="icon"
            onClick={onClick}
            className="absolute -top-2 -right-2 animate-pulse"
          >
            <MessageCircle size={20} />
          </Button>
        )}
      </div>
      
      <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-soft border-2 border-primary/20 max-w-xs">
        <p className="text-center font-comic text-sm leading-relaxed text-foreground">
          {message}
        </p>
      </div>
    </div>
  );
};