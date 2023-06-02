export default function format(color: string) {
    if (color.match(/color\(.+\)/))
        return color.replace(
            /(\S+)\((\S+)\s*?(\S+)\s*?(\S+)\s*?(\S+)\s*?\/?\s*?(\S+)?\s*?\)/,
            "$1(\n    $2\n    $3\n    $4\n    $5 /\n    $6\n)"
        );
    return color.replace(
        /(\S+)\((\S+)\s*?(\S+)\s*?(\S+)\s*?\/?\s*?(\S+)?\s*?\)/,
        "$1(\n    $2\n    $3\n    $4 /\n    $5\n)"
    );
}
