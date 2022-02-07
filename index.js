/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 *
 * @typedef {Record<string, string>} Sources
 * @typedef {Record<string, Sources>} Options
 */

import {visit} from 'unist-util-visit'
import {isElement} from 'hast-util-is-element'
import replaceExt from 'replace-ext'

//const own = {}.hasOwnProperty

/**
 * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}
 */
export default function rehypeFigureForImg(options) {
  const settings = options || {}

  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        !parent ||
        typeof index !== 'number' ||
        !isElement(node, 'img') ||
        !node.properties ||
        !node.properties.alt
      ) {
        return
      }

      /** @type {Element['children']} */
      const nodes = []
      /** @type {string} */
      let key

      /** @type {Element} */
      const replacement = {
        type: 'element',
        tagName: 'figure',
        properties: {},
        children: nodes.concat(
          [
            node,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: nodes.concat({
                type: 'text',
                value: node.properties.alt
              })
            },
          ]
        )
      }

      parent.children[index] = replacement
    })
  }
}
