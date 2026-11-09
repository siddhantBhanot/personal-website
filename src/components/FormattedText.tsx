import React from "react";

interface FormattedTextProps {
  text: string;
}

/**
 * Parses markdown bold (**text**) syntax into styled <strong> elements
 * while preserving standard text around it.
 */
export function FormattedText({ text }: FormattedTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const content = part.slice(2, -2);
          return (
            <strong
              key={index}
              className="text-[var(--ink)] font-semibold font-mono"
            >
              {content}
            </strong>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}
