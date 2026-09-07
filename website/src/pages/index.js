import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageMotivation from '@site/src/components/HomepageMotivation';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const heroBg = useBaseUrl('/img/future-dx.jpg');
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{backgroundImage: `url(${heroBg})`}}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.hero.tagline">
            A comprehensive skill reference for the age of AI-driven development
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="homepage.hero.cta">Go to the intro page</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.hero.tagline',
        message: 'A comprehensive skill reference for the age of AI-driven development',
      })}
      description={translate({
        id: 'homepage.metaDescription',
        message:
          'An open, curated landscape and timeline of the concepts, tools, and platforms behind modern software development, DevOps, and AI-driven DX.',
      })}>
      <HomepageHeader />
      <main>
        <HomepageMotivation />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
