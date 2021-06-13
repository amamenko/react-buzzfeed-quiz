import {
  useEffect,
  useState,
  ReactNode,
  CSSProperties,
  useCallback,
} from "react";
import { FC } from "react";

const mapRange = (
  n: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
  outerWidth: number
): number => {
  const value =
    ((n - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

  const sizeDif = outerWidth <= 294 ? 7 - outerWidth / 50 : 0;

  if (value < out_min) return out_min - sizeDif;
  if (value > out_max) return out_max - sizeDif;
  return value - sizeDif;
};

interface TextFitProps {
  capAt: number;
  min: number;
  max: number;
  className?: string;
  children: ReactNode;
  style: CSSProperties;
  outerContainerEl: HTMLDivElement | null;
}

const TextFit: FC<TextFitProps> = ({
  capAt,
  min,
  max,
  className,
  children,
  style,
  outerContainerEl,
}) => {
  const [fontSize, changeFontSize] = useState(16);
  const [totalChars, changeTotalChars] = useState(0);
  const [areaEl, changeAreaEl] = useState<HTMLDivElement | null>(null);
  const [outerContainerWidth, changeOuterContainerWidth] = useState(0);

  let limits = {
    cap: parseInt(capAt.toString(), 10),
    min: parseInt(min.toString(), 10),
    max: parseInt(max.toString(), 10),
  };

  const getSize = useCallback(() => {
    if (areaEl && outerContainerEl) {
      const chars = areaEl.innerHTML.split("").length;
      const outerWidth = outerContainerEl.clientWidth;

      const size = mapRange(
        chars,
        limits.cap,
        0,
        limits.min,
        limits.max,
        outerWidth
      );
      changeFontSize(Math.abs(size));
      changeTotalChars(chars);
      changeOuterContainerWidth(outerWidth);
    }
  }, [areaEl, limits.cap, limits.max, limits.min, outerContainerEl]);

  useEffect(() => {
    getSize();
  }, [getSize]);

  useEffect(() => {
    if (areaEl) {
      if (outerContainerEl) {
        if (
          areaEl.innerHTML.split("").length !== totalChars ||
          outerContainerEl.clientWidth !== outerContainerWidth
        ) {
          getSize();
        }
      }
    }
  }, [areaEl, totalChars, outerContainerWidth, outerContainerEl, getSize]);

  return (
    <div className={className} style={style}>
      <div
        style={{ fontSize }}
        className={className}
        ref={(area) => changeAreaEl(area)}
      >
        {children}
      </div>
    </div>
  );
};

export default TextFit;
