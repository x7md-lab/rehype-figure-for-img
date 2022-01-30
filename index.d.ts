/**
 * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}
 */
export default function rehypeFigureForImg(
  options: void | Options | undefined
):
  | void
  | import('unified').Transformer<import('hast').Root, import('hast').Root>
export type Root = import('hast').Root
export type Element = import('hast').Element
export type Sources = Record<string, string>
export type Options = Record<string, Sources>
