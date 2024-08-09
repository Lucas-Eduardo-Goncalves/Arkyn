import { SkeletonProps } from "@arkyn/types";
import "./styles.css";

function Skeleton(props: SkeletonProps) {
  const { className: baseClassName, ...rest } = props;
  const className = `arkyn_skeleton ${baseClassName}`;

  return <aside className={className.trim()} {...rest} />;
}

export { Skeleton };
