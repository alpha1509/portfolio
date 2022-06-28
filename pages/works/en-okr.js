import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="EN KKU OKR">
    <Container>
      <Title>
        EN KKU OKR <Badge>2021</Badge>
      </Title>
      <P>
        A web application for OKR management within the Faculty of Engineering,
        Khon Kaen University
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Laravel, SQLite, Google Login</span>
        </ListItem>
        <ListItem>
          <Meta>Course</Meta>
          <span>EN813306: Software Engineer</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} mt={6}>
        Features
      </Heading>
      <UnorderedList mt={2} mb={6}>
        <ListItem>Collect data from the sensor every 5 minutes</ListItem>
        <ListItem>Automatically take 6 pictures of the cactus a day</ListItem>
        <ListItem>Store data on firebase cloud</ListItem>
        <ListItem>Visualize data on android application</ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/smart-cactus-01.png" alt="smart cactus" />
      <WorkImage src="/images/works/smart-cactus-02.png" alt="smart cactus" />
      <WorkImage src="/images/works/smart-cactus-03.png" alt="smart cactus" />
      <WorkImage src="/images/works/smart-cactus-04.png" alt="smart cactus" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/smart-cactus-05.png" alt="smart cactus" />
        <WorkImage src="/images/works/smart-cactus-06.png" alt="smart cactus" />
      </SimpleGrid>
      <WorkImage src="/images/works/smart-cactus-07.png" alt="smart cactus" />
      <SimpleGrid columns={3} gap={2}>
        <WorkImage src="/images/works/smart-cactus-08.png" alt="smart cactus" />
        <WorkImage src="/images/works/smart-cactus-09.png" alt="smart cactus" />
        <WorkImage src="/images/works/smart-cactus-10.png" alt="smart cactus" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/smart-cactus-11.png" alt="smart cactus" />
        <WorkImage src="/images/works/smart-cactus-12.png" alt="smart cactus" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
