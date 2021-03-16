import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  //1rem e o tamanho do fontsize
  padding: 2rem 1rem 12rem;

  > button {
    height: 3rem;

    font-size: 1rem;

    padding: 0 2rem;

    color: #fff;
    background: var(--blue-light);

    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
