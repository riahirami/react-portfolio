import styled from "styled-components";

export const Container = styled.section`
  .tech-item {
    border: 2px solid var(--secondary);
    border-radius: 0.5rem;
    color: var(--secondary);
    flex-wrap: wrap;
    padding: 2px;
  }

  footer {
    margin-top: auto;
    .tech-list {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      opacity: 0.9;
    }
  }
`;
