import React from '@portal/react';
import styled from '@portal/styled-components';

const Icon = ({ className }: React.HTMLProps<HTMLElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 125"
    enableBackground="new 0 0 100 100"
    className={className}
  >
    <path d="M-408.167-318.5" />
    <line
      fill="none"
      stroke="#ffffff"
      strokeWidth="0.25"
      strokeMiterlimit="10"
      x1="57.5"
      y1="11.75"
      x2="57.5"
      y2="17.5"
    />
    <path d="M98.57,4.784c-0.024-0.113-0.047-0.223-0.074-0.334c-0.035-0.117-0.075-0.231-0.117-0.346 c-0.023-0.062-0.037-0.125-0.064-0.187c-0.016-0.032-0.03-0.06-0.049-0.092c-0.048-0.119-0.107-0.227-0.17-0.336 c-0.05-0.089-0.095-0.179-0.152-0.265c-0.062-0.1-0.139-0.195-0.209-0.292C97.67,2.85,97.611,2.77,97.545,2.69 c-0.081-0.092-0.172-0.178-0.258-0.262c-0.07-0.068-0.139-0.139-0.212-0.202c-0.093-0.083-0.196-0.158-0.3-0.232 c-0.08-0.058-0.152-0.114-0.236-0.163c-0.104-0.069-0.219-0.128-0.329-0.186c-0.091-0.046-0.175-0.093-0.262-0.132 c-0.044-0.019-0.081-0.043-0.121-0.061c-0.074-0.03-0.154-0.046-0.234-0.072c-0.095-0.033-0.19-0.065-0.288-0.092 c-0.123-0.034-0.246-0.059-0.369-0.083c-0.096-0.019-0.188-0.036-0.289-0.046c-0.131-0.018-0.263-0.022-0.393-0.028 c-0.064-0.002-0.12-0.012-0.186-0.012L63.77,1.305c-2.535,0.017-4.566,2.078-4.554,4.605c0.019,2.525,2.084,4.563,4.604,4.546 l19.258-0.121l-29.79,30.162c-1.112,1.126-1.526,2.678-1.233,4.118c0.174,0.863,0.596,1.691,1.272,2.357 c0.897,0.888,2.073,1.325,3.245,1.32c1.17-0.007,2.337-0.459,3.227-1.361l0.002-0.001l29.787-30.158l0.121,19.255 c0.014,2.523,2.07,4.564,4.602,4.545c1.268-0.005,2.408-0.526,3.233-1.357c0.817-0.834,1.325-1.98,1.317-3.242L98.675,5.665 c0-0.063-0.016-0.124-0.016-0.189c-0.009-0.123-0.015-0.25-0.032-0.375C98.616,4.992,98.592,4.89,98.57,4.784z" />
    <path d="M6.542,83.279c0,5.717,4.635,10.354,10.354,10.354l55.616,0.065c5.719,0,10.354-4.636,10.354-10.354l-0.091-40.782h6.135 v40.849c0,9.014-7.307,16.319-16.319,16.319l-56.36-0.066c-8.597,0-15.564-6.969-15.564-15.562L0.585,27.821 c0-9.014,7.306-16.32,16.32-16.32l41.138-0.084v6.142L16.98,17.535c-5.718,0-10.354,4.635-10.354,10.354L6.542,83.279z" />
  </svg>
);

export const ExternalIcon = styled(Icon)`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  fill: var(--sidebar-chevron-color);
`;
