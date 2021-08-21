import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { Tabs } from '../components/Tabs';

export default function Home({ query }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Tabs initialTab={query}>
          <div label="Tab 1">
            <h2>Tab 1</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius.
              Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
              Atirei o pau no gatis, per gatis num morreus.
              Copo furadis é disculpa de bebadis, arcu quam euismod magna.
              Si num tem leite então bota uma pinga aí cumpadi!
              Diuretics paradis num copo é motivis de denguis.
              Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
              Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
              Casamentiss faiz malandris se pirulitá.
            </p>
          </div>
          <div label="Tab 2">
            <h2>Tab 2</h2>
            <p>
              Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
              Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
              Casamentiss faiz malandris se pirulitá.
            </p>
          </div>
          <div label="Tab 3">
            <h2>Tab 3</h2>
            <p>
              Mussum Ipsum.Mussum Ipsum.Mussum Ipsum.Mussum Ipsum.Mussum Ipsum.
              cacilds vidis litro abertis. Posuere libero varius.
              Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
              Atirei o pau no gatis, per gatis num morreus.
              Copo furadis é disculpa de bebadis, arcu quam euismod magna.
              Si num tem leite então bota uma pinga aí cumpadi!
            </p>
          </div>
        </Tabs>
      </main>


    </div>
  )
}

Home.getInitialProps = ({ query }) => {
  return { query };
}
