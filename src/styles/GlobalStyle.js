import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	@font-face {
    font-family: 'Tenada';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Tenada.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
	}

  :root {
    --color-primary: #D3F1DF;
    --color-secondary: #85A98F;
    --color-third: #5A6C57;
    --color-fourth: #525B44;
    --color-white: #ffffff;
    --color-black: #000000;
    --color-gray1: #333333;
    --color-gray2: #666666;
    --color-gray3: #999999;
    --color-gray4: #ababab;
    --color-gray5: #cccccc;
    --color-gray6: #dddddd;
    --color-gray7: #eeeeee;
    --color-gray8: #f5f5f5;
    --drop-shadow: 3px 4px 13px rgba(0, 0, 0, 0.15);
    --inner-width: 1280px; 
  }

	* {
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

	html {
    font-family: 'Tenada', sans-serif;
    font-size: 16px;
  }

  main { 
    padding: 120px 80px;
    overflow: hidden;
  }

	body {
		background-color: var(--color-primary);
	}

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: var(--primary-font);
    font-size: 1rem;
    line-height: 1;
    vertical-align: middle;
    background-color: transparent;
    border: 0;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  select:focus,
  select:active,
  textarea:focus,
  textarea:active {
    outline: none;
    box-shadow: none;
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  ul,
  ol,
  li {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }

`;
