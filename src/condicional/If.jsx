export default props => {
    if (props.condicao) {
        return(props.children)
    }
    else{
        return(false)
    }
}