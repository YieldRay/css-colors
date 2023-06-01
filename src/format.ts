export default function format(color: string) {
    const [_, p, p1, p2, p3, alpha] = /(\S+)\((\S+)\s*(\S+)\s*(\S+)\s*?\/?\s*?(\S+)?\s*?\)/.exec(color);
    return `${p}()`
}
