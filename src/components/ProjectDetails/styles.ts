import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-size: 2.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .links {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .links a {
    color: var(--primary);
    font-size: 1.8rem;
    margin-left: 1rem;
    text-decoration: none;
    &:hover {
      color: var(--secondary);
    }
  }

  .tech-item {
    border: 2px solid var(--secondary);
    border-radius: 0.5rem;
    color: var(--secondary);
    flex-wrap: wrap;
    padding: 2px;
  }
  .description {
    text-indent: 50px;
    line-height: 1.8;
    font-size: 1.6rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .goBackIcon {
    cursor: "pointer";
    background-color: var(--secondary);
    border-radius: 50%;
    padding: 0.5rem;
    width: 3.5rem;
    height: 3.5rem;
  }
`;
