
//this is a react element that gets broken dow in oreder to make understand to the browser
const reactElement = {
    type :'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click on Me to Google it"
}

const mainContainer = document.querySelector('#root')

customRender=(reactElement, container)=>{
    // const domElement = document.createElement(reactElement.type)
    //       domElement.innerHTML = reactElement.children
    //       domElement.setAttribute('href',reactElement.props.href)
    //       domElement.setAttribute('target',reactElement.props.target)
        
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
            domElement.setAttribute(prop, reactElement.props[prop])
            
        }
    

    container.appendChild(domElement)
}

customRender(reactElement,mainContainer)