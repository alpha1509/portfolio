import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Resin Company Database">
    <Container>
      <Title>
        Resin Company Database <Badge>2020</Badge>
      </Title>
      <P>
        Database design for resin distribution company, including developing web
        application for managing data within the database conveniently
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SQL, MSSQL, PHP</span>
        </ListItem>
        <ListItem>
          <Meta>Course</Meta>
          <span>EN813304: Database Systems</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/database-03.png"
        alt="resin company database"
      />
      <WorkImage
        src="/images/works/database-02.png"
        alt="resin company database"
      />
      <WorkImage
        src="/images/works/database-01.png"
        alt="resin company database"
      />
      <WorkImage
        src="/images/works/database-04.png"
        alt="resin company database"
      />
      <WorkImage
        src="/images/works/database-05.png"
        alt="resin company database"
      />
      <WorkImage
        src="/images/works/database-06.png"
        alt="resin company database"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
