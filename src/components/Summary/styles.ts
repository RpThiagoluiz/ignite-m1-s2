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
  display: grid;
  grid-template-columns: repeat(3, 1fr); //1fr 1fr 1fr
  gap: 2rem;

  margin-top: -8rem;
  animation: ${animate} 0.8s ease-in;

  div {
    padding: 1.5rem 2rem;

    border-radius: 0.25rem;
    background: var(--shape);
    color: var(--text-title);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background-green {
      background: var(--green);
      color: #fff;
    }
    &.highlight-background-red {
      background: var(--red);
      color: #fff;
    }
  }
`;
