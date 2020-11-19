import styled from 'styled-components';

export const Container = styled.div``;

export const ImageFull = styled.div`
  height: 336px;
  user-select: none;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbsContainer = styled.div`
  display: grid;
  padding: 16px;
  grid-gap: 16px;
  grid-template-columns: repeat(6, 1fr);
  justify-items: stretch;
  align-items: stretch;

  > div {
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      padding-bottom: 100%;
    }

    > figure {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    > figure > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ContentAll = styled.div`
  padding: 40px 80px 64px 80px;
  color: #4d6f80;
`;

export const ContainerCards = styled.div`
  margin: 24px 0;
`;

export const ContainerMap = styled.div`
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
  margin-top: 32px;

  > div {
    height: 330px;
    border-radius: 20px;
    overflow: hidden;
  }

  > a {
    display: block;
    padding: 16px;
    text-align: center;
    color: #0089a5;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    transition: all 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;
