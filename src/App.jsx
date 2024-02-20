/* eslint-disable react/prop-types */
import { useState } from 'react'

import './App.css'
//  Media
import {timeline,emoji,gif,poll,media,reply,react,retweet,schedule,share,twitter,verified} from './tools/media'

// Data
import data from './tools/data'

let {user, medias} = data


// GLOBAL COMPONENTS
function ProfilePhoto({src}){
  return (
    <div className='avatar'>
       <img src={src} ></img>
    </div>
   
  )
}

function Icon({src, alt}){
  return (
    <img src={src} alt={alt} className='icon'></img>
  )
}

function Button({value}){
  return (
    <button className='button'>{value}</button>
  )
}

function TweetTitle({author,detail,time}){
    return (
    <div className='tweet-title'>
      <p className='tweet-title-author'>{author}</p>
      <Icon src={verified} />
      <span className='tweet-title-details'>@{detail} . {time}</span>
    </div>
  )
}

function TweetText({text}){
  return (
    <p className='tweet-text'>{text}</p>
  );
}

function TweetImage({src}){
  return (
    <div className='tweet-image'>
       <img src={src} ></img>
    </div>
  );
}

function TweetActions({mediaId}){
  let actions =  [reply, retweet, react,share]
  let actionsData = [medias[mediaId].reply,medias[mediaId].retweet,medias[mediaId].react,'']

  return (
    <div className='tweet-actions'>
      {actions.map((icon, key) => {
        let random = Math.floor(Math.random() * 50) + 1
        return (
          <p key={key} className='tweet-action'>
            <Icon  src={icon} alt={key} />
            <span>{actionsData[key]}</span>
          </p>
        )}
      )}
    </div>
  )
}

// TWEET EDITOR
function TweetEditorAction(){
  let actions =  [media, gif, poll,emoji, schedule ]
  return (
    <div className='tweet-editor-actions'>
      {actions.map((icon, key) => (
        <Icon key={key} src={icon} alt={key} />
      ))}
    </div>
  );
 
}
function TweetEditorInput({placeholder}){
  
  return (
    <div >
      <textarea className='tweet-editor-input' placeholder={placeholder}></textarea>
    </div>
  );
 
}

function TweetEditorButtons(){
  return (
    <div className='tweet-editor-buttons'>
      <TweetEditorAction />
      <Button value='Tweet'/>
    </div>
  );
}


function TweetEditorForm(){
  let actions =  [media, gif, poll,emoji, schedule ]
  return (
    <div className='tweet-editor-form'>
      <TweetEditorInput placeholder="What's happening"/>
      <TweetEditorButtons />
    </div>
  );
 
}

function Header(){
  return (
    <div className='header'>
      <div>
        <h1 className='page-title'>Home</h1>
      </div>
      <div className='top-tweets'>
        <Icon  src={timeline}/>
      </div>
    </div>
  )
}

function TweetEditor() {
  return (
    <div className='tweet-editor'>
      <ProfilePhoto src={user.profile}/>
      <TweetEditorForm />
    </div>
  )
}

function Tweet({author,detail,time, text,image,profile, id}) {
  return (
    <div className='tweet'>
      <div className='tweet-avatar'><ProfilePhoto src={profile} /></div>
      <div className='tweet-content'>
        <div className='tweet-body'>
          <TweetTitle author={author} detail={detail} time={time}/>
          <TweetText text={text}/>
          <TweetImage src={image}/>
          <TweetActions mediaId={id}/>
        </div>
      </div>
    </div>
  )
}


function Timeline() {
 
  let mediadata = Object.keys(medias)
  return (
    <div className='timeline'>
      <Header />
      <TweetEditor />
      {mediadata.map((id, key) => { 
        console.log(medias[id].time,id,key)
        return (
        <Tweet key={key} id={id} author={medias[id].author} detail={medias[id].detail}
        time={medias[id].time}  text={medias[id].text} profile={medias[id].profile} image={medias[id].image} />
        )}
      )}      
    </div>
  )
}

function Twitter() {
  return (
    <>
      <Timeline />
    </>
  )
}

export default Twitter
