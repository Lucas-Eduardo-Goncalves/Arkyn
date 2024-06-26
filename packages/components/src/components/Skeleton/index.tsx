import { SkeletonProps } from "@arkyn/types";
import "./styles.css";

function Skeleton({ className: baseClassName, ...rest }: SkeletonProps) {
  const className = "arkyn_skeleton " + baseClassName;
  return <div className={className.trim()} {...rest} />;
}

export { Skeleton };
