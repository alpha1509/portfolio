import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Quiz Adventure">
    <Container>
      <Title>
        Quiz Adventure <Badge>2019</Badge>
      </Title>
      <P>
        Quiz Adventure is RPG-quiz game against various monsters in which users
        can purchase items to strengthen during the battle.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Android Studio</span>
        </ListItem>
        <ListItem>
          <Meta>Course</Meta>
          <span>EN811301: Advanced Computer Programming</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/quiz-adv-01.png" alt="quiz adventure" />
        <WorkImage src="/images/works/quiz-adv-02.png" alt="quiz adventure" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/quiz-adv-03.png" alt="quiz adventure" />
        <WorkImage src="/images/works/quiz-adv-04.png" alt="quiz adventure" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/quiz-adv-05.png" alt="quiz adventure" />
        <WorkImage src="/images/works/quiz-adv-06.png" alt="quiz adventure" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/quiz-adv-07.png" alt="quiz adventure" />
        <WorkImage src="/images/works/quiz-adv-08.png" alt="quiz adventure" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
