import Translate from '@docusaurus/Translate';

export default function HomepageMotivation() {
  return (
    <section className="container margin-vert--lg">
      <h2>
        <Translate id="homepage.motivation.title">Motivation</Translate>
      </h2>
      <p>
        <Translate id="homepage.motivation.intro">
          Two kinds of resources already exist for engineers deciding what to learn next, and
          neither is sufficient on its own. Curated lists enumerate tools but map to no external
          standard, so it is hard to tell what role a given tool plays in an organization. Skill
          standards define which capabilities matter but stop at abstract skill names, so they
          never say which technology to actually pick up.
        </Translate>
      </p>
      <p>
        <Translate id="homepage.motivation.bridge">
          This site was created to close that gap by connecting the two directions:
        </Translate>
      </p>
      <ul>
        <li>
          <strong>
            <Translate id="homepage.motivation.point1.title">
              From the standard to concrete technologies
            </Translate>
          </strong>
          {' — '}
          <Translate id="homepage.motivation.point1.body">
            starting from a DSS-P skill item, the corresponding section leads to the tools,
            platforms, and frameworks that realize it.
          </Translate>
        </li>
        <li>
          <strong>
            <Translate id="homepage.motivation.point2.title">
              From a technology to its place in the standard
            </Translate>
          </strong>
          {' — '}
          <Translate id="homepage.motivation.point2.body">
            starting from a tool, the &quot;Relevant DSS-P Skills&quot; admonition on the
            enclosing subsection shows which organizational capability it serves.
          </Translate>
        </li>
      </ul>
      <p>
        <Translate id="homepage.motivation.timelines">
          The timelines add a third dimension. Knowing when and why a technology emerged explains
          why today&apos;s practices took their current shape — context that matters more, not
          less, as AI agents take over the mechanical parts of development and the remaining
          human work shifts toward judgement and direction.
        </Translate>
      </p>
    </section>
  );
}
