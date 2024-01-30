import dateFormat from "dateformat";

const LoadComments = (props) => {
    const comments = props.comments;

    const allCommentsStyle = {
        textAlign: 'left',
    }

    const aCommentStyle = {
        border: '1px solid gray',
        borderRadius: 8,
        marginTop: 10,
        padding: 10
    }

    const allComments = comments.map(comment => {
        return (
            <div className="aComment" style={aCommentStyle}>
                <h4>{comment.author}</h4>
                <p>{comment.comment}</p>
                <h6>Rating: {comment.rating} out of 5</h6>
                <p><small>{dateFormat(comment.date, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</small></p>
            </div>
        )
    })

    return (
        <div className="allComments" style={allCommentsStyle}>
            {allComments}
        </div>
    )
}

export default LoadComments;