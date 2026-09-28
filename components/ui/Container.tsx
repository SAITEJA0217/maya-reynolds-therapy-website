import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/** Shared horizontal rhythm: 20px gutters on phones, widening to 48px. */
export function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: ContainerProps<T>) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={`mx-auto w-full max-w-(--container-site) px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    />
  );
}
