import styled from 'styled-components';

import Illustration from '../../assets/illustration.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  color: #fff;

  display: flex;
  align-items: center;

  > main {
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    padding: 80px 16px;
    margin: 0 auto;
    display: flex;
    background: url(${Illustration}) no-repeat 80% center;
  }

  .left-content {
    width: 400px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .left-content > .content {
  }

  .right-content {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > .location-box {
      flex: 1 1;
    }
  }

  .big-title {
    font-size: 80px;
    line-height: 72px;
    font-weight: 900;
    margin-top: 80px;
  }

  .sub-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    margin-top: 32px;
  }

  .location-box {
    display: flex;
    flex-direction: column;
    text-align: right;

    > .city {
      font-weight: 900;
      font-size: 24px;
      line-height: 34px;
    }

    > .state {
      font-size: 24px;
      line-height: 34px;
    }
  }

  .arrow-button {
    width: 80px;
    height: 80px;
    background: #ffd666;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8d734b;
    transition: all 0.2s;

    &:hover {
      background-color: #96feff;
      color: #15c3d6;
    }
  }
`;
