import clsx from 'clsx';
import Heading from '@theme/Heading';
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
      title: 'Skills Collection',
      Svg: require('@site/static/img/skills.svg').default,
      description: (
        <>
          A <a href={useBaseUrl('/docs/category/skills')}>curated collection of concepts, techniques, tools, and platforms across 12 categories</a>,
          ranging from software development and cloud to AI, security, and data engineering.
        </>
      ),
    },
    {
      title: 'Timeline',
      Svg: require('@site/static/img/timeline.svg').default,
      description: (
        <>
          <a href={useBaseUrl('/docs/category/timelines')}>Major historical events</a> related to the curated skill items, arranged chronologically
          from the 1930s to the present, with descriptions sourced from Wikipedia.
        </>
      ),
    },
    {
      title: 'Mind Map & Graph Map',
      Svg: require('@site/static/img/mindmap.svg').default,
      description: (
        <>
          Interactive <a href={useBaseUrl('/usr/docs/map.html')}>mind maps</a> (markmap)
          and force-directed <a href={useBaseUrl('/usr/docs/graphmap.pdf')}>graph maps</a> (Graphviz sfdp) to visualize skill relationships,
          both generated dynamically from the Markdown sources.
        </>
      ),
    },
    {
      title: 'PDF Edition',
      Svg: require('@site/static/img/pdf-document.svg').default,
      description: (
        <>
          A comprehensive, <a href={useBaseUrl('/usr/docs/index.pdf')}>single PDF document</a> containing all site contents
          (also available in a <a href={useBaseUrl('/usr/docs/index-jp.pdf')}>Japanese edition</a>),
          compiled from the Markdown sources using Pandoc and Asciidoctor PDF.
        </>
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
