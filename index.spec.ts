import {createMapMdToEmoji, createRegExpText, emojiMd, textEmoji} from './markdown-to-text'
import emoji from './emoji'

describe('emoji', () => {
  it('emoji', () => {
    expect(emoji).not.toHaveProperty(':smile:')
    expect(emoji).toHaveProperty('smile')
    expect(emoji).toHaveProperty('smiling_imp')
  })
  it('createMapMdToEmoji', () => {
    const before = 'x'
    const after = ':x:'
    expect(createMapMdToEmoji({[before]: true})).toHaveProperty(after)
  })
  it('emojiMd', () => {
    expect(emojiMd).toHaveProperty(':smile:')
    expect(emojiMd).not.toHaveProperty('smile')
  })
  it('createRegExpTest', () => {
    const source = {100: true, god: 'wow', '!': 'wow'}
    expect(createRegExpText(source)).toEqual(`:(${Object.keys(source).join('|')}):`)
  })
  it('textEmoji', () => {
    [
      {
      before: `hello i'm :smile: feeling :smiling_imp::smile:`,
      after : `hello i'm 😄 feeling 😈😄`
      },
      {
        before: `hello i'm :smile: feeling :smiling_imp::smile:
      hello i'm :smile: feeling :smiling_imp::smile:`,
        after : `hello i'm 😄 feeling 😈😄
      hello i'm 😄 feeling 😈😄`
      },
      {
        before: '',
        after : ''
      },
      {
        before: null,
        after : ''
      },
      {
        before: 4,
        after : '4'
      },
      {
        before: true,
        after : 'true'
      },
      {
        before: false,
        after : 'false'
      }
    ].map(({before, after}) => expect(textEmoji(before)).toEqual(after))
  })
})