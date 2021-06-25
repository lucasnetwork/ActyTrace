import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 6rem 6.81rem;

  h2 {
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    margin-bottom: 3.5rem;
    color: #584d3d;
  }

  .faq {
    width: 100%;
    height: 4.5rem;
    border: 1px solid #584d3d;
    box-sizing: border-box;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    .header {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 0 3rem;

      p {
        color: #584d3d;
        font-size: 1.5rem;
      }
    }
  }
`;
