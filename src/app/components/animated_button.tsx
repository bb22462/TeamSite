export default function AnimatedButton({
    children,
    className,
    classText,
    href,
  }: {
    children: React.ReactNode;
    className: any;
    classText: any;
    href: any;
  }) {
    className =
      "group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" +
      " " +
      className;
    classText =
      "transition-transform group-hover:-translate-y-1 motion-reduce:transform-none" +
      " " +
      classText;
    return (
      <a href={href} className={className}>
        <div className={classText}>{children}</div>
      </a>
    );
  }
  