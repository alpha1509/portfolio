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
  <Layout title="Smart Cactus">
    <Container>
      <Title>
        Smart Cactus <Badge>jul 2021 - Mar 2022</Badge>
      </Title>
      <P>
        A smart greenhouse system that uses a microcontroller to control the
        measured data from sensors installed inside the cactus greenhouse. The
        data is transmitted and stored in the cloud database which contains
        information of air humidity, air temperature, soil moisture, soil
        temperature, light intensity, UV light intensity, and cactus images.
        After that, we developed an android application to fetch data from the
        database and display it as a real time dashboard.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>IoT, Andriod</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ESP32, Arduino IDE, Android Studio, Kotlin, XML, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Course</Meta>
          <span>EN814999: Computer Engineering Project</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} mt={6}>
        Features
      </Heading>
      <UnorderedList mt={2} mb={6}>
        <ListItem>
          Automatically collect data from 6 types of sensors every 5 minutes
        </ListItem>
        <ListItem>Automatically take 6 pictures of the cactus a day</ListItem>
        <ListItem>Store data on firebase cloud</ListItem>
        <ListItem>Visualize data on android application</ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/smart-cactus-01.png" alt="smart cactus" />
      <WorkImage src="/images/works/smart-cactus-02.png" alt="smart cactus" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/smart-cactus-03.png" alt="smart cactus" />
        <WorkImage src="/images/works/smart-cactus-14.png" alt="smart cactus" />
      </SimpleGrid>
      <WorkImage src="/images/works/smart-cactus-13.png" alt="smart cactus" />
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
