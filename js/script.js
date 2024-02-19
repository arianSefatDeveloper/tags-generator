const $ = document
const ulElem = $.querySelector("ul")
const inputElem = $.querySelector("input")
const spanElem = $.querySelector("span")
const removeButtonElem = $.querySelector("button")

const maxTags = 10

tags = [];


const countTags = ()=>{
    inputElem.focus()
    spanElem.innerText = maxTags - tags.length
}


const removeTag = (tagElem , tagName)=>{
    tagElem.parentElement.remove()
    console.log(tagName);
    let mainIndex = tags.indexOf(tagName)
    console.log(mainIndex);
    tags.splice(mainIndex,1)
    
    countTags()
    
}

const removeAllLis = ()=>{
    ulElem.querySelectorAll("li").forEach(tag =>tag.remove())
}

const creatTags =()=>{
    removeAllLis()
    let liTag = null;
    [...tags].reverse().forEach( tag => {
        liTag = `<li>${tag}<i uit uit-multiply onclick="removeTag(this,'${tag}')" >x</i></li>`   
        ulElem.insertAdjacentHTML("afterbegin" , liTag)     
        countTags()
    });
}


const addNewTag = (event)=>{
    if (event.key === "Enter"){
        let tagTitle =event.target.value 
        if (tags.length < maxTags){
            if(tagTitle.length > 0 ){
                tagTitle.split(",").forEach(tag =>{
                    if(!tags.includes(tag.toLowerCase()) ){
                        
                        tags.push(tag.toLowerCase())
                    }
                    
                })
            }
        }
        event.target.value=""
        creatTags()
    }

    
}

inputElem.addEventListener("keyup" , addNewTag)
removeButtonElem.addEventListener("click" , ()=>{
    tags.length = 0
    removeAllLis()
    countTags()
})
// countTags()
// creatTags()