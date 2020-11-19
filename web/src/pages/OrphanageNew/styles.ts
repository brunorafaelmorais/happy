import styled from 'styled-components';

export const Container = styled.div`
  padding: 64px 80px;
  color: #4d6f80;
`;

export const Group = styled.div`
  & + & {
    margin-top: 48px;
  }
`;

export const ContainerMap = styled.div`
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
  margin: 32px 0;

  > div {
    height: 330px;
    border-radius: 20px;
    overflow: hidden;
  }

  > span {
    display: block;
    padding: 16px;
    text-align: center;
    color: #0089a5;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    transition: all 0.2s;
  }
`;

export const PhotosContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;

  > div,
  > label {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    color: #96d2f0;
    border: 1px solid currentColor;
    transition: all 0.2s;

    > input {
      display: none;
    }

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

    > button {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 0;
      right: 0;
      border: 0;
      outline: none;
      background: rgba(255, 255, 255, 0.8);
      color: #ec655d;
      border-bottom-left-radius: 20px;
      transition: all 0.2s;

      &:hover {
        background-color: #fff;
      }
    }

    &.add {
      cursor: pointer;
      border-style: dashed;

      > svg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }

      &:hover {
        color: #0089a5;
      }
    }
  }
`;
