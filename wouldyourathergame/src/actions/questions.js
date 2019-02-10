export const GET_INITIAL_QUESTION_DATA = 'GET_INITIAL_QUESTION_DATA'

export function getinitalQuestions(questions) {
    return {
        type: GET_INITIAL_QUESTION_DATA,
        questions,
    }
}