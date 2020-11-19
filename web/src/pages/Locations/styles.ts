import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  color: #fff;

  > .left {
    width: 400px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
    padding: 80px;

    > header > a {
      display: inline-flex;
    }

    > main {
      margin: 80px 0;

      > h2 {
        font-weight: 800;
        font-size: 40px;
        line-height: 42px;
      }

      > p {
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        margin-top: 24px;
      }
    }

    > footer {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      line-height: 28px;
    }
  }

  > .right {
    flex: 1 1;
    display: flex;

    > div {
      z-index: 9;
    }

    > a {
      width: 64px;
      height: 64px;
      background: #15c3d6;
      border-radius: 20px;
      position: absolute;
      right: 40px;
      bottom: 40px;
      z-index: 10;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &:hover {
        background-color: #17d6eb;
      }
    }
  }
`;
