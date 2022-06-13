import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const generateTooltipId = (chartId) => `highcharts-custom-tooltip-${chartId}`;

export const Tooltip = ({ chart, children }) => {
  const isInit = useRef(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    if (chart) {
      const formatter = function () {
        // Ensures that tooltip DOM container is rendered before React portal is created.
        if (!isInit.current) {
          isInit.current = true;

          // TODO: Is there a better way to create tooltip DOM container?
          chart.tooltip.refresh.apply(chart.tooltip, [this.point]);
          chart.tooltip.hide(0);
        }

        setContext(this);

        return `<div id="${generateTooltipId(chart.index)}"></div>`;
      };

      chart.update({
        tooltip: {
          formatter,
          positioner: function (labelWidth, labelHeight, point) {
            var tooltipX = point.plotX + 14;
            var tooltipY = point.plotY ;
            return {
              x: tooltipX,
              y: tooltipY
            };
          },
          useHTML: true
        }
      });
    }
  }, [chart]);

  const node = chart && document.getElementById(generateTooltipId(chart.index));

  return node && context
    ? createPortal(children(context), node)
    : null;
};
