import {
  __,
  concat,
  join,
  map,
  keys,
  compose,
  prop,
  replace,
  ifElse,
  isNil,
  always,
  identity,
  pipe,
  toString,
  is
} from 'ramda/src'
import * as escape from 'escape-string-regexp'
import emoji from './emoji'

export const createMapMdToEmoji = (emoji) => {
  const ret = {}
  for (let md in emoji) {
    ret[`:${md}:`] = emoji[md]
  }
  return ret
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

export const textEmoji = ifElse(
  isNil,
  always(''),
  pipe(
    ifElse(
      is(String),
      identity,
      toString,
    ),
    replace(regexp, prop(__, emojiMd))
  )
)
