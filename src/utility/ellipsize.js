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

   // for some reason sometimes  offsetHeight is smaller then scrollHeight
   // for some periods of time
   while (node.scrollHeight - ref.offsetHeight > 3) {
      node.innerHTML = string.substr(0, stringLength) + '...'
      stringLength--
   }
}
