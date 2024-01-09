import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-size: cover;
  background-position: center;
`;
export const Wrapper = styled.div`
  &img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 70px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 18px;
  }
`;
export const LinkBtn = styled(Link)`
  text-decoration: none;

  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--b-radius);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    font-weight: var(--fw-bold);
  }
`;

export const Title = styled.h2`
  max-width: 280px;
  margin-bottom: 80px;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3; /* 41.6px */
    max-width: 460px;
    & br {
      display: none;
    }
  }
`;
