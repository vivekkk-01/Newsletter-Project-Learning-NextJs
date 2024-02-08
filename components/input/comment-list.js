import classes from "./comment-list.module.css";

function CommentList({ items }) {
  return (
    <ul className={classes.comments}>
      {items.map(({ id, name, text }) => {
        return (
          <li key={id}>
            <p>{text}</p>
            <div>
              By <address>{name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
