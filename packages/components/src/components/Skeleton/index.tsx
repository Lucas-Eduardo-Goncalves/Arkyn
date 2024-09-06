import { SkeletonProps } from "@arkyn/types";
import "./styles.css";

function Skeleton(props: SkeletonProps) {
  const { className: baseClassName, ...rest } = props;
  const className = `arkynSkeleton ${baseClassName}`;

  return <aside className={className.trim()} {...rest} />;
}

export { Skeleton };
