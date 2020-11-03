function merge2String(s1,s2) {
    let mergeString =""
    let countOfs1 = 0
    let countOfs2 = 0
    let count = 0
    while (count < s1.length + s2.length) {
      if (count % 2 == 0 ){
        mergeString += s1[countOfs1]
        countOfs1 += 1
      }
      else {
        mergeString += s2[countOfs2]
        countOfs2 += 1
      }
      count += 1
    }
    return mergeString
    }
    console.log(merge2String("abcd","213131"));  