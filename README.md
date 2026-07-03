# DX Skill Landscape & Timeline

Please visit the website build with Docusaurus. There is the link in the project description.

If you prefer to use GitHub/GitLab, go to [Introduction](website/docs/intro.md).

## Local Build

Install the following dependencies on Ubuntu (tested with 26.04):

```bash
sudo apt install pandoc asciidoctor-pdf
sudo apt install graphviz libgvplugin-neato-layout8  # libgvplugin-neato-layout8 for sfdp support
sudo apt install libyaml-tiny-perl
```

Then build from the `website/` directory:

```bash
yarn install        # once, to install Node dependencies
make all            # pdf + markmap + graphmap + yarn build
```

The CI Docker image (`jimyoshida/node-make-extra`) bundles all of the above. To rebuild and push it after updating `docker/Dockerfile`, run from the `docker/` directory:

```bash
cd docker
make build
make push
```

When section titles are renamed, run `make` in the `data/` directory to propagate changes across all skill and doc files:

```bash
cd data
make    # reads sections.yml, rewrites titles in all files, regenerates digest.md
```

## License

This material is licensed under the Creative Commons Attribution-ShareAlike 4.0 International
except for the source code portions, which are licensed under the MIT License.

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
