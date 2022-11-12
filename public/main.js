var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash-o");
var thumbDown = document.getElementsByClassName("fa-thumbs-down") 
var edit = document.getElementsByClassName("edit") 
var pushDown = document.getElementsByClassName("pushDown")


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('thumbup', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(edit).forEach(function(element){
  element.addEventListener('click', function(){
    const newItem = this.parentNode.childNodes[1].value
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const typeQuest = this.parentNode.parentNode.childNodes[5].innerText
    fetch('edit', {
      method: 'put',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
      'name':name,
      'newItem': newItem, 
      'msg': msg,
      'typeQuest': typeQuest
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  })
}) 


Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
    fetch('thumbdown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbDown':thumbDown 
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const typeQuest = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'typeQuest': typeQuest
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
