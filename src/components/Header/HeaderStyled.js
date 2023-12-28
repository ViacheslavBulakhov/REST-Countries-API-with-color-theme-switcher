import styled from "styled-components";

export const HeaderEl = styled.header`
  //   box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: var(--fw-bold);
`;

export const SwitcherWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: var(--fw-normal);
  text-transform: capitalize;
`;
