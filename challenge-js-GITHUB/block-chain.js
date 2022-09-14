const blockChain = (data, prev = {index:0, hash:'0'}) =>{ 
    let block1 = {
    index : prev.index + 1,
    hash:hashCode((prev.index +1 ) + prev.hash + JSON.stringify(data)),    data : data,
    prev : prev,
    chain : (data) => {
        return blockChain(data, block1);
    } 
}
    return block1;
}