import { Story } from '@storybook/react'
import words from 'data/words.json'

import { FlipCardsVocab as FlipCardsVocabComponent } from '.'

export default {
  title: 'Components/FlipCards/FlipCardsVocab',
  component: FlipCardsVocabComponent,
  docs: {
    description: {
      component: 'For learning English vocabulary',
    },
  },
}

const FlipCardsVocabTemplate: Story = () => (
  <FlipCardsVocabComponent content={words.words} />
)

export const FlipCardsVocab = FlipCardsVocabTemplate.bind({})
