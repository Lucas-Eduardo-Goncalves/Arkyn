import { SkeletonProps } from "@arkyn/types";

function Skeleton({ className: baseClassName, ...rest }: SkeletonProps) {
  const className = "arkyn_skeleton " + baseClassName;
  return <div className={className.trim()} {...rest} />;
}

export { Skeleton };
