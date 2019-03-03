export default id => {
   const el = document.getElementById(id)
   nodeEllipsize(el)
}

export const nodeEllipsize = (node, ref) => {
   let string = node.innerHTML
   node.title = string
   let stringLength = string.length
   // ref - ellipsized block wrapper
   // if ref is not specified - block has no wraper - use itself as ref
   if (!ref) ref = node
   // console.log(node.scrollHeight, ref.offsetHeight)

   while (node.scrollHeight > ref.offsetHeight) {
      node.innerHTML = string.substr(0, stringLength) + '...'
      stringLength--
   }
}
