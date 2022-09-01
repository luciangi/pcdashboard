export const truncate = (input, size) => {
   if (input.length > size) {
      return input.substring(0, size) + "..."
   }
   return input
}

export const generateCell = (cell) => {
   if (typeof cell === "function") {
      return cell
   }

   return truncate(cell, 15)
}
