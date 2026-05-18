type AnimatedTitleProps = {
  text: string;
  className?: string;
};

export function AnimatedTitle({ text, className = "" }: AnimatedTitleProps) {
  return (
    <span className={`animated-title ${className}`} aria-label={text}>
      {Array.from(text).map((letter, index) => (
        <span
          aria-hidden="true"
          className="animated-title__letter"
          key={`${letter}-${index}`}
          style={{ animationDelay: `${index * 52}ms` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}
