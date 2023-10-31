function reverseVowels(string){
    //Regular expression to get only the vowels which are in a string.
    const regex=/[aeiuo]/gi;
    
    const vowels=string.match(regex)
    return string.replace(regex, ()=>vowels.pop())
}
