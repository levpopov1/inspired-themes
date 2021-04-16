import { useState } from 'react';

function LikeButton() {

  const [likes, setLikes] = useState(0);

  const handleLike = (e) => {
    let button = e.currentTarget;
    console.log(button.firstChild.classList);
    button.firstChild.classList.remove("bi-heart");
    button.firstChild.classList.add("bi-heart-fill", "active");
    setLikes(likes+1);

  }

  return (
    <button type="button" className="like btn no-wrap" onClick={handleLike}>
      <i className="bi-heart"></i>
      <span className="ms-2">{likes}</span>
    </button>
  );
}

export default LikeButton;
