import {
  useEffect,
  useState,
  ReactNode,
  CSSProperties,
  useCallback,
} from "react";
import { FC } from "react";

// Modified from react-text-resize script

const mapRange = (
  n: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
  gridLayout: boolean,
  outerWidth?: number
): number => {
  let value =
    ((n - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

  let sizeDif = 0;

  if (outerWidth) {
    if (gridLayout) {
      if (outerWidth < 182) {
        sizeDif = 35 - outerWidth / 20;
      }
    } else {
      if (outerWidth < 286) {
        sizeDif = 40 - outerWidth / 20;
      }
    }
  }

  value = value - sizeDif;

  if (value < out_min) return out_min;
  if (value > out_max) return out_max;
  return value;
};

interface TextFitProps {
  capAt: number;
  min: number;
  max: number;
  className?: string;
  children: ReactNode;
  style: CSSProperties;
  outerContainerWidth?: number;
  gridLayout: boolean;
}

const TextFit: FC<TextFitProps> = ({
  capAt,
  min,
  max,
  className,
  children,
  style,
  outerContainerWidth,
  gridLayout,
}) => {
  const [fontSize, changeFontSize] = useState(16);
  const [totalChars, changeTotalChars] = useState(0);
  const [areaEl, changeAreaEl] = useState<HTMLDivElement | null>(null);

  let limits = {
    cap: parseInt(capAt.toString(), 10),
    min: parseInt(min.toString(), 10),
    max: parseInt(max.toString(), 10),
  };

  const getSize = useCallback(
    (gridLayout: boolean, outerContainerWidth?: number) => {
      if (areaEl) {
        const chars = areaEl.innerHTML.split("").length;

        const size = mapRange(
          chars,
          limits.cap,
          0,
          limits.min,
          limits.max,
          gridLayout,
          outerContainerWidth
        );
        changeFontSize(Math.abs(size));
        changeTotalChars(chars);
      }
    },
    [areaEl, limits.cap, limits.max, limits.min]
  );

  useEffect(() => {
    getSize(gridLayout, outerContainerWidth);
  }, [getSize, outerContainerWidth, gridLayout]);

  useEffect(() => {
    if (areaEl) {
      if (
        areaEl.innerHTML.split("").length !== totalChars ||
        outerContainerWidth
      ) {
        getSize(gridLayout, outerContainerWidth);
      }
    }
  }, [
    areaEl,
    totalChars,
    outerContainerWidth,
    gridLayout,
    getSize,
    outerContainerWidth,
  ]);

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
