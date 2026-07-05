SHELL = /usr/bin/bash

release: read write intro_sync

read:
	cat ../website/docs/skills/*.md | perl read.pl > sections.yml

write:
	for file in ../website/docs/skills/*.md; do \
		perl write.pl $$file sections.yml; \
	done
	perl write.pl ../website/docs/intro.md sections.yml

intro_sync:
	perl sync_intro.pl ../website/docs/intro.md ../README.md

test_write:
	ruby write_test.rb --verbose

