import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const LOADING = 1;
const ERROR = 2;
const LOADED = 3;

const Comments = ({ ghCommentsIssueId }) => {
  const [commentsLoadingState, setCommentsLoadingState] = useState({
    state: 1,
  });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (ghCommentsIssueId) {
      fetch(
        `https://api.github.com/repos/phartenfeller/hartenfeller.dev/issues/${ghCommentsIssueId}/comments`
      )
        .then((response) => response.json())
        .then((commentsData) => {
          setCommentsLoadingState({ state: LOADED });
          setComments(commentsData);
        })
        .catch((error) =>
          setCommentsLoadingState({ state: ERROR, message: error })
        );
    }
  }, [ghCommentsIssueId]);

  if (commentsLoadingState.state === LOADING) {
    return <span>loading comments...</span>;
  }

  if (commentsLoadingState.state === ERROR) {
    return <span>error loading comments: {commentsLoadingState.message}</span>;
  }

  return (
    <ul className="mx-2 space-y-8">
      {comments.map((comment) => (
        <li className="flex" key={comment.id}>
          <div className="mr-8 flex-shrink-0">
            <img
              className="h-16 w-16 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
              src={comment.user.avatar_url}
              alt={comment.user.login}
              loading="lazy"
            />
          </div>
          <div>
            <div>
              <a
                href={comment.user.html_url}
                className="font-medium text-lg text-gray-900 hover:underline"
              >
                {comment.user.login}
              </a>
              <span className="mx-2 text-gray-900 font-bold">•</span>
              <time className="text-gray-600" dateTime={comment.created_at}>
                {new Date(comment.created_at).toLocaleDateString()}
              </time>
            </div>
            <p className="mt-2 text-gray-700">{comment.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

Comments.propTypes = {
  ghCommentsIssueId: PropTypes.number.isRequired,
};

export default Comments;
