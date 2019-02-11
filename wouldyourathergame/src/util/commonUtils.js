function generateUID() {
    return (
        Math.random()
            .toString(36)
            .substring(2, 15) +
        Math.random()
            .toString(36)
            .substring(2, 15)
    )
}

export function formatQuestion({
    optionOneText,
    optionTwoText,
    author
}) {
    return {
        id: generateUID(),
        author,
        timestamp: Date.now(),
        optionOne: {
            votes: [],
            text: optionOneText
        },
        optionTwo: {
            votes: [],
            text: optionTwoText
        }
    }
}