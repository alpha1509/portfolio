import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHTL from '../public/images/works/htl-02.png'
import thumbAvani from '../public/images/works/avani-02.png'
import thumbDigitalFarming from '../public/images/works/digital-farming-00.png'
import thumbSmartCactus from '../public/images/works/smart-cactus-00.png'
import thumbEnOkr from '../public/images/works/en-okr-00.png'
import thumbCafe from '../public/images/works/python.jpg'
import thumbTutorian from '../public/images/works/tutorian-00.png'
import thumbDatabase from '../public/images/works/database-00.png'
import thumbQuizAdventure from '../public/images/works/quiz-adv-00.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="htl" title="KKU Healthy Life" thumbnail={thumbHTL}>
            Web app for recording exercise results to redeem rewards
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="avani"
            title="AVANI Hotel Dashboard"
            thumbnail={thumbAvani}
          >
            Web app to display real time data from sensors installed in the
            hotel.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="digital-farming"
            title="IoT Digital Farm"
            thumbnail={thumbDigitalFarming}
          >
            Web app to display real time data from sensors installed in the
            farm.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Course Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="smart-cactus"
            thumbnail={thumbSmartCactus}
            title="Smart Cactus"
          >
            Smart greenhouse system that can monitor environmental data and
            photos on Android app
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="en-okr" thumbnail={thumbEnOkr} title="EN KKU OKR">
            OKR management web application
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="company-database"
            thumbnail={thumbDatabase}
            title="Resin Company Database"
          >
            Relational database of resins distribution company
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="tutorian"
            thumbnail={thumbTutorian}
            title="Tutorian"
          >
            Courses management web application
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="quiz-adventure"
            thumbnail={thumbQuizAdventure}
            title="Quiz Adventure"
          >
            Adventure through monsters with a quiz game
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="cafe-manager"
            thumbnail={thumbCafe}
            title="Cafe Manager"
          >
            Order some coffee or manage products with Cafe Manager!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
