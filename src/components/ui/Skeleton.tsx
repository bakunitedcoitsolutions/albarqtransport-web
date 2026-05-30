import React from "react";

interface SkeletonProps {
  height?: string;
  className?: string;
  containerClassName?: string;
}

export default function Skeleton({
  height = "100%",
  className = "",
  containerClassName = "",
}: SkeletonProps): React.ReactElement {
  return (
    <div
      className={`animate-pulse bg-slate-200 rounded-md ${containerClassName}`}
      style={{ height }}
    >
      <div className={`w-full h-full bg-slate-300/50 ${className}`} />
    </div>
  );
}
