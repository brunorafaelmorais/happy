import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background-color: #eaf2f5;
  min-height: 100vh;

  > aside {
    width: 96px;
    height: 100%;
    background-color: #15c3d6;
    position: fixed;
    top: 0;
    left: 0;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    > header > a {
      max-width: 48px;
      display: inline-flex;
    }

    > header > a > img {
      width: 100%;
    }

    > footer > button {
      width: 48px;
      height: 48px;
      background-color: #12afcb;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: all 0.2s;
      outline: none;
      border: 0;

      &:hover {
        background-color: #17d6eb;
      }
    }
  }

  > section {
    width: 100%;
    padding: 32px 32px 32px 128px;
  }

  > section > span {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: block;
    text-align: center;
    color: #8fa7b2;
    margin-bottom: 32px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 708px;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  display: block;
  margin: 0 auto;
  overflow: hidden;
`;
