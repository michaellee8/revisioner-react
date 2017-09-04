import fetch from "isomorphic-fetch";
export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION_TAG_SEARCH = "RECEIVE_QUESTION_TAG_SEARCH";
export const REQUEST_QUESTION_TAG_SEARCH = "REQUEST_QUESTION_TAG_SEARCH";
export const REQUEST_QUESTION_SET = "REQUEST_QUESTION_SET";
export const RECEIVE_QUESTION_SET = "RECEIVE_QUESTION_SET";
export const RECEIVE_QUESTION_SET_TAG_SEARCH =
  "RECEIVE_QUESTION_SET_TAG_SEARCH";
export const REQUEST_QUESTION_SET_TAG_SEARCH =
  "REQUEST_QUESTION_SET_TAG_SEARCH";
export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_TAG_SEARCH = "RECEIVE_USER_TAG_SEARCH";
export const REQUEST_USER_TAG_SEARCH = "REQUEST_USER_TAG_SEARCH";

export function requestQuestions() {
  return { type: REQUEST_QUESTIONS };
}

export function receiveQuestions(questions) {
  return { type: receiveQuestions, questions };
}

export function fetchQuestions(offset) {
  return dispatch => {
    dispatch(requestQuestions());
    const query = `
    query fetchQuestions($offset: Int, $where: SequelizeJSON) {
users(limit: 1, where: $where) {
  questionSetFollows {
    edges {
      node {
        questionSet {
          questions(limit: 20, offset: $offset) {
            edges {
              node {
                questionId
                questionSetId
                questionTitle
                questionContent
                questionMediaUrl
                questionType
                questionCreateTimestamp
                questionLastUpdateTimestamp
              }
            }
          }
        }
      }
    }
  }
}
}

    `;
  };
}
