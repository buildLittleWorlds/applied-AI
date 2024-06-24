import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Applied AI for Everybody',
      customCss: [
       './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Chapters',
          items: [
            { label: 'Introduction', link: '/chapters/introduction/' },
            { label: 'Defining Your Testing Goals', link: '/chapters/defining-testing-goals/' },
            { label: 'Designing Your Test Cases', link: '/chapters/designing-test-cases/' },
            { label: 'Crafting Effective Prompts', link: '/chapters/crafting-prompts/' },
            { label: 'Building Your Test Dataset', link: '/chapters/building-dataset/' },
            { label: 'Establishing Evaluation Metrics', link: '/chapters/evaluation-metrics/' },
            { label: 'Conducting Tests', link: '/chapters/conducting-tests/' },
            { label: 'Analyzing and Interpreting Results', link: '/chapters/analyzing-results/' },
            { label: 'Iterative Refinement', link: '/chapters/iterative-refinement/' },
            { label: 'Developing Your Personal Testing Framework', link: '/chapters/personal-framework/' },
          ],
        },
        {
          label: 'Appendix',
          items: [
            { label: 'AI Testing Resources', link: '/appendix/testing-resources/' },
          ],
        },
      ],
    }),
  ],
});