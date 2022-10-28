/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 *
 * @typedef {Record<string, string>} Sources
 * @typedef {Record<string, Sources>} Options
 */

import { visit } from 'unist-util-visit'
import { isElement } from 'hast-util-is-element'
import replaceExt from 'replace-ext'

//const own = {}.hasOwnProperty

/**
 * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}
 */
export default function rehypeFigureForImg(options) {
  const settings = options || {}
  const captionProperty = settings?.useTitle ? 'title' : 'alt'

  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        (
          !parent ||
          typeof index !== 'number' ||
          !isElement(node, 'img') ||
          !node.properties
        ) ||
        (
          !node.properties[captionProperty] &&
          !settings?.allImages
        )
      ) {
        return
      }

      /** @type {Element['children']} */
      const nodes = []
      /** @type {string} */
      let key
      node["loading"] = "lazy"
      /** @type {Element} */
      const replacement = {
        type: 'element',
        tagName: 'figure',
        properties: {},
      }

      if (node.properties[captionProperty]) {
        replacement.children = nodes.concat(
          [
            node,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: nodes.concat({
                type: 'text',
                value: node.properties[captionProperty]
              })
            },
          ]
        )
      }
      else {
        replacement.children = nodes.concat(
          [
            node,
          ]
        )
      }

      parent.children[index] = replacement
    })
  }
}
