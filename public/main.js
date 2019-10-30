getCss.onclick=()=>{
    let request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            let style = document.createElement("style")
            style.innerText = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
getJs.onclick=()=>{
    let request =  new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            let script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}
getHtml.onclick=()=>{
    let request=new XMLHttpRequest()
    request.open('GET','3.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            let div = document.createElement('div')
            div.innerHTML=request.response
            document.body.appendChild(div)
            // document.body.innerHTML=request.response   不能这样直接插入，否则会覆盖整个页面
        }
    }
    request.send()
}
getXml.onclick=()=>{
    let request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            let xml = request.responseXML
            let content = xml.getElementsByTagName('warning')[0].textContent.trim()
            console.log(content)
        }
    }
    request.send()
}
getJson.onclick=()=>{
    let request=new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            let obj = JSON.parse(request.response)
            myName.innerText = obj.name
            console.log(obj)
        }
    }
    request.send()
}
let n=1
getPage.onclick=()=>{
    let request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            let obj = JSON.parse(request.response)
            obj.forEach(item => {
                let li = document.createElement("li")
                li.innerHTML = item.id
                xxx.appendChild(li)
            });
            n=n+1
        }
    }
    request.send()
}