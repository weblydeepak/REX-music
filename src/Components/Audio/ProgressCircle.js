import React from "react";
import '../../Styles/ProgressCircle.css';

const Circle = ({ color, percentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circ = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(percentage)) * circ) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

export default function ProgressCircle({
  percentage,
  isPlaying,
  size,
  color,
  image,
}) {
  const outerImageSize = 2 * (size / 2 - 30);
  const innerImageSize = Math.max(2 * (size / 2 - 100)); // Prevent negative values

  return (
    <div className="ProgressCircle flex">
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            percentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#ffff" />
          </clipPath>
          <clipPath id="innerMyCircle">
            <circle cx="50%" cy="50%" r={Math.max(size / 2 - 100, 0)} fill="#ffff" />
          </clipPath>
        </defs>
        {/* Outer Image */}
        <image
          className={isPlaying ? "circleActive" : ""}
          x={size / 2 - outerImageSize / 2}
          y={size / 2 - outerImageSize / 2}
          width={outerImageSize}
          height={outerImageSize}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        {/* Inner Image */}
        {innerImageSize > 0 && (
          <image
            className={isPlaying ? "circleActive" : ""}
            x={size / 2 - innerImageSize / 2}
            y={size / 2 - innerImageSize / 2}
            width={innerImageSize}
            height={innerImageSize}
            href={image}
            clipPath="url(#innerMyCircle)"
          />
        )}
      </svg>
    </div>
  );
}
