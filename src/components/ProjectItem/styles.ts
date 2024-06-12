import styled from "styled-components";

export const Container = styled.section`
  .tech-item {
    border: 2px solid var(--secondary);
    border-radius: 0.5rem;
    color: var(--secondary);
    flex-wrap: wrap;
    padding: 2px;
  }

  .project {
    .truncate-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      max-height: 5.5em;
      min-height: 5.5em;
    }

    padding: 2rem 1.8rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #fff;
    max-width: 400px;
    &:hover {
      transform: translateY(-5px);
      background-color: var(--primary);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--blue);
      .project-links {
        display: flex;
        justify-content: flex-end;
        flex: 1;
      }
      a > img {
        width: 5rem;
      }
    }

    h3 {
      margin-bottom: 2rem;
      color: var(--secondary);
    }

    p {
      letter-spacing: 0.12rem;
      margin-bottom: 2rem;

      a {
        color: #ffff;
        border-bottom: 1px solid var(--secondary);
        transition: color 0.25s;
        &:hover {
          color: var(--secondary);
        }
      }
    }
  }
`;
