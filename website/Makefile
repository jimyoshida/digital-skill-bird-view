# Docusaurus site build
.PHONY: all
all: pdf markmap graphmap
	yarn build

# Cleanup
.PHONY: clean
clean:
	rm -fr build/ .docusaurus/
	rm -fr static/usr/ tmp/

########################
# Custom Files Creation

pdf/tmp/%.adoc: %.md
	mkdir -p $(@D)
	perl scripts/preprocess.pl < $< | pandoc --from=markdown-smart --to=asciidoc --wrap=none > $@

# PDF Dest Files 
ALLPDF := static/usr/docs/all.pdf
PDFDATE := $(shell date +%F)

.PHONY: pdf
pdf: $(ALLPDF)

# Source Files
ALLPAGES := $(wildcard docs/*.md docs/skills/*.md docs/timelines/*.md)

# Asciidoc Sections Dest Files 
ALLADOCS := $(addprefix pdf/tmp/,$(ALLPAGES:.md=.adoc))

$(ALLPDF): pdf/all.adoc $(ALLADOCS)
	asciidoctor-pdf -v -o $@ \
	-a pdfdate=$(PDFDATE) \
	-a pdf-theme=pdf/eng-theme.yml \
	-a pdf-fontsdir=fonts $<

# $(ALLPDFJP): pdf/alljp.adoc $(ALLADOCSJP)
# 	asciidoctor-pdf -v -o $@ \
# 	-a pdfdate=$(PDFDATE) \
# 	-a pdf-theme=pdf/cjk-theme.yml \
# 	-a pdf-fontsdir=fonts \
# 	-a scripts=cjk $<

# Markmap Dest File
MAPHTML := static/usr/docs/map.html
SKILLFILES := $(wildcard docs/skills/section*.md)

.PHONY: markmap
markmap: $(MAPHTML)

$(MAPHTML): $(SKILLFILES)
	mkdir -p $(@D) tmp
	cat $(SKILLFILES) | perl scripts/digest.pl > tmp/digest.md
	npx markmap --no-open -o $@ tmp/digest.md

# Graphmap SVG Dest File
GRAPHPDF := static/usr/docs/graphmap.pdf

.PHONY: graphmap
graphmap: $(GRAPHPDF)

$(GRAPHPDF): $(SKILLFILES)
	mkdir -p $(@D) tmp
	cat $(SKILLFILES) | perl scripts/graphmap.pl > tmp/graphmap.dot
	sfdp -Tpdf -o $@ tmp/graphmap.dot
