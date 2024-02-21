function TweetEditorInput({placeholder}){
  return (
    <div >
      <textarea className='tweet-editor-input' placeholder={placeholder}></textarea>
    </div>
  ); 
}

export default TweetEditorInput