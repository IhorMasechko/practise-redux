import { Container, Header, SearchForm, Section } from 'components';
import { TodoList } from '../Todo/TodoList';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
