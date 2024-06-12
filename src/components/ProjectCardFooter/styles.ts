import styled from "styled-components";

export const Container = styled.section`
  .tech-item {
    border: 2px solid var(--secondary);
    border-radius: 0.5rem;
    color: var(--secondary);
    flex-wrap: wrap;
    padding: 4px;
  }

  footer {
    margin-top: auto;
    .tech-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      font-size: 1.4rem;
      opacity: 0.9;
      min-height: 8rem;
    }
  }
`;
