import { FormElement, FormElementType, FormElementValue } from "@/types/form";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface WelcomeScreenProps {
  element: FormElement & { type: FormElementType.WELCOME_SCREEN };
  onChange: (value: FormElementValue) => void;
}

export function WelcomeScreen({ element, onChange }: WelcomeScreenProps) {
  return (
    <div className="text-center space-y-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {element.properties.title}
      </motion.h2>

      {element.properties.subtitle && (
        <motion.p
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {element.properties.subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button onClick={() => onChange(true)} size="lg" className="mt-8">
          {element.properties.buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
}
