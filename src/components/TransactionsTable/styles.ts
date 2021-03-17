import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
  transform: translateX(-300px);
  opacity:0;
}
25% {
  opacity:0.2;
}

50% {
  opacity:0.5;
}
75% {
  opacity:0.8;
}

100% {
  transform: translateX(0px);
  opacity:1;
}
`;

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    tr {
      animation: ${animate} 0.5s ease-in;
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;

      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;

      background: var(--shape);
      color: var(--text-body);

      border: 0;
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
