---
description: The Release Operation
---

# Release 'draft' onto 'main' with squash and push

Perform the release of the current 'draft' branch onto 'main' with the following steps:

1. In 'data' directory, run 'make' to synchronize the section index and digest file, and commit it.
2. Merge the 'draft' branch onto the 'main' branch with the --squash option.
3. Determine the commit message based on the current month and the next update number.
   Format: '[Month] update [Number]' (e.g., if the latest commit on 'main' was 'April update 1', use 'April update 2').
   You can add details about the changes in the commit message.
4. Present the proposed changes and the commit message to the user and ask for confirmation.
5. If confirmed:
   a. Create the squash commit on the 'main' branch.
   b. Push the 'main' branch to the 'official' remote.
   c. Switch back to the 'draft' branch and merge 'main' into it to keep it synchronized.
