import { cn } from "@/utils/helper";

const PreHeader = ({
  text,
  theme = "theme2",
}: {
  text: string;
  theme?: string;
}) => {
  return (
    <h6
      className={cn("wow fadeInUp", {
        "text-theme2!": theme === "theme2",
        "text-theme!": theme === "theme",
      })}
    >
      <i className="fa-regular fa-arrow-left-long rtl:rotate-180! rtl:ml-3!" />
      <span className="rtl:text-2xl!">{text}</span>
      <i className="fa-regular fa-arrow-right-long rtl:rotate-180! ltr:ml-3! rtl:mr-3!" />
    </h6>
  );
};

export default PreHeader;
