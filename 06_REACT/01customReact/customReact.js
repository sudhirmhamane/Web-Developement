function customRender(reactElement,container){

    // const domElement = document.createElement(reactElement.type)

    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children

    for (const prop in reactElement.props) {
        if(prop == 'Children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit Google'
}
const mainContainer = document.querySelector('#root')


// now we needed the method to render this reactElement in the root 

customRender(reactElement,mainContainer)