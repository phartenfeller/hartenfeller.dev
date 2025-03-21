import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import LinkButton from '../LinkButton';

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
    } else {
      setCommentsLoadingState({
        state: ERROR,
        message: `Missing GitHub Issue ID`,
      });
    }
  }, [ghCommentsIssueId]);

  if (commentsLoadingState.state === LOADING) {
    return <span>loading comments...</span>;
  }

  if (commentsLoadingState.state === ERROR) {
    return <span>error loading comments: {commentsLoadingState.message}</span>;
  }

  return (
    <>
      <ul className="mx-2 space-y-8">
        {comments.length >= 0 &&
          comments.map((comment) => (
            <li className="flex" key={comment.id}>
              <div className="mr-8 flex-shrink-0">
                <a href={comment.user.html_url}>
                  <img
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-400 ring-8 ring-white"
                    src={comment.user.avatar_url}
                    alt={comment.user.login}
                    loading="lazy"
                  />
                </a>
              </div>
              <div>
                <div>
                  <a
                    href={comment.user.html_url}
                    className="text-lg font-medium text-zinc-900 hover:underline"
                  >
                    {comment.user.login}
                  </a>
                  <span className="mx-2 font-bold text-zinc-900">•</span>
                  <time className="text-zinc-600" dateTime={comment.created_at}>
                    {new Date(comment.created_at).toLocaleDateString()}
                  </time>
                </div>
                <Markdown className="blog-comments">{comment.body}</Markdown>
              </div>
            </li>
          ))}
        {comments.length === 0 && (
          <li className="py-3 text-center text-lg font-light text-zinc-700">
            No comments yet...
          </li>
        )}
      </ul>
      <div className="my-6 text-center">
        <LinkButton
          type="comment"
          link={`https://github.com/phartenfeller/hartenfeller.dev/issues/${ghCommentsIssueId}`}
        />
      </div>
    </>
  );
};

Comments.propTypes = {
  ghCommentsIssueId: PropTypes.number.isRequired,
};

export default Comments;
