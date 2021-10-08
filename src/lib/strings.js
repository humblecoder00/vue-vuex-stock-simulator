// LIB/STRINGS - contains string related utilities

// validates whitespace on the string
export const validateStringWhitespace = (val) => /([^\s])/.test(val)

// checks if a single character is uppercase or not
export const isUpperCase = (string) => /^[A-Z]*$/.test(string)

// makes first letter of string uppercase
export const uppercaseFirst = (val) =>
    `${val.charAt(0).toUpperCase()}${val.slice(1)}`

// validates a string if it has uppercase as first letter, if not returns it with capitalized first letter
export const firstLetterFixer = (str) => {
    if (isUpperCase(str[0])) return str
    return uppercaseFirst(str)
}
