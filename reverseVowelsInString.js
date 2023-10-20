function reverseVowels(string){
    const regex=/[aeiuo]/gi;
    const vowels=string.match(regex)
    return string.replace(regex, ()=>vowels.pop())
}
