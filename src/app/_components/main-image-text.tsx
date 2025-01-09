import Image from "next/image";
import cn from "classnames";

type Props = {
  backgroundImage?: string;
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
  contentAlign?: "left" | "center" | "right";
};

export function MainImageText({
  backgroundImage,
  title,
  description,
  image,
  buttonText,
  buttonLink = "#",
  contentAlign = "left",
}: Props) {
  return (
    <section className={cn("relative w-full flex items-center mb-8 md:mb-16", {
      "bg-pink-300": !backgroundImage,
    })}>
      {backgroundImage && (
        <div className="w-full relative aspect-[2/1]">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-5">
              <div
                className={cn("flex flex-col gap-6 max-w-xl", {
                  "text-left items-start": contentAlign === "left",
                  "text-center items-center mx-auto": contentAlign === "center",
                  "text-right items-end ml-auto": contentAlign === "right",
                })}
              >
                {title && (
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    {title}
                  </h2>
                )}
                
                {description && (
                  <p className="text-xl leading-relaxed text-white">{description}</p>
                )}
                
                {image && (
                  <div className="relative w-full aspect-[2/1] max-w-md">
                    <Image
                      src={image}
                      alt={title || "Feature image"}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                
                {buttonText && (
                  <a
                    href={buttonLink}
                    className="inline-block px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}