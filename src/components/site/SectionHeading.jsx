import { Reveal } from "./Reveal";
function SectionHeading({ eyebrow, title, description, align = "left", light }) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow  ${light ? "text-gold" : "text-gold"}`}>{eyebrow}</p>
      <h2
        className={`mt-3 text-[2rem] font-semibold leading-tight sm:text-4xl  ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg  ${light ? "text-white/75" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
export { SectionHeading };
