"use client";

import GitHubButton from "react-github-btn";

export default function GitHubBtn() {
  return (
    <GitHubButton
      href="https://github.com/startupclass/startupclass.github.io"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-size="large"
      data-show-count="true"
      aria-label="Star buttons/github-buttons on GitHub"
    >
      Star
    </GitHubButton>
  );
}
