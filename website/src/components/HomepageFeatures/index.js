import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureSvgWrapper}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const FeatureList = [
    {
      title: <Translate id="homepage.features.skills.title">Skills Collection</Translate>,
      Svg: require('@site/static/img/skills.svg').default,
      description: (
        <Translate
          id="homepage.features.skills.description"
          values={{
            link: (
              <a href={useBaseUrl('/docs/category/skills')}>
                <Translate id="homepage.features.skills.description.linkText">
                  curated collection of concepts, techniques, tools, and platforms across 12 categories
                </Translate>
              </a>
            ),
          }}>
          {'A {link}, ranging from software development and cloud to AI, security, and data engineering.'}
        </Translate>
      ),
    },
    {
      title: <Translate id="homepage.features.timeline.title">Timeline</Translate>,
      Svg: require('@site/static/img/timeline.svg').default,
      description: (
        <Translate
          id="homepage.features.timeline.description"
          values={{
            link: (
              <a href={useBaseUrl('/docs/category/timelines')}>
                <Translate id="homepage.features.timeline.description.linkText">
                  Major historical events
                </Translate>
              </a>
            ),
          }}>
          {'{link} related to the curated skill items, arranged chronologically from the 1930s to the present, with descriptions sourced from Wikipedia.'}
        </Translate>
      ),
    },
    {
      title: <Translate id="homepage.features.maps.title">Mind Map & Graph Map</Translate>,
      Svg: require('@site/static/img/mindmap.svg').default,
      description: (
        <Translate
          id="homepage.features.maps.description"
          values={{
            mindmap: (
              <a href={useBaseUrl('/usr/docs/map.html')}>
                <Translate id="homepage.features.maps.description.mindmapText">mind maps</Translate>
              </a>
            ),
            graphmap: (
              <a href={useBaseUrl('/usr/docs/graphmap.pdf')}>
                <Translate id="homepage.features.maps.description.graphmapText">graph maps</Translate>
              </a>
            ),
          }}>
          {'Interactive {mindmap} (markmap) and force-directed {graphmap} (Graphviz sfdp) to visualize skill relationships, both generated dynamically from the Markdown sources.'}
        </Translate>
      ),
    },
    {
      title: <Translate id="homepage.features.pdf.title">PDF Edition</Translate>,
      Svg: require('@site/static/img/pdf-document.svg').default,
      description: (
        <Translate
          id="homepage.features.pdf.description"
          values={{
            pdf: (
              <a href={useBaseUrl('/usr/docs/index.pdf')}>
                <Translate id="homepage.features.pdf.description.pdfText">single PDF document</Translate>
              </a>
            ),
            pdfJa: (
              <a href={useBaseUrl('/usr/docs/index-jp.pdf')}>
                <Translate id="homepage.features.pdf.description.pdfJaText">Japanese edition</Translate>
              </a>
            ),
          }}>
          {'A comprehensive, {pdf} containing all site contents (also available in a {pdfJa}), compiled from the Markdown sources using Pandoc and Asciidoctor PDF.'}
        </Translate>
      ),
    },
  ];
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
