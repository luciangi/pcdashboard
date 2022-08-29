const truncate = (input, size) => {
    if (input.length > size) {
       return input.substring(0, size) + '...';
    }
    return input;
 }

 export { truncate };
 