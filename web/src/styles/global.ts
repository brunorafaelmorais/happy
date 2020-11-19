import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }

  a { text-decoration: none; }

  button { cursor: pointer; }

  figure, p, h1, h2, h3, h4, h5, h6 { margin: 0; }

  .map-popup {
    > .leaflet-popup-content-wrapper {
      box-shadow: none;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.8);
    }

    .leaflet-popup-tip-container {
      display: none;
    }

    .leaflet-popup-content {
      margin: 10px;
      display: flex;
      align-items: center;

      > strong {
        font-size: 20px;
        line-height: 27px;
        color: #0089a5;
        flex: 1 1;
        min-width: 0;
        text-align: center;
        font-family: 'Nunito', sans-serif;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      > a {
        width: 40px;
        height: 40px;
        background: #15c3d6;
        box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        flex-shrink: 0;
        transition: all 0.2s;
        margin-left: 5px;

        &:hover {
          background: #17d6eb;
        }
      }
    }
  }
`;
