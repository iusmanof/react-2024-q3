import styled from 'styled-components';
import { Header } from '../Header/Header';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; /* Light gray background color */
`;

const Content = styled.div`
  text-align: center;
  color: #495057; /* Dark text color */
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Heading>404 - Page Not Found</Heading>
          <p>Oops! You navigates to non-existing route.</p>
        </Content>
      </Container>
    </>
  );
};

export default NotFoundPage;
