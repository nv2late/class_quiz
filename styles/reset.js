import { css } from '@emotion/react';

const reset = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', Pretendard, Roboto,
      'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  a {
    color: lightgray;
    text-decoration: none;
  }
`;

export default reset;
