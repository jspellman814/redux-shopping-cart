import React from "react";

const SVG = ({
                 style = {},
                 fill = "#222",
                 width = "95px",
                 className = "",
                 viewBox = "0 0 95 76"
             }) => (
    <svg
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g id="v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Desktop-Copy-2" transform="translate(-593.000000, -458.000000)" fill="#BDBDBD" fillRule="nonzero">
        <path
            fill={fill}
            d="M687.298,479.566 C686.923,479.038 686.316,478.724 685.667,478.724 L612.682,478.724 L607.288,459.461 C607.047,458.597 606.259,458 605.362,458 L595,458 C593.896,458 593,458.896 593,460 C593,461.104 593.896,462 595,462 L603.846,462 L616.448,507.007 C611.824,507.08 608.083,510.859 608.083,515.5 C608.083,520.187 611.896,524 616.583,524 L619.146,524 C618.815,524.782 618.632,525.641 618.632,526.542 C618.632,530.149 621.567,533.084 625.173,533.084 C628.78,533.084 631.715,530.149 631.715,526.542 C631.715,525.641 631.531,524.782 631.201,524 L652.379,524 C651.965,524.858 651.726,525.816 651.726,526.832 C651.726,530.439 654.661,533.374 658.267,533.374 C661.873,533.374 664.808,530.439 664.808,526.832 C664.808,525.817 664.569,524.859 664.155,524 L667.668,524 C668.772,524 669.668,523.104 669.668,522 C669.668,520.896 668.772,520 667.668,520 L616.582,520 C614.101,520 612.082,517.981 612.082,515.5 C612.082,513.019 614.101,511 616.582,511 L619.078,511 C619.079,511 619.08,511 619.081,511 C619.082,511 619.083,511 619.085,511 L675.823,511 C676.825,511 677.647,510.26 677.793,509.299 L687.555,481.384 C687.769,480.772 687.673,480.095 687.298,479.566 Z M658.266,529.372 C656.865,529.372 655.725,528.232 655.725,526.83 C655.725,525.428 656.865,524.288 658.266,524.288 C659.667,524.288 660.807,525.428 660.807,526.83 C660.807,528.232 659.667,529.372 658.266,529.372 Z M627.714,526.54 C627.714,527.941 626.573,529.082 625.172,529.082 C623.771,529.082 622.631,527.942 622.631,526.54 C622.631,525.138 623.771,523.998 625.172,523.998 C626.573,523.998 627.714,525.139 627.714,526.54 Z M681.295,487.166 L667.532,487.166 L668.163,482.723 L682.849,482.723 L681.295,487.166 Z M677.856,497 L666.135,497 L666.964,491.167 L679.897,491.167 L677.856,497 Z M674.36,507 L664.714,507 L665.566,501 L676.459,501 L674.36,507 Z M650.427,507 L650.427,501 L661.526,501 L660.673,507 L650.427,507 Z M636.181,507 L635.328,501 L646.427,501 L646.427,507 L636.181,507 Z M620.599,507 L618.919,501 L631.288,501 L632.14,507 L620.599,507 Z M650.427,487.166 L650.427,482.723 L664.122,482.723 L663.491,487.166 L650.427,487.166 Z M662.923,491.166 L662.094,496.999 L650.427,496.999 L650.427,491.166 L662.923,491.166 Z M646.427,487.166 L633.362,487.166 L632.731,482.723 L646.426,482.723 L646.426,487.166 L646.427,487.166 Z M646.427,491.166 L646.427,496.999 L634.76,496.999 L633.931,491.166 L646.427,491.166 Z M630.719,497 L617.799,497 L616.165,491.167 L629.89,491.167 L630.719,497 Z M628.69,482.724 L629.321,487.167 L615.046,487.167 L613.802,482.724 L628.69,482.724 Z"
        />
            </g>
        </g>
    </svg>
);

export default SVG;