import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
      'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    text-rendering: optimizeLegibility;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    font-size: calc(10px + 2vmin);
  }
  body {
    padding: 0;
    margin: 0;
  }
  .ripple {
    position: relative;
    overflow: hidden;
  }
  .ripple::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, black 20%, transparent 21%);
    background-repeat: no-repeat;
    transform: scale(5, 5);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
  .ripple:active::after {
    transform: scale(0, 0);
    opacity: 0.1;
    transition: 0s;
  }
`

export default GlobalStyle
