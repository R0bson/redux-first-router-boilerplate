import { configure } from '@storybook/react'


/*
  Requires all *.story.js files from src files and stories/index.js file.
  Based on: https://github.com/storybooks/storybook/issues/125#issuecomment-212386581
 */
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  require('../stories')
  requireAll(require.context("../src", true, /.story\.jsx?$/))
}

configure(loadStories, module)
