import {__, concat, join, map, keys, compose, prop, replace} from 'ramda/src'
import * as escape from 'escape-string-regexp'
import emoji from './emoji'

export const createMapMdToEmoji = (emoji) => {
  const ret = {}
  for (let md in emoji) {
    ret[`:${md}:`] = emoji[md]
  }
  return ret;
}

export const emojiMd = createMapMdToEmoji(emoji)
export const createRegExpText = compose(
  concat(':('),
  concat(__, '):'),
  join('|'),
  map(escape),
  keys
)

const regexp = new RegExp(createRegExpText(emoji), 'gm')

export const textEmoji = replace(regexp, prop(__, emojiMd))
