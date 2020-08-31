import React, {useState} from "react"

function Social() {
    const [countGood, setCountGood] = useState(0)
    const [countBad, setCountBad] = useState(0)
    const [countGoodTwo, setCountGoodTwo] = useState(0)
    const [countBadTwo, setCountBadTwo] = useState(0)

    const incrementGood = e => {
        e.preventDefault()
        if(countGood > -1) {
        setCountGood(countGood + 1)
        }
    }

    const incrementGoodTwo = e => {
        e.preventDefault()
        if(countGood > -1) {
        setCountGoodTwo(countGoodTwo + 1)
        }
    }

    const incrementBad = e => {
        e.preventDefault()
        setCountBad(countBad + 1)
        
    }

    const incrementBadTwo = e => {
        e.preventDefault()
        setCountBadTwo(countBadTwo + 1)
        
    }


    const writeReply = e => {
        e.preventDefault()
        document.querySelector('.add-comment').classList.remove('hide')
    }

    const addComment = e => {
        e.preventDefault()
        var divGen = document.createElement('div')
        divGen.innerHTML = document.querySelector('.active-comment').value
        document.querySelector('.post-comments').appendChild(divGen)
        document.querySelector('.active-comment').value = ''
        document.querySelector('.add-comment').classList.add('hide')
    }

    const deleteComment = e => {
        e.preventDefault()
        this.parentElement.classList.add('hide')
    }

    const reqBrawl = e => {
        // function that will take in the fightId of poster and send a 'fight request' to that user
        // Ideally, this will take users to the scheduling page
        alert('sent <user> a fight request!')
    }

    const writePost = e => {
        e.preventDefault()
        document.querySelector('.add-post').classList.remove('hide')

    }

    const addPost = e => {
        // To be continued...
        alert('still work in progress!')
    }

    return(
        <div>
            <div class="social-feed">
            <button class="post-btn" onClick={writePost}> Create a Post </button>
            <div class="hide add-post"><form>
                        <textarea class="active-comment" rows="6" cols="50">
                            </textarea><br/>
                            <button class="add-comment-btn" onClick={addPost}>POST</button></form></div>
                    <div class="post-comments"></div>
                <div class="post" data-type="fightId">
                    <h3>User Two </h3>
                    <p>"People from Pheonix are Pheonicians"</p>
                    <div class="post-controls">
                        <button onClick={incrementGood}>{countGood} 👍 </button>
                        <button onclick={incrementBad}>{countBad} 👎 </button>
                        <button onClick={writeReply}><i class="fas fa-reply"></i>reply</button>
                        <button onClick={reqBrawl}>request fight</button>
                    </div>
                    <div class="hide add-comment"><form>
                        <textarea class="active-comment" rows="6" cols="50">
                            </textarea><br/>
                            <button class="add-comment-btn" onClick={addComment}>POST</button></form></div>
                    <div class="post-comments"></div>
                </div>
                <div class="post" data-type="fightId">
                    <h3>User Three </h3>
                    <p>"Pineapple pizza is the best kind of pizza - fight me"</p>
                    <div class="post-controls">
                        <button onClick={incrementGoodTwo}>{countGoodTwo} 👍 </button>
                        <button onclick={incrementBadTwo}>{countBadTwo} 👎 </button>
                        <button><i class="fas fa-reply"></i>reply</button>
                        <button>request fight</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social